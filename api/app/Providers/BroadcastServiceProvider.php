<?php

namespace VacinaOnline\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Broadcast;

class BroadcastServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //Broadcast::routes();
        Broadcast::routes(['middleware' => ['jwt.auth']]); //if you use JWT

        require base_path('routes/channels.php');
    }
}
