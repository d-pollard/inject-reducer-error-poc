/**
 *
 * TheIssuePage
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../GlobalState/UsersManager/selectors';
import { TheIssue } from '../TheIssue';
import { actions as usersManagerActions } from '../GlobalState/UsersManager/slice';

const canShow: boolean = true;

export function TheIssuePage() {
  let contentEl: JSX.Element;
  const dispatch = useDispatch();
  const allUsers = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(usersManagerActions.fetchUsersStart());
  }, [dispatch]);

  if (allUsers.length < 10) {
    return <div>loading here</div>;
  }

  switch (canShow) {
    case true:
      contentEl = <TheIssue onChange={() => true} />;
      break;
    default:
      contentEl = <div>okay</div>;
  }

  return (
    <>
      <div>{contentEl}</div>
    </>
  );
}
