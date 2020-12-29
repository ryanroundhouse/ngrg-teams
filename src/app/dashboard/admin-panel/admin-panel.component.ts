import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Membership } from 'src/app/interfaces/membership';
import { Game } from 'src/app/interfaces/game';
import { Role } from 'src/app/enums/role';
import { DashboardService } from 'src/app/services/dashboard.service';
import { dtoDashboard } from 'src/app/interfaces/dtoDashboard';
declare var jQuery: any;

@Component({
  selector: 'team-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  public newMemberForm;
  public newGameForm;
  @Output()
  teamMemberAdded: EventEmitter<Membership> = new EventEmitter<Membership>();
  @Output()
  gameAdded: EventEmitter<Game> = new EventEmitter<Game>();
  @Input() memberships: Membership[];

  constructor(
    private formBuilder: FormBuilder,
    public dashboardService: DashboardService
  ) {
    this.newMemberForm = this.formBuilder.group({
      newMemberName: '',
      newMemberEmail: '',
    });
    this.newGameForm = this.formBuilder.group({
      newGameTime: '',
      newGameDate: '',
    });
  }

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        $('#newGameDate').datepicker({
          autoclose: true,
          assumeNearbyYear: true,
        });
      });
    })(jQuery);
    console.log(`memberships are: ${this.memberships}`);
  }

  onSubmitNewGame(newGameData) {
    let gameDate: Date = null;
    gameDate = (function ($) {
      return $('#newGameDate').datepicker('getDate');
    })(jQuery);
    console.log(newGameData);
    let newGame: Game = {
      id: null,
      teamId: null,
      date: gameDate,
      time: newGameData.newGameTime,
    };
    this.dashboardService.addGame(newGame);
    this.gameAdded.emit(newGame);
    this.newGameForm.reset();
  }

  onSubmitNewMember(newMemberData) {
    console.log(newMemberData);
    let newMember: Membership = {
      person: {
        id: null,
        name: newMemberData.newMemberName,
        email: newMemberData.newMemberEmail,
      },
      role: Role.Member,
    };
    this.dashboardService.addMember(newMember);
    this.teamMemberAdded.emit(newMember);
    this.newMemberForm.reset();
  }
}
