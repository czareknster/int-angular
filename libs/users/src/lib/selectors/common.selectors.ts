import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UsersReducer } from './../reducers';
import { STORE_KEY } from './../users.consts';

export const selectFeatureState =
  createFeatureSelector<UsersReducer.UsersState>(STORE_KEY);

export const selectClinicalPathwayState = createSelector(
  selectFeatureState,
  (state) => state
);
