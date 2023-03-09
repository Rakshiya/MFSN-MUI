<?php

namespace App\Http\Controllers\Affiliate\MyLinks;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mail;
use App\Models\User;
use Carbon\Carbon;
use GuzzleHttp\Client;
use App\Models\Company_master;
use App\Models\ReferenceAffiliates;
use App\Models\Pid_master;
class MyLinksController extends Controller
{
    //Fetch mylinks information
    public function getMyLinks(Request $request){
        $id = $request->id;
        $url= $request->url;
        $company_id = $request->company_id;
        $company_detail = Pid_master::select("pid_masters.*","aid_masters.aid",
        "pid_plans.plan_name","pid_plans.pricing","pid_plans.trial_days","pid_plans.plan_pid_type","pid_plans.sid")
        ->leftJoin("aid_masters", "aid_masters.company_id", "=","pid_masters.company_id")
        ->leftJoin("pid_plans","pid_plans.pid", "=","pid_masters.pid")
        ->where('pid_masters.company_id',$company_id)
        ->get();
        return response()->json($company_detail);
    }
}
