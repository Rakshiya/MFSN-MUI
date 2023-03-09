<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pid_master extends Model
{
    use HasFactory;
    protected $table="pid_masters";
    protected $fillable = [
        'pid',
        'pid_type',
        'company_id',
        'pid_status',
    ];
}
