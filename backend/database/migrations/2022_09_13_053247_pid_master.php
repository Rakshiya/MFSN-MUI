<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PidMaster extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pid_masters', function(Blueprint $table){
            $table->id('pid_id');
            $table->integer('pid')->nullable();
            $table->enum('pid_type', ['Basic', 'Cobranding','Epic Challenge','Economy'])->nullable();
            $table->integer('company_id')->nullable();
            $table->boolean('pid_status')->default(0);
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
