<?php

use Illuminate\Database\Seeder;

class AplicadoresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('aplicadores')->insert([
            'id_posto' => 1,
            'id_registro' => 3,
            'endereco' => str_random(10),     
        ]);
    }
}
