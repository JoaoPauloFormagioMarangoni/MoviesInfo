import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { ApplicationState } from '../../store'
import * as RepositoriesActions from '../../store/ducks/moviesRepository/actions'

import { Container } from './styles'

import { AiFillStar } from 'react-icons/ai'
import { BiRightArrow } from 'react-icons/bi'
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

function ImageHome({ repositories }: Props) {
  const IMG_API = 'https://image.tmdb.org/t/p/w1280'

  function voteStarClassName(verificationNumber: number) {
    const numberVote = Number(repositories[0]?.vote_average) * 10
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

  return (
    <Container>
      <img src={IMG_API + repositories[0]?.backdrop_path} alt="" />
      <div>
        <h2>{repositories[0]?.title}</h2>
        <div>
          <span>{repositories[0]?.vote_average}</span>
          <AiFillStar className={voteStarClassName(20)} />
          <AiFillStar className={voteStarClassName(40)} />
          <AiFillStar className={voteStarClassName(60)} />
          <AiFillStar className={voteStarClassName(80)} />
          <AiFillStar className={voteStarClassName(100)} />
        </div>
        <button>
          Ver informações <BiRightArrow className='arrow' />
        </button>
      </div>
    </Container>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.moviesRepository.data,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ImageHome)
