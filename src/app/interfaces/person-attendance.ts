import { Person } from './person';
import { Attendance } from './attendance';

export interface PersonAttendance {
    person: Person,
    attendanceList: Attendance[]    
}
