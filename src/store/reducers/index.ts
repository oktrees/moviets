import { combineReducers } from "redux";
import movieReducer from "store/reducers/movie";

export const rootReducer = combineReducers({
  movie: movieReducer,
});

export type rootState = ReturnType<typeof rootReducer>;
