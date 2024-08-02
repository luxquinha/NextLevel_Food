import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'fs';

const db = sql('meals.db');

export async function getMeals(){
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error('Failed to fetch meals data');
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug){
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function addMeal(meal){
  // Create a slug based on the meal title and format the instructions
  meal.slug = slugify(meal.title, {lower: true});
  meal.instructions = xss(meal.instructions);
  // Create a file name based on the slug and the image extension (JPEG or PNG)
  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;
  // Create a path to image
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const imageBuffered = await meal.image.arrayBuffer();
  // Save the image buffered on the public/images folder
  stream.write(Buffer.from(imageBuffered), (error)=>{
    if(error){
      throw new Error('Failed to save image');
    }
  });

  meal.image = `/images/${fileName}`

  db.prepare(
  `INSERT INTO meals 
    (title, summary, instructions, creator, creator_email, image, slug)
  VALUES(
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @image,
    @slug
  )`).run(meal);
}