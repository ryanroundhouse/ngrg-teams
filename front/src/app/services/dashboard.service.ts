import { Injectable } from '@angular/core';
import { Presence } from '../enums/presence';
import { Role } from '../enums/role';
import { dtoDashboard } from '../interfaces/dtoDashboard';
import { Game } from '../interfaces/game';
import { Membership } from '../interfaces/membership';
import { HttpClient } from '@angular/common/http';
import { Attendance } from '../interfaces/attendance';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  _dashboardData: dtoDashboard;
  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<any> {
    return this.http.get('api/dashboard/team/2');
  }

  addGame(game: Game) {
    game.id = this._dashboardData.games.length;
    this._dashboardData.games.push(game);
  }

  removeGame(gameId: number) {
    // remove games
    const gameIndexToRemove = this._dashboardData.games.findIndex(
      (game) => game.id == gameId
    );
    console.log(
      `attempting to remove game ${JSON.stringify(
        gameId
      )} at index: ${gameIndexToRemove}`
    );
    if (gameIndexToRemove != -1) {
      this._dashboardData.games.splice(gameIndexToRemove, 1);
    }

    // remove attendances
    const attendanceIndexesToRemove = this._dashboardData.attendances.filter(
      (attendance) => attendance.gameId == gameId
    );
    attendanceIndexesToRemove.forEach((attendance) => {
      const attendanceIndex = this._dashboardData.attendances.findIndex(
        (att) => att == attendance
      );
      if (attendanceIndex != -1) {
        this._dashboardData.attendances.splice(attendanceIndex, 1);
      }
    });
  }

  removePerson(personId: number) {
    const personIndexToRemove = this._dashboardData.memberships.findIndex(
      (member) => member.person.id == personId
    );
    console.log(
      `attempting to remove person ${JSON.stringify(
        personId
      )} at index: ${personIndexToRemove}`
    );
    if (personIndexToRemove != -1) {
      this._dashboardData.memberships.splice(personIndexToRemove, 1);
    }
  }

  addMember(member: Membership) {
    member.person.id = this._dashboardData.memberships.length;
    this._dashboardData.memberships.push(member);
  }

  updateAttendanceByPersonByGame(
    personId: number,
    gameId: number,
    presence: Presence
  ) {
    console.log(`setting ${personId}'s ${gameId} game to ${presence}`);
    this._dashboardData.attendances.find(
      (attendanceItem) =>
        attendanceItem.personId == personId && attendanceItem.gameId == gameId
    ).presence = presence;
  }
}
