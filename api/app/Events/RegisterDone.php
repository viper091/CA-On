<?php

namespace VacinaOnline\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use VacinaOnline\User;
class RegisterDone implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $username = '';
    public $msg = '';
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        //
        $this->username = $user->name;
        $this->msg = "$username Bem vindo, voce ainda não possue nenhum registro de vacinação";

    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        //return ['general'];
        return new PrivateChannel('App.user.'.$this->user->id);
    }

    public function broadcastAs()
    {
        return 'RegisterDone';
    }
}
