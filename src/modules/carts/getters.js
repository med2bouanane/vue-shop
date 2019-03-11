export function totalCost (state) {
    return state.carts.reduce((sum, product) => {
      return (parseFloat(product.price) * product.qty) + sum
    }, 0)
  }