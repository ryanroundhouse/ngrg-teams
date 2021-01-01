import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../interfaces/game';
import { DashboardResolverService } from '../resolvers/dashboard-resolver.service';
import { Membership } from '../interfaces/membership';
import { dtoDashboard } from '../interfaces/dtoDashboard';
import { IdentityService } from '../services/identity.service';
import { dtoIdentity } from '../interfaces/dtoIdentity';

@Component({
  selector: 'team-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboardData: dtoDashboard;
  identityData: dtoIdentity;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dashboardResolver: DashboardResolverService
  ) {}

  ngOnInit(): void {
    this.dashboardData = this.dashboardResolver.generateDashboardData();
    this.identityData = this.dashboardResolver.generateIdentityData();
  }

  teamMemberAddedReceived(newMember: Membership) {
    this.dashboardData = this.dashboardResolver.generateDashboardData();
  }

  gameAddedReceived(newGame: Game) {
    console.log(
      `game added event received.  Now there should be ${this.dashboardData.games.length}`
    );
    this.dashboardData = this.dashboardResolver.generateDashboardData();
  }
}
