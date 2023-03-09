<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->integer('event_by')->nullable();
            $table->string('name',100);
            $table->string('first_name', 50)->nullable();
            $table->string('last_name', 50)->nullable();
            $table->string('email',64)->unique();
            $table->string('phone_no',15)->nullable();
            $table->string('default_timezone',5)->nullable();
            $table->integer('company_id')->nullable();
            
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('user_role',50)->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->boolean('is_delete')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
