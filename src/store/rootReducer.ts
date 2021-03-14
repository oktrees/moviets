import { combineReducers } from "redux";

import movieReducer from './movie';
import televisionReducer from './television';
import searchnReducer from './search';

export const rootReducer = combineReducers({
  movies: movieReducer,
  televisions: televisionReducer,
  search: searchnReducer
});

export type rootState = ReturnType<typeof rootReducer>;
