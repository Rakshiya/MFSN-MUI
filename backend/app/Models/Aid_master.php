<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aid_master extends Model
{
    use HasFactory;
    protected $table="aid_masters";
    protected $fillable = [
        'aid_id',
        'aid',
        'company_id',
        'aid_status',
    ];
}
