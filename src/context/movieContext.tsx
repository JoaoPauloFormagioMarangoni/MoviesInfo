import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { allMoviesNow } from '../services/api'

interface PopularMoviesProps {
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

interface MoviesContextProps {
  allPopularMovies: (numberPage: number) => void
  popularMovies: PopularMoviesProps[]
  lastMovie: PopularMoviesProps | undefined
}

interface MoviesProviderProps {
  children: ReactNode
}

const MoviesContext = createContext({} as MoviesContextProps)

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [popularMovies, setPopularMovies] = useState<PopularMoviesProps[]>([])
  const [lastMovie, setLastMovie] = useState<PopularMoviesProps>()

  async function allPopularMovies(numberPage: number) {
    const response = await allMoviesNow.get('', {
      params: {
        page: numberPage,
      },
    })
    setPopularMovies([...response.data.results])
  }

  useEffect(() => {
    async function lastMovieReleased(): Promise<PopularMoviesProps> {
      const response = await allMoviesNow.get('', {
        params: {
          page: 1,
        },
      })
      return response.data.results[0]
    }
    lastMovieReleased().then((response) => setLastMovie(response))
  }, [])

  return (
    <MoviesContext.Provider
      value={{ allPopularMovies, popularMovies, lastMovie }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

export function useMovies() {
  const context = useContext(MoviesContext)

  return context
}
