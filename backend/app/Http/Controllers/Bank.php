<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Bank_master;
use Carbon\Carbon;

class Bank extends Controller
{
    //Fetch all banks
    public function index(Request $request,$page,$perPage){
        $banks = Bank_master::where('is_delete',0)->paginate($perPage);
        return response()->json($banks);
    }
    //Fetch Banks
    public function fetchBanks(){
        $bank_detail = Bank_master::where('bank_status',1)->get();
        return response()->json($bank_detail);
    }


    // Fetch Single Bank Detail 
    public function fetchBankDetails($bank_id){
        $bank_detail = Bank_master::where('bank_id',$bank_id)->first();
        return response()->json($bank_detail);
    }

    // Add New Bank 
    public function addBank(Request $request){
        $validator =  Validator::make($request->all(),[
            "bank_name"=>"required|string|min:2|max:100|unique:bank_masters"
        ]); 

        if($validator->fails()){
            $response = [
                'success'=>false,
                'message'=>$validator->errors()
            ];
            return response()->json($response);
        }
        $bank = Bank_master::create([
            'bank_name'=>$request->bank_name,
            'bank_status'=>1
            ]);

        $message='Bank successfully created.';
        return response()->json([
            'success'=>true,
            'message'=>$message
        ]);
    }

    // Update Single Bank 
    public function updateBank(Request $request){
        $validator =  Validator::make($request->all(),[
            "bank_name"=>"required|string|min:2|max:100|unique:bank_masters"
        ]); 

        if($validator->fails()){
            $response = [
                'success'=>false,
                'message'=>$validator->errors()
            ];
            return response()->json($response);
        }
        Bank_master::where('bank_id',$request->bank_id)
                            ->update(array(
                                "bank_name"=>$request->bank_name,
                                "updated_at"=>Carbon::now()
                            ));
                            $message='Bank has been updated!';
                            return response()->json([
                                'success'=>true,
                                'message'=>$message
                            ]);
    }

    // Change Bank Active and Deactive Status 
    public function changeBankStatus($id){
        $bank = Bank_master::where('bank_id', $id)->first();
        if($bank->bank_status == 1){
            $status=0;
        }else{
            $status=1;
        }
        Bank_master::where('bank_id',$id)
            ->update(array(
            "bank_status"=>$status,
            "updated_at"=>Carbon::now()
            ));
        $message='Bank has been updated!';
            return response()->json([
                'success'=>true,
                'message'=>$message
            ]);
    }
    

    // Delete Bank By Soft Delete 
    public function deleteBank($bank_id){
        Bank_master::where('bank_id',$bank_id)
                            ->update(array(
                                "is_delete"=>"1",
                                "updated_at"=>Carbon::now()
                            ));
        $message='Bank has been deleted!';
                return response()->json([
                    'success'=>true,
                    'message'=>$message
                ]);
    }
}
