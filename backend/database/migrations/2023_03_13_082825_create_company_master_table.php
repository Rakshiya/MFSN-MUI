<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyMasterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_master', function (Blueprint $table) {
            $table->id();
            $table->integer('event_by')->nullable();
            $table->string('company_name', 100);
            $table->string('company_website',100)->nullable();
            $table->string('title',50)->nullable();
            $table->year('business_started_year')->nullable();
            $table->string('marketing_type',100)->nullable();
            $table->string('referral_code',50)->nullable();
            $table->string('referred_by',50)->nullable();
            
            $table->string('referral_pandadoc_id',50)->nullable();
            $table->date('referral_enrolled_date')->nullable();
            $table->date('referral_completion_date')->nullable();
            $table->date('referral_pandadoc_expired')->nullable();

            
            $table->string('resend_pandadoc_id',50)->nullable();
            $table->date('resend_date')->nullable();
            $table->date('resend_pandadoc_expired')->nullable();

            $table->boolean('referral_flag')->default(0);
            $table->boolean('snapshot_flag')->default(0);
            $table->integer('company_status')->default(0);
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
        Schema::dropIfExists('company_master');
    }
}
