import React from 'react'
import logoImg from '@/assets/logo.png'
import classes from './MainHeader.module.css'
import Link from 'next/link'
import Image from 'next/image'
import MainHeaderBackground from './MainHeaderBackground'
import NavLink from './NavLink'

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground/>
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority/>
          Foodie's Paradise
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader
