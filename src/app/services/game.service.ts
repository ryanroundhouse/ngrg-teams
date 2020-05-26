import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  _games: Game[] = [
    {
      id: 0, 
      date: new Date("Tue May 12 2020 00:00:00 GMT-0400 (Eastern Daylight Time)"), 
      time: "8:00pm"
    },
    {
      id: 1, 
      date: new Date("Tue May 19 2020 00:00:00 GMT-0400 (Eastern Daylight Time)"), 
      time: "8:00pm"
    }
  ];

  constructor() { }

  getGamesByTeamId(id: number){
    return this._games;
  }

  addGame(game: Game){
    game.id = this._games.length;
    this._games.push(game);
  }
}
