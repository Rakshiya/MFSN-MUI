<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\Aid_master;
use App\Models\Pid_master;
use App\Models\Company_master;
use Carbon\Carbon;

class UserMaster extends Controller
{
    //Load User List
    public function index(){
        $user_list = User::select('users.*','company_masters.company_name','roles.role_name')
        ->leftJoin('company_masters', 'company_masters.company_id',
        '=', 'users.company_id')
        ->leftJoin('roles', 'roles.role', '=','users.user_role')
        ->where('users.is_delete',0)
        ->get();
        return response()->json($user_list);
    }


    //Load User Roles From Database to Create User From
    public function fetchUserTypes(Request $request){
        $userType_list = Role::get();
        return response()->json($userType_list);
    }

    //Create New User Functions Start
    public function createUser(Request $request){
        $validator =  Validator::make($request->all(),[
            "first_name"=>"required|string|min:2|max:100",
            "last_name"=>"required|string|min:2|max:100",
            "email"=>"required|string|email|max:100|unique:users",
            "phone_no"=>"required|min:10",
            // "aidfields"=>"required",
            // "pidfields"=>"required",
            // "company_name"=>"required"
        ]); 

        if($validator->fails()){
            $response = [
                'success'=>false,
                'message'=>$validator->errors()
            ];
            return response()->json($response);
        }
        $check_company_name = Company_master::where('company_name',$request->company_name)
        ->first();
        if($check_company_name != null){
           $message = "This company name is already registered please use company name";
           return response()->json([
               'success'=>false,
               'message'=>$message
           ]);
        }
        //Create Company
        $company_id="0";
        if($request->company_name){
            $company_id = Company_master::create([
                "company_name"=>$request->company_name,
                "company_status"=>"1"
             ])->id;


            
                //AID insert to aid_masters table
                $aidlist = $request->aidfields;
                foreach($aidlist as $aid_row){
                    $checkAID = Aid_master::where('aid',$aid_row['value'])
                    ->where('company_id',$company_id)->first();
                    if($checkAID){
                        // return response()->json("AID Aleady exist please use new AID");
                        $message='AID Aleady exist please use new AID';
                        return response()->json([
                            'success'=>false,
                            'message'=>$message
                        ]);
                    }else{
                        Aid_master::create([
                            'aid' => $aid_row['value'],
                            'company_id' =>$company_id,
                            'aid_status'=>'1'
                        ]);
                    }
                }
                //PID insert to aid_masters table
                $pidlist = $request->pidfields;
                foreach($pidlist as $pid_row){
                $checkPID = Pid_master::where('pid',$pid_row['value'])
                ->where('company_id',$company_id)->first();
                if($checkPID){
                    $message='PID Aleady exist please use new AID';
                    return response()->json([
                        'success'=>false,
                        'message'=>$message
                    ]);
                }else{
                    Pid_master::create([
                        'pid' => $pid_row['value'],
                        'company_id' =>$company_id,
                        'pid_status'=>'1'
                    ]);
                }
            }
        }   
  
       //Create User
       $last_userid = User::create([
        'name'=>$request->first_name.' '.$request->last_name,
        'first_name'=>$request->first_name,
        'last_name'=>$request->last_name,
        'email'=>$request->email,
        'phone_no'=>$request->phone_no,
        'company_id'=>$company_id,
        'user_role'=>$request->userType,
        'default_timezone'=>$request->defaultTimezone,
        'password'=>Hash::make($request->password)
        ])->id;

       $message='User successfully created.';
        return response()->json([
            'success'=>true,
            'message'=>$message
        ]);










    } 

    //Fetch User Details For Edit
    public function fetchUserDetails($id){
        $user_details = User::select('users.*','company_masters.company_name','roles.role_name')
        ->leftJoin('company_masters', 'company_masters.company_id',
        '=', 'users.company_id')
        ->leftJoin('roles', 'roles.role_id', '=','users.user_role')
        ->where('users.is_delete',0)
        ->where('users.id',$id)
        ->first();
        return response()->json($user_details);
    }


    //Update User
    public function updateUser(Request $request){
       return response()->json($request->all());
    }


    //Delete User With using soft delete
    public function deleteUser($id){
       User::where('id',$id)
                            ->update(array(
                                "is_delete"=>"1",
                                "updated_at"=>Carbon::now()
                            ));
        $message='User has been deleted!';
                return response()->json([
                    'success'=>true,
                    'message'=>$message
                ]);
    }
}
