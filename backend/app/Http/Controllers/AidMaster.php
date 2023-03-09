<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Aid_master;

class AidMaster extends Controller
{
    public function index(Request $request, $id=''){
        if($id !=''){
            $aid_list = Aid_master::select('aid_masters.*','company_masters.company_name')
            ->leftJoin('company_masters', 'aid_masters.company_id',
            '=', 'company_masters.company_id')
            ->where('aid_masters.company_id',$id)
            ->get();
        }else{
            $aid_list = Aid_master::select('aid_masters.*','company_masters.company_name')
            ->leftJoin('company_masters', 'aid_masters.company_id',
            '=', 'company_masters.company_id')->get();
        }
        
        return response()->json($aid_list);
    } 
}
