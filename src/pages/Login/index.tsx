import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { ApplicationState } from '../../store'
import * as RepositoriesActions from '../../store/ducks/moviesRepository/actions'

import { Container, Main } from './styles'
import LoginUp from '../../assets/loginUp.svg'
import LoginDown from '../../assets/loginDown.svg'
import { FormComponent } from '../../components/FormComponent'

import { FcGoogle } from 'react-icons/fc'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { Repository } from '../../store/ducks/moviesRepository/types'

interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
  loadRequest(): void
  loadSuccess(data: Repository[]): void
  loadFailure(): void
}

type Props = StateProps & DispatchProps

function Login({ repositories }: Props) {
  const IMG_API = 'https://image.tmdb.org/t/p/w1280'

  return (
    <Container>
      <div>
        <img src={IMG_API + repositories[0]?.backdrop_path} alt={repositories[0]?.title} />
        <span>{repositories[0]?.title}</span>
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

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.moviesRepository.data,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
