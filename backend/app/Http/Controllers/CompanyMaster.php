<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Validator;
use App\Models\Company_master;
use App\Models\Aid_master;
use App\Models\Pid_master; 

use App\Models\Aid_user;
use Carbon\Carbon;

class CompanyMaster extends Controller
{
    //Fetch all company
    public function index($search,$perPage,$status){
        $q= $search!='null'?$search:'';
        $company_list= Company_master::select('company_masters.*','company_bank_details.active_status')
        ->leftJoin('company_bank_details','company_bank_details.company_id','=','company_masters.company_id')
        ->where('company_masters.company_status', $status)
        ->where('company_masters.company_name', 'LIKE', "%$q%")
        ->paginate($search=='null'?$perPage:''); 
        return response()->json($company_list);
    }
 
    //Fetch company details
    public function fetchCompanyList(){
        $company_list = Company_master::where('company_status',1)
        ->get();
        return response()->json($company_list);
    }
 
 
    //Get Company Details
    public function companyDetails($id){
        $company_details = Company_master::where('company_id',$id)->first();
        $aids = Aid_master::where('company_id',$id)->get();
        $pids = Pid_master::where('company_id',$id)->get();

        $aid_users= Aid_user::select('aid_users.*','aid_masters.company_id','aid_masters.aid','users.*','roles.role_name')
        ->leftJoin('aid_masters','aid_users.aid_id','=','aid_masters.aid_id')
        ->leftJoin('users','users.id','=','aid_users.user_id')
        ->leftJoin('roles','roles.role','=','users.user_role')
        ->where('aid_users.is_delete',0)
        ->where('aid_masters.company_id',$id)->get();

        $response = [
            "company_details"=>$company_details,
            "aids"=>$aids,
            "pids"=>$pids,
            "aid_users"=>$aid_users
        ];
         return response()->json($response);
    }

    //Delete Affiliate User With using soft delete
    public function deleteAffiliateUser($id){
        Aid_user::where('aid_user_id',$id)
                             ->update(array(
                                 "is_delete"=>"1",
                                 "updated_at"=>Carbon::now()
                             ));
         $message='Affiliate User has been deleted!';
                 return response()->json([
                     'success'=>true,
                     'message'=>$message
                 ]);
    }


    


}
