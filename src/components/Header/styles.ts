import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 15px 30px;

  h1 {
    color: var(--purple);
    font-weight: bold;
    font-family: 'Palette Mosaic', cursive;
    text-shadow: 2px 2px 0px #fff, 2px -2px 0px #000, -2px 2px 0px #000,
      -2px -2px 0px #fff;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 30px;
    position: relative;

    > div {
      .user,
      .config,
      .home {
        cursor: pointer;
        font-size: 1.7rem;
        color: var(--text);

        transition: all 0.2s;

        &:hover {
          color: var(--purple);
          transform: scale(1.2);
        }
      }

      > div.disabledConfig {
        display: none;
      }

      > div.activeConfig {
        position: absolute;
        right: 0;
        z-index: 99999999;

        background-color: var(--purple);

        margin-top: 12px;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 2px 2px 4px #000;

        select {
          padding: 8px 20px;
          border-radius: 10px 10px 0 0;
          border: 0;
          font-size: 1rem;
          color: #fff;
          background: #3d3d3d;
        }

        div {
          display: flex;
          justify-content: space-between;
          gap: 5px;
          color: #fff;
          margin-top: 5px;

          span {
            cursor: pointer;
            text-align: center;
            background: #3d3d3d;
            width: 100%;
            padding: 8px 0;

            &:first-child {
              border-radius: 0 0 0 10px;
            }

            &:last-child {
              border-radius: 0 0 10px 0;
            }

            &:hover {
              background-color: var(--purple);
              box-shadow: inset 2px 2px 4px #000, inset -2px -2px 4px #000;
            }
          }
        }

        button {
          margin-top: 10px;
          width: 100%;
          background: #3d3d3d;
          color: #fff;
          border: 0;
          padding: 10px 0;
          font-size: 1rem;
          border-radius: 10px;

          &:hover {
            background-color: var(--purple);
            box-shadow: inset 2px 2px 4px #000, inset -2px -2px 4px #000;
          }
        }
      }
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
