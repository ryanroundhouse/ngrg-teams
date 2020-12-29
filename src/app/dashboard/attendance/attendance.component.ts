import { Component, OnInit, Input } from '@angular/core';
import { Attendance } from 'src/app/interfaces/attendance';
import { dtoDashboard } from 'src/app/interfaces/dtoDashboard';

@Component({
  selector: 'team-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent implements OnInit {
  @Input() dashboardData: dtoDashboard;

  constructor() {}

  ngOnInit(): void {}

  attendancedByMember(id: number): Attendance[] {
    return this.dashboardData.attendances.filter(
      (attendee) => attendee.personId === id
    );
  }
}
