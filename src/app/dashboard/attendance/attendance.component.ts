import { Component, OnInit, Input } from '@angular/core';
import { DashboardData } from 'src/app/interfaces/dashboard-data';

@Component({
  selector: 'team-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  @Input() dashboardData: DashboardData;

  constructor() { }

  ngOnInit(): void {
    console.debug(this.dashboardData);
  }

}