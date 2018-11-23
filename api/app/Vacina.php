<?php

namespace VacinaOnline;
use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Database\Eloquent\Model;
class Vacina extends Model
{
    public  $timestamps = false;
    /*
    $table->increments('id');
    $table->integer('lote');
    $table->integer('tipo');
    $table->string('name');
    $table->date('data_de_validade');
    */
    use SoftDeletes;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    protected $fillable = [

       'lote','tipo', 'name', 'data_de_validade' 
    ];
    //

     /*   
    function historico(){
        return $this->belongsToMany('VacinaOnline\Vacina', 'historicos', 'id_vacina','id_vacina');
    }*/

    function  historico(){

        return $this->hasMany('VacinaOnline\Historico', 'id_vacina', 'id');
        
    }


   
}
