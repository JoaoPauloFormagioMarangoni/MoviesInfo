import { SagaIterator } from 'redux-saga'
import { all, call, put, takeLatest, takeLeading } from 'redux-saga/effects'
import { apiMovies } from '../../../services/api'

import { loadSuccess, loadFailure, getOneMovieSuccess } from './actions'
import { MoviesRepositoriesTypes } from './types'

const key = 'd14e67e6fd49d76f1009420c7fd77610'

function* loadMovies(action: any): SagaIterator {
  try {
    const response = yield call(
      apiMovies.get,
      `discover/movie?sort_by=popularity.desc&api_key=${key}&page=${action.payload.page}`,
    )
    yield put(loadSuccess(response.data.results))
  } catch (err) {
    yield put(loadFailure())
  }
}

function* getMovieById(action: any): SagaIterator {
  try {
    const response = yield call(
      apiMovies.get,
      `movie/${action.payload.id}?api_key=${key}`,
    )
    yield put(getOneMovieSuccess(response.data))
  } catch (err) {
    yield put(loadFailure())
  }
}

function* moviesRepositoriesSaga() {
  yield all([
    takeLatest(MoviesRepositoriesTypes.LOAD_REQUEST, loadMovies),
    takeLeading(MoviesRepositoriesTypes.GET_BY_ID, getMovieById),
  ])
}

export default moviesRepositoriesSaga
