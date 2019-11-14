export function addToCart(product) {
  return {
    type: '@cart/ADD',
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
