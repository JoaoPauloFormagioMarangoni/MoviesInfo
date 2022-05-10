import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: ${(props) => props.theme.colors.background};
        --purple: ${(props) => props.theme.colors.primary};
        --text: ${(props) => props.theme.colors.text};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
      @media (max-width: 1080px) {
          font-size: 93.75%; // 15px
      }

      @media (max-width: 720px) {
          font-size: 87.5%; // 14px
      }
    }

    body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }

`
