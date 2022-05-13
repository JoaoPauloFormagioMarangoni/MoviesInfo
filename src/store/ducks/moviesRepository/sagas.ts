import { SagaIterator } from 'redux-saga'
import { all, call, put, takeLatest, takeLeading } from 'redux-saga/effects'
import i18n from '../../../i18n'
import { apiMovies, apiSearch } from '../../../services/api'

import {
  loadSuccess,
  loadFailure,
  getOneMovieSuccess,
  searchMovieSuccess,
  searchMovieFailure,
} from './actions'
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
      `movie/${action.payload.id}?api_key=${key}&language=${i18n.language}`,
    )
    yield put(getOneMovieSuccess(response.data))
  } catch (err) {
    yield put(loadFailure())
  }
}

function* searchMovieByName(action: any): SagaIterator {
  try {
    if (action.payload.name !== '') {
      const response = yield call(
        apiSearch.get,
        `movie?api_key=${key}&query=${action.payload.name}`,
      )
      yield put(searchMovieSuccess(response.data))
    } else {
      yield put(searchMovieFailure())
    }
  } catch (err) {
    yield put(searchMovieFailure())
  }
}

function* moviesRepositoriesSaga() {
  yield all([
    takeLatest(MoviesRepositoriesTypes.LOAD_REQUEST, loadMovies),
    takeLeading(MoviesRepositoriesTypes.GET_BY_ID, getMovieById),
    takeLeading(MoviesRepositoriesTypes.SEARCH_BY_NAME, searchMovieByName),
  ])
}

export default moviesRepositoriesSaga
