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
            $table->integer('roles_id')->nullable()->index();
            $table->integer('company_master_id')->nullable()->index();
            $table->string('name',100)->nullable();
            $table->string('first_name', 50)->nullable();
            $table->string('last_name', 50)->nullable();
            $table->string('email',64)->unique()->index();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('phone_no',15)->nullable();
            $table->string('default_timezone',5)->nullable();
            $table->string('password');
            $table->boolean('is_active')->default(1);
            $table->rememberToken();
            $table->softDeletes();
            $table->timestamps();

            
            // $table->foreign('roles_id')->references('id')->on('roles');
            // $table->foreign('company_master_id')->references('id')->on('company_master');

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
