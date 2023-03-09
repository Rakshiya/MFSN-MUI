<?php

namespace App\Http\Controllers\Affiliate\ReferralProgram;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Http;
use Mail;
use App\Models\User;
use Carbon\Carbon;
use GuzzleHttp\Client;
use App\Models\Company_master;
use App\Models\ReferenceAffiliates;

class ReferralProgramController extends Controller
{
    //Fetch referral information
    public function fetchReferralData(Request $request){
        $id = $request->id;
        $url= $request->url;
        $company_detail = Company_master::select("company_masters.*","users.email","users.first_name")
        ->leftJoin('users', 'users.company_id', '=' , 'company_masters.company_id')
        ->where('company_masters.company_status',1)
        ->where('users.id',$id)
        ->first();

        //Get Pandadoc Document Details Function
        if($company_detail->referral_flag == 0 && $company_detail->referral_pandadoc_id !=null ){
            if($company_detail->resend_pandadoc_id == null){
                $documentData = detailsGetPanda($company_detail->referral_pandadoc_id);
            }else{
                $documentData = detailsGetPanda($company_detail->resend_pandadoc_id);
            }
            $assocArray = json_decode($documentData, true);
            if($assocArray['status']=="document.completed"){
                $referral_code = Str::random(8);
                $date_completed = date('Y-m-d h:m:s', strtotime($assocArray['date_completed']));
                Company_master::where('company_id',$company_detail->company_id)
                ->update([
                    'referral_code'=>$referral_code,
                    'referral_flag'=>1,
                    'referral_completion_date'=>$date_completed
                ]);
                
                $data['first_name']=$company_detail->first_name;
                $data['url']=$url;
                $data['referral_link']=$url.'affiliateRequest/'.$referral_code;

                $status = sendMail($company_detail->email,'Welcome to Affiliate Referral Program',$data,'referralWelcomeMail');
            }
        }
        $company_detail = Company_master::select("company_masters.*","users.email","users.first_name")
        ->leftJoin('users', 'users.company_id', '=' , 'company_masters.company_id')
        ->where('company_masters.company_status',1)
        ->where('users.id',$id)
        ->first();
        return response()->json($company_detail);
    } 

    
    //Generate and Send Referral Program Agreement
    public function generateAgreement(Request $request){
        $affiliate_data = User::select(
        'users.*',
        'reference_affiliates.address',
        'reference_affiliates.city',
        'reference_affiliates.state_code',
        'reference_affiliates.zip_code',
        'company_masters.company_name',
        'company_masters.title'
        )
        ->leftJoin('reference_affiliates', 'reference_affiliates.company_id', '=', 'users.company_id')
        ->leftJoin('company_masters', 'company_masters.company_id','=','users.company_id')
        ->where('id', $request->id)->first();
        
        $jsondata = '{
            "name": "Test for new mfsn Affiliate Referral Program Terms",
            "template_uuid": "UVszttBM48GcNk6auTBWeL",
            
            "folder_uuid":"zsHVLu6jLMrD3NitxRMki5",
            
            "recipients": [
                {
                    "email": "'.$affiliate_data->email.'",
                    "first_name": "'.$affiliate_data->first_name.'",
                    "last_name": "'.$affiliate_data->last_name.'",
                    "role": "Referral Program Participant"
                },
                {
                    "email": "sunita.karche@samvadsocial.com",
                    "first_name":"Rakshiya",
                    "last_name":"Siddiqui",
                    "role":"MFSN Executive"
                }
            ],
            "fields": {
                "Name of Business": {
                    "value": "'.$affiliate_data->company_name.'",
                    "title":"Name of Business"
                },
                "Street Address": {
                    "value": "'.$affiliate_data->address.'",
                    "title":"Street Address"
                },
                "City":{
                    "value":"'.$affiliate_data->city.'",
                    "title":"City"
                },
                "State":{
                    "value":"'.$affiliate_data->state_code.'",
                    "title":"State"
                },
                "Zip Code":{
                    "value":"'.$affiliate_data->zip_code.'",
                    "title":"Zip Code"
                },
                "First Name":{
                    "value":"'.$affiliate_data->first_name.'",
                    "title":"First Name"
                },
                "Last Name":{
                    "value":"'.$affiliate_data->last_name.'",
                    "title":"Last Name"
                },
                "Title":{
                    "value":"'.$affiliate_data->title.'",
                    "title":"Title"
                }
            }
        }';


        //Generate Agreement
        //Create Pandadoc Document for affiliate referral program
        $documentId = createPostPanda($jsondata);
        $res=Company_master::where('company_id',$affiliate_data->company_id)
        ->update(array(
            'referral_pandadoc_id'=>$documentId,
            'referral_enrolled_date'=>Carbon::now()->format('Y-m-d')
        ));
        sleep(5);
        // Send Pandadoc Document to affiliate
        $msgJson = '{
            "message":"Hi $first_name, We\'re thrilled that you value our services enough to recommend us to people in your professional network!  Thank you for helping us grow and we hope this program will be rewarding for you too!   The terms and conditions and your compensation/commission are described in this document.  You are “our” heroes!  Best, Bruce Cornelius CEO and Founder, MyFreeScoreNow.",
            "subject":"MyFreeScoreNow sent you the document MyFreeScoreNow Affiliate Referral Program Term",
            "silent":"false" 
        }'; 
        $sentStatus = sendPostPanda($documentId,$msgJson);
        if($sentStatus == 'Document not send'){
            $message=[
                "message"=>"Something went wrong."
            ];
            return response()->json([
                'success'=>false,
                'message'=>$message
            ]);
        }else{
            $message=[
                "message"=>"Referral Program Agreement Successfully Sent."
            ];
            return response()->json([
                'success'=>true,
                'message'=>$message
            ]);
        }
        

    }

    //Generate and Send Referral Program Agreement
    public function regenerateAgreement(Request $request){
        $affiliate_data = User::select(
        'users.*',
        'reference_affiliates.address',
        'reference_affiliates.city',
        'reference_affiliates.state_code',
        'reference_affiliates.zip_code',
        'company_masters.company_name',
        'company_masters.title'
        )
        ->leftJoin('reference_affiliates', 'reference_affiliates.company_id', '=', 'users.company_id')
        ->leftJoin('company_masters', 'company_masters.company_id','=','users.company_id')
        ->where('id', $request->id)->first();
        
        $jsondata = '{
            "name": "Test for new mfsn Affiliate Referral Program Terms",
            "template_uuid": "UVszttBM48GcNk6auTBWeL",
            
            "folder_uuid":"zsHVLu6jLMrD3NitxRMki5",
            
            "recipients": [
                {
                    "email": "'.$affiliate_data->email.'",
                    "first_name": "'.$affiliate_data->first_name.'",
                    "last_name": "'.$affiliate_data->last_name.'",
                    "role": "Referral Program Participant"
                },
                {
                    "email": "sunita.karche@samvadsocial.com",
                    "first_name":"Rakshiya",
                    "last_name":"Siddiqui",
                    "role":"MFSN Executive"
                }
            ],
            "fields": {
                "Name of Business": {
                    "value": "'.$affiliate_data->company_name.'",
                    "title":"Name of Business"
                },
                "Street Address": {
                    "value": "'.$affiliate_data->address.'",
                    "title":"Street Address"
                },
                "City":{
                    "value":"'.$affiliate_data->city.'",
                    "title":"City"
                },
                "State":{
                    "value":"'.$affiliate_data->state_code.'",
                    "title":"State"
                },
                "Zip Code":{
                    "value":"'.$affiliate_data->zip_code.'",
                    "title":"Zip Code"
                },
                "First Name":{
                    "value":"'.$affiliate_data->first_name.'",
                    "title":"First Name"
                },
                "Last Name":{
                    "value":"'.$affiliate_data->last_name.'",
                    "title":"Last Name"
                },
                "Title":{
                    "value":"'.$affiliate_data->title.'",
                    "title":"Title"
                }
            }
        }';


        //Generate Agreement
        //Create Pandadoc Document for affiliate referral program
        $documentId = createPostPanda($jsondata);
        $res=Company_master::where('company_id',$affiliate_data->company_id)
        ->update(array(
            'resend_pandadoc_id'=>$documentId,
            'resend_date'=>Carbon::now()->format('Y-m-d')
        ));
        sleep(5);
        // Send Pandadoc Document to affiliate
        $msgJson = '{
            "message":"Hi $first_name, We\'re thrilled that you value our services enough to recommend us to people in your professional network!  Thank you for helping us grow and we hope this program will be rewarding for you too!   The terms and conditions and your compensation/commission are described in this document.  You are “our” heroes!  Best, Bruce Cornelius CEO and Founder, MyFreeScoreNow.",
            "subject":"MyFreeScoreNow sent you the document MyFreeScoreNow Affiliate Referral Program Term",
            "silent":"false" 
        }'; 
        $sentStatus = sendPostPanda($documentId,$msgJson);
        if($sentStatus == 'Document not send'){
            $message=[
                "message"=>"Something went wrong."
            ];
            return response()->json([
                'success'=>false,
                'message'=>$message
            ]);
        }else{
            $message=[
                "message"=>"Referral Program Agreement Successfully Regenerate and Sent."
            ];
            return response()->json([
                'success'=>true,
                'message'=>$message
            ]);
        }
        

    }


    //Fetch Referred List
    public $q;
    public function fetchReferredList($id,$search,$perPage){
       
        $referral_code = Company_master::select("company_masters.referral_code")
        ->leftJoin('users', 'users.company_id', '=' , 'company_masters.company_id')
        ->where('company_masters.company_status',1)
        ->where('users.id',$id)
        ->first();

        $this->q= $search!='null'?$search:'';

        $referred_list = Company_master::select("company_masters.*",
        "reference_affiliates.status_id","reference_affiliates.first_name","reference_affiliates.last_name","reference_affiliates.email","reference_affiliates.created_at AS applied_date", "reference_affiliate_status_master.status_name")
        ->leftJoin('reference_affiliates', 'reference_affiliates.company_id', '=' ,'company_masters.company_id')
        ->leftJoin('users', 'users.company_id', '=' ,'company_masters.company_id')
        ->leftJoin('reference_affiliate_status_master', 'reference_affiliate_status_master.status_id' ,'=','reference_affiliates.status_id')
        ->where(function($query){
            $query->orWhere('reference_affiliates.first_name', 'LIKE', "%$this->q%");
        })        
        ->where('referred_by',$referral_code->referral_code)
        ->paginate($search=='null'?$perPage:'');

        return response()->json($referred_list);   
    }
}
