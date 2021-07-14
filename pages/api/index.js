import products from './products'

export const fetchProducts = () => {
  return products
}

export const fetchProductsById = (idList) => {
  return products.filter((p) => {
    return idList.indexOf(p.id) !== -1
  })
}

export const fetchProductById = (id) => {
  return products.find((prod) => prod.id === id)
}
