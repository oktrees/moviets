import { Actions } from './actions';
// import { ActionType } from 'typesafe-actions';

import { GithubProfile } from 'lib/api/movies';

export type GithubAction = 
| ReturnType<typeof Actions.getTrendMoviesRequest>
| ReturnType<typeof Actions.getTrendMoviesSuccess>
| ReturnType<typeof Actions.getTrendMoviesFailure>

// export type GithubAction = ActionType<typeof actions>;

export type GithubState = {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: GithubProfile | null;
  };
};