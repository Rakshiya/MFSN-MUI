<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAidUsersMappinTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aid_users_mapping', function (Blueprint $table) {
            $table->id();
            $table->integer('event_by')->nullable();
            $table->integer('users_id')->nullable()->index();
            $table->integer('aid_master_id')->nullable()->index();
            $table->boolean('aid_user_status')->default(0);
            $table->boolean('is_active')->default(1);

            $table->timestamps();
            $table->softDeletes();

            // $table->foreign('aid_master_id')->references('id')->on('aid_master');
            // $table->foreign('users_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('aid_users_mapping');
    }
}
