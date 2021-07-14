import {
  roupa01,
  roupa02,
  roupa03,
  roupa04,
  roupa05,
  roupa06,
  roupa07,
  roupa08,
} from '../pages/api/images'
import Image from 'next/image'
import Link from 'next/link'
import { fetchProducts } from '../pages/api'
import { React, useState, useEffect } from 'react'

const Catalogo = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(fetchProducts())
  }, [])

  return (
    <div className='container'>
      <h1>COLEÇÃO DE VERÃO</h1>
      <section className='parent'>
        {products.map((prod) => (
          <Link href={`/${prod.id}`} key={prod.id}>
            <a>
              <div className='card'>
                <Image src={roupa08} alt={prod.title} />
                <div className='container'>
                  <p className='nome-roupa'>{prod.title}</p>
                  <p className='preco-roupa'>R$ {prod.price}</p>
                  <p className='parcela-roupa'>{prod.installments}</p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Catalogo
