import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { ApplicationState } from '../../store'
import * as RepositoriesActions from '../../store/ducks/moviesRepository/actions'

import { Repository } from '../../store/ducks/moviesRepository/types'
import { Container, H2 } from './styles'

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { useMovies } from '../../context/movieContext'
import { useNavigate } from 'react-router'

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
  const { selectOnlyOneMovie, onlyOneMovie } = useMovies()
  const navigate = useNavigate()

  const IMG_API = 'https://image.tmdb.org/t/p/w1280'

  function voteStarClassName(verificationNumber: number, index: number) {
    const numberVote = Number(repositories[index]?.vote_average) * 10
    const completeStar = numberVote >= verificationNumber ? true : false

    const halfStar =
      numberVote > verificationNumber - 20 && numberVote < verificationNumber
        ? true
        : false

    if (completeStar) {
      return 'star active'
    } else if (halfStar) {
      return 'star halfActive'
    }

    return 'star'
  }

  function handleSelectMovie(id: number) {
    selectOnlyOneMovie(id)

    navigate('/movieinfo')
  }

  return (
    <Container>
      <H2 backgroundImage={IMG_API + repositories[0].backdrop_path}>
        Últimos filmes lançados
      </H2>
      <ul>
        {repositories.map((movie) => (
          <li key={movie.id} onClick={() => handleSelectMovie(movie.id)}>
            <h3>{movie.title}</h3>
            <div>
              <span>{movie.vote_average}</span>
              <AiFillStar
                className={voteStarClassName(20, repositories.indexOf(movie))}
              />
              <AiFillStar
                className={voteStarClassName(40, repositories.indexOf(movie))}
              />
              <AiFillStar
                className={voteStarClassName(60, repositories.indexOf(movie))}
              />
              <AiFillStar
                className={voteStarClassName(80, repositories.indexOf(movie))}
              />
              <AiFillStar
                className={voteStarClassName(100, repositories.indexOf(movie))}
              />
            </div>
            <img src={IMG_API + movie.poster_path} alt={movie.title} />
          </li>
        ))}
      </ul>
      <div>
        <BsArrowLeftShort />
        <span className="active">0</span>
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
