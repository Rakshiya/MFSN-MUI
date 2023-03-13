<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCobrandingDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cobranding_details', function (Blueprint $table) {
            $table->id();
            $table->integer('event_by')->nullable();
            $table->integer('company_master_id')->nullable()->index();
            $table->integer('aid_master_id')->nullable()->index();
            $table->integer('base_pid_plans_id')->nullable();
            $table->integer('pid')->nullable();
            $table->boolean('is_sponsored')->nullable();
            $table->string('sponsored_code',64)->nullable();
            $table->boolean('is_verified')->nullable();
            $table->integer('verified_by')->nullable();
            $table->boolean('is_active')->nullable();
            $table->string('status',20)->nullable();

            $table->timestamps();
            $table->softDeletes();

            // $table->foreign('company_master_id')->references('id')->on('company_master');
            // $table->foreign('aid_master_id')->references('id')->on('aid_master');
            // $table->foreign('base_pid_plans_id')->references('id')->on('base_pid_plans_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cobranding_details');
    }
}
