import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, UserState } from './types';

// The initial state of the UsersManager container
export const initialState: ContainerState = { all: [] };

const usersManagerSlice = createSlice({
  name: 'usersManager',
  initialState,
  reducers: {
    fetchUsersStart(state, action: PayloadAction) {},
    fetchUsersEnd(state, action: PayloadAction<UserState[]>) {
      state.all = action.payload;
    },
    fetchUserEnd(state, action: PayloadAction<UserState>) {
      state.all.push(action.payload);
    },
  },
});

export const { actions, reducer, name: sliceKey } = usersManagerSlice;
