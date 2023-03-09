<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ReferenceAffiliates;
use App\Models\Otplog;
use App\Models\Aid_master;
use App\Models\Pid_master;
use App\Models\Pid_plans;
use App\Models\Company_master;
use App\Models\PasswordReset;
use App\Models\Lead_activity_log;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Mail;
use Carbon\Carbon;
use GuzzleHttp\Client;

class ManageLeads extends Controller
{
    //Send Agreemen to Affiliate 
    public function sendAgreement(Request $request){

        $affiliate_data = ReferenceAffiliates::select('reference_affiliates.*',
        'company_masters.company_name',)
        ->leftJoin('company_masters', 'reference_affiliates.company_id',
        '=', 'company_masters.company_id')->where('refernce_affiliates_id', $request->id)->first();

            // vR3m3KL297kHfNe5yKaUQB
            // //Json Data to send pandadoc agreement
            
        $jsondata = '{
            "name": "Test for new mfsn Affiliate Referral Program",
            "template_uuid": "DPJexPKUGMbu2L63h8tNSP",
            
            "folder_uuid":"zsHVLu6jLMrD3NitxRMki5",
            
            "recipients": [
                {
                    "email": "'.$affiliate_data->email.'",
                    "first_name": "'.$affiliate_data->first_name.'",
                    "last_name": "'.$affiliate_data->last_name.'",
                    "role": "Affiliate Partner"
                },
                {
                    "email": "sunita.karche@samvadsocial.com",
                    "first_name":"Rakshiya",
                    "last_name":"Siddiqui",
                    "role":"MFSN Executive"
                }
            ],
            "fields": {
                "Business Name": {
                    "value": "'.$affiliate_data->company_name.'",
                    "title":"Business Name"
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
                "FirstName":{
                    "value":"'.$affiliate_data->first_name.'",
                    "title":"FirstName"
                },
                "LastName":{
                    "value":"'.$affiliate_data->last_name.'",
                    "title":"LastName"
                },
                "Phone Number":{
                    "value":"'.$affiliate_data->phone_no.'",
                    "title":"Phone Number"
                },
                "Email Address":{
                    "value":"'.$affiliate_data->email.'",
                    "title":"Email Address"
                }
            }
        }';

        
        // //Create Pandadoc Document for affiliate
        $documentId = createPostPanda($jsondata);

        $res=ReferenceAffiliates::where('refernce_affiliates_id',$request->id)
        ->update(array(
            'pandadoc_document_id'=>$documentId,
            'pandadoc_version'=>2,
            "status_id"=>"2"
        ));
        sleep(5);
        // Send Pandadoc Document to affiliate
        $msgJson = '{
            "message":"Hi '.$affiliate_data->first_name.', Click “Open the Document” to complete and return your affiliate program document. Don\'t forget to select your membership levels and commissions! After you return the document we\'ll send you a Welcome Email containing your affiliate links. Thank You!",
            "subject":"Your MyFreeScoreNow Affiliate Program Document",
            "silent":"false"
        }';
        $sentStatus = sendPostPanda($documentId,$msgJson);

        $activityLog = new Lead_activity_log();
        $activityLog->refernce_affiliates_id = $affiliate_data->refernce_affiliates_id;
        $activityLog->users_id =  auth()->user()->id;
        //$activityLog->type =  '';
        $activityLog->notes =  'Agreement Generated';
        $activityLog->follow_up_required = 1;
        // $activityLog->followup_for =  '';
        // $activityLog->next_follow_up =  '';
        $fdate = date('Y-m-d H:i:s');
        $activityLog->add_next_follow_up = date('Y-m-d H:i',strtotime("+1 Day",strtotime($fdate)));
        $activityLog->status_id =  '2';
        $activityLog->status_change =  '1';
        $activityLog->save();

        $message=[
            "success"=>"Agreemnet Successfully sent."
        ];
        return response()->json([
            'success'=>true,
            'message'=>$message
        ]); 
        
    }

     //Single Refresh for get details from pandadocs
    public function singleRefresh(Request $request){
        $document_id =  $request->document_id;
        $affPandadocID = $request->document_id;
        $affref_id = $request->affref_id;
        //Get Pandadoc Document Details Function
        $response = detailsGetPanda($document_id);
        
        $refAff = ReferenceAffiliates::where('refernce_affiliates_id',$affref_id)->get();
        $affStatusID = $refAff[0]['status_id'];
 
        if($affStatusID == 2){ 
            if(!empty($response)){
                $assocArray = json_decode($response, true);
                if(!empty($assocArray)){
                    if( count($assocArray) > 3){
                        if ($assocArray['status']=="document.voided") {
                            return response()->json(['status' => 'expired']);
                        }
                        else if ($assocArray['status']=="document.completed") {
                            $alldata=[];
                            $templatedata=[];
                            $alldata = $assocArray['fields'];
                            $templatedata = $assocArray['template'];

                            $decAffDetails=[];
                                                                 
                            foreach($alldata as $key1 => $item){
                                    
                                $mydata1=[];
                                $mydata1['name'] = $item['name'];
                                $mydata1['value'] = $item['value'];
                                array_push($decAffDetails, $mydata1);
                            }
                            foreach($decAffDetails as $key => $value){
                                if($value['name'] == 'FirstName' && $key == 1){
                                    $first_name = $value['value'];
                                }
                                if($value['name'] == 'LastName' && $key == 2){
                                    $last_name = $value['value'];
                                }
                                if($value['name']=='Business Name' && $key == 0){
                                    $business_name = $value['value'];
                                }
                                if($value['name'] == 'Street Address' && $key == 3){
                                    $street_address = $value['value'];
                                }
                                if($value['name'] == 'City' && $key == 4){
                                    $city = $value['value'];
                                }
                                if($value['name'] == 'Email Address' && $key == 7){
                                    $email = $value['value'];
                                }
                                if($value['name'] == 'Phone Number' && $key == 8){
                                    $phone_no = $value['value'];
                                }
                                // if($value['name'] == 'URL' && $key == 7){
                                //     $company_website = $value['value'];
                                // }
                                if($value['name'] == 'Date' && $key == 22){
                                    $agreement_completion_date = $value['value'];
                                    $shorted_agreement_completion_date = date('Y-m-d h:m:s', strtotime($agreement_completion_date));
                                }
                                if($value['name'] == 'Title' && $key == 21){
                                    $title = $value['value'];
                                }
                                if($value['name'] == 'State' && $key == 5){
                                    $state = $value['value'];
                                }
                                if($value['name'] == 'Zip Code' && $key == 6){
                                    $zip_code = $value['value'];
                                }
                            }


                            $fetchPID = Pid_plans::where('plan_pid_type', 'Basic')->get();
                            $pid_list="";
                            foreach($fetchPID as $row){
                                $pid_list .= $row['pid'].',';
                            }
                          
                            $res=ReferenceAffiliates::where('refernce_affiliates_id',$affref_id)
                            ->update(array(
                                'first_name'=>$first_name,
                                'last_name'=>$last_name,
                                'email'=>$email,
                                'phone_no'=>$phone_no,
                                'address'=>$street_address,
                                'city'=>$city,
                                'state_code'=>$state,
                                'zip_code'=>$zip_code,
                                'pids'=>$pid_list,
                                'agreement_completion_date'=>Carbon::parse($shorted_agreement_completion_date),
                                "status_id"=>"3",
                                "updated_at"=>Carbon::now()
                            ));

                            Company_master::where('company_id',$request->company_id)
                            ->update(array(
                                'title'=>$title
                            ));

                            $activityLog = new Lead_activity_log();
                            $activityLog->refernce_affiliates_id = $affref_id;
                            $activityLog->users_id =  auth()->user()->id;
                            //$activityLog->type =  '';
                            $activityLog->notes =  'Agreement Signed';
                            $activityLog->follow_up_required = 1;
                            // $activityLog->followup_for =  '';
                            // $activityLog->next_follow_up =  '';
                            $fdate = date('Y-m-d H:i:s');
                            $activityLog->add_next_follow_up = date('Y-m-d H:i',strtotime("+1 Day",strtotime($fdate)));
                            $activityLog->status_id =  '3';
                            $activityLog->status_change =  '1';
                            $activityLog->save();

                            $message=["message"=>'Successfully Refreshed'];
                            return response()->json([
                                'success'=>true,
                                'message'=>$message
                            ]);
                        }else{
                            $message=["message"=>'Document not completed from user side and admin side.'];
                            return response()->json([
                                'success'=>false,
                                'message'=>$message
                            ]);
                        }
                    }
                }
            }
        }
    }
  
     //Approve Process Start Here
     public function approveNow(Request $request){
            $affref_id = $request->affref_id;
            $defaultTimezone = $request->defaultTimezone;
            $userType = $request->userType;
            $aidlist = $request->aidList;

            $refAffData=ReferenceAffiliates::where('refernce_affiliates_id',$affref_id)->first();
            // //AID insert to aid_masters table
            foreach($aidlist as $aid_row){
                $checkAID = Aid_master::where('aid',$aid_row['value'])
                ->where('company_id',$refAffData->company_id)->first();
                if($checkAID){
                    $message='AID Aleady exist please use new AID';
                    return response()->json([
                        'success'=>false,
                        'message'=>$message
                    ]);
                }else{
                    Aid_master::create([
                        'aid' => $aid_row['value'],
                        'company_id' =>$refAffData->company_id,
                        'aid_status'=>'1'
                    ]);
                }
            }

        
         //Create User
         $checkAID = User::where('email',$refAffData->email)->first();
            if($checkAID){
                $message='User Aleady exist.';
                return response()->json([
                    'success'=>false,
                    'message'=>$message
                ]);
            }else{
                //Create PID
                $pid_list = explode(',', $refAffData->pids);
                foreach($pid_list as $pid_row){
                    $checkAID = Pid_master::where('pid',$pid_row)
                    ->where('company_id',$refAffData->company_id)->first();

                    if($checkAID){
                        $message='PID Aleady exist please use new PID';
                        return response()->json([
                            'success'=>false,
                            'message'=>$message
                        ]);
                    }else{
                        if($pid_row != null){
                            Pid_master::create([
                                'pid' => $pid_row,
                                'company_id' =>$refAffData->company_id,
                                'pid_status'=>'1'
                            ]);
                        }
                        
                    }
                }
                $password = Str::random(10);
                $last_userid = User::create([
                    'name'=>$refAffData->first_name.' '.$refAffData->last_name,
                    'first_name'=>$refAffData->first_name,
                    'last_name'=>$refAffData->last_name,
                    'email'=>$refAffData->email,
                    'phone_no'=>$refAffData->phone_no,
                    'company_id'=>$refAffData->company_id,
                    'default_timezone'=>$defaultTimezone,
                    'user_role'=>$userType,
                    'password'=>Hash::make($password)
                ])->id;

                
                ReferenceAffiliates::where('refernce_affiliates_id',$affref_id)
                ->update(array(
                    "status_id"=>"4",
                    "updated_at"=>Carbon::now()
                ));
                $referral_code = Str::random(8);
                Company_master::where('company_id',$refAffData->company_id)
                ->update(array(
                    "company_status"=>"1",
                    'referral_code'=>$referral_code,
                    'referral_flag'=>1,
                    'referral_completion_date'=>Carbon::now(),
                    "updated_at"=>Carbon::now()
                ));

                $token = Str::random(150);
                $url = $request->url;
                $link = $url."reset-password/".$token;
                $data['url']=$url;
                $data['link']=$link;
                $data['first_name']=$refAffData->first_name;
                $data['last_name']=$refAffData->last_name;
                $data['email']=$refAffData->email;
                $data['title']='Welcome Email - Your Links For The MyFreeScoreNow Affilite Program!';
                

                $status = sendMail($refAffData->email,$data['title'],$data,'affiliateWelcomeMail');

                $cdate = Carbon::now()->format('Y-m-d H:i:s');
                PasswordReset::updateOrCreate(
                    ['email'=>$refAffData->email],
                    [
                        'email'=>$refAffData->email,
                        'token'=>$token,
                        'created_at'=>$cdate
                    ]
                );
            }
            $activityLog = new Lead_activity_log();
            $activityLog->refernce_affiliates_id = $affref_id;
            $activityLog->users_id =  auth()->user()->id;
            //$activityLog->type =  '';
            $activityLog->notes =  'Affiliate details updated';
            $activityLog->follow_up_required = 1;
            // $activityLog->followup_for =  '';
            // $activityLog->next_follow_up =  '';
            $fdate = date('Y-m-d H:i:s');
            $activityLog->add_next_follow_up = date('Y-m-d H:i',strtotime("+1 Day",strtotime($fdate)));
            $activityLog->status_id =  '4';
            $activityLog->status_change =  '1';
            $activityLog->save();
        // return response()->json("User successfully approved.".$password);
        $message='User successfully approved.';
        return response()->json([
            'success'=>true,
            'message'=>$message
        ]);
            


     }





}
