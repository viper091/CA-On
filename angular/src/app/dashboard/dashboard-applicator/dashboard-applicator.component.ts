import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-applicator',
  templateUrl: './dashboard-applicator.component.html',
  styleUrls: ['./dashboard-applicator.component.scss']
})
export class DashboardApplicatorComponent implements OnInit {
  opened: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
