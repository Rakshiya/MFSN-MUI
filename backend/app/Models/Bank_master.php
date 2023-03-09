<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bank_master extends Model
{
    use HasFactory;
    protected $table="bank_masters";
    protected $fillable = [
        'bank_name',
        'bank_status',
        'created_at',
        'updated_at'
    ];
}
