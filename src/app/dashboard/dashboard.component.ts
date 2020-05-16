import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../interfaces/team';
import { Game } from '../interfaces/game';
import { Attendance } from '../interfaces/attendance';
import { DashboardData } from '../interfaces/dashboard-data';

@Component({
  selector: 'team-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardData : DashboardData;

  constructor(private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data.dashboardData);
    this.dashboardData = this.activatedRoute.snapshot.data.dashboardData;
  }

}