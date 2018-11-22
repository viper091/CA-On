<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVacinasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vacinas', function (Blueprint $table) {
            //
            $table->increments('id');
            $table->integer('lote');
            $table->integer('tipo');
            $table->string('name');
            $table->date('data_de_validade');
            
    
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vacinas');

        Schema::table('vacinas', function (Blueprint $table) {
            //
        });
    }
}
