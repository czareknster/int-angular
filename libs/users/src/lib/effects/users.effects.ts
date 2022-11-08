import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { User } from '../models/users.model';

import { UsersActions } from './../actions';
import { UsersService } from './../services/users.service';

@Injectable()
export class UsersEffects {
  loadList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadList),
      switchMap(() =>
        this.usersService.getUsers().pipe(
          map((users: User[]) => UsersActions.loadListSuccess({ users })),
          catchError((error) => of(UsersActions.loadListError({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
