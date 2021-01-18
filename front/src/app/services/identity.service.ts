import { Injectable } from '@angular/core';
import { dtoIdentity } from '../interfaces/dtoIdentity';

@Injectable({
  providedIn: 'root',
})
export class IdentityService {
  _identityData: dtoIdentity = {
    token: 0,
    personId: 0,
  };

  constructor() {}

  getIdentity(): dtoIdentity {
    return this._identityData;
  }

  updateIdentity(personId: number) {
    this._identityData.personId = personId;
  }
}
