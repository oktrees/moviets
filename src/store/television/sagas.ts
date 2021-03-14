import { REQUEST } from 'store/constants';
import { takeEvery, put, call } from "redux-saga/effects";
import { 
  getOnAirTv, 
  getPopularTv,
  getTopRatedTv,
  getTvDetail,
} from 'lib/api/televisions';

import { CONST, Actions } from './actions';

function* getOnAirTelevisionsSaga(action: any) {
  try {
    const { data } = yield call(getOnAirTv);
    yield put(Actions.getOnAirTelevisionsSuccess(data));
  } catch (error) {
    yield put(Actions.getOnAirTelevisionsFailure(error));
  }
} 

function* getTopRatedTelevisionsSaga(action: any) {
  try {
    const { data } = yield call(getTopRatedTv);
    yield put(Actions.getTopRatedTelevisionsSuccess(data));
  } catch (error) {
    yield put(Actions.getTopRatedTelevisionsFailure(error));
  }
}

function* getPopualarTelevisionsSaga(action: any) {
  try {
    const { data } = yield call(getPopularTv);
    yield put(Actions.getPopualarTelevisionsSuccess(data));
  } catch (error) {
    yield put(Actions.getPopualarTelevisionsFailure(error));
  }
}

function* getDetailSaga(action: any) {
  console.log(action);
  try {
    const { data } = yield call(getTvDetail, action.id);
    yield put(Actions.getDetailSuccess(data));
  } catch (error) {
    yield put(Actions.getDetailFailure(error));
  }
}


export function* televisionSagas() {
  yield takeEvery(CONST.GET_ON_AIR_TELEVISIONS[REQUEST], getOnAirTelevisionsSaga);
  yield takeEvery(CONST.GET_TOP_RATED_TELEVISIONS[REQUEST], getTopRatedTelevisionsSaga);
  yield takeEvery(CONST.GET_POPULAR_TELEVISIONS[REQUEST], getPopualarTelevisionsSaga);
  yield takeEvery(CONST.GET_DETAIL[REQUEST], getDetailSaga);
}
