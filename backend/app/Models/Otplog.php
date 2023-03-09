<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Otplog extends Model
{
    protected $table = 'otplogs';
    protected $fillable = [
        'email',
        'otp',
        'optstatus'
    ];
}
