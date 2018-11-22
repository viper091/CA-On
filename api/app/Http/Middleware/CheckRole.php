<?php

namespace VacinaOnline\Http\Middleware;

use Closure;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next,$acesso)
    {
        $user = auth()->user();
        if($user->nivel_acesso != $acesso){
            return redirect('/acesso');
        }
        return $next($request);
    }
}
