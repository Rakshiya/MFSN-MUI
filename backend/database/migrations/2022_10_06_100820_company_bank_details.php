<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CompanyBankDetails extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_bank_details', function(Blueprint $table){

            $table->id('id');
            $table->integer('event_by')->nullable();
            $table->integer('company_id')->nullable();
            $table->string('bank_name',255)->nullable();
            $table->string('name_on_account',255)->nullable();
            $table->text('routing_number')->nullable();
            $table->string('account_number',15)->nullable();
            $table->enum('account_type',['checking','savings'])->nullable();
            $table->enum('account_category',['personal','business'])->nullable();
            $table->date('last_ach_update')->nullable();
            $table->boolean('ach_info_added_to_bank')->default(0);
            $table->string('email_to_notify',64)->nullable();
            $table->boolean('active_status')->default(1);
            $table->boolean('details_available')->default(0);
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
