import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { Membership } from 'src/app/interfaces/membership';
import { Game } from 'src/app/interfaces/game';
import { GameService } from 'src/app/services/game.service';
declare var jQuery: any;

@Component({
  selector: 'team-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  public newMemberForm;
  public newGameForm;
  @Output()
  teamMemberAdded: EventEmitter<Membership> = new EventEmitter<Membership>();
  @Output()
  gameAdded: EventEmitter<Game> = new EventEmitter<Game>();

  constructor(private formBuilder: FormBuilder, public teamService: TeamService, public gameService: GameService) {
    this.newMemberForm = this.formBuilder.group({
      newMemberName: '',
      newMemberEmail: ''
    });
    this.newGameForm = this.formBuilder.group({
      newGameTime: '',
      newGameDate: ''
    });
  }

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function(){
        $('#newGameDate').datepicker({
          "autoclose": true,
          "assumeNearbyYear": true
         });
      });
    })(jQuery);
  }

  onSubmitNewGame(newGameData){
    let gameDate: Date = null;
    gameDate = (function ($){
      return $('#newGameDate').datepicker('getDate');
      //return ((longDate.getMonth() + 1) + "/" +  longDate.getDate() + "/" +  longDate.getFullYear());
    })(jQuery);
    console.log(newGameData);
    let newGame : Game = {
      id: null,
      date: gameDate,
      time: newGameData.newGameTime
    };
    this.gameService.addGame(newGame);
    this.gameAdded.emit(newGame);
    this.newGameForm.reset();
  }

  onSubmitNewMember(newMemberData){
    console.log(newMemberData);
    let newMember : Membership = {
      person: {
        id: null,
        name: newMemberData.newMemberName,
        email: newMemberData.newMemberEmail
      },
      role: "Member"
    }
    this.teamService.addTeamMember(newMember);
    this.teamMemberAdded.emit(newMember);
    this.newMemberForm.reset();
  }

}
