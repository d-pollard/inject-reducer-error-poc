import { MembersState } from 'app/containers/GlobalState/Members/types';
import { TheIssueState } from 'app/containers/TheIssue/types';
import { UsersManagerState } from 'app/containers/GlobalState/UsersManager/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  members?: MembersState;
  theIssue?: TheIssueState;
  usersManager?: UsersManagerState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
