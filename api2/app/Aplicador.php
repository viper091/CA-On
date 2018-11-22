<?php

namespace VacinaOnline;

use Illuminate\Database\Eloquent\Model;

class Aplicador extends Model
{
    //
    protected $table = 'aplicadores';
    protected $fillable = [
        'id_posto',
        'id_registro',
        'endereco',
    
    ];

    function posto(){

        return $this->hasOne('VacinaOnline\Posto','id','id_posto');

    }
    function registro(){
        return $this->belongsTo('VacinaOnline\User','id_registro');

    }
    

}
