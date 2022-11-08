import { Injectable } from '@angular/core';

import { CanDeactivate } from '@angular/router';

import { UsersFacade } from './../facades/users.facade';

@Injectable()
export class UsersGuard implements CanDeactivate<any> {
  constructor(private usersFacade: UsersFacade) {}

  canDeactivate() {
    this.usersFacade.unset();

    return true;
  }
}
