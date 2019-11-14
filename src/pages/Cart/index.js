import React from 'react'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdRemoveShoppingCart,
} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Total, Container, ProductTable } from './styles'
import * as CartActions from '../../store/modules/cart/actions'
import { formatPrice } from '../../utils/format'

const Cart = () => {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.ammount
      }, 0)
    )
  )
  const cartSize = useSelector(state => state.cart.length)
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.ammount),
    }))
  )

  const dispatch = useDispatch()

  const increment = product => {
    dispatch(CartActions.updateAmmountRequest(product.id, product.ammount + 1))
  }
  const decrement = product => {
    dispatch(CartActions.updateAmmountRequest(product.id, product.ammount - 1))
  }

  if (cartSize === 0) {
    return (
      <Container>
        <div>
          <MdRemoveShoppingCart color='#aaa' size={65} />
          <h1>Carrinho vazio</h1>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt='tenis' />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.formatedPrice}</span>
              </td>
              <td>
                <div>
                  <button type='button' onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline color='#7159c1' size={20} />
                  </button>
                  <input type='number' readOnly value={product.ammount} />
                  <button type='button' onClick={() => increment(product)}>
                    <MdAddCircleOutline color='#7159c1' size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type='button'
                  onClick={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <MdDelete size={20} color='#7159c1' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type='button'>Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  )
}

export default Cart
