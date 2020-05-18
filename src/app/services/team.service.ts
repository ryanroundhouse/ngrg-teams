import { Injectable } from '@angular/core';
import { Team } from '../interfaces/team';
import { Membership } from '../interfaces/membership';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  _team: Team = {
    id: 0,
    name: "Ryan's Roughnecks",
    members: [
      {
        person: 
        {
          id: 0,
          name: "Ryan G",
          email: "rg@ryangraham.ca"
        },
        role: "Captain"
      },
      {
        person: 
        {
          id: 1,
          name: "Katie G",
          email: "kt@ryangraham.ca"
        },
        role: "Member"
      },
      {
        person: 
        {
          id: 2,
          name: "Crowley G",
          email: "crowley@ryangraham.ca"
        },
        role: "Member"
      }
    ]
  }
  
  constructor() { }

  getTeamById(id: number): Team{
    return this._team;
  }

  addTeamMember(newMember: Membership){
    // set the id of the new
    if (newMember.person.id === null){
      newMember.person.id = this._team.members.length;
    }
    console.log(`adding new member ${newMember.person.name}`);
    this._team.members.push(newMember);
  }
}
