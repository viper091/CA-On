<?php

use Illuminate\Database\Seeder;
use VacinaOnline\Historico;
class HistoricosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $hist = new Historico;
        $hist->id_vacina = 1;
        $hist->id_registro = 1;
        $hist->id_aplicador = 1;

        $hist->save();
        $his = new Historico;
        $his->id_vacina = 1;
        $his->id_registro = 1;
        $his->id_aplicador = 1;
        $his->save();
        for ($i=1; $i < 12; $i++) { 
            $hist2 = new Historico;
            $hist2->id_registro = 2;
            $hist2->id_aplicador = 1;
          
            $hist2->id_vacina = 2;
            $hist2->save();
            # code...
        }
        /*
        DB::table('historicos')->insert([

            [
                'id_vacina' => 1,
                'id_registro' => 1,
                'id_aplicador' => 1,
                'created_at' => new \dateTime,
                'updated_at' => new \dateTime,
                
            ],

            [
                'id_vacina' => 2,
                'id_registro' => 1,
                'id_aplicador' => 1,
                'created_at' => new \dateTime,
                'updated_at' => new \dateTime,
                
            ],            
            
            [
                'id_vacina' => 3,
                'id_registro' => 1,
                'id_aplicador' => 1,
                'created_at' => new \dateTime,
                'updated_at' => new \dateTime,
                
            ],
            
            
            [
                'id_vacina' => 1,
                'id_registro' => 1,
                'id_aplicador' => 1,
                'created_at' => new \dateTime,
                'updated_at' => new \dateTime,
                
            ],
            
        ]);*/
            
    }
}
