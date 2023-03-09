<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pid_plans extends Model
{
    use HasFactory;
    protected $table="pid_plans";
    protected $fillable = [
        'plan_name',
        'pricing',
        'pid',
        'plan_pid_type',
    ];
}
 