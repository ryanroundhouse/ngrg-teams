import { Presence } from '../enums/presence';

export interface Attendance {
  gameId: number;
  personId: number;
  presence: Presence;
  message: string;
}
