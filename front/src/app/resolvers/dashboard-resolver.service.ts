import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Attendance } from '../interfaces/attendance';
import { DashboardService } from '../services/dashboard.service';
import { dtoDashboard } from '../interfaces/dtoDashboard';
import { Presence } from '../enums/presence';
import { dtoIdentity } from '../interfaces/dtoIdentity';
import { IdentityService } from '../services/identity.service';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardResolverService implements Resolve<any> {
  constructor(
    private dashboardService: DashboardService,
    private identityService: IdentityService
  ) {}

  generateIdentityData(): dtoIdentity {
    return this.identityService.getIdentity();
  }

  resolve(
    route: import('@angular/router').ActivatedRouteSnapshot,
    state: import('@angular/router').RouterStateSnapshot
  ) {
    console.log('dashboarding');
    return this.dashboardService.getDashboardData().pipe(
      catchError((error) => {
        return empty();
      })
    );
  }
}
