import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { User } from './../models/users.model';

export const loadList = createAction('[Users] = load list');
export const loadListSuccess = createAction(
  '[Users] - load list success',
  props<{ users: User[] }>()
);
export const loadListError = createAction(
  '[Users] - load list error',
  props<{ error: HttpErrorResponse }>()
);
export const select = createAction(
  '[Users] - set selectedId',
  props<{ selectedId: string | null }>()
);

export const unset = createAction('[Users] - unset');
