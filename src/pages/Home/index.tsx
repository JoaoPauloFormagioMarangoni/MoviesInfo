import { Header } from '../../components/Header'
import ImageHome from '../../components/ImageHome'
import { useMovies } from '../../context/movieContext'
import { Container } from './styles'

export function Home() {
  const { allPopularMovies, popularMovies } = useMovies()
  const IMG_API = 'https://image.tmdb.org/t/p/w1280'

  return (
    <div>
      <Container>
        <Header />
        <ImageHome />
        
        <button onClick={() => allPopularMovies(1)}>hello</button>

        <ul>
          {popularMovies.map(
            ({ id, title, overview, vote_average, poster_path }) => (
              <li key={id}>
                <h2>{title}</h2>
                <p>{overview}</p>
                <span>{vote_average}</span>
                <img src={IMG_API + poster_path} alt={title} />
                <hr />
              </li>
            ),
          )}
        </ul>
      </Container>

      <footer></footer>
    </div>
  )
}
