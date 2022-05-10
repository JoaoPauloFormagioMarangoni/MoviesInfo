import { RiHome2Line, RiUserLine } from 'react-icons/ri'
import { BsGear } from 'react-icons/bs'
import { Container } from './styles'
import { useNavigate } from 'react-router'
import { useState } from 'react'

// import {Translator, Translate} from 'react-auto-translate';

interface ToggleThemeProps {
  toggleTheme: (changeTheme: string) => void
}

export function Header({ toggleTheme }: ToggleThemeProps) {
  const navigate = useNavigate()

  const [config, setConfig] = useState(false)

  function handleBackHome() {
    navigate('/home')
  }

  function handleActivateConfig() {
    setConfig(!config)
  }

  return (
    // <Translator
    //   cacheProvider={cacheProvider}
    //   from='en'
    //   to='es'
    //   googleApiKey='API_KEY'
    // >
    <Container>
      <h1>Movies.Info</h1>
      {/* <h2>
        <Translate>Welcome!</Translate>
      </h2> */}
      <div>
        <div>
          <RiUserLine className="user" />
        </div>
        <div>
          <RiHome2Line className="home" onClick={handleBackHome} />
        </div>
        <div>
          <BsGear onClick={handleActivateConfig} className="config" />
          <div className={config ? 'activeConfig' : 'disabledConfig'}>
            <select name="language">
              <option value="en">English</option>
              <option value="pt">Portuguese</option>
            </select>
            <div>
              <span onClick={() => toggleTheme('light')}>Light</span>
              <span onClick={() => toggleTheme('dark')}>Dark</span>
            </div>
            <button>Leave</button>
          </div>
        </div>
      </div>
    </Container>
    // </Translator>
  )
}
