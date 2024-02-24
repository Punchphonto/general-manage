import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-status',
  templateUrl: './dashboard-status.component.html',
  styleUrls: ['./dashboard-status.component.scss']
})
export class DashboardStatusComponent implements OnInit {
  public active = 1;

  constructor(public router: Router, private route: ActivatedRoute,) { }

  async ngOnInit() {
  }
}
