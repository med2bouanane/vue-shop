
import { find, filter } from 'lodash'

export function addProduct(state, product) {
  const productInCart = find(state.carts, { id: product.id })
  if ( ! productInCart) {
    const copy = Object.assign({}, product)
    copy.qty = 1
    state.carts.push(copy)
  } else {
    productInCart.qty += 1
  }
}

export function removeProductFromCart (state, product) {
  state.carts = filter(state.carts, ({id}) => id !== product.id)
}