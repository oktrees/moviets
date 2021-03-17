import { Actions } from './actions';
// import { ActionType } from 'typesafe-actions';

import { Movies } from "lib/api/types";
// import { GithubProfile } from 'lib/api/movies';

export type Action =  
| ReturnType<typeof Actions.getTrendMoviesRequest>
| ReturnType<typeof Actions.getTrendMoviesSuccess>
| ReturnType<typeof Actions.getTrendMoviesFailure>
| ReturnType<typeof Actions.getDetailRequest>
| ReturnType<typeof Actions.getDetailSuccess>
| ReturnType<typeof Actions.getDetailFailure>

// export type GithubAction = ActionType<typeof actions>;

export type MovieType = {
  loading: boolean;
  error: Error | null;
  data: null | Movies ;  
};