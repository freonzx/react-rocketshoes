import React from 'react'
import { Link } from 'react-router-dom'
import { MdShoppingCart } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Container, Cart } from './styles'
import Logo from '../../assets/images/logo.svg'

const Header = () => {
  const cartSize = useSelector(state => state.cart.length)

  return (
    <Container>
      <Link to='/'>
        <img src={Logo} alt='Rocketshoes' />
      </Link>

      <Cart to='/cart'>
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingCart size={36} color='#fff' />
      </Cart>
    </Container>
  )
}
export default Header
