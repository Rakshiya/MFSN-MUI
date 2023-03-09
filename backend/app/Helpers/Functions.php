<?php

//Print_r function

if(!function_exists('pr')){
    function pr($data){
        echo "<pre>";
        print_r($data);
        echo "<pre>";
    }
}

if(!function_exists('sendOTPMail')){
    function sendOTPMail($to,$subject,$data){
        $data1=['data'=>$data];
        $user['to']=$to;
        $user['subject']=$subject;
        Mail::send('otpMailTemplate',$data1,
        function($messages) use
        ($user){
            $messages->to($user['to']);
            $messages->subject($user['subject']);
        });
        if (Mail::failures()) {
            return false;
        } else {
            return true;
        }
    }  
}

if(!function_exists('sendSimpleMail')){
    function sendSimpleMail($to,$subject, $data){
        $data1=['data'=>$data];
        $user['to']=$to;
        $user['subject']=$subject;
        Mail::send('simpleMailTemplate',$data1,
        function($messages) use
        ($user){
            $messages->to($user('to'));
            $messages->subject($user['subject']);
        });
        if (Mail::failures()) {
            return false;
        } else {
            return true;
        }
    }
}
if(!function_exists('sendMail')){
    function sendMail($to,$subject,$data,$template){
        $data1=['data'=>$data];
        $user['to']=$to;
        $user['subject']=$subject;
        Mail::send($template==''?'simpleMailTemplate':$template,$data1,
        function($messages) use
        ($user){
            $messages->to($user['to']);
            $messages->subject($user['subject']);
        });
        if (Mail::failures()) {
            return false;
        } else {
            return true;
        }
    }  
}



?>