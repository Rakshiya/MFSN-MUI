<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCreditSnapshotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('credit_snapshot', function (Blueprint $table) {
            $table->id();
            $table->integer('event_by')->nullable();
            $table->integer('company_master_id')->nullable()->index();
            $table->string('snapshot_pandadoc_id',64)->nullable();
            $table->date('snapshot_enrolled_date')->nullable();
            $table->date('snapshot_pandadoc_expired')->nullable();
            $table->string('snapshot_resend_pandadoc_id',64)->nullable();
            $table->date('snapshot_resend_date')->nullable();
            $table->date('snapshot_resend_pandadoc_expired')->nullable();
            $table->string('snapshot_token',64)->nullable();
            $table->string('snapshot_phone_no',64)->nullable();
            $table->string('snapshot_optional_phone_no',128)->nullable();
            $table->string('working_hours',512)->nullable();
            $table->integer('upgrade_pid')->nullable();
            $table->string('snapshot_business_name',128)->nullable();
            $table->string('snapshot_popup_attribute_json')->nullable();
            $table->timestamps();
            $table->softDeletes();

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
        Schema::dropIfExists('credit_snapshot');
    }
}
