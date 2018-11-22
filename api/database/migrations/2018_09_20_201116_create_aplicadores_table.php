<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAplicadoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aplicadores', function (Blueprint $table) {
            //
            $table->increments('id');

            $table->string('endereco');
            $table->timestamps();
        });
        Schema::table('aplicadores', function (Blueprint $table) {
            $table->unsignedInteger('id_posto');
            $table->unsignedInteger('id_registro')->unique();

            $table->foreign('id_posto')->references('id')->on('postos');
            $table->foreign('id_registro')->references('id')->on('registros');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('aplicadores');

    }
}
