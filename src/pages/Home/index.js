import React, { useState, useEffect } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { ProductList } from './styles'
import api from '../../services/api'
import { formatPrice } from '../../utils/format'
import * as CartActions from '../../store/modules/cart/actions'

const Home = () => {
  const [products, setProducts] = useState([])
  const ammount = useSelector(state =>
    state.cart.reduce((sumAmmount, product) => {
      sumAmmount[product.id] = product.ammount

      return sumAmmount
    }, {})
  )

  const dispatch = useDispatch()

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('products')

      const data = response.data.map(product => ({
        ...product,
        formatedPrice: formatPrice(product.price),
      }))

      setProducts(data)
    }

    getProducts()
  }, [])

  const handleAddProduct = product => {
    dispatch(CartActions.addToCartRequest(product.id))
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt='tenis' />
          <strong>{product.title}</strong>
          <span>{product.formatedPrice}</span>
          <button type='button' onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color='#fff' />
              {ammount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}
// const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default Home
