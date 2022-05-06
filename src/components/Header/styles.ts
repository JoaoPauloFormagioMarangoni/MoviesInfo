import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 15px 30px;

  h1 {
    color: #7a0bc0;
    font-weight: bold;
    font-family: 'Palette Mosaic', cursive;
    text-shadow: 2px 2px 0px #fff, 2px -2px 0px #000, -2px 2px 0px #000,
      -2px -2px 0px #fff;
  }

  div {
    display: flex;
    align-items: center;
    font-size: 1.7rem;

    .house {
      margin: 0 15px;
    }
  }

  @media (max-width: 365px) {
    flex-direction: column;

    h1 {
      margin-bottom: 15px;
    }

    div {
      width: 100%;
      justify-content: space-around;
    }
  }
`
