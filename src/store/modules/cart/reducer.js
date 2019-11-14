import produce from 'immer'

function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCESS':
      return produce(state, draft => {
        draft.push(action.product)
      })
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id)

        if (productIndex >= 0) {
          draft.splice(productIndex, 1)
        }
      })
    case '@cart/UPDATE_AMMOUNT': {
      if (action.ammount <= 0) {
        return state
      }

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id)

        if (productIndex >= 0) {
          draft[productIndex].ammount = Number(action.ammount)
        }
      })
    }
    default:
      return state
  }
}

export default cart
