import { Component, ViewChild, Renderer2, ViewContainerRef, ElementRef, InjectionToken, Injector, ComponentRef } from '@angular/core';
import { LoginService } from './auth/services/login.service';
import { NotificationsComponent } from './notifications/notifications.component';
import { OverlayModule, Overlay, CdkOverlayOrigin, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { map, take, skip, skipUntil, filter } from 'rxjs/operators';
import { PusherService } from './notifications/service/pusher.service';
import { Subscription } from 'rxjs';
import { UserService } from './api/services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'C.A ONLINE';
  NotificationsSize = 0;
  openedNotifications = false;
  subBroad: Subscription;
  subNotifi: Subscription;
  @ViewChild('notifications', { read: ElementRef }) nComponent: ElementRef;
  overlayRef: OverlayRef;
  portal: ComponentPortal<NotificationsComponent>;
  compref: ComponentRef<NotificationsComponent>;
  constructor(public loginService: LoginService,
    private userService: UserService,
    private overlay: Overlay,
    private pusher: PusherService) {

  }

  addBindsOnStart(){
    console.log('add binds on start');
    this.pusher.InitializePusher();
    this.NotificationsSize=0;
    let sub4=this.pusher.getBroadcast().subscribe(x => {
      if (x.read_at == null) {
        this.NotificationsSize++;
      }
    })

    let sub3= this.pusher.getNotifications().subscribe(x => {
      x.forEach(element => {
        if (element.read_at == null) {
          this.NotificationsSize++;
        }

      });


    })
    let subs2= this.userService.logoutFromAll.subscribe( x=> {
      subs2.unsubscribe();
      sub3.unsubscribe();
      sub4.unsubscribe();



    })
  }

  addBindsOnLogin(){

    console.log('add binds on login');
    
    let subs = this.loginService.new_isLoggedIn.subscribe(x => {
      
      this.pusher.InitializePusher();
      this.NotificationsSize=0;
      let sub4=this.pusher.getBroadcast().subscribe(x => {
        if (x.read_at == null) {
          this.NotificationsSize++;
        }
      })

      let sub3= this.pusher.getNotifications().subscribe(x => {
        x.forEach(element => {
          if (element.read_at == null) {
            this.NotificationsSize++;
          }

        });


      })
      let subs2= this.userService.logoutFromAll.subscribe( x=> {
        subs.unsubscribe();
        subs2.unsubscribe();
        sub3.unsubscribe();
        sub4.unsubscribe();
        this.pusher.close();
        this.addBindsOnLogin();

      })
    

    });
  }
  ngOnInit() {
    if(this.loginService.isLoggedIn()){
      this.addBindsOnStart();
    }
    this.addBindsOnLogin();

  }

  showNotifications(event) {

   let sub12= this.pusher.markRead().subscribe(x => {
      this.NotificationsSize=0;
      sub12.unsubscribe();
    }
    )
    this.portal = new ComponentPortal(NotificationsComponent);

    this.overlayRef = this.overlay.create(
      {
        height: '300px',
        width: '300px',
        hasBackdrop: true,
        scrollStrategy: this.overlay.scrollStrategies.close(),
        positionStrategy: this.overlay.position().connectedTo(this.nComponent, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })

      }

    );


    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.dispose();
    });
    this.overlayRef.detachments().subscribe(
      x => this.openedNotifications = false

    );
    this.compref = this.overlayRef.attach(this.portal);

    this.openedNotifications = true;
  }


}