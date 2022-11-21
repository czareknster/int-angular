import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { UserRoutingModule } from './users-routing.module';
import { STORE_KEY } from './users.consts';
import { UsersReducer } from './reducers';
import { UsersViewComponent } from './views/users-view/users-view.component';
import { UserViewComponent } from './views/user-view/user-view.component';

import { UsersFacade } from './facades/users.facade';
import { UsersService } from './services/users.service';
import { EFFECTS } from './effects';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    FlexLayoutModule,
    StoreModule.forFeature(STORE_KEY, UsersReducer.reducer),
    EffectsModule.forFeature(EFFECTS),
  ],
  declarations: [UsersViewComponent, UserViewComponent],
  providers: [UsersFacade, UsersService],
})
export class UsersModule {}
