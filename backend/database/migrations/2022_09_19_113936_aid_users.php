<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AidUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void 
     */
    public function up()
    {
        Schema::create('aid_users', function(Blueprint $table){
            $table->id('aid_user_id');
            $table->integer('user_id')->nullable();
            $table->integer('aid_id')->nullable();
            $table->boolean('aid_user_status')->default(0);
            $table->boolean('is_delete')->default(0);
            $table->timestamps();
        }); 
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
