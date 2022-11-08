import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { User } from './../models/users.model';
import { UsersActions } from '../actions';
import { HttpErrorResponse } from '@angular/common/http';

export interface UsersState extends EntityState<User> {
  loading: boolean;
  error: HttpErrorResponse | null;
  selectedId: null | string;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user) => user.id.value,
});

const initialState: UsersState = adapter.getInitialState({
  loading: false,
  error: null,
  selectedId: null,
});

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.loadList, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UsersActions.loadListSuccess, (state, { users }) =>
    adapter.addMany(users, { ...state, loading: false })
  ),
  on(UsersActions.loadListError, (state, { error }) => ({
    ...state,
    loading: true,
    error,
  })),
  on(UsersActions.unset, () => adapter.removeAll(initialState))
);

export function reducer(state: UsersState, action: Action) {
  return usersReducer(state, action);
}
