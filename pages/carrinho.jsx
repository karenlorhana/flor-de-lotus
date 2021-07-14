import { useEffect, useState } from 'react'
import { fetchProducts, fetchProductsById } from './api'
import Navbar from '../components/navbar'

const Carrinho = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    setProducts(
      fetchProductsById([
        'ciganinha-florzinhas-com-saia',
        'amarelo-florzinhas-com-saia',
      ])
    )

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div>
      <Navbar />

      {loading ? (
        <h1>Carregando</h1>
      ) : (
        products.map((prod) => (
          <ul key={prod.id}>
            <li className='product-added'>new product added: {prod.title}</li>
          </ul>
        ))
      )}
    </div>
  )
}

export default Carrinho
