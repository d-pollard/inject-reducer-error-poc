import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { selectUsers } from '../GlobalState/UsersManager/selectors';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.theIssue || initialState;

export const selectTheIssue = createSelector(
  [selectDomain],
  theIssueState => theIssueState,
);

export const selectAllTheIssueUsers = createSelector(
  [selectDomain, selectUsers],
  (issueState, usersState) => {
    if (!issueState) {
      return [];
    }
    return usersState;
  },
);
