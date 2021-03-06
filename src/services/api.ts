import axios from 'axios'

export const key = 'd14e67e6fd49d76f1009420c7fd77610'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export const apiMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

export const apiSearch = axios.create({
  baseURL: `https://api.themoviedb.org/3/search`,
})

export const allMoviesNow = axios.create({
  baseURL: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}`,
})
