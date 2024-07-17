import React from 'react'
import logoImg from '../assets/logo.png'
import classes from './MainHeader.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="A plate with food on it" priority/>
        Next Level Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
