import { Team } from './team';
import { Game } from './game';
import { Attendance } from './attendance';
import { PersonAttendance } from './person-attendance';

export interface DashboardData {
    team: Team,
    games: Game[],
    attendance: PersonAttendance[]
}
