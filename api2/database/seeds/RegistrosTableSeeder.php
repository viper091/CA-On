<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RegistrosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('registros')->insert([
            [
            'name' => str_random(10),
            'email' => 'user'.'@gmail.com',
            'password' => bcrypt('user'),
            'cpf' => str_random(10),
            'nivel_acesso' => 0,
            'data_nascimento' => date("Y-m-d H:i:s"),
            'id_estado' => 2,
            'id_cidade' => 102,
            ],
            [
                'name' => str_random(10),
                'email' => 'teste'.'@gmail.com',
                'password' => bcrypt('user'),
                'cpf' => str_random(10),
                'nivel_acesso' => 0,
                'data_nascimento' => date("Y-m-d H:i:s"),
                'id_estado' => 2,
                'id_cidade' => 102,
            ],
            [
            'name' => 'Pedro Honorio',
            'email' => 'aplicador'.'@gmail.com',
            'password' => bcrypt('user'),
            'cpf' => str_random(10),
            'nivel_acesso' =>1,
            'data_nascimento' => date("Y-m-d H:i:s"),
            'id_estado' => 2,
            'id_cidade' => 102,
            ],
            [
                'name' => 'Vitor',
                'email' => 'admin'.'@gmail.com',
                'password' => bcrypt('user'),
                'cpf' => str_random(10),
                'nivel_acesso' => 2,
                'data_nascimento' => date("Y-m-d H:i:s"),
                'id_estado' => 2,
                'id_cidade' => 102,
                ]
        ]);
   
    }
}
