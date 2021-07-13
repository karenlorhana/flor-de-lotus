import products from './products'

export const fetchProducts = () => {
  return products
}

export const fetchProductById = (id) => {
  return products.find((prod) => prod.id === id)
}
