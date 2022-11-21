import { Component } from '@angular/core';

import { UsersFacade } from '../../facades/users.facade';

@Component({
  selector: 'interview-angular-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent {
  constructor(private usersFacade: UsersFacade) {}
  userData$ = this.usersFacade.userData$;
}
