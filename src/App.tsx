import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import MovieInfo from './pages/MovieInfo'
import { GlobalStyle } from './styles/global'

import { useState } from 'react'

import light from './styles/themes/light'
import dark from './styles/themes/dark'
import { ThemeProvider } from 'styled-components'

function App() {
  const [theme, setTheme] = useState(light)

  const toggleTheme = (changeTheme: string) => {
    setTheme(changeTheme === 'dark' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home toggleTheme={toggleTheme} />} />
            <Route path="/movieinfo" element={<MovieInfo toggleTheme={toggleTheme} />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
