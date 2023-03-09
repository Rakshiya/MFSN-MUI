<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lead_activity_log extends Model
{
    use HasFactory;
    protected $table = "lead_activity_logs";
    protected $primaryKey = 'id';

    protected $fillable = [
        'refernce_affiliates_id',
        'users_id',
        'type',
        'notes',
        'follow_up_required',
        'follow_up_for',
        'next_follow_up',
        'add_next_follow_up',
        'status_id',
        'status_change',
        'act_creditsnapshot_status',
        'act_referral_program_status',
        'act_cobranding_status',
        'created_at',
        'updated_at'
    ];

    public function user(){
        return $this->hasOne('App\Models\User', 'id', 'users_id');
    }
}
