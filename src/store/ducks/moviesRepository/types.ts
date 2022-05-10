/**
 * Action types
 */

export enum MoviesRepositoriesTypes {
  LOAD_REQUEST = '@MoviesRepositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@MoviesRepositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@MoviesRepositories/LOAD_FAILURE',
  GET_BY_ID = '@MoviesRepositories/GET_BY_ID',
  GET_BY_ID_SUCCESS = '@MoviesRepositories/GET_BY_ID_SUCCESS',
  SEARCH_BY_NAME = '@MoviesRepositories/SEARCH_BY_NAME',
  SEARCH_BY_NAME_SUCCESS = '@MoviesRepositories/SEARCH_BY_NAME_SUCCESS',
}

/**
 * Data types
 */

export interface Repository {
  id: number
  title: string
  original_language: string
  adult: boolean
  overview: string
  vote_average: string
  release_date: string
  poster_path: string
  backdrop_path: string
}

/**
 * State type
 */

export interface RepositoriesState {
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
  readonly oneMovie: Repository
  readonly searchMovie: Repository[]
}
