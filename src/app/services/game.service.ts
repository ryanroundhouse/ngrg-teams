import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  _games: Game[] = [
    {
      id: 0, 
      date: "5/12/2020", 
      time: "8:00pm"
    },
    {
      id: 1, 
      date: "5/19/2020", 
      time: "8:00pm"
    }
  ];

  constructor() { }

  getGamesByTeamId(id: number){
    return this._games;
  }
}
