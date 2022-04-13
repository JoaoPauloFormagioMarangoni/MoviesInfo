import styled from 'styled-components'

interface H2Props {
  backgroundImage: string
}

export const Container = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    width: 100%;
    padding: 0 25px;

    li {
      position: relative;
      list-style: none;
      height: 300px;
      border-radius: 10px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 1s;

      img {
        position: absolute;
        z-index: -1;
        border-radius: 10px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 2s;
      }

      h3 {
        opacity: 0;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 20px 0;
        text-align: center;
        font-size: 1.5rem;
        transition: all 0.2s;
      }

      > div {
        position: absolute;
        top: 5px;
        left: 5px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgba(126, 11, 192, 0.7);
        box-shadow: inset 2px 2px 6px #000, inset -2px -2px 6px #000;
        border-radius: 10px;
        padding: 10px 15px;

        color: #fff;

        span {
          font-size: 1rem;
          margin-right: 10px;
          font-weight: bold;
        }

        .star {
          font-size: 1rem;
        }

        .active {
          color: #ffd700;
        }
      }

      &:hover {
        transform: scale(1.05);
        box-shadow: 8px 8px 0px rgba(126, 11, 192, 0.7);
        border-radius: 0;

        img {
          border-radius: 0;
        }

        h3 {
          opacity: 1;
        }
      }
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 20px 0;
    width: 100%;

    font-size: 1.3rem;
    font-weight: bolder;

    span.active {
      color: rgba(126, 11, 192, 1);
    }
  }
`

export const H2 = styled.h2<H2Props>`
  text-align: center;
  font-size: 2rem;
  margin: 20px 0 10px;

  background-image: url(${(props) => props.backgroundImage});

  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`