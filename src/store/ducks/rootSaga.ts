import { SagaIterator } from 'redux-saga'
import { all, fork } from 'redux-saga/effects'

import moviesRepositoriesSaga from './moviesRepository/sagas'

export default function* rootSaga(): SagaIterator {
  yield all([
    fork(moviesRepositoriesSaga)
  ])
}
