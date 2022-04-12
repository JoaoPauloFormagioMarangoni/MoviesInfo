import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { apiMovies } from '../../../services/api'

import { loadSuccess, loadFailure, loadRequest } from './actions'

const key = 'd14e67e6fd49d76f1009420c7fd77610'

export function* load(page: number = 1): SagaIterator {
  try {
    yield put(loadRequest())

    const response = yield call(
      apiMovies.get,
      `discover/movie?sort_by=popularity.desc&api_key=${key}&page=${page}`,
    )

    yield put(loadSuccess(response.data.results))
  } catch (err) {
    yield put(loadFailure())
  }
}
