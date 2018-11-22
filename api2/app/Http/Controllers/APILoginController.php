<?php

namespace VacinaOnline\Http\Controllers;

use Illuminate\Http\Request;
use VacinaOnline\Http\Controllers\Controller;
use Validator;
use JWTFactory;
use JWTAuth;
use VacinaOnline\User;

class APILoginController extends Controller
{

    public function __construct()
    {
        
        $this->middleware('jwt.auth', ['except' => ['login']]);
    }
    public function refresh(){
        
    }
    public function logout(){
        try{
            JWTAuth::invalidate(JWTAuth::getToken());

        }
     catch (JWTException $e) {
        return response()->json(['message' => 'could_not_logout'], 500);
    }        return response()->json(['message' => 'Successfully logged out']);

    }
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password'=> 'required'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $credentials = $request->only('email', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        
        return response()->json(compact('token'));
    }
    //
}
