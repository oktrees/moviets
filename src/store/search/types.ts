import { Actions } from './actions';
// import { ActionType } from 'typesafe-actions';

import { GithubProfile } from 'lib/api/movies';

export type GithubAction = 
| ReturnType<typeof Actions.getMoviesRequest>
| ReturnType<typeof Actions.getMoviesSuccess>
| ReturnType<typeof Actions.getMoviesFailure>

// export type GithubAction = ActionType<typeof actions>;

export type GithubState = {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: GithubProfile | null;
  };
};