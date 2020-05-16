import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TeamService } from '../services/team.service';
import { AttendanceService } from '../services/attendance.service';
import { GameService } from '../services/game.service';
import { DashboardData } from '../interfaces/dashboard-data';
import { Attendance } from '../interfaces/attendance';
import { PersonAttendance } from '../interfaces/person-attendance';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolverService implements Resolve<any> {

  constructor(private teamService: TeamService, private attendanceService: AttendanceService, private gameService: GameService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    let team = this.teamService.getTeamById(0);
    let games = this.gameService.getGamesByTeamId(0);
    let attendance = this.attendanceService.getAttendanceByTeamId(0);

    //stub out missing team members
    team.members.forEach(member => {
      if (!attendance.find(attendee => member.person.id === attendee.person.id)){
        let missingAttendance : PersonAttendance = {
          person: member.person,
          attendanceList: []
        }
        attendance.push(missingAttendance);
      }
    });

    //stub out missing attendance records
    games.forEach(game => {
      attendance.forEach(attendee => {
        if (!attendee.attendanceList.find(attendanceItem => attendanceItem.gameId === game.id)){
          let newAttendanceItem : Attendance = {
            gameId: game.id,
            date: game.date,
            presence: "?",
            message: null
          };
          attendee.attendanceList.push(newAttendanceItem);
        }
      })
    });

    //sort all attendance by date
    attendance.forEach(attendee => {
      attendee.attendanceList.sort((a,b) => a.date.localeCompare(b.date));
    })

    //sort all games by date
    games.sort((a,b) => a.date.localeCompare(b.date));

    let dashboardData : DashboardData = {
      team: team,
      games: games,
      attendance: attendance
    }
    return dashboardData;
  }
}
