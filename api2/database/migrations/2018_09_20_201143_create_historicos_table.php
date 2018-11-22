<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHistoricosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('historicos', function (Blueprint $table) {
            //
            $table->increments('id');

            $table->timestamps();
        });
        Schema::table('historicos', function (Blueprint $table) {
            $table->unsignedInteger('id_vacina');
            $table->unsignedInteger('id_registro');
            $table->unsignedInteger('id_aplicador');
            $table->foreign('id_vacina')->references('id')->on('vacinas');
            $table->foreign('id_registro')->references('id')->on('registros');
            $table->foreign('id_aplicador')->references('id')->on('aplicadores');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
     Schema::dropIfExists('historicos');

        Schema::table('Historicos', function (Blueprint $table) {
            //
        });
    }
}
