/* --- STATE --- */
interface Member {
  id: string;
  userId: string;
  groupId: string;
}
export interface MembersState {
  members: Member[];
}

export type ContainerState = MembersState;
