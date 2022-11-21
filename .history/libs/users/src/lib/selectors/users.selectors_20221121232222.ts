import { createSelector } from '@ngrx/store';

import { selectFeatureState } from './common.selectors';
import { adapter } from './../reducers/users.reducer';

export const selectLoading = createSelector(
  selectFeatureState,
  (state) => state.loading
);

export const {
  selectAll: selectAllUsers,
  selectTotal: selectUserCount,
  selectEntities: selectUsersEntities,
} = adapter.getSelectors(selectFeatureState);

export const selectSelectedId = createSelector(
  selectFeatureState,
  (users) => users.selectedId
);

export const selectUserData = createSelector(
  selectUsersEntities,
  selectSelectedId,
  (entities, userId) => (userId ? entities[userId] : null)
);
