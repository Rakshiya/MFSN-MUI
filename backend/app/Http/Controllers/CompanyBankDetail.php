<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company_bank_detail;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;

class CompanyBankDetail extends Controller
{
     //Fetch Company Bank Details
     public function companyBankDetails($id){

        $company_bank_details= Company_bank_detail::select('company_bank_details.*','company_masters.company_name')
        ->leftJoin('company_masters','company_masters.company_id','=','company_bank_details.company_id')
        ->where('company_bank_details.company_id',$id)->first();
         return response()->json($company_bank_details);
     }

     //Add Company Bank Details
     public function addCompanyBankDetails(Request $request){
        // return response()->json($request->email_to_notify);
        if($request->details_available == true){
            $bank = Company_bank_detail::create([
                'company_id'=>$request->company_id,
                'details_available'=>$request->details_available,
                'active_status'=>1
                ]);

            $message='Bank successfully Added.';
            return response()->json([
                'success'=>true,
                'message'=>$message
            ]);
        }else{
            $validator =  Validator::make($request->all(),[
                "company_id"=>"required|unique:company_bank_details",
                "bank_name"=>"required",
                "name_on_account"=>"required",
                "routing_number"=>"required",
                "account_number"=>"required",
                "account_type"=>"required",
                "account_category"=>"required",
                "email_to_notify"=>"required"
            ]); 

            if($validator->fails()){
                $response = [
                    'success'=>false,
                    'message'=>$validator->errors()
                ];
                return response()->json($response);
            }
            
            $bank = Company_bank_detail::create([
                'company_id'=>$request->company_id,
                'bank_name'=>$request->bank_name,
                'name_on_account'=>$request->name_on_account,
                'routing_number'=>$request->routing_number,
                'account_number'=>$request->account_number,
                'account_type'=>$request->account_type,
                'account_category'=>$request->account_category,
                'email_to_notify'=>$request->email_to_notify,
                'details_available'=>$request->details_available,
                'ach_info_added_to_bank'=>$request->ach_info_added_to_bank,
                'last_ach_update'=>$request->last_ach_update,
                'active_status'=>1
                ]);

            $message='Bank successfully Added.';
            return response()->json([
                'success'=>true,
                'message'=>$message
            ]);
        }
    }


     //Update Company Bank Details
     public function updateCompanyBankDetails(Request $request){
        // return response()->json($request->email_to_notify);
        if($request->details_available == true){
            $bank = Company_bank_detail::where('company_id',$request->company_id)
                ->
                update([
                    'company_id'=>$request->company_id,
                    'details_available'=>$request->details_available,
                    'active_status'=>1
                    ]);

            $message='Bank Detils successfully Updated.';
            return response()->json([
                'success'=>true,
                'message'=>$message
            ]);
        }else{
            $validator =  Validator::make($request->all(),[
                "company_id"=>"required",
                "bank_name"=>"required",
                "name_on_account"=>"required",
                "routing_number"=>"required",
                "account_number"=>"required",
                "account_type"=>"required",
                "account_category"=>"required",
                "email_to_notify"=>"required"
            ]); 

            if($validator->fails()){
                $response = [
                    'success'=>false,
                    'message'=>$validator->errors()
                ];
                return response()->json($response);
            }
            
            $bank = Company_bank_detail::where('company_id',$request->company_id)
            ->
            update([
                'company_id'=>$request->company_id,
                'bank_name'=>$request->bank_name,
                'name_on_account'=>$request->name_on_account,
                'routing_number'=>$request->routing_number,
                'account_number'=>$request->account_number,
                'account_type'=>$request->account_type,
                'account_category'=>$request->account_category,
                'email_to_notify'=>$request->email_to_notify,
                'details_available'=>$request->details_available,
                'ach_info_added_to_bank'=>$request->ach_info_added_to_bank,
                'last_ach_update'=>$request->last_ach_update,
                'active_status'=>1
                ]);

            $message='Bank Details Successfully Updated.';
            return response()->json([
                'success'=>true,
                'message'=>$message
            ]);
        }
     }
}
