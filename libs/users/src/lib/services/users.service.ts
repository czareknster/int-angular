import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { clearUserIds } from './../utils/clear-ids.utils';
import { User, UsersApiResponse } from './../models/users.model';

@Injectable()
export class UsersService {
  static SERVICE_URL = 'https://randomuser.me/api';

  constructor(private http: HttpClient) {}

  getUsers(results = 10): Observable<User[]> {
    return this.http
      .get<UsersApiResponse>(`${UsersService.SERVICE_URL}/?results=${results}`)
      .pipe(
        map((response) => response.results),
        clearUserIds()
      );
  }
}
