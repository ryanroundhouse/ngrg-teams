import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AttendanceService } from './attendance.service';

@Injectable({
  providedIn: 'root'
})
export class AttendanceResolverService implements Resolve<any> {

  constructor(private attendanceService: AttendanceService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    return this.attendanceService.teamAttendance;
  }
}
