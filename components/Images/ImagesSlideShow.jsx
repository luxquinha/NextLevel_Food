'use client'

import {useState, useEffect} from 'react'
import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import classes from './ImagesSlideShow.module.css';

const images = [
  {image: burgerImg, alt: 'A delicous, juicy burger'},
  {image: curryImg, alt: 'A spicy curry dish'},
  {image: dumplingsImg, alt: 'A plate of dumplings'},
  {image: macncheeseImg, alt: 'A bowl of mac and cheese'},
  {image: pizzaImg, alt: 'A slice of pizza'},
  {image: schnitzelImg, alt: 'A crispy schnitzel'},
  {image: tomatoSaladImg, alt: 'A fresh tomato salad'}
]

const ImagesSlideShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  )
}

export default ImagesSlideShow
