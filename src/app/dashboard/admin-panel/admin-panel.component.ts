import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { Router } from '@angular/router';
import { Membership } from 'src/app/interfaces/membership';

@Component({
  selector: 'team-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  public newMemberForm;
  @Output()
  teamMemberAdded: EventEmitter<Membership> = new EventEmitter<Membership>();

  constructor(private formBuilder: FormBuilder, public teamService: TeamService, private router: Router) {
    this.newMemberForm = this.formBuilder.group({
      newMemberName: '',
      newMemberEmail: ''
    });
  }

  ngOnInit(): void {
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
