/**
 * Action types
 */

export enum RepositoriesTypes {
  LOAD_REQUEST = '@MoviesRepositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@MoviesRepositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@MoviesRepositories/LOAD_FAILURE',
}

/**
 * Data types
 */

export interface Repository {
  id: number
  title: string
  original_language: string
  isAdult: boolean
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
}
