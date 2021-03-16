import { REQUEST } from 'store/constants';
import { takeEvery, put, call } from "redux-saga/effects";
import { 
  getTodayMovies, 
  getTopRatedMovies, 
  getNowPlayingMovies,
  getMovieDetail,
  getMovieVideos,
  getMovieCredits,
  getMovieSimilar,
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

function* getDetailSaga(action: any) {
  try {
    const { data } = yield call(getMovieDetail, action.id);
    yield put(Actions.getDetailSuccess(data));
  } catch (error) {
    yield put(Actions.getDetailFailure(error));
  }
}

function* getDetailVideosSaga(action: any) {
  try {
    const { data } = yield call(getMovieVideos, action.id);
    yield put(Actions.getDetailVideosSuccess(data));
  } catch (error) {
    yield put(Actions.getDetailVideosFailure(error));
  }
}

function* getDetailCreditsSaga(action: any) {
  try {
    const { data } = yield call(getMovieCredits, action.id);
    yield put(Actions.getDetailCreditsSuccess(data));
  } catch (error) {
    yield put(Actions.getDetailCreditsFailure(error));
  }
}

function* getDetailSimilarSaga(action: any) {
  try {
    const { data } = yield call(getMovieSimilar, action.id);
    yield put(Actions.getDetailSimilarsSuccess(data));
  } catch (error) {
    yield put(Actions.getDetailSimilarsFailure(error));
  }
}

export function* movieSagas() {
  yield takeEvery(CONST.GET_TREND_MOVIES[REQUEST], getTrendMoviesSaga);
  yield takeEvery(CONST.GET_TOP_RATED_MOVIES[REQUEST], getTopRatedMoviesSaga);
  yield takeEvery(CONST.GET_NOW_PLAYING_MOVIES[REQUEST], getNowPlayingMoviesSaga);
  yield takeEvery(CONST.GET_DETAIL[REQUEST], getDetailSaga);
  yield takeEvery(CONST.GET_DETAIL_VIDEOS[REQUEST], getDetailVideosSaga);
  yield takeEvery(CONST.GET_DETAIL_CREDITS[REQUEST], getDetailCreditsSaga);
  yield takeEvery(CONST.GET_DETAIL_SIMILARS[REQUEST], getDetailSimilarSaga);
}
