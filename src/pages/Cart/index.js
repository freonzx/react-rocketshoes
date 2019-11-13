import React from 'react'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md'
import { Total, Container, ProductTable } from './styles'

const Cart = () => {
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
          <tr>
            <td>
              <img
                src='https://static.netshoes.com.br/produtos/tenis-vr-caminhada-confortavel-detalhes-couro-masculino/06/E74-0413-006/E74-0413-006_zoom1.jpg'
                alt='tenis'
              />
            </td>
            <td>
              <strong>Tênis muito bom</strong>
              <span>R$ 129,90</span>
            </td>
            <td>
              <div>
                <button type='button'>
                  <MdRemoveCircleOutline color='#7159c1' size={20} />
                </button>
                <input type='number' readOnly value={1} />
                <button type='button'>
                  <MdAddCircleOutline color='#7159c1' size={20} />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 250,00</strong>
            </td>
            <td>
              <button type='button'>
                <MdDelete size={20} color='#7159c1' />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type='button'>Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$ 1920,00</strong>
        </Total>
      </footer>
    </Container>
  )
}

export default Cart
