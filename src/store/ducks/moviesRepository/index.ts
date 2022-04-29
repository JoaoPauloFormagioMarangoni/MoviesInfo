import { Reducer } from 'redux'
import { RepositoriesState, MoviesRepositoriesTypes } from './types'

const dataMovie = {
  id: 0,
  title: '',
  original_language: '',
  adult: false,
  overview: '',
  vote_average: '',
  release_date: '',
  poster_path: '',
  backdrop_path: '',
}

const INITIAL_STATE: RepositoriesState = {
  data: [dataMovie],
  error: false,
  loading: false,
  oneMovie: dataMovie,
}

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesRepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true }
    case MoviesRepositoriesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      }
    case MoviesRepositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] }
    case MoviesRepositoriesTypes.GET_BY_ID:
      return {
        ...state,
        loading: true,
      }
    case MoviesRepositoriesTypes.GET_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        oneMovie: action.payload.data,
      }
    default:
      return { ...state }
  }
}

export default reducer
