import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.members || initialState;

export const selectMembers = createSelector(
  [selectDomain],
  membersState => membersState,
);
