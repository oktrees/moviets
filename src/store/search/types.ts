import { Actions } from './actions';
// import { ActionType } from 'typesafe-actions';

import { Search } from "lib/api/types";

export type GithubAction = 
| ReturnType<typeof Actions.getMoviesRequest>
| ReturnType<typeof Actions.getMoviesSuccess>
| ReturnType<typeof Actions.getMoviesFailure>

// export type GithubAction = ActionType<typeof actions>;

export type SearchType = {
  loading: boolean;
  error: Error | null;
  data: null | Search ;  
};