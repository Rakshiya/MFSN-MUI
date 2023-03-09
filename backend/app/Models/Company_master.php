<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company_master extends Model
{
    protected $table = 'company_masters';
    protected $fillable = [
        'company_name',
        'user_id',
        'company_website',
        'title',
        'business_started_year',
        'marketing_type',
        'referral_code',
        'referred_by',
        'referral_pandadoc_id',
        'referral_enrolled_date',
        'referral_flag',
        'company_status'
    ];
} 
