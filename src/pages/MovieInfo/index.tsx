import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { useMovies } from '../../context/movieContext'
import { Container } from './styles'

export default function MovieInfo() {
  const { onlyOneMovie } = useMovies()

  const IMG_API = 'https://image.tmdb.org/t/p/w1280'

  return (
    <Container>
      <Header />
      <img src={IMG_API + onlyOneMovie?.backdrop_path} alt="" />
      <h1>{onlyOneMovie?.title}</h1>
      <div>
        <span>Linguagem original = <span>{onlyOneMovie?.original_language}</span></span>
        <span>{onlyOneMovie?.vote_average}</span>
        <span>Adicionado em {onlyOneMovie?.release_date}</span>
      </div>

      <p>{onlyOneMovie?.overview}</p>
      <Footer />
    </Container>
  )
}
