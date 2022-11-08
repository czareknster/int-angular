import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { UsersFacade } from './../facades/users.facade';

@Injectable()
export class LoadUsersResolver implements Resolve<any> {
  constructor(private usersFacade: UsersFacade) {}

  resolve() {
    this.usersFacade.loadList();
    return true;
  }
}
