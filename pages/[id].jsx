import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { fetchProductById } from './api'
import Link from 'next/link'
import Navbar from '../components/navbar'

import { Button, Icon, ShoppingCartIcon } from '@material-ui/core'
import Produto from '../components/produto'

const Product = () => {
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    console.log(fetchProductById(parseInt(id)))
  }, [id])

  return (
    <div>
      <Navbar />
      <br></br>
      <Produto id={id} />
    </div>
  )
}

export default Product
