import { all } from 'redux-saga/effects';

import { movieSagas } from './movie';
import { televisionSagas } from './television';
import { searchSagas } from './search';

export default function* rootSaga() {
  yield all([
    movieSagas(),
    televisionSagas(),
    searchSagas()
  ]);
}