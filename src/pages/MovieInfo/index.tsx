import { useSelector } from 'react-redux'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { RootState } from '../../store'
import { Container } from './styles'

export default function MovieInfo() {
  const { oneMovie, loading } = useSelector(
    (state: RootState) => state.moviesRepository,
  )

  const IMG_API = 'https://image.tmdb.org/t/p/w1280'
  
  return (
    <Container>
      <Header />
      {loading ? (
        <span></span>
      ) : (
        <>
          <img src={IMG_API + oneMovie.backdrop_path} alt="" />
          <h1>{oneMovie.title}</h1>
          <div>
            <span>
              Linguagem original = <span>{oneMovie.original_language}</span>
            </span>
            <span>{oneMovie.vote_average}</span>
            <span>Adicionado em {oneMovie.release_date}</span>
          </div>

          <p>{oneMovie.overview}</p>
        </>
      )}

      <Footer />
    </Container>
  )
}
