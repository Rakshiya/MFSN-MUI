<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ReferenceAffiliates extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reference_affiliates', function (Blueprint $table) {
            $table->id('refernce_affiliates_id');
            $table->string('first_name', 50)->nullable();
            $table->string('last_name', 50)->nullable();
            $table->integer('company_id')->default(0);
            $table->string('email', 64)->nullable();
            $table->string('phone_no', 15)->nullable();
            $table->string('address', 100)->nullable();
            $table->string('city', 40)->nullable();
            $table->string('state_code', 100)->nullable();
            $table->integer('zip_code')->nullable();
         
            $table->datetime('agreement_completion_date')->nullable();
            $table->string('pandadoc_document_id', 64)->nullable();
            $table->string('pids',100)->nullable();
  
            $table->integer('status_id')->default(1);
            $table->integer('approved_by')->nullable();
            $table->integer('pandadoc_version')->nullable();

            $table->boolean('is_active')->nullable();
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
