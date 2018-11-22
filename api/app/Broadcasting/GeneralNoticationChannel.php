<?php

namespace VacinaOnline\Broadcasting;

use VacinaOnline\User;

class GeneralNoticationChannel
{
    /**
     * Create a new channel instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Authenticate the user's access to the channel.
     *
     * @param  \VacinaOnline\User  $user
     * @return array|bool
     */
    public function join(User $user)
    {
        //
    }
}
