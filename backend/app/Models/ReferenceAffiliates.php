<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReferenceAffiliates extends Model
{
    protected $table = 'reference_affiliates';
    protected $primaryKey = 'refernce_affiliates_id';

    protected $fillable = [
        'first_name',
        'last_name',
        'company_id',
        'email',
        'phone_no',
        'address',
        'city',
        'state_code',
        'zip_code',
        'agreement_completion_date',
        'pandadoc_document_id',
        'pid_list',
        'status_id',
        'approved_by',
        'users_id',
        'email_verified',
        'email_exist',
        'pandadoc_version',
        'is_active',
        'is_delete'
    ];

    public function activityLogs(){
        return $this->hasMany('App\Models\Lead_activity_log', 'refernce_affiliates_id', 'refernce_affiliates_id')->with('user')->latest();
    }
}
