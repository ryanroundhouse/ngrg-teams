import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Presence } from 'src/app/enums/presence';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'team-attendance-toggle',
  templateUrl: './attendance-toggle.component.html',
  styleUrls: ['./attendance-toggle.component.scss'],
})
export class AttendanceToggleComponent implements OnInit {
  @Input()
  personId: number;
  @Input()
  gameId: number;
  @Input()
  selected: Presence;
  @Input() editable: boolean;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {}

  attendanceSelected(event) {
    console.log(`attendance-toggle editable is ${this.editable}`);
    let presence = Presence.Unknown;
    if (event.srcElement.value === 'In') {
      presence = Presence.In;
    } else if (event.srcElement.value === 'Out') {
      presence = Presence.Out;
    }
    this.dashboardService.updateAttendanceByPersonByGame(
      this.personId,
      this.gameId,
      presence
    );
  }
}
