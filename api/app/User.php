<?php

namespace VacinaOnline;
use Tymon\JWTAuth\Contracts\JWTSubject;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    protected $table = 'registros';

    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','id_cidade','id_estado','data_nascimento'
    ];
    protected $guarded =[
        'nivel_acesso'
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
    


    public function historico()
    {
        return $this->hasMany('VacinaOnline\Historico','id_registro');
    
    }


    public function aplicador(){
        return $this->hasOne('VacinaOnline\Aplicador','id_registro');

    }

}
