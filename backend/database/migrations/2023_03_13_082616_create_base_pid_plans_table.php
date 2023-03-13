<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBasePidPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('base_pid_plans', function (Blueprint $table) {
            $table->id();
            $table->integer('base_pid')->nullable();
            $table->string('plan_name')->nullable();
            $table->float('pricing',8,2)->nullable();
            $table->integer('trial_days')->nullable();
            $table->integer('epic_status')->nullable();
            $table->enum('pid_type', ['Basic', 'Epic Challenge','Economy'])->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('base_pid_plans');
    }
}
