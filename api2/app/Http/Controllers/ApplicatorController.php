<?php

namespace VacinaOnline\Http\Controllers;

use VacinaOnline\Historico;
use VacinaOnline\User;
use VacinaOnline\Vacina;
use Illuminate\Http\Request;

class ApplicatorController extends Controller
{

    public function vacinas(){
        $vacinas = Vacina::all();
        return  response()->json($vacinas);

    }
    
    public function posto(){
        $aplicador = auth()->user()->aplicador()->first();
        $posto = $aplicador->posto;
        return  response()->json($posto);


    }
    
    public function userByEmail($email)
    {
        $user = User::where('email', $email)->first();
        if($user)
        return  response()->json($user);
        else return response()->json('Não encontrado', 400);
    }
}
