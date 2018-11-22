<?php

namespace VacinaOnline\Http\Controllers;

use VacinaOnline\Historico;
use VacinaOnline\User;
use VacinaOnline\Vacina;
use VacinaOnline\Aplicador;
use Illuminate\Http\Request;
use VacinaOnline\Http\Request\HistoricoRequest;
use VacinaOnline\Notifications\VacinaApply;
class HistoricoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        //
        $historico = $user->historico()->with('vacina','aplicador','aplicador.posto','aplicador.registro')->get();
        response()->json($historico); 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $data = $request->validate([
            'id_registro' => 'required',
            'id_vacina' => 'required',
        ]);
        $user = auth()->user();
        User::find($data['id_registro'])->notify( new VacinaApply(

            Vacina::find($data['id_vacina'])
        ) );
        $aplicador = $user->aplicador()->first();
//        dd($aplicador);
        $historico = new Historico;
        $historico->id_aplicador = $aplicador->id;
        return response()->json(
            $historico->fill($data)->save()
        );
    }


    /**
     * Display the specified resource.
     *
     * @param  \VacinaOnline\Historico  $historico
     * @return \Illuminate\Http\Response
     */
    public function show(Historico $historico)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \VacinaOnline\Historico  $historico
     * @return \Illuminate\Http\Response
     */
    public function edit(Historico $historico)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \VacinaOnline\Historico  $historico
     * @return \Illuminate\Http\Response
     */
    public function update(HistoricoRequest $request, Historico $historico)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \VacinaOnline\Historico  $historico
     * @return \Illuminate\Http\Response
     */
    public function destroy(Historico $historico)
    {
        //
    }
}
