import { REQUEST } from 'store/constants';
import { takeEvery, put, call } from "redux-saga/effects";
import { 
  getSearchMovies, 
  getSearchTelevisions, 
  // GithubProfile 
} from 'lib/api/search';

import { CONST, Actions } from './actions';

function* getMoviesSaga(action: any) {
  try {
    const { data } = yield call(getSearchMovies, action.queryString);
    yield put(Actions.getMoviesSuccess(data));
  } catch (error) {
    yield put(Actions.getMoviesFailure(error));
  } 
}

function* getTelevisionsSaga(action: any) {
  try {
    const { data } = yield call(getSearchTelevisions, action.queryString);
    yield put(Actions.getTelevisionsSuccess(data));
  } catch (error) {
    yield put(Actions.getTelevisionsFailure(error));
  }
}

export function* searchSagas() {
  yield takeEvery(CONST.GET_MOVIES[REQUEST], getMoviesSaga);
  yield takeEvery(CONST.GET_TELEVISIONS[REQUEST], getTelevisionsSaga);
}
