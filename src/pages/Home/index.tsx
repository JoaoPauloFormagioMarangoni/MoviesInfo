import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { ImageHome } from '../../components/ImageHome'
import ListMovies from '../../components/ListMovies'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <ImageHome />
      <ListMovies />
      <Footer />
    </Container>
  )
}
