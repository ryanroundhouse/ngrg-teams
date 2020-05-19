import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';

@Component({
  selector: 'team-attendance-toggle',
  templateUrl: './attendance-toggle.component.html',
  styleUrls: ['./attendance-toggle.component.scss']
})
export class AttendanceToggleComponent {
  @Input()
  personId: number;
  @Input()
  gameId: number;
  @Input()
  selected: string;

  constructor(private attendanceService : AttendanceService) { }

  attendanceSelected(event){
    this.attendanceService.updateAttendanceByPersonByGame(this.personId, this.gameId, event.srcElement.value);
  }

}