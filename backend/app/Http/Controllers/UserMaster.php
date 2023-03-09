<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\Aid_master;
use App\Models\Aid_user;
use App\Models\Pid_master;
use App\Models\Company_master;
use Carbon\Carbon;

class UserMaster extends Controller
{
    //Load User List
    public function index($search,$perPage){

        if(auth()->user()->user_role === 'admin'){

            $q= $search!='null'?$search:'';
            $user_list = User::select('users.*','company_masters.company_name','roles.role_name')
            ->leftJoin('company_masters', 'company_masters.company_id',
            '=', 'users.company_id')
            ->leftJoin('roles', 'roles.role', '=','users.user_role')
            ->where('users.is_delete',0)
            ->where('users.first_name', 'LIKE', "%$q%")
            ->paginate($search=='null'?$perPage:''); 
            return response()->json($user_list);
        }else{
            return response()->json([
                'success'=>false,
                'message'=>"Unauthorised user"
            ],200);
        }
        
    }

/////////////////////////////////////////////////////////////////////////////////////
    //Load User Roles From Database to Create User From
    public function fetchUserTypes(Request $request){
        $userType_list = Role::get();
        return response()->json($userType_list);
    }

 
///////////////////////////////////////////////////////////////////////////////////
    //Create New User Functions Start
    public function createUser(Request $request){
        $validator =  Validator::make($request->all(),[
            "first_name"=>"required|string|min:2|max:100",
            "last_name"=>"required|string|min:2|max:100",
            "email"=>"required|string|email|max:100|unique:users",
            "phone_no"=>"required|min:10",
        ]); 

        if($validator->fails()){
            $response = [
                'success'=>false,
                'message'=>$validator->errors()
            ];
            return response()->json($response);
        }
        
       //Create User
       if(!$request->company_id && $request->userType != "admin"){
                $message='Please select company';
                    return response()->json([
                        'success'=>false,
                        'message'=>$message
                    ],200);
       }
       $last_userid = User::create([
        'name'=>$request->first_name.' '.$request->last_name,
        'first_name'=>$request->first_name,
        'last_name'=>$request->last_name,
        'email'=>$request->email,
        'phone_no'=>$request->phone_no,
        'company_id'=>$request->company_id,
        'user_role'=>$request->userType,
        'default_timezone'=>$request->defaultTimezone,
        'password'=>Hash::make($request->password)
        ])->id;

        //Assign AID User Row
        if($request->selectedAid){
            foreach($request->selectedAid as $aid_row){
                $checkAID = Aid_user::where('aid_id',$aid_row['value'])
                ->where('user_id',$last_userid)
                ->first();
                if($checkAID){
                    $message='This AID already assigned for this user';
                    return response()->json([
                        'success'=>false,
                        'message'=>$message
                    ]);
                }else{
                    Aid_user::create([
                        'user_id' => $last_userid,
                        'aid_id' =>$aid_row['value'],
                        'aid_user_status'=>'1'
                    ]);
                }
            }
        }
        //Create and assigned new aid
        if($request->aidfields != null){
            foreach($request->aidfields as $aid_row){
                $checkAID = Aid_master::where('aid',$aid_row['value'])
                ->where('company_id',$request->company_id)->first();
                if($checkAID){
                    $message='AID Aleady exist please use new AID';
                    return response()->json([
                        'success'=>false,
                        'message'=>$message
                    ]);
                }else{
                    Aid_master::create([
                        'aid' => $aid_row['value'],
                        'company_id' =>$request->company_id,
                        'aid_status'=>'1'
                    ]);
                }
            }
        }

       $message='User successfully created.';
        return response()->json([
            'success'=>true,
            'message'=>$message
        ]);


    } 
////////////////////////////////////////////////////////////////////////////////////////


    //Fetch User Details For Edit
    public function fetchUserDetails($id){
        $user_details = User::select('users.*','company_masters.company_name','roles.role_name','roles.role')
        ->leftJoin('company_masters', 'company_masters.company_id',
        '=', 'users.company_id')
        ->leftJoin('roles', 'roles.role', '=','users.user_role')
        ->where('users.is_delete',0)
        ->where('users.id',$id)
        ->first();
        return response()->json($user_details);
    }


    //Update User
    public function updateUser(Request $request){
        User::where('email',$request->email)
            ->update(array(
            "name"=>$request->first_name.' '.$request->last_name,
            "first_name"=>$request->first_name,
            "last_name"=>$request->last_name,
            "user_role"=>$request->userType,
            "default_timezone"=>$request->defaultTimezone,
            "updated_at"=>Carbon::now()
            ));
        
        $affiliate_aid = $request->aidfields;
            
        foreach($affiliate_aid as $row){
            if(isset($row['aid_id'])){
                Aid_master::where('aid_id',$row['aid_id'])
                ->where('company_id',$request->company_id)
                ->update([
                    'aid'=>$row['aid']
                ]);
            }else if(isset($row['value'])){
                $checkAID = Aid_master::where('aid',$row['value'])
                ->where('company_id',$request->company_id)->first();
                if($checkAID){
                    $message='AID Aleady exist please use new AID';
                    return response()->json([
                        'success'=>false,
                        'message'=>$message
                    ]);
                }else{
                    Aid_master::create([
                        'aid' => $row['value'],
                        'company_id' =>$request->company_id,
                        'aid_status'=>'1'
                    ]);
                }
                
            }
        }
            $message='User has been updated!';
            return response()->json([
                'success'=>true,
                'message'=>$message
            ]);
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
