import { Component, OnInit } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  columnNum = 3;
  gutterSize = '3px';
  rowH = '1';
  constructor(media : ObservableMedia) {
    media.asObservable()
      .subscribe((change: MediaChange) => {
        // alert(change.mqAlias);  
        console.log(change.mqAlias);
        if (change.mqAlias == 'xs') {
          this.columnNum = 1;
          this.  rowH = '1';

    
        }
        else if (change.mqAlias == 'sm') {
          this.columnNum = 2;
          this.  rowH = '0.7';

        }
        else if (change.mqAlias == 'md') {
          this.columnNum = 2;
          this.  rowH = '0.7';

        }
        else {
          this.columnNum = 3;
          this.  rowH = '0.8';

        }
      });
  }

  ngOnInit(){}

}
