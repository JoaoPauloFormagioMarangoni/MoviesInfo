import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  img {
    filter: brightness(0.7);
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }

  > div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    h2 {
      position: absolute;
      bottom: 30px;
      right: 45px;

      font-size: 3rem;
      background: linear-gradient(90deg, var(--purple) 20%, #E10856 100%);

      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;

      font-family: 'Palette Mosaic', cursive;
    }

    > div {
      position: absolute;
      top: 20px;
      left: 40px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: rgba(126, 11, 192, 0.7);
      box-shadow: inset 2px 2px 6px #000, inset -2px -2px 6px #000;
      border-radius: 10px;
      padding: 10px 15px;

      color: #fff;

      span {
        font-size: 1.7rem;
        margin-right: 10px;
        font-weight: bold;
      }
    }

    button {
      display: flex;
      align-items: center;

      position: absolute;
      bottom: 30px;
      left: 45px;

      font-size: 1.6rem;
      padding: 10px 25px;
      border-radius: 50px;
      border: none;
      background-color: rgba(255, 255, 255, 0.4);
      color: var(--purple);
      font-weight: bold;

      .arrow {
        margin-left: 10px;
        font-size: 0;
        transition: font-size 0.2s;
      }

      &:hover .arrow {
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: 577px) {
    > div {
      h2 {
        bottom: 100px;
        right: 50%;
        transform: translateX(50%);
      }

      button {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`

export const Star = styled.span`
  &.star {
    font-size: 1.6rem;
    margin: -6px 2px 0 2px;

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
