import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-header-title',
  template: `
    <p class='e-header-title'>
        <ng-content></ng-content>
    </p>
  `,
  styles: [
`

.e-header-title{
  
    margin:0;
    padding:0;
    color:white;
    padding:1em;
}

`

  ]
})
export class EHeaderTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
