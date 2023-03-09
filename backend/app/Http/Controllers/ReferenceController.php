<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ReferenceAffiliates;
use App\Models\Otplog;
use App\Models\Company_master;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\App; 
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Mail;
use Carbon\Carbon;
use GuzzleHttp\Client;




class ReferenceController extends Controller
{
    //registeration process
    public function register(Request $request){

        $validator =  Validator::make($request->all(),[
             "first_name"=>"required|string|min:2|max:100",
             "last_name"=>"required|string|min:2|max:100",
             "business_name"=>"required|min:2",
             "business_started_year"=>"required",
             "email"=>"required|string|email|max:100|unique:users",
             "phone_no"=>"required|min:10",
             "address"=>"required|min:2",
             "referral_code"=>"required",
             "city"=>"required",
             "state_code"=>"required",
             "zip_code"=>"required",
             "marketing_type"=>"required"
         ]);
 
         if($validator->fails()){
             $response = [
                 'success'=>false,
                 'message'=>$validator->errors()
             ]; 
             return response()->json($response);
         }
 
         
 
         if($request->otp == ""){
            // $recaptchaStatus = Http::asForm()->post("https://www.google.com/recaptcha/api/siteverify",[
            //     'secret'=>"6LcxArEhAAAAACL6AeYRMkuJvNXTXnisVABOos48",
            //     'response'=>$request->recaptcha_token
            // ]);
            
                $check_company_name = Company_master::where('company_name',$request->business_name)
                 ->first();
                 if($check_company_name != null){
                    $error=["error"=>'This company name is already registered please use company name'];
                    $message = "This company name is already registered please use company name";
                    return response()->json([
                        'success'=>false,
                        'message'=>$error
                    ]);
                 }

                 $otp = rand(11111,99999);
                 $data = ['name'=>$request->name,'otp'=>$otp];
     
                 $otpsent = sendOTPMail($request->email,"OTP Verifiaction",$data);
                 Otplog::create([
                     'email' => $request->email,
                     'otp' =>$otp,
                     'created_at'=>Carbon::now()
                 ]);
                 if($otpsent == true){
                     $message=["success"=>"OTP successfully sent to your email id."];
                     return response()->json([
                     'success'=>true,
                     'message'=>$message
                 ]);
                 }else{
                     $message=["error"=>"Otp not sent please try again...!"];
                     return response()->json([
                         'success'=>true,
                         'message'=>$message
                     ]);
                 }
            
             
         }else{

        // if($recaptchaStatus['success'] == true){
             $getOtpData = Otplog::where('otp', $request->otp)->first();
             if($getOtpData){
                 $res=Otplog::where('otp',$request->otp)
                            ->update(array(
                                "otpstatus"=>1,
                                "updated_at"=>Carbon::now()
                            ));
                 //Create user
                    $company_id = Company_master::create([
                        "company_name"=>$request->business_name,
                        "company_website"=>$request->company_website,
                        "title"=>$request->title,
                        "business_started_year"=>$request->business_started_year,
                        "referred_by"=>$request->referral_code,
                        "marketing_type"=>$request->marketing_type
                     ])->id;
                     
                     $user = ReferenceAffiliates::create([
                         "first_name"=>$request->first_name,
                         "last_name"=>$request->last_name,
                         "company_id"=>$company_id,
                         "email"=>$request->email,
                         "phone_no"=>$request->phone_no,
                         "address"=>$request->address,
                         "city"=>$request->city,
                         "state_code"=>$request->state_code,
                         "zip_code"=>$request->zip_code,
                     ]);
     
                     $message=[
                         "success"=>"User successfully registered Please please sign agreement we have sent in your email id"
                     ];
     
                     return response()->json([
                         'success'=>true,
                         'message'=>$message
                     ]);
             }else{
                 $message=["error"=>"OTP verification failed"];
                 return response()->json([
                     'success'=>false,
                     'message'=>$message
                 ]);
             }
            // } else{
            //     $message=['reCaptcha validation failed.'];
            // return response()->json([
            //     'success'=>false,
            //     'message'=>$message
            // ]);
            // }





                 
         }
     }


     //Fetch Hot Leads
     public function fetchLeads($leadType,$search,$perPage){
        $q= $search!='null'?$search:'';
        if($leadType == "hotleads"){
             
            $leads = ReferenceAffiliates::select('reference_affiliates.*',
            'reference_affiliate_status_master.status_name',
            'company_masters.marketing_type')
            ->leftJoin('reference_affiliate_status_master', 'reference_affiliates.status_id',
            '=', 'reference_affiliate_status_master.status_id')
            ->leftJoin('company_masters', 'company_masters.company_id', '=', 'reference_affiliates.company_id')
            ->whereBetween('reference_affiliates.status_id', [1, 3])
            ->where('reference_affiliates.first_name', 'LIKE', "%$q%")
            ->paginate($search=='null'?$perPage:''); 

        }else if($leadType == "activeleads"){
            $leads = ReferenceAffiliates::select('reference_affiliates.*',
            'reference_affiliate_status_master.status_name',
            'company_masters.marketing_type')
            ->leftJoin('reference_affiliate_status_master', 'reference_affiliates.status_id',
            '=', 'reference_affiliate_status_master.status_id')
            ->leftJoin('company_masters', 'company_masters.company_id', '=', 'reference_affiliates.company_id')
            ->where  ('reference_affiliates.status_id', 6)
            ->where('reference_affiliates.first_name', 'LIKE', "%$q%")
            ->paginate($search=='null'?$perPage:'');

        }else if($leadType == "approvedLeads"){
            $leads = ReferenceAffiliates::select('reference_affiliates.*',
            'reference_affiliate_status_master.status_name',
            'company_masters.marketing_type')
            ->leftJoin('reference_affiliate_status_master', 'reference_affiliates.status_id',
            '=', 'reference_affiliate_status_master.status_id')
            ->leftJoin('company_masters', 'company_masters.company_id', '=', 'reference_affiliates.company_id')
            ->where  ('reference_affiliates.status_id', 4)
            ->where('reference_affiliates.first_name', 'LIKE', "%$q%")
            ->paginate($search=='null'?$perPage:'');

        }else if($leadType == "completedLeads"){
            $leads = ReferenceAffiliates::select('reference_affiliates.*',
            'reference_affiliate_status_master.status_name',
            'company_masters.marketing_type')
            ->leftJoin('reference_affiliate_status_master', 'reference_affiliates.status_id',
            '=', 'reference_affiliate_status_master.status_id')
            ->leftJoin('company_masters', 'company_masters.company_id', '=', 'reference_affiliates.company_id')
            ->where('reference_affiliates.status_id', 5)
            ->where('reference_affiliates.first_name', 'LIKE', "%$q%")
            ->paginate($search=='null'?$perPage:'');
        }
        
        return response()->json($leads);
    }

    //Fetch Lead Details
    public function leadDetails($id){
        $leadDetails = ReferenceAffiliates::select('reference_affiliates.*',
        'reference_affiliate_status_master.status_name',
        'company_masters.company_name',
        'company_masters.company_website',
        'company_masters.title',
        'company_masters.business_started_year',
        'company_masters.marketing_type',
        'company_masters.referred_by')
        ->leftJoin('reference_affiliate_status_master', 'reference_affiliates.status_id',
        '=', 'reference_affiliate_status_master.status_id')
        ->leftJoin('company_masters','company_masters.company_id', '=', 'reference_affiliates.company_id')
        ->with('activityLogs')
        ->where('reference_affiliates.refernce_affiliates_id',$id)->first();
        return response()->json($leadDetails);
    }
}
