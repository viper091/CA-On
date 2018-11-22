<?php

namespace VacinaOnline\Http\Controllers;

use Illuminate\Http\Request;
use Pusher\Pusher;
class PusherAuth extends Controller
{
    //

    public function auth(Request $request){
        $pusher = new Pusher(
            config('broadcasting.connections.pusher.key'),
            config('broadcasting.connections.pusher.secret'),
            config('broadcasting.connections.pusher.app_id'),
            config('broadcasting.connections.pusher.options')
        );
        return $pusher->socket_auth($request->channel_name, $request->socket_id);
    }
}
