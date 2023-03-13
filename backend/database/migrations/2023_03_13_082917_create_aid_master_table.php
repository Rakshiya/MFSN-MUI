<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAidMasterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aid_master', function (Blueprint $table) {
            $table->id();
            $table->integer('event_by')->nullable();
            $table->string('aid',64)->nullable();
            $table->integer('company_master_id')->nullable()->index();
            $table->boolean('aid_status')->default(0);
            $table->boolean('epic_pro_status')->default(0);
            $table->boolean('member_credentials_status')->default(0);
            $table->timestamps();
            $table->softDeletes();
            
            $table->foreign('company_master_id')->references('id')->on('company_master');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('aid_master');
    }
}
