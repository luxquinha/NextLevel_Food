'use client'

import React from 'react'

const error = () => {
  return (
    <main className='error'>
        <h1>Meal not found</h1>
        <p>unfortunately we can't find the meal data you search for. Verify the meal's name, please</p>
    </main>
  )
}

export default error