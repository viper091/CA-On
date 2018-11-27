<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::post('login', 'APILoginController@login');
Route::post('logout', 'APILoginController@logout');

Route::post('register', 'APIRegisterController@register');

Route::group([

    'prefix' => 'password',
], function(){

    Route::post('create', 'PasswordResetController@create');
    Route::get('find/{token}', 'PasswordResetController@find');
    Route::post('reset', 'PasswordResetController@reset');
});
    
Route::group([

    'middleware' => 'jwt.auth',
], function () {
    
    Route::get('notifications', 'UserController@notifications');
    Route::get('notificationsMarkRead', 'UserController@notificationsMarkRead');
    Route::get('historico', 'UserController@historico');
    Route::get('vacinas', 'UserController@vacinas');
    Route::get('carterinha', 'UserController@carterinha');
    Route::post('user', 'UserController@update');

    Route::group([
        'middleware' => 'role:1',
        'prefix' => 'applicator',
    ], function () {
        Route::resource('historico', 'HistoricoController');
        Route::get('vacinas', 'ApplicatorController@vacinas');
        Route::get('user/{email}', 'ApplicatorController@userByEmail');
        Route::get('posto', 'ApplicatorController@posto');
    });
    Route::group([
        'middleware' => 'role:2',
        'prefix' => 'admin',
    ], function () {

        Route::get('vacinas', 'ApplicatorController@vacinas');
        Route::get('excluir/vacina/{id}', 'AdminController@excluir_vacina');

        Route::get('postos', 'AdminController@postos');
        Route::get('aplicadores', 'AdminController@aplicadores');



        Route::post('lancar_campanha', 'AdminController@lancar_campanhas');
        Route::post('criar_posto', 'AdminController@criar_posto');
        Route::post('criar_aplicador', 'AdminController@criar_aplicador');
        Route::post('criar_vacina', 'AdminController@criar_vacina');
        Route::post('obter_postos_por_local', 'AdminController@obter_postos_por_local');
        // FROM APPLICATOR
        Route::get('user/{email}', 'ApplicatorController@userByEmail');
    });


});
Route::middleware('jwt.auth')->get('user', function (Request $request) {
    return auth()->user();
});

/*$this->middleware('jwt.auth', ['except' => ['authenticate']]);

 */
/*
Route::group([

'middleware' => 'jwt.auth',
'prefix' => 'auth'

], function ($router) {

//   Route::post('logout', 'AuthController@logout');
//  Route::post('refresh', 'AuthController@refresh');
//  Route::post('me', 'AuthController@me');

});

 */
