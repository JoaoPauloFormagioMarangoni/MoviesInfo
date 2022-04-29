import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { MoviesProvider } from './context/movieContext'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import MovieInfo from './pages/MovieInfo'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <AuthProvider>
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movieinfo" element={<MovieInfo />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyle />
      </MoviesProvider>
    </AuthProvider>
  )
}

export default App
