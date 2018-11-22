import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PusherService, NotificationModel } from './service/pusher.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { MediaMatcher, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit,OnDestroy {
  //  close = new EventEmitter();
  notifications:NotificationModel[]  = [];
  notifications_get = false;
  sub_notication:Subscription;
  sub_broad:Subscription;
  onNotification:Subject<boolean> =new Subject<boolean>();
  
  constructor( private pServer:PusherService
              ,breakpointObserver: BreakpointObserver) {
        

  }

  
  ngOnDestroy(){
    this.sub_notication.unsubscribe()
    this.sub_broad.unsubscribe()

  }
  ngOnInit() {  

    this.notifications= this.pServer.broadcast;

      this.sub_broad = this.pServer.getBroadcast().subscribe(x =>{
      this.notifications = [x].concat(this.notifications);
      this.notifications_get = true;

      });
    this.sub_notication=  this.pServer.getNotifications().subscribe(


      x=>
      {
        
        this.on(x);
        this.notifications_get = true;
      }
     )

     console.log(this.pServer.broadcast);


  }

  on(data){
    console.log(this.pServer.broadcast);
    this.onNotification.next();
    
     this.notifications =  this.notifications.concat(data);
     

     console.log(this.notifications);
  }

}
