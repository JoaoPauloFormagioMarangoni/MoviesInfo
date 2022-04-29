import { Container, H2 } from './styles'

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { RootState } from '../../store'
import { useEffect } from 'react'
import { getOneMovieRequest, loadRequest } from '../../store/ducks/moviesRepository/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function ListMovies() {
  const navigate = useNavigate()

  const { data } = useSelector((state: RootState) => state.moviesRepository)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadRequest(1))
  }, [])

  const IMG_API = 'https://image.tmdb.org/t/p/w1280'

  function voteStarClassName(verificationNumber: number, index: number) {
    const numberVote = Number(data[index].vote_average) * 10
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
    dispatch(getOneMovieRequest(id))

    navigate('/movieinfo')
  }

  return (
    <Container>
      <H2 backgroundImage={IMG_API + data[0].backdrop_path}>
        Últimos filmes lançados
      </H2>
      <ul>
        {data.map((movie, index) => (
          <li key={movie.id} onClick={() => handleSelectMovie(movie.id)}>
            <h3>{movie.title}</h3>
            <div>
              <span>{movie.vote_average}</span>
              <AiFillStar
                className={voteStarClassName(20, data.indexOf(movie))}
              />
              <AiFillStar
                className={voteStarClassName(40, data.indexOf(movie))}
              />
              <AiFillStar
                className={voteStarClassName(60, data.indexOf(movie))}
              />
              <AiFillStar
                className={voteStarClassName(80, data.indexOf(movie))}
              />
              <AiFillStar
                className={voteStarClassName(100, data.indexOf(movie))}
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
