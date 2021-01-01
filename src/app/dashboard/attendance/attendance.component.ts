import { Component, OnInit, Input } from '@angular/core';
import { Role } from 'src/app/enums/role';
import { Attendance } from 'src/app/interfaces/attendance';
import { dtoDashboard } from 'src/app/interfaces/dtoDashboard';
import { dtoIdentity } from 'src/app/interfaces/dtoIdentity';

@Component({
  selector: 'team-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent implements OnInit {
  @Input() dashboardData: dtoDashboard;
  @Input() identityData: dtoIdentity;

  constructor() {}

  ngOnInit(): void {}

  attendancedByMember(id: number): Attendance[] {
    return this.dashboardData.attendances.filter(
      (attendee) => attendee.personId === id
    );
  }

  checkIdentityAllowed(personId: number): boolean {
    const adminIds = this.dashboardData.memberships
      .filter((membership) => membership.role === Role.Captain)
      .map((adminIdentity) => adminIdentity.person.id);
    console.log(`adminIds: ${adminIds} vs ${this.identityData.personId}`);
    const editSelf = personId == this.identityData.personId;
    const isAdmin = adminIds.some(
      (adminId) => adminId == this.identityData.personId
    );
    console.log(`editSelf: ${editSelf} and isAdmin: ${isAdmin}`);
    return editSelf || isAdmin;
  }
}
