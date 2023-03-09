<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company_bank_detail extends Model
{
    use HasFactory;
    protected $table = "company_bank_details";
    protected $fillable =[
        'event_by',
        'company_id',
        'bank_name',
        'name_on_account',
        'routing_number',
        'account_number',
        'account_type',
        'account_category',
        'last_ach_update',
        'ach_info_added_to_bank',
        'email_to_notify',
        'active_status',
        'details_available',
        'created_at',
        'updated_at'
    ];
}
