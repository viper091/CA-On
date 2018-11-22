<?php

namespace VacinaOnline;

use Illuminate\Database\Eloquent\Model;

class Historico extends Model
{
    protected $table = 'historicos';

    protected $fillable = [
        'id_vacina', 'id_registro', 'id_aplicador'];

    //
    function vacina(){
        
        return $this->hasOne('VacinaOnline\Vacina','id','id_vacina');
        
    }

    function aplicador(){

        return $this->hasOne('VacinaOnline\Aplicador','id','id_aplicador');

    }

    function registro(){
        return $this->belongsTo('VacinaOnline\User', 'id_registro', 'id');

   //     return $this->hasOne('VacinaOnline\Registro','id','id_registro');

    }

    
  

    


}