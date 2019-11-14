import { call, put, all, takeLatest, select } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import { formatPrice } from '../../../utils/format'

import { addToCartSuccess, updateProductAmmount } from './actions'

function* addToCart({ id }) {
  const productExists = yield select(state => state.cart.find(p => p.id === id))

  const stock = yield call(api.get, `/stock/${id}`)

  const stockAmmount = stock.data.amount
  const currentAmmount = productExists ? productExists.ammount : 0

  const ammount = currentAmmount + 1

  if (ammount > stockAmmount) {
    toast.error('Quantidade solicitada fora de estoque')
    return
  }

  if (productExists) {
    yield put(updateProductAmmount(id, ammount))
  } else {
    const response = yield call(api.get, `/products/${id}`)

    const data = {
      ...response.data,
      ammount: 1,
      priceFormated: formatPrice(response.data.price),
    }

    yield put(addToCartSuccess(data))
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)])
