<?php

use Illuminate\Database\Seeder;
// use Faker\Generator as Faker;
use Faker\Factory as Faker;
class VacinasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = Faker::create();
        DB::table('vacinas')->insert([[
            'name' => 'Gripe',
            'lote' => 1,
            'tipo' => 1,
            'data_de_validade' => date("Y-m-d H:i:s"),
     
        ],[
            'name' => 'Tetano',
            'lote' => 1,
            'tipo' => 1,
            'data_de_validade' => date("Y-m-d H:i:s"),
     
        ],
        [
            'name' => 'Sarampo',
            'lote' => 1,
            'tipo' => 1,
            'data_de_validade' => date("Y-m-d H:i:s"),
     
        ],
        [

            'name' => 'Vacina Oral Rotavírus Humano',
            'lote' => 1,
            'tipo' => 1,
            'data_de_validade' => date("Y-m-d H:i:s"),

        ]]
        );
    }
}
