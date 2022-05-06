import { useSelector } from 'react-redux'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading'
import { RootState } from '../../store'
import { MovieArticle, Star } from './styles'

export default function MovieInfo() {
  const { oneMovie, loading } = useSelector(
    (state: RootState) => state.moviesRepository,
  )

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
      console.log(verificationNumber)
      return 'star halfActive'
    }

    return 'star'
  }

  return (
    <main>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <MovieArticle backgroundImage={IMG_API + oneMovie.backdrop_path}>
          <img src={IMG_API + oneMovie.backdrop_path} alt="" />
          <h1>{oneMovie.title}</h1>
          <div>
            <div>
              Original language = <span>{oneMovie.original_language}</span>
            </div>
            <div>
              <span>{oneMovie.vote_average}</span>
              <Star className={voteStar(20, Number(oneMovie.vote_average))}>
                &#9733;
              </Star>
              <Star className={voteStar(40, Number(oneMovie.vote_average))}>
                &#9733;
              </Star>
              <Star className={voteStar(60, Number(oneMovie.vote_average))}>
                &#9733;
              </Star>
              <Star className={voteStar(80, Number(oneMovie.vote_average))}>
                &#9733;
              </Star>
              <Star className={voteStar(100, Number(oneMovie.vote_average))}>
                &#9733;
              </Star>
            </div>
            <div>
              Added in{' '}
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date(oneMovie.release_date),
              )}
            </div>
          </div>

          <p>{oneMovie.overview}</p>
        </MovieArticle>
      )}

      <Footer />
    </main>
  )
}
