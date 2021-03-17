import { Actions } from './actions';
// import { ActionType } from 'typesafe-actions';

import { Televisions } from "lib/api/types";

export type GithubAction = 
| ReturnType<typeof Actions.getOnAirTelevisionsRequest>
| ReturnType<typeof Actions.getOnAirTelevisionsSuccess>
| ReturnType<typeof Actions.getOnAirTelevisionsFailure>

// export type GithubAction = ActionType<typeof actions>;


export type TelevisionType = {
  loading: boolean;
  error: Error | null;
  data: null | Televisions ;  
};