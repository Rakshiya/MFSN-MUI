<?php

$pandaApi = "62132edf7b6fd6279eed9427515305361836e34e";
// $documentid = "sR595o2QSiCbRpZ5WskLgZ";
//Pandadoc API Functions
if(!function_exists('getPanda')){
    function getPanda(){
        echo "Get panda";
    }
}


if(!function_exists('createPostPanda')){
    function createPostPanda($jsonData){
        $documentCreateRequest = $jsonData;
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.pandadoc.com/public/v1/documents?",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => $documentCreateRequest,
            CURLOPT_HTTPHEADER => array(
                "Authorization: API-Key 5c83b13ccda5affa4c0ee36a9d95b31236210638",
                "Content-Type: application/json"
                ),
            ));
            $response = curl_exec($curl);
            curl_close($curl);
            $assocArray = json_decode($response, true);
            $doc_id=isset($assocArray['id'])?$assocArray['id']:'Document id not found!';
            return $doc_id;

    }//Close creaPostPanda
}//Close condition


if(!function_exists('detailsGetPanda')){
    function detailsGetPanda($doc_id){
        $curl = curl_init();
        curl_setopt_array($curl, array(
              CURLOPT_URL => "https://api.pandadoc.com/public/v1/documents/".$doc_id."/details",
              CURLOPT_RETURNTRANSFER => true,
              CURLOPT_ENCODING => "",
              CURLOPT_MAXREDIRS => 10,
              CURLOPT_TIMEOUT => 0,
              CURLOPT_FOLLOWLOCATION => true,
              CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
              CURLOPT_CUSTOMREQUEST => "GET",
              CURLOPT_HTTPHEADER => array(
                "Authorization: API-Key 5c83b13ccda5affa4c0ee36a9d95b31236210638"
            ),
        ));
            
        $response = curl_exec($curl);
        // $assocArray = json_decode($response, true);
        // dd(json_decode($response, true));  
        curl_close($curl);
        return $response;
    }//Close detailGetPanda
}//Close condition


//Pandadoc send document to user
if(!function_exists('sendPostPanda')){
    function sendPostPanda($doc_id,$jsonData){

        if(isset($doc_id) && $doc_id != ''){
            $curl = curl_init();
            
            curl_setopt_array($curl, array(
              CURLOPT_URL => "https://api.pandadoc.com/public/v1/documents/".$doc_id."/send",
              CURLOPT_RETURNTRANSFER => true,
              CURLOPT_ENCODING => "",
              CURLOPT_MAXREDIRS => 10,
              CURLOPT_TIMEOUT => 0,
              CURLOPT_FOLLOWLOCATION => true,
              CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
              CURLOPT_CUSTOMREQUEST => "POST",
              CURLOPT_POSTFIELDS =>$jsonData,
              CURLOPT_HTTPHEADER => array(
                "Authorization: API-Key 5c83b13ccda5affa4c0ee36a9d95b31236210638",
                "Content-Type: application/json"
              ),
            ));
            
            $response2 = curl_exec($curl);
            curl_close($curl);
            
            $assocArray2 = json_decode($response2, true);
            // dd($assocArray2);
            $status='';
            if(!empty($assocArray2)){
                return $status=isset($assocArray2['status'])?$assocArray2['status']:'Document not send';
            }
        }

    }//Close function
}//Close condition
?>