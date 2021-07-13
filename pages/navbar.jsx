import React from 'react'
import Link from 'next/link'
import PersonIcon from '@material-ui/icons/Person'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Icon } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const Navbar = () => {
  return (
    <div className='nav-bg'>
      <nav className='navbar'>
        <section className='nav-sec'>
          <Link href='/'>
            <a className='categories'>FEMININO</a>
          </Link>
          <Link href='/'>
            <a className='categories'>MASCULINO</a>
          </Link>
          <Link href='/'>
            <a className='categories'>INFANTIL</a>
          </Link>
        </section>

        <Link href='/'>
          <a className='name-page'>FLOR DE LÓTUS</a>
        </Link>

        <section className='nav-sec'>
          <section className='frete-nav'>
            <span className='frete-color'>FRETE GRÁTIS</span>
            <span> em compras acima de R$99,90</span>
          </section>
          <Button>
            <Icon className='cart-icon'>
              <ShoppingCartIcon fontSize='medium' />
            </Icon>
          </Button>
          <Button>
            <Icon className='user-icon'>
              <PersonIcon fontSize='medium' />
            </Icon>
          </Button>
        </section>
      </nav>
    </div>
  )
}

export default Navbar
