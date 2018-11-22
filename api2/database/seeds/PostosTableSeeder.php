<?php

use Illuminate\Database\Seeder;

class PostosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('postos')->insert([
            'id_cidade' => 5,
            'id_estado' => 5,
            'endereco' => "UBS Vila Guaçu"
     
        ]);
    }
}
