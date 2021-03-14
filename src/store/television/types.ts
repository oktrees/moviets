import { Actions } from './actions';
// import { ActionType } from 'typesafe-actions';

import { GithubProfile } from 'lib/api/movies';

export type GithubAction = 
| ReturnType<typeof Actions.getOnAirTelevisionsRequest>
| ReturnType<typeof Actions.getOnAirTelevisionsSuccess>
| ReturnType<typeof Actions.getOnAirTelevisionsFailure>

// export type GithubAction = ActionType<typeof actions>;

export type GithubState = {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: GithubProfile | null;
  };
};