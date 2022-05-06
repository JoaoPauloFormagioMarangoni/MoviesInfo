import { Container, H2, Pagination, Star } from './styles'

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { useNavigate } from 'react-router'
import { RootState } from '../../store'
import { useEffect, useState } from 'react'
import {
  getOneMovieRequest,
  loadRequest,
} from '../../store/ducks/moviesRepository/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function ListMovies() {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)

  const { data } = useSelector((state: RootState) => state.moviesRepository)
  const dispatch = useDispatch()

  const IMG_API = 'https://image.tmdb.org/t/p/w1280'

  useEffect(() => {
    dispatch(loadRequest(page))
  }, [page])

  function voteStar(verificationNumber: number, index: number) {
    const numberVote = Number(data[index].vote_average) * 10
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

  function changePage(numberPage: number) {
    if (numberPage < 1) {
      setPage(1)
    } else {
      setPage(numberPage)
    }
  }

  return (
    <Container>
      <H2 backgroundImage={IMG_API + data[0].backdrop_path}>
        Últimos filmes lançados
      </H2>
      <ul>
        {data.map((movie) => (
          <li key={movie.id} onClick={() => handleSelectMovie(movie.id)}>
            <h3>{movie.title}</h3>
            <div>
              <span>{movie.vote_average}</span>
              <Star className={voteStar(20, data.indexOf(movie))}>
                &#9733;
              </Star>
              <Star className={voteStar(40, data.indexOf(movie))}>
                &#9733;
              </Star>
              <Star className={voteStar(60, data.indexOf(movie))}>
                &#9733;
              </Star>
              <Star className={voteStar(80, data.indexOf(movie))}>
                &#9733;
              </Star>
              <Star className={voteStar(100, data.indexOf(movie))}>
                &#9733;
              </Star>
            </div>
            <img src={IMG_API + movie.poster_path} alt={movie.title} />
          </li>
        ))}
      </ul>
      <Pagination>
        <BsArrowLeftShort className='backArrow' onClick={() => changePage(page - 1)} />
        {page > 2 && <span onClick={() => changePage(1)}>1</span>}
        {page > 1 && (
          <span onClick={() => changePage(page - 1)}>... {page - 1}</span>
        )}
        <span className="active">{page}</span>
        <span onClick={() => changePage(page + 1)}>{page + 1} ...</span>
        <BsArrowRightShort className='nextArrow' onClick={() => changePage(page + 1)} />
      </Pagination>
    </Container>
  )
}
