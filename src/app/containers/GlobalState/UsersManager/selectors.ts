import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.usersManager || initialState;
export const selectUsers = (state: RootState) =>
  (state.usersManager || initialState).all;

export const selectUsersManager = createSelector(
  [selectDomain],
  usersManagerState => usersManagerState,
);

export const selectAllUsers = createSelector(
  [selectDomain],
  usersManagerState => usersManagerState.all,
);
