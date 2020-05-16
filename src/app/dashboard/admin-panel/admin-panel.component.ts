import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'team-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  newMemberForm;

  constructor(private formBuilder: FormBuilder, public teamService: TeamService) {
    this.newMemberForm = this.formBuilder.group({
      newMemberName: '',
      newMemberEmail: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmitNewMember(newMemberData){
    console.log('new member add request received');
    console.log(newMemberData);
    this.teamService.addTeamMember(newMemberData.newMemberName, newMemberData.newMemberEmail, 0);
  }

}
