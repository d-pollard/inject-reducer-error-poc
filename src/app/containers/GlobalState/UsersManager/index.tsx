/**
 *
 * UsersManager
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectUsersManager } from './selectors';
import { usersManagerSaga } from './saga';

interface Props {}

export function UsersManager(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: usersManagerSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const usersManager = useSelector(selectUsersManager);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <div></div>
    </>
  );
}
