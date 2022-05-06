import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.3);

  > span {
    font-size: 1.3rem;
    color: #7a0bc0;
    font-weight: bold;
    font-family: 'Palette Mosaic', cursive;
    text-shadow: 2px 2px 0px #fff, 2px -2px 0px #000, -2px 2px 0px #000,
      -2px -2px 0px #fff;
  }

  @media (max-width: 430px) {
    flex-direction: column;

    > span {
      margin-bottom: 10px;
    }
  }
`
