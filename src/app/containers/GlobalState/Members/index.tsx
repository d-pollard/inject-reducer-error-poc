/**
 *
 * Members
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectMembers } from './selectors';
import { membersSaga } from './saga';

interface Props {}

export function Members(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: membersSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const members = useSelector(selectMembers);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return <></>;
}
