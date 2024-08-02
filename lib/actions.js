'use server'

import { redirect } from "next/navigation"
import { addMeal } from "./meals"

function isValidText(text) {
  return !text || text.trim() === ''
}

export async function shareMeal(currentState, formData) {
  const meal = {
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image')
  }

  if(
    isValidText(meal.creator) ||
    isValidText(meal.creator_email) ||
    isValidText(meal.title) ||
    isValidText(meal.summary) ||
    isValidText(meal.instructions) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    !meal.image.size === 0
  ) { throw new Error('Invalid form data') }

  await addMeal(meal)
  redirect('/meals')
}