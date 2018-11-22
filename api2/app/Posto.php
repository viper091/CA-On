<?php

namespace VacinaOnline;

use Illuminate\Database\Eloquent\Model;

class Posto extends Model
{
    public  $timestamps = false;

    //
    protected $fillable = [
        'id_cidade', 'id_estado', 'endereco'
    ];
}
