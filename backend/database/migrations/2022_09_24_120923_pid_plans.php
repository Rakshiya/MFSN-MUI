<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PidPlans extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pid_plans', function(Blueprint $table){
            $table->id('pid_plan_id');
            $table->string('plan_name',100)->nullable();
            $table->float('pricing')->default(0.00);
            $table->integer('trial_days')->default(0);
            $table->integer('pid')->nullable();
            $table->string('sid', 32)->nullable();
            $table->enum('plan_pid_type',['Basic', 'Cobranding','Epic Challange','Economy'])->default('Basic');
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
