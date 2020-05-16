import { Injectable } from '@angular/core';
import { Attendance } from '../interfaces/attendance';
import { PersonAttendance } from '../interfaces/person-attendance';
import { GameService } from './game.service';
import { TeamService } from './team.service';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  _personAttendance: PersonAttendance[] = [
    {
      person: {
        id: 0,
        name: "Ryan G",
        email: "rg@ryangraham.ca"
      },
      attendanceList:[
        {
          gameId: 0,
          date: "5/12/2020",
          presence: "In",
          message: null
        },
        {
          gameId: 1,
          date: "5/19/2020",
          presence: "Out",
          message: "busy"
        }
      ]
    },
    {
      person: {
        id: 1,
        name: "Katie G",
        email: "kt@ryangraham.ca"
      },
      attendanceList:[
        {
          gameId: 1,
          date: "5/19/2020",
          presence: "Out",
          message: "no change"
        }
      ]
    },
  ]

  constructor() { }

  getAttendanceByTeamId(id: number): PersonAttendance[]{
    return this._personAttendance;
  }
}
