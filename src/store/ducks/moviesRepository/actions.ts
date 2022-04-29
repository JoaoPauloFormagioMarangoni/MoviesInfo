import { action } from 'typesafe-actions'
import { MoviesRepositoriesTypes, Repository } from './types'

export const loadRequest = (page: number) =>
  action(MoviesRepositoriesTypes.LOAD_REQUEST, { page })

export const loadSuccess = (data: Repository[]) =>
  action(MoviesRepositoriesTypes.LOAD_SUCCESS, { data })

export const loadFailure = () => action(MoviesRepositoriesTypes.LOAD_FAILURE)

export const getOneMovieRequest = (id: number) => action(MoviesRepositoriesTypes.GET_BY_ID, { id })

export const getOneMovieSuccess = (data: Repository) => action(MoviesRepositoriesTypes.GET_BY_ID_SUCCESS, { data })
