import { Attendance } from './attendance';
import { Game } from './game';
import { Membership } from './membership';

export interface dtoDashboard {
  teamId: number;
  teamName: string;
  memberships: Membership[];
  games: Game[];
  attendances: Attendance[];
}
