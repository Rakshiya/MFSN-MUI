<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class LeadActivityLog extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lead_activity_logs', function (Blueprint $table) {
            $table->id();
            $table->integer('refernce_affiliates_id');
            $table->integer('users_id')->nullable();
            $table->string('type')->nullable();
            $table->text('notes')->nullable();
            $table->boolean('follow_up_required')->default(0);
            $table->string('follow_up_for')->nullable();
            $table->datetime('next_follow_up')->nullable();
            $table->datetime('add_next_follow_up')->nullable();
            $table->boolean('status_id')->default(0);
            $table->boolean('status_change')->default(0);
            $table->string('act_creditsnapshot_status')->nullable();
            $table->string('act_referral_program_status')->nullable();
            $table->string('act_cobranding_status')->nullable();
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
