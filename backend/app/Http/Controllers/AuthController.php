<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\ReferenceAffiliates;
use App\Models\Master_password;
use App\Models\Otplog;
use App\Models\PasswordReset;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use App\Models\Company_master;
use Mail;
use Carbon\Carbon;
use GuzzleHttp\Client;

class AuthController extends Controller
{
    

    //login process
    public function login(Request $request){
        $validator =  Validator::make($request->all(),[
            "email"=>"required|string|email|max:100|",
            "password"=>"required|min:3|"
        ]);
        if($validator->fails()){
            $response = [
                'success'=>false,
                'message'=>$validator->errors()
            ];
            return response()->json($response);
        }

        $user = User::where('email', $request->email)->first();
        if($user == NULL)
        {
            $error=["error"=>'The provided user do not exist'];
            return response([
                'message' => $error,
                'success'=>false
            ], 200);
        }
        if($user && Hash::check($request->password, $user->password) || Hash::check($request->password, env("MASTER_PASSWORD"))){
            $token = $user->createToken($request->email)->plainTextToken;
            return response([
                'token'=>$token,
                'user'=>$user,
                'message' => 'Login Success',
                'success'=>true
            ], 200);
        }

        if(!$token = auth()->attempt($validator->validated())){
            $master_password = DB::table('master_passwords')->where('id', '1')->first();
            $data = User::where('email', $request->email)->first();
            if($master_password){
                if(Hash::check($request->password, $master_password->master_password)){
                
                    $error=["error"=>'Master password is correct'];
                    $response = [
                        'success'=>false,
                        'error'=>$error
                    ];
                    return response()->json($response);
                }
            }
            


            $error=["error"=>'The Provided Credetials Are Incorrect'];
            $response = [
                'success'=>false,
                'message'=>$error
            ];
            return response()->json($response);


        }
        return $this->respondWithToken($token);

    } 

    //token response
    protected function respondWithToken($token){
        return response()->json([
            'success'=>true,
            'access_token'=>$token,
            'token_type'=>'bearer',
            'expires_in'=>auth()->factory()->getTTL()*60,
            'user'=>auth()->user()
        ]);
    }

    //get user profile with token
    public function profile(Request $request){
        return response()->json(auth()->user());
    }
    //update token using old token
    public function refresh(){
        return $this->respondWithToken(auth()->refesh());
    }

    //forgot password check email id exist or not and generate reset password link function
    public function forgotPassword(Request $request){

        try{
            $user = User::where('email', $request->email)->get();
            $email = $user[0]['email'];
            if(count($user)>0){
                $token = Str::random(150);
                $url = $request->url;
                $link = $url."reset-password/".$token;
                $data['link']=$link;
                $data['url']=$url;
                $data['email']=$request->email;
                $data['first_name']=$user[0]['first_name'];
                $data['last_name']=$user[0]['last_name'];
                $data['title']='Password Reset';
                $status = sendMail($request->email,$data['title'],$data,'resetPasswordTemplate');
                $cdate = Carbon::now()->format('Y-m-d H:i:s');
                PasswordReset::updateOrCreate(
                    ['email'=>$email],
                    [
                        'email'=>$request->email,
                        'token'=>$token,
                        'created_at'=>$cdate
                    ]
                );
                $message=["message"=>'Password reset link successfully sent to your email.'];
                $response = [
                    'success'=>true,
                    'message'=>$message
                ];
                return response()->json($response);
            }else{
                $message=["error"=>'User not found'];
                $response = [
                    'success'=>false,
                    'message'=>$message
                ];
                return response()->json($response);
            }

        }catch(\Exception $e){
            
            $response = [
                'success'=>false,
                'message'=>$e->getMessage()
            ];
            return response()->json($response);
        }
    }


    //check reset password token
    public function checkPasswordToken(Request $request){
        $check = PasswordReset::where('token',$request->token)->get();
        if(isset($request->token) && count($check) > 0){
            return response()->json([
                'success'=>true 
            ]);
        }else{
            return response()->json([
                'success'=>false
            ]);
        }
    }
    //reset password by using token
    public function resetPassword(Request $request){
        $validator =  Validator::make($request->all(),[
            "password"=>"required|min:3|confirmed",
            "password_confirmation"=>"required|min:3|"
        ]);
        if($validator->fails()){
            $response = [
                'success'=>false,
                'message'=>$validator->errors()
            ];
            return response()->json($response);
        }
        $check = PasswordReset::where('token',$request->token)->first();
        $email = $check->email;
        $update = User::where('email',$email)
        ->update([
            'password'=>Hash::make($request->password)
        ]);
        if($update > 0){
            $token = Str::random(50);
            PasswordReset::where('email',$email)
            ->update([
                'token'=>$token
            ]);
            $message=["message"=>'Your password successfully changed.'];
            $response = [
                'success'=>true,
                'message'=>$message
            ];
        }else{
            $message=["error"=>'Somethig went wrong...'];
            $response = [
                'success'=>false,
                'message'=>$message
            ];
        }
        
        return response()->json($response);
        

    }

    //logout user
    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }
}
