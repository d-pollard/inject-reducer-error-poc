import React from 'react';
import { Members } from './Members';
import { UsersManager } from './UsersManager';

export default function GlobalState() {
  return (
    <>
      <Members />
      <UsersManager />
    </>
  );
}
