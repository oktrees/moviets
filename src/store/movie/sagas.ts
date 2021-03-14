import { REQUEST } from 'store/constants';
import { takeEvery, put, call } from "redux-saga/effects";
import { 
  getTodayMovies, 
  getTopRatedMovies, 
  getNowPlayingMovies,
  // GithubProfile 
} from 'lib/api/movies';

import { CONST, Actions } from './actions';

function* getTrendMoviesSaga(action: any) {
  try {
    const { data } = yield call(getTodayMovies);
    yield put(Actions.getTrendMoviesSuccess(data));
  } catch (error) {
    yield put(Actions.getTrendMoviesFailure(error));
  } 
}

function* getTopRatedMoviesSaga(action: any) {
  try {
    const { data } = yield call(getTopRatedMovies);
    yield put(Actions.getTopRatedMoviesSuccess(data));
  } catch (error) {
    yield put(Actions.getTopRatedMoviesFailure(error));
  }
}

function* getNowPlayingMoviesSaga(action: any) {
  try {
    const { data } = yield call(getNowPlayingMovies);
    yield put(Actions.getNowPlayingMoviesSuccess(data));
  } catch (error) {
    yield put(Actions.getNowPlayingMoviesFailure(error));
  }
}

export function* movieSagas() {
  yield takeEvery(CONST.GET_TREND_MOVIES[REQUEST], getTrendMoviesSaga);
  yield takeEvery(CONST.GET_TOP_RATED_MOVIES[REQUEST], getTopRatedMoviesSaga);
  yield takeEvery(CONST.GET_NOW_PLAYING_MOVIES[REQUEST], getNowPlayingMoviesSaga);
}
