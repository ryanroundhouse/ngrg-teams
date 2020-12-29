import { Role } from '../enums/role';
import { Person } from './person';

export interface Membership {
  person: Person;
  role: Role;
}
