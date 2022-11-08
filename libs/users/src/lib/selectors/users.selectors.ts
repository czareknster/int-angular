import { createSelector } from '@ngrx/store';

import { selectFeatureState } from './common.selectors';
import { adapter } from './../reducers/users.reducer';

export const selectLoading = createSelector(selectFeatureState, 
  state => state.loading)

export const { selectAll: selectAllUsers, selectTotal: selectUserCount } =
  adapter.getSelectors(selectFeatureState);

export const selectSelectedId = createSelector(
  selectFeatureState,
  (users) => users.selectedId
);
