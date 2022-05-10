import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { ImageHome } from '../../components/ImageHome'
import ListMovies from '../../components/ListMovies'

interface ToggleThemeProps {
  toggleTheme: (changeTheme: string) => void
}

export function Home({ toggleTheme }: ToggleThemeProps) {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <ImageHome />
      <ListMovies />
      <Footer />
    </>
  )
}
