import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the TheIssue container
export const initialState: ContainerState = { issues: [] };

const theIssueSlice = createSlice({
  name: 'theIssue',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = theIssueSlice;
