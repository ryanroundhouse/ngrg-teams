import { Presence } from './presence';

export interface Attendee {
    id: number,
    name: string,
    attendance: Presence[]
}
