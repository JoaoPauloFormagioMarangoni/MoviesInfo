import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;

  > div {
    width: 100%;
    position: relative;

    img {
      width: inherit;
      height: 100vh;
      object-fit: cover;
      filter: brightness(0.8);
    }

    span {
      position: absolute;
      color: #fff;
      word-spacing: -3rem;
      letter-spacing: -3px;
      bottom: 100px;
      right: 80px;
      z-index: 99;
      font-size: 5rem;
      text-shadow: 2px 2px 0px #7a0bc0, 2px -2px 0px var(--pink),
        -2px 2px 0px var(--pink), -2px -2px 0px var(--pink);

      font-family: 'Palette Mosaic', cursive;
    }
  }
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 3px 3px 10px #000;
  
  z-index: 99;
  width: 35%;
  height: 90%;
  border-radius: 20px;
  background-color: #23096e;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  color: #fff;

  > img {
    width: 100%;
    position: absolute;
    z-index: -1;
    border-radius: 20px;
    filter: brightness(0.3);

    &.imgLoginDown {
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }

  h1 {
    width: 100%;

    margin-top: 8px;
    font-weight: bold;
    font-size: 2rem;
    display: flex;
    justify-content: center;
  }

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;

    span {
      font-size: 1.2rem;
      margin: 5px 0 10px 0;
    }

    footer {
      margin: 35px 0;

      .icons {
        cursor: pointer;

        font-size: 2.7rem;
        background: #fff;
        border-radius: 10px;
        padding: 2px;

        &:nth-child(2) {
          margin: 0 15px;
          color: var(--pink);
        }

        &:nth-child(3) {
          color: #00acee;
        }

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`

export const LoadingRepositories = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000;
`