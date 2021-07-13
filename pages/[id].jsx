import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { fetchProductById } from './api'
import Link from 'next/link'

const Product = () => {
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    console.log(fetchProductById(parseInt(id)))
  }, [id])

  return (
    <div>
      <Link href='/'>
        <button>voltar</button>
      </Link>
      <p>oie</p>
    </div>
  )
}

export default Product
