import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading'
import { RootState } from '../../store'
import { MovieArticle, Star } from './styles'

interface ToggleThemeProps {
  toggleTheme: (changeTheme: string) => void
}

export default function MovieInfo({ toggleTheme }: ToggleThemeProps) {
  const { oneMovie, loading } = useSelector(
    (state: RootState) => state.moviesRepository,
  )
  const [movie, setMovie] = useState(oneMovie)

  const IMG_API = 'https://image.tmdb.org/t/p/w1280'

  function voteStar(verificationNumber: number, numberVote: number) {
    const numberVotePercent = numberVote * 10
    const completeStar = numberVotePercent >= verificationNumber ? true : false

    const halfStar =
      numberVotePercent >= verificationNumber - 10 &&
      numberVotePercent < verificationNumber
        ? true
        : false

    if (completeStar) {
      return 'star active'
    } else if (halfStar) {
      return 'star halfActive'
    }

    return 'star'
  }

  useEffect(() => {
    const movieStore = localStorage.getItem('MOVIEINFO')
    if (movieStore) {
      setMovie(JSON.parse(movieStore))
    }
  }, [])

  useEffect(() => {
    if(oneMovie.id !== movie.id) {
      localStorage.setItem('MOVIEINFO', JSON.stringify(oneMovie))
      setMovie(oneMovie)
    }
  }, [loading])

  return (
    <main>
      <Header toggleTheme={toggleTheme} />
      {(loading || movie.backdrop_path === '') ? (
        <Loading />
      ) : (
        <MovieArticle
          backgroundImage={
            IMG_API + movie.backdrop_path
          }
        >
          <img src={IMG_API + movie.backdrop_path} alt="" />
          <h1>{movie.title}</h1>
          <div>
            <div>
              Original language = <span>{movie.original_language}</span>
            </div>
            <div>
              <span>{movie.vote_average}</span>
              <Star className={voteStar(20, Number(movie.vote_average))}>
                &#9733;
              </Star>
              <Star className={voteStar(40, Number(movie.vote_average))}>
                &#9733;
              </Star>
              <Star className={voteStar(60, Number(movie.vote_average))}>
                &#9733;
              </Star>
              <Star className={voteStar(80, Number(movie.vote_average))}>
                &#9733;
              </Star>
              <Star className={voteStar(100, Number(movie.vote_average))}>
                &#9733;
              </Star>
            </div>
            <div>
              Added in{' '}
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date(movie.release_date),
              )}
            </div>
          </div>

          <p>{movie.overview}</p>
        </MovieArticle>
      )}

      <Footer />
    </main>
  )
}
