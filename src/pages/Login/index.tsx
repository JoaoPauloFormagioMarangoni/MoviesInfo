import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'

import { Container, Main } from './styles'
import LoginUp from '../../assets/loginUp.svg'
import LoginDown from '../../assets/loginDown.svg'
import { FormComponent } from '../../components/FormComponent'

import { FcGoogle } from 'react-icons/fc'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { useEffect } from 'react'
import { loadRequest } from '../../store/ducks/moviesRepository/actions'
import { Loading } from '../../components/Loading'

export function Login() {
  const { data, loading } = useSelector((state: RootState) => state.moviesRepository)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadRequest(1))
  }, [])

  const IMG_API = 'https://image.tmdb.org/t/p/w1280'

  return (
    <Container>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <img src={IMG_API + data[0].backdrop_path} alt={data[0].title} />
            <span>{data[0].title}</span>
          </>
        )}
      </div>
      <Main>
        <img src={LoginUp} alt="" />
        <h1>Login</h1>

        <FormComponent />

        <div>
          <span>---OR---</span>

          <p>Sign in with</p>

          <footer>
            <FcGoogle className="icons" />
            <BsInstagram className="icons" />
            <BsTwitter className="icons" />
          </footer>
        </div>

        <img src={LoginDown} alt="" className="imgLoginDown" />
      </Main>
    </Container>
  )
}
