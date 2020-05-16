import { Game } from './game';
import { Membership } from './membership';

export interface Team {
    id: number,
    name: string,
    members: Membership[]
}
