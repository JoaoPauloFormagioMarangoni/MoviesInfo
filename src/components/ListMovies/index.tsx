import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { ApplicationState } from '../../store'
import * as RepositoriesActions from '../../store/ducks/moviesRepository/actions'

import { Repository } from '../../store/ducks/moviesRepository/types'
import { Container, H2 } from './styles'

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
  loadRequest(): void
  loadSuccess(data: Repository[]): void
  loadFailure(): void
}

type Props = StateProps & DispatchProps

function ListMovies({ repositories }: Props) {
  const IMG_API = 'https://image.tmdb.org/t/p/w1280'

  return (
    <Container>
      <H2 backgroundImage={IMG_API + repositories[0].backdrop_path}>
        Últimos filmes lançados
      </H2>
      <ul>
        {repositories.map(
          ({ id, title, overview, vote_average, poster_path }) => (
            <li key={id}>
              <h3>{title}</h3>
              <p>{overview}</p>
              <span>{vote_average}</span>
              <img src={IMG_API + poster_path} alt={title} />
              <hr />
            </li>
          ),
        )}
      </ul>
      <div>
        <BsArrowLeftShort />
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <BsArrowRightShort />
      </div>
    </Container>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.moviesRepository.data,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListMovies)
