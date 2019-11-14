import React from 'react'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Total, Container, ProductTable } from './styles'
import * as CartActions from '../../store/modules/cart/actions'
import { formatPrice } from '../../utils/format'

const Cart = ({ cart, removeFromCart, updateProductAmmount, total }) => {
  const increment = product => {
    updateProductAmmount(product.id, product.ammount + 1)
  }
  const decrement = product => {
    updateProductAmmount(product.id, product.ammount - 1)
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
                  onClick={() => removeFromCart(product.id)}
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

function mapStateToProps(state) {
  return {
    cart: state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.ammount),
    })),
    total: formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.ammount
      }, 0)
    ),
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
