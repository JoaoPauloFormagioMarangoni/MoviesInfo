import styled from 'styled-components'

interface H2Props {
  backgroundImage: string
}

export const Container = styled.main`
  span {
  }
`

export const MovieArticle = styled.article<H2Props>`
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }

  h1 {
    text-align: center;
    padding: 20px 0;
    font-size: 3rem;

    background-image: url(${(props) => props.backgroundImage});

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 10px 0;

    > div {
      display: flex;
      align-items: center;

      padding: 10px 25px;
      background: rgba(122, 11, 192, 1);
      border-radius: 10px;
      box-shadow: 0px 0px 8px #000, inset 0px 0px 8px #000;
      border: 2px solid rgba(122, 11, 192, 1);
      color: #fff;
      font-size: 1.2rem;

      span {
        text-transform: uppercase;
        margin: 0 7px;
      }
    }
  }

  > p {
    font-size: 1.3rem;
    line-height: 32px;
    text-align: justify;
    width: 70vw;
    margin: 20px 0 40px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`

export const Star = styled.span`
  font-size: 1.8rem;

  &.star {
    margin: -7px 2px 0 2px;
    
    &.active {
      color: #ffd700;
    }

    &.halfActive {
      background: linear-gradient(
        90deg,
        rgba(255, 215, 0, 1) 50%,
        rgba(255, 255, 255, 1) 50%
      );

      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
`
