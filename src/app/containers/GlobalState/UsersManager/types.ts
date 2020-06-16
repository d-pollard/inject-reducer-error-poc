/* --- STATE --- */

export interface UserState {
  id: string;
  name: string;
  email: string;
}
export interface UsersManagerState {
  all: UserState[];
}

export type ContainerState = UsersManagerState;
