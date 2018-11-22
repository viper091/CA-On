import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(private icon : MatIconRegistry , private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.icon.addSvgIcon('dinheiro', 
    this.sanitizer.bypassSecurityTrustResourceUrl('icons/pagar.svg'));

  
  }

}
