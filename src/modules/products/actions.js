// import setProducts from './mutations'
// let fetchProducts = async ({ state, commit, dispatch, rootState }) => {
//     const data = await fetch('/fixtures/products.json')
//     const products = await data.json()
//     commit(setProducts, products, { root: true })
// }

// export default fetchProducts


export async function fetchProducts({ state, commit, dispatch, rootState }) {
    const data = await fetch('/fixtures/products.json')
    const products = await data.json()
    commit('products/setProducts', products, { root: true })
    // keep the data "products" in the mutation 'products/setProducts'
    // commit('mutation-method', data, { root: true }) 
}
