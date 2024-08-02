'use client'

import React, { useRef, useState } from 'react'
import classes from './ImagePicker.module.css'
import Image from 'next/image'

const ImagePicker = ({label, name}) => {
  const imageInput = useRef()
  const [pickedImage, setPickedImage] = useState(null)
  const handlePickImage = () => {
    imageInput.current.click()
  }

  function handleImageChange(event) {
    const file = event.target.files[0]

    if(!file){
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    } 
    fileReader.readAsDataURL(file)

  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage!==null ? 
          <Image src={pickedImage} alt='The choosen Image' fill objectFit='cover'/> 
          :<p>No image picked yet.</p>}
        </div>
        <input 
        type="file" 
        id={name} 
        accept='image/png, image/jpeg' 
        name={name} 
        className={classes.input} 
        ref={imageInput} 
        onChange={handleImageChange}
        required/>
        <button 
        type='button' 
        className={classes.button} 
        onClick={handlePickImage}>
          Choose an Image
        </button>
      </div>
      
    </div>
  )
}

export default ImagePicker
