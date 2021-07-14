import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import PersonIcon from '@material-ui/icons/Person'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Icon } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { useRouter } from 'next/router'
import Carrinho from '../pages/carrinho'

const Produto = ({ id }) => {
  const router = useRouter()
  const [item, setTitle] = useState('')
  const handleClick = () => {
    router.push(`/carrinho`)
    // router.push(`/carrinho/${id}`)
  }

  {
    /*
  const handleSubmit = (e) => {
    fetch('http://localhost:8000/carrinho', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ item }),
    }).then(() => router.push('/carrinho'))
  }*/
  }

  return (
    <div>
      <Button
        className='adicionar-carrinho'
        variant='contained'
        color='secondary'
        endIcon={<ShoppingCartIcon />}
        onClick={handleClick}
        // onSubmit={(e) => setTitle(e.target.value)}
      >
        Adicionar ao carrinho
      </Button>
    </div>
  )
}

export default Produto
