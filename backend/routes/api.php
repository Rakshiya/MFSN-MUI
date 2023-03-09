<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReferenceController;
use App\Http\Controllers\ManageLeads;
use App\Http\Controllers\CompanyMaster;
use App\Http\Controllers\PidMaster;
use App\Http\Controllers\AidMaster;
use App\Http\Controllers\UserMaster;
use App\Http\Controllers\AdminDashboard;
use App\Http\Controllers\Bank;
use App\Http\Controllers\CompanyBankDetail;

use App\Http\Controllers\Affiliate\ReferralProgram\ReferralProgramController;
use App\Http\Controllers\Affiliate\MyLinks\MyLinksController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

 

Route::post('forgot-password',[AuthController::class,'forgotPassword']);
Route::post('checkPasswordToken',[AuthController::class,'checkPasswordToken']);
Route::post('reset-password', [AuthController::class,'resetPassword']);

//User Authenticatio Routes Started Here
Route::post('login', [AuthController::class,'login']);
Route::post('register', [ReferenceController::class,'register']);

Route::group(['middleware'=>'api'],function(){

    //Common Routes Started Here
    Route::get('fetchCompanyList',[CompanyMaster::class,'fetchCompanyList']);


    

    //Manage Leads Routes Started Here
    // Route::get('fetchLeads/{leadtype}/{perPage}/list', [ReferenceController::class,'fetchLeads']);
    Route::get('fetchLeads/{leadtype}/{search}/{perPage}/list', [ReferenceController::class,'fetchLeads']);
    Route::get('leadDetails/{id}', [ReferenceController::class,'leadDetails']);
    Route::post('sendAgreement', [ManageLeads::class,'sendAgreement']);
    Route::post('signleRefresh', [ManageLeads::class,'singleRefresh']);
    Route::post('approveNow', [ManageLeads::class,'approveNow']);
    


    //Company Master Routes Started Here
    Route::get('fetchCompanyList/{search}/{perPage}/{status}/list',[CompanyMaster::class,'index']);
    Route::get('companyDetails/{id}',[CompanyMaster::class,'companyDetails']);
    Route::get('delete-affiliate-user/{id}',[CompanyMaster::class,'deleteAffiliateUser'] );
    
    Route::get('fetch-company-bank-details/{id}',[CompanyBankDetail::class,'companyBankDetails']);
    Route::post('add-company-bank-details',[CompanyBankDetail::class,'addCompanyBankDetails']);
    Route::post('update-company-bank-details',[CompanyBankDetail::class,'updateCompanyBankDetails']);


    //Bank Master Routes Started Here
    // Route::get('fetchBanks/{page}/{perPage}',[Bank::class,'index']);
    // Route::get('fetchBanks/',[Bank::class,'fetchBanks']);
    // Route::post('createBank',[Bank::class,'addBank']);
    // Route::get('changeBankStatus/{id}', [Bank::class, 'changeBankStatus']);
    // Route::get('fetchBankDetails/{id}', [Bank::class,'fetchBankDetails']);
    // Route::post('updateBank',[Bank::class,'updateBank']);
    // Route::get('deleteBank/{id}',[Bank::class,'deleteBank']);



    //Pid Master Routes Started Here
    Route::post('fetchPidList', [PidMaster::class, 'index']);
    Route::get('fetchAdminPidList',[PidMaster::class,'fetchAdminPidList']);
    



    //Aid Master Routes Started Here
    Route::post('fetchAidList', [AidMaster::class, 'index']);
    Route::get('fetchAidList/{id}', [AidMaster::class, 'index']);


    //User Panel Routes Started Here
    Route::get('fetchUserList/{search}/{perPge}/list', [UserMaster::class,'index']);
    Route::post('createUser', [UserMaster::class,'createUser']);
    Route::get('fetchUserTypes', [UserMaster::class,'fetchUserTypes']);
    Route::get('fetchUserDetails/{id}', [UserMaster::class,'fetchUserDetails']);
    Route::post('updateUser',[UserMaster::class,'updateUser']);
    Route::get('delete-user/{id}',[UserMaster::class,'deleteUser']);




    //Admin Dashboard Routes
    Route::get('fetchDashboardCharts', [AdminDashboard::class,'index']);




    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('profile', [AuthController::class,'profile']);




    //Afiliate Routes
    Route::post('getReferralDetail',[ReferralProgramController::class,'fetchReferralData']);
    Route::post('generateAgreement',[ReferralProgramController::class,'generateAgreement']);
    Route::post('regenerateAgreement',[ReferralProgramController::class,'regenerateAgreement']);
    Route::get('fetchReferredList/{id}/{search}/{perPage}/list',[ReferralProgramController::class,'fetchReferredList']);
    Route::post('getMyLinks',[MyLinksController::class,'getMyLinks']);



});