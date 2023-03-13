<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReferenceAffiliatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reference_affiliats', function (Blueprint $table) {
            $table->id();
            $table->integer('event_by')->nullable();
            $table->integer('company_master_id')->default(0)->index();
            $table->string('first_name', 50)->nullable();
            $table->string('last_name', 50)->nullable();
            $table->string('email', 64)->nullable()->index();
            $table->string('phone_no', 15)->nullable();
            $table->string('address', 256)->nullable();
            $table->string('city', 40)->nullable();
            $table->string('state_code', 20)->nullable();
            $table->integer('zip_code',10)->nullable();         
            $table->datetime('agreement_completion_date')->nullable();
            $table->string('pandadoc_id', 64)->nullable();  
            $table->integer('reference_affiliate_status_master_id')->default(1)->index();
            $table->integer('approved_by')->nullable();
            $table->datetime('approved_date')->nullable();
            $table->integer('completed_by')->nullable();
            $table->datetime('completed_date')->nullable();
            $table->integer('pandadoc_version')->nullable();
            $table->boolean('is_active')->nullable();
            $table->boolean('is_delete')->default(0);
            $table->boolean('is_deferred')->default(0);
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('company_master_id')->references('id')->on('company_master');
            $table->foreign('reference_affiliate_status_master_id')->references('id')->on('reference_affiliate_status_master');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reference_affiliats');
    }
}
