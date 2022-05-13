import { RiHome2Line, RiUserLine } from 'react-icons/ri'
import { BsGear } from 'react-icons/bs'
import { BiSearchAlt, BiRightArrow } from 'react-icons/bi'

import { Container } from './styles'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
  getOneMovieRequest,
  searchMovieRequest,
} from '../../store/ducks/moviesRepository/actions'

import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

interface ToggleThemeProps {
  toggleTheme: (changeTheme: string) => void
}

export function Header({ toggleTheme }: ToggleThemeProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const { searchMovie, loadingSearch } = useSelector(
    (state: RootState) => state.moviesRepository,
  )
  const dispatch = useDispatch()

  const [config, setConfig] = useState(false)
  const [activeSearch, setActiveSearch] = useState(false)
  const [movie, setMovie] = useState('')

  useEffect(() => {
    dispatch(searchMovieRequest(movie))
  }, [movie])

  function handleSelectMovie(id: number) {
    dispatch(getOneMovieRequest(id))

    navigate('/movieinfo')
  }

  function handleChangeLanguage(event: any) {
    if (event.currentTarget.value === 'pt-BR') {
      i18n.changeLanguage('pt-BR')
    } else {
      i18n.changeLanguage('en-US')
    }
  }

  return (
    <Container>
      <h1>Movies.Info</h1>
      <div className={activeSearch ? 'active' : 'disabled'}>
        <div className="componentSearch">
          <input
            type="search"
            onChange={(event) => setMovie(event.currentTarget.value.trim())}
            name="search"
            id={activeSearch ? 'active' : 'disabled'}
            placeholder="Search"
          />
          <BiSearchAlt
            onClick={() => setActiveSearch(!activeSearch)}
            className="icons"
          />
          {!loadingSearch && (
            <ul>
              {searchMovie.map((movie) => (
                <li key={movie.id}>
                  {movie.title}{' '}
                  <button onClick={() => handleSelectMovie(movie.id)}>
                    <BiRightArrow className="arrowMovie" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <RiUserLine className="icons" />
        </div>
        <div>
          <RiHome2Line className="icons" onClick={() => navigate('/home')} />
        </div>
        <div>
          <BsGear onClick={() => setConfig(!config)} className="icons" />
          <div className={config ? 'activeConfig' : 'disabledConfig'}>
            <select
              name="language"
              onChange={handleChangeLanguage}
              value={i18n.language}
            >
              <option value="en-US">{t('English')}</option>
              <option value="pt-BR">{t('Portuguese')}</option>
            </select>
            <div>
              <span onClick={() => toggleTheme('light')}>{t('Light')}</span>
              <span onClick={() => toggleTheme('dark')}>{t('Dark')}</span>
            </div>
            <button>{t('Leave')}</button>
          </div>
        </div>
      </div>
    </Container>
  )
}
