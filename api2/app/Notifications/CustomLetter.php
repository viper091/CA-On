<?php

namespace VacinaOnline\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CustomLetter extends Notification implements ShouldQueue, ShouldBroadcast
{
    use Queueable;

    private $title, $msg;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($title, $msg)
    {
        //
        $this->title = $title;
        $this->msg = $msg;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['broadcast','database','mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
        ->greeting($this->title)

        ->subject('Alerta')
        ->line($this->msg)
        ->action('Conferir', url('/login'))
        ->salutation('Obrigado desde já')
        ->line('CA Online');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //

                'title' => $this->title,
                'data' => $this->msg,
        ];
    }

    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([

                'title' => $this->title,
                'data' => $this->msg,

        ]);
    }
}
