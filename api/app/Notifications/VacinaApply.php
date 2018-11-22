<?php

namespace VacinaOnline\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class VacinaApply extends Notification implements ShouldQueue, ShouldBroadcast
{
    use Queueable;
    private $vacina;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($vacina)
    {

        
        //
        $this->vacina =$vacina;

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
            ->greeting('Alerta!')

            ->subject('Vacinação')
            ->line("Olá $notifiable->name, a  vacina: ".$this->vacina->name.", foi aplicada com sucesso!")
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

                'title' => 'Vacinação!',
                'data' => "Olá $notifiable->name, a  vacina: ".$this->vacina->name." foi aplicada!",
            ];
    }

    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([
            'title' => 'Vacinação!',
            'data' => "Olá $notifiable->name, a  vacina: ".$this->vacina->name." foi aplicada!",


        ]);
    }
}
