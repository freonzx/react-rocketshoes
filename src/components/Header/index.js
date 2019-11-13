import React from 'react'
import { Link } from 'react-router-dom'
import { MdShoppingCart } from 'react-icons/md'
import { Container, Cart } from './styles'
import Logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <Container>
      <Link to='/'>
        <img src={Logo} alt='Rocketshoes' />
      </Link>

      <Cart to='/cart'>
        <div>
          <strong>Meu carrinho</strong>
          <span>3 items</span>
        </div>
        <MdShoppingCart size={36} color='#fff' />
      </Cart>
    </Container>
  )
}

export default Header
