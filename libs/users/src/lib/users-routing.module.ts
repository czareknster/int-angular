import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoadUsersResolver } from './resolvers/users.resolver';
import { UsersGuard } from './guards/users.guard';

import { UsersViewComponent } from './views/users-view/users-view.component';
import { UserViewComponent } from './views/user-view/user-view.component';

const routes: Routes = [
  {
    path: '',
    canDeactivate: [UsersGuard],
    resolve: {
      users: LoadUsersResolver,
    },
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: UsersViewComponent,
      },
      {
        path: ':id',
        component: UserViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [LoadUsersResolver, UsersGuard],
  exports: [RouterModule],
})
export class UserRoutingModule {}
