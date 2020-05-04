import { Injectable } from '@angular/core';
import { Attendee } from '../interfaces/attendee'
import { Presence } from '../interfaces/presence'

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  _teamAttendance: Attendee[] = [
    {
      id: 1,
      name: 'Ryan',
      attendance: [
        { date: '10-May', presence: 'In' },
        { date: '17-May', presence: 'In' },
        { date: '24-May', presence: 'In' },
        { date: '31-May', presence: 'In' },
        { date: '7-Jun', presence: 'In' }
      ]
    },
    {
      id: 2,
      name: 'Katie',
      attendance: [
        { date: '10-May', presence: 'Out' },
        { date: '17-May', presence: 'Out' },
        { date: '24-May', presence: 'Out' },
        { date: '31-May', presence: 'Out' },
        { date: '7-Jun', presence: 'Out' }
      ]
    },
  ]
  
  constructor() { }

  get teamAttendance(): Attendee[]{
    return this._teamAttendance;
  }
}
