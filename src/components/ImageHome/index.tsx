import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'

import { Container, Star } from './styles'
import { BiRightArrow } from 'react-icons/bi'
import { getOneMovieRequest } from '../../store/ducks/moviesRepository/actions'
import { useNavigate } from 'react-router'

export function ImageHome() {
  const { data } = useSelector((state: RootState) => state.moviesRepository)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const IMG_API = 'https://image.tmdb.org/t/p/w1280'

  function voteStar(verificationNumber: number) {
    const numberVote = Number(data[0].vote_average) * 10
    const completeStar = numberVote >= verificationNumber ? true : false

    const halfStar =
      numberVote >= verificationNumber - 10 && numberVote < verificationNumber
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
    dispatch(getOneMovieRequest(id))

    navigate('/movieinfo')
  }

  return (
    <Container>
      <img src={IMG_API + data[0].backdrop_path} alt="" />
      <div>
        <h2>{data[0].title}</h2>
        <div>
          <span>{data[0].vote_average}</span>
          <Star className={voteStar(20)}>&#9733;</Star>
          <Star className={voteStar(40)}>&#9733;</Star>
          <Star className={voteStar(60)}>&#9733;</Star>
          <Star className={voteStar(80)}>&#9733;</Star>
          <Star className={voteStar(100)}>&#9733;</Star>
        </div>
        <button onClick={() => handleSelectMovie(data[0].id)}>
          Ver informações <BiRightArrow className="arrow" />
        </button>
      </div>
    </Container>
  )
}
