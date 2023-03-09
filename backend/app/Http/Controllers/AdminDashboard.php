<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Aid_master;
use App\Models\ReferenceAffiliates;

use Carbon\Carbon;

class AdminDashboard extends Controller
{
    public function index(){
        
        $companyAffiliateChart = User::where('user_role','affiliate')->count();
        $companyAffiliateUsersChart = User::where('user_role','affiliate_user')->count();

        $pendingApplications = ReferenceAffiliates::where('status_id', 1)->count();
        $approvedApplications = ReferenceAffiliates::where('status_id', 4)->count();
        $waitingForApproval = ReferenceAffiliates::where('status_id', 3)->count();
        



        // $aid = Aid_master::count();
        $aid = Aid_master::select('aid_id', 'created_at')
        ->get()
        ->groupBy(function ($date) {
            return Carbon::parse($date->created_at)->format('F');
        });



        $chartData = [
            "companyAffiliateChart"=>$companyAffiliateChart,
            "companyAffiliateUsersChart"=>$companyAffiliateUsersChart,
            "aid"=>$aid,
            "pendingApplications"=>$pendingApplications,
            "approvedApplications"=>$approvedApplications,
            "waitingForApproval"=>$waitingForApproval,
            // "months"=>$months
        ];
        return response()->json($chartData);
    }
}
