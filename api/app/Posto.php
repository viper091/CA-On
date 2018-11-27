<?php

namespace VacinaOnline;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Posto extends Model
{
    use SoftDeletes;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    public  $timestamps = false;

    //
    protected $fillable = [
        'id_cidade', 'id_estado', 'endereco'
    ];
}
