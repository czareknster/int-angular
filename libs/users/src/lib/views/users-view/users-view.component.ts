import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from '../../models/users.model';

import { UsersFacade } from './../../facades/users.facade';

@Component({
  selector: 'interview-angular-user-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersViewComponent {
  tableData!: User[];

  loadingUsers$ = this.usersFacade.loadingUsers$;
  allUsers$ = this.usersFacade.allUsers$;
  displayedColumns: string[] = ['id', 'name', 'gender', 'email', 'actions'];

  constructor(private usersFacade: UsersFacade) {}

  getUsers() {
    this.allUsers$.subscribe((users) => (this.tableData = users));
    return this.tableData;
  }
}
