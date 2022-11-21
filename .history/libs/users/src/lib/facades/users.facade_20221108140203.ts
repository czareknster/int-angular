import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { UsersState } from './../reducers/users.reducer';
import { UsersActions } from './../actions';
import { selectAllUsers, selectLoading } from './../selectors/users.selectors';

@Injectable()
export class UsersFacade {
  readonly allUsers$ = this.store.select(selectAllUsers);
  readonly loadingUsers$ = this.store.select(selectLoading);

  constructor(private store: Store<UsersState>) {}

  loadList() {
    this.store.dispatch(UsersActions.loadList());
  }

  select(selectedId: string) {
    this.store.dispatch(UsersActions.select({ selectedId }));
  }

  unset() {
    this.store.dispatch(UsersActions.unset());
  }
}
