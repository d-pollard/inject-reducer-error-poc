import { put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import axios from 'axios';
import { UserState } from './types';

function* fetchUsers() {
  const users: UserState[] = yield axios
    .get('https://5ee90ac3ca595700160298e9.mockapi.io/test/users')
    .then(r => r.data);
  yield put(actions.fetchUsersEnd(users));
}

export function* usersManagerSaga() {
  yield takeLatest(actions.fetchUsersStart.type, fetchUsers);
}
