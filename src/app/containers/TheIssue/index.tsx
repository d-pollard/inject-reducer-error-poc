/**
 *
 * TheIssue
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectAllTheIssueUsers, selectTheIssue } from './selectors';
import { theIssueSaga } from './saga';

interface Props {
  onChange: () => void;
}

export function TheIssue(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: theIssueSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const theIssue = useSelector(selectTheIssue);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const issueUsers = useSelector(selectAllTheIssueUsers);

  return (
    <>
      <Div>Hello world, how are you?</Div>
      {issueUsers.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
}

const Div = styled.div``;
