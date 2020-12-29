import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Attendance } from '../interfaces/attendance';
import { DashboardService } from '../services/dashboard.service';
import { dtoDashboard } from '../interfaces/dtoDashboard';
import { Presence } from '../enums/presence';

@Injectable({
  providedIn: 'root',
})
export class DashboardResolverService implements Resolve<any> {
  constructor(private dashboardService: DashboardService) {}

  generateDashboardData(): dtoDashboard {
    //stub out missing attendance records
    let memberIds = this.dashboardService._dashboardData.memberships.map(
      (member) => member.person.id
    );
    let gameIds = this.dashboardService._dashboardData.games.map(
      (game) => game.id
    );

    memberIds.forEach((memberId) => {
      gameIds.forEach((gameId) => {
        let foundItem = this.dashboardService._dashboardData.attendances.find(
          (attendanceItem) =>
            attendanceItem.gameId == gameId &&
            attendanceItem.personId == memberId
        );
        if (foundItem === undefined) {
          let newAttendanceItem: Attendance = {
            gameId: gameId,
            personId: memberId,
            presence: Presence.Unknown,
            message: null,
          };
          this.dashboardService._dashboardData.attendances.push(
            newAttendanceItem
          );
        }
      });
    });

    return this.dashboardService.getDashboardData();
  }

  resolve(
    route: import('@angular/router').ActivatedRouteSnapshot,
    state: import('@angular/router').RouterStateSnapshot
  ) {
    return this.generateDashboardData();
  }
}
