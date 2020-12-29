import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../interfaces/game';
import { DashboardData } from '../interfaces/dashboard-data';
import { DashboardResolverService } from '../resolvers/dashboard-resolver.service';
import { Membership } from '../interfaces/membership';

@Component({
  selector: 'team-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboardData: DashboardData;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dashboardResolver: DashboardResolverService
  ) {}

  ngOnInit(): void {
    this.dashboardData = this.dashboardResolver.generateDashboardData();
  }

  teamMemberAddedReceived(newMember: Membership) {
    console.log(
      `team member added event received.  Now there should be ${this.dashboardData.team.members.length}`
    );
    this.dashboardData = this.dashboardResolver.generateDashboardData();
  }

  gameAddedReceived(newGame: Game) {
    console.log(
      `game added event received.  Now there should be ${this.dashboardData.games.length}`
    );
    this.dashboardData = this.dashboardResolver.generateDashboardData();
  }
}
