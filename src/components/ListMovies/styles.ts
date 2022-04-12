import styled from 'styled-components'

interface H2Props {
    backgroundImage: string
}

export const Container = styled.div`
  
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
