import { Injectable, EventEmitter } from '@angular/core';
import * as  Pusher from 'pusher-js';
import { UserService } from 'src/app/api/services/user.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from 'src/app/api/api.module';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { cacheable } from 'src/app/Tools/rxjs_func';
import { Meta } from '@angular/platform-browser';
import { LoginService } from 'src/app/auth/services/login.service';
//var Pusher = require('pusher-js');

// declare const Pusher: any;

export interface NotificationModel {

  created_at,
  data,
  id,
  notifiable_id,
  notifiable_type,
  read_at,

  type,
  updated_at

}



@Injectable({
  providedIn: 'root'
})
export class PusherService {
  pusher: any = null;
  channel: any;
  canBind: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  _cache: Observable<NotificationModel[]>;



  


  broadcast: NotificationModel[] = [];
  private notificationEmitter: EventEmitter<NotificationModel> = new EventEmitter();


  constructor(
    private http: HttpClient,
    private user: UserService,
    private login: LoginService,
    private meta: Meta) {
  

    
  }


  
  private onReceiveBroadcast(data){
    data = {
      'data' : data
    }
    this.broadcast= this.broadcast.concat(data).reverse();
    console.log(this.broadcast);
    
    this.notificationEmitter.emit(data);
  }

  getBroadcast(){
    return this.notificationEmitter.asObservable();
  }
  getNotifications() {
    if (this._cache)
      return this._cache;
    return this._cache = cacheable<any>(this.http.get<NotificationModel>(API_BASE_URL + 'notifications'));
  }
  close()
  {
    
    this.pusher.disconnect();

  }
  InitializePusher(){

      Pusher.logToConsole = true;
      const token = this.meta.getTag('name=csrf-token').content;
  
      this.pusher = new Pusher('c9a6553e350c077241f4', {
        cluster: 'us2',
        forceTLS: true,
        auth: {
          params: {
            'X-Csrf-Token': token,
            Authorization: 'Bearer ' + localStorage.getItem('token')
  
          },
          headers: {
            'X-Csrf-Token': token,
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      });
  
  
      
  
      let subs = this.user.getUser().subscribe(
  
  
        x => {
          this.channel = this.pusher.subscribe('private-VacinaOnline.User.' + x.id);
  
          this.channel.bind('Illuminate\\Notifications\\Events\\BroadcastNotificationCreated'
  
            , (data) => this.onReceiveBroadcast(data));
  
          console.log('bind emited');
          this.user.logoutFromAll.subscribe(x => {
            if (this._cache) {
              this._cache = null;
              this.broadcast = [];
  
              console.log('cache from notifications erase');
  
            }
  
          });
  
          if (subs) subs.unsubscribe();
        }
      );
  
  }

  markRead(){
    return this.http.get(API_BASE_URL+'notificationsMarkRead');
  }
}
