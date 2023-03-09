<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pid_master;
use App\Models\Pid_plans;


class PidMaster extends Controller
{
    public function index(Request $request){
        // $pid_list = Pid_master::get();
        // return response()->json($pid_list); 
        $pid_list = Pid_master::select('pid_masters.*','company_masters.company_name')
        ->leftJoin('company_masters', 'pid_masters.company_id',
        '=', 'company_masters.company_id')->get();
    return response()->json($pid_list);
    }

    public function fetchAdminPidList(){
        $adminPid=Pid_plans::get();
        return response()->json($adminPid);
    }
}
