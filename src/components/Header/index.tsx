import { RiHome2Line, RiUserLine } from 'react-icons/ri'
import { BsGear } from 'react-icons/bs'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <h1>
        Movies.<span>Info</span>
      </h1>
      <div>
        <RiUserLine />
        <RiHome2Line className='house'/>
        <BsGear />
      </div>
    </Container>
  )
}
