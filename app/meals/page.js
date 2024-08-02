import React, { Suspense } from 'react'
import classes from './page.module.css'
import Link from 'next/link'
import MealsGrid from '@/components/Meals/MealsGrid'
import { getMeals } from '@/lib/meals'

async function Meals (){
  const meals = await getMeals()
  return <MealsGrid meals={meals} />
}

export const metadata = {
  title:'Browse meals',
  description:'Browse delicious meals created and shared by the community'}

async function MealsPage () {

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created{' '} 
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose tou favorite recipe and cook it yoursel, It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share'>
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading the Meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}

export default MealsPage