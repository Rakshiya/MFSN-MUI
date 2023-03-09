<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aid_user extends Model
{
    use HasFactory;
    protected $table = 'aid_users';
    protected $fillable = [
        'user_id',
        'aid_id',
        'aid_user_status',
        'is_delete',
        'updated_at'
    ];
}
