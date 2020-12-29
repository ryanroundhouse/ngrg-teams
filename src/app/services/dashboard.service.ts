import { Injectable } from '@angular/core';
import { dtoDashboard } from '../interfaces/dtoDashboard';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  _dashboardData: dtoDashboard = {
    teamId: 0,
    teamName: "Ryan's Roughnecks",
    memberships: null,
    games: null,
    attendances: null,
  };
  constructor() {}

  getDashboardData() {
    return this._dashboardData;
  }
}
