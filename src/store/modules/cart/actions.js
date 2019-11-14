export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  }
}
export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCESS',
    product,
  }
}
export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  }
}
export function updateProductAmmount(id, ammount) {
  return {
    type: '@cart/UPDATE_AMMOUNT',
    id,
    ammount,
  }
}