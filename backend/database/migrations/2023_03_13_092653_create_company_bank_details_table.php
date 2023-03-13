<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyBankDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_bank_details', function (Blueprint $table) {
            $table->id();
            $table->integer('event_by')->nullable();
            $table->integer('company_master_id')->nullable()->index();
            $table->string('bank_name',255)->nullable();
            $table->string('name_on_account',255)->nullable();
            $table->text('routing_number')->nullable();
            $table->string('account_number',15)->nullable();
            $table->enum('account_type',['checking','savings'])->nullable();
            $table->enum('account_category',['personal','business'])->nullable();
            $table->date('last_ach_updated')->nullable();
            $table->boolean('ach_info_added_to_bank')->default(0);
            $table->string('email_to_notify',64)->nullable();
            $table->boolean('is_active')->default(1);
            $table->boolean('details_available')->default(1);
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
        Schema::dropIfExists('company_bank_details');
    }
}
