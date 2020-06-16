/* --- STATE --- */
interface Issue {
  id: string;
  creatorId: string;
  title: string;
  description: string;
}
export interface TheIssueState {
  issues: Issue[];
}

export type ContainerState = TheIssueState;
