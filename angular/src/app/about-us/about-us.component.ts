import { Component, OnInit } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  columnNum = 3;

  constructor(media : ObservableMedia) {
    media.asObservable()
      .subscribe((change: MediaChange) => {
        // alert(change.mqAlias);  
        console.log(change.mqAlias);
        if (change.mqAlias == 'xs') {
          this.columnNum = 1;
        }
        else if (change.mqAlias == 'sm') {
          this.columnNum = 2;
        }
        else if (change.mqAlias == 'md') {
          this.columnNum = 2;
        }
        else {
          this.columnNum = 3;
        }
      });
  }

  ngOnInit(){}

}
