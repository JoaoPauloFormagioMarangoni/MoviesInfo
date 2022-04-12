import { SagaIterator } from 'redux-saga'
import { all, fork } from 'redux-saga/effects'

import { load } from './moviesRepository/sagas'

export function* rootSaga(): SagaIterator {
  yield all([fork(load)])
}
