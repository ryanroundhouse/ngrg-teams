import { Injectable } from '@angular/core';
import { Presence } from '../enums/presence';
import { Role } from '../enums/role';
import { dtoDashboard } from '../interfaces/dtoDashboard';
import { Game } from '../interfaces/game';
import { Membership } from '../interfaces/membership';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  _dashboardData: dtoDashboard = {
    teamId: 0,
    teamName: "Ryan's Roughnecks",
    memberships: [
      {
        person: {
          id: 0,
          name: 'Ryan',
          email: 'rg@ryangraham.ca',
        },
        role: Role.Captain,
      },
      {
        person: {
          id: 1,
          name: 'Katie',
          email: 'kt@ryangraham.ca',
        },
        role: Role.Member,
      },
      {
        person: {
          id: 2,
          name: 'Crowley',
          email: 'sk@ryangraham.ca',
        },
        role: Role.Member,
      },
    ],
    games: [
      {
        id: 0,
        teamId: 0,
        date: new Date(
          'Tue May 12 2020 00:00:00 GMT-0400 (Eastern Daylight Time)'
        ),
        time: '8:00',
      },
      {
        id: 1,
        teamId: 0,
        date: new Date(
          'Tue May 19 2020 00:00:00 GMT-0400 (Eastern Daylight Time)'
        ),
        time: '8:00',
      },
    ],
    attendances: [
      {
        gameId: 0,
        personId: 0,
        presence: Presence.In,
        message: null,
      },
      {
        gameId: 0,
        personId: 1,
        presence: Presence.Out,
        message: null,
      },
    ],
  };
  constructor() {}

  getDashboardData() {
    return this._dashboardData;
  }

  addGame(game: Game) {
    game.id = this._dashboardData.games.length;
    this._dashboardData.games.push(game);
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
