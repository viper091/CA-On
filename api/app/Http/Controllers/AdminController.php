<?php

namespace VacinaOnline\Http\Controllers;

use Illuminate\Http\Request;
use VacinaOnline\Posto;
use VacinaOnline\Aplicador;
use VacinaOnline\Vacina;
use VacinaOnline\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Notification;
use VacinaOnline\Notifications\CustomLetter;
class AdminController extends Controller
{
    //
    public function excluir_vacina($id){
        $vacina = Vacina::find($id);
        if($vacina){
        $res = $vacina->delete();
        return response()->json($res);
        }
        return response()->json(0);

    }
    public function criar_posto(Request $request){
        $validator = Validator::make($request->all(), [
            'endereco' => 'required|string|max:255',
            'id_cidade' => 'required|integer',
            'id_estado'=> 'required|integer'
        ]);
        if ($validator->fails()) {
            
            return response()->json($validator->errors(),400);
            
        }
        $input = $request->all();

        $posto = Posto::create($input);

        return response()->json($posto);

    }
    public function criar_aplicador(Request $request){
  
        $validator = Validator::make($request->all(), [
            'endereco' => 'required|string|max:255',
            'id_registro' => 'required|integer',
            'id_posto'=> 'required|integer'
        ]);
        if ($validator->fails()) {
            
            return response()->json($validator->errors(),400);
            
        }
        $input = $request->all();
       


        $aplicador = Aplicador::firstOrNew(['id_registro' => $input['id_registro']]);
        $aplicador->fill($input);
        $aplicador->save();

        $registro = $aplicador->registro()->first();
        $registro->nivel_acesso = 1;
        $registro->update();
        return response()->json($aplicador);
    }
    public function lancar_campanhas(Request $request) {

        $validator = Validator::make($request->all(), [
            'estado_alvo' => 'required|integer',              
            'titulo' => 'required|string',
            'conteudo' => 'required|string',
        ]);
        if ($validator->fails()) {
            
            return response()->json($validator->errors(),400);
            
        }

        $input = $request->all();
        
        $users = User::where('id_estado','=',$request->estado_alvo)->get();
        $ret = Notification::send($users, new CustomLetter($request->titulo,
                                                    $request->conteudo));

        return response()->json($ret);

        // recurso novo 
    }
    public function criar_vacina(Request $request) {
        $validator = Validator::make($request->all(), [
            'lote' => 'required|integer',              
            'tipo' => 'required|integer',              
            'name' => 'required|string|max:255',              
            'data_de_validade' => 'required|date'
        ]);
        if ($validator->fails()) {
            
            return response()->json($validator->errors(),400);
            
        }
        $input = $request->all();
        $vacina = Vacina::create($input);

        return response()->json($vacina);
    }
    
    public function obter_postos_por_local(Request $request){
        $validator = Validator::make($request->all(), [
            'id_cidade' => 'required|integer',
            'id_estado'=> 'required|integer'
        ]);
        if ($validator->fails()) {
            
            return response()->json($validator->errors(),400);
            
        }

        // $postos = Posto::where([
        //         array(
        //         'id_cidade' => $request->id_cidade,
        //         'id_estado' => $request->id_estado
        //         )]
        //     )->get();

        $postos = Posto::where([
            
            ['id_cidade','=' , $request->id_cidade],
        
            [ 'id_estado','=', $request->id_estado]
            
        ])->get();

        return response()->json($postos);

    }   
    
}
