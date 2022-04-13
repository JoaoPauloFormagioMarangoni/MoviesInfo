import styled from 'styled-components'

export const Container = styled.main`
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }

  h1 {
    text-align: center;
    padding: 20px 0;
    font-size: 2.3rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 10px 0;

    span {
      span {
        text-transform: uppercase;
      }
    }
  }

  > p {
    font-size: 1.3rem;
    text-align: justify;
    width: 80vw;
    margin-bottom: 20px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`
