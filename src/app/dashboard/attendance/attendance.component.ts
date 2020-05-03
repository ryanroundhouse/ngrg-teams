import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';

@Component({
  selector: 'team-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  constructor(private attendanceService: AttendanceService) { }

  ngOnInit(): void {
  }

}
