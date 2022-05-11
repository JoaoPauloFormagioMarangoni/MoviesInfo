import { action } from 'typesafe-actions'
import { MoviesRepositoriesTypes, Repository } from './types'

export const loadRequest = (page: number) =>
  action(MoviesRepositoriesTypes.LOAD_REQUEST, { page })

export const loadSuccess = (data: Repository[]) =>
  action(MoviesRepositoriesTypes.LOAD_SUCCESS, { data })

export const loadFailure = () => action(MoviesRepositoriesTypes.LOAD_FAILURE)

export const getOneMovieRequest = (id: number) =>
  action(MoviesRepositoriesTypes.GET_BY_ID, { id })

export const getOneMovieSuccess = (data: Repository) =>
  action(MoviesRepositoriesTypes.GET_BY_ID_SUCCESS, { data })

export const searchMovieRequest = (name: string) =>
  action(MoviesRepositoriesTypes.SEARCH_BY_NAME, { name })

export const searchMovieSuccess = (data: Repository) =>
  action(MoviesRepositoriesTypes.SEARCH_BY_NAME_SUCCESS, { data })

export const searchMovieFailure = () =>
  action(MoviesRepositoriesTypes.SEARCH_BY_NAME_FAILURE)
