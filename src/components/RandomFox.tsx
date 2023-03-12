/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

const randomNumber = () => Math.floor(Math.random() * 123) + 1

export default function RandomFox() {

  const image = `https://randomfox.ca/images/${randomNumber()}.jpg`

  return (
    // Image didn't work, so I won't waste more time trying to debbug it
    // <Image
    //   src={image}
    //   alt='A random foxy fox'
    //   width={200}
    //   height={200}
    // />
    <img src={image} alt="a foxy fox" width={320} />
  )
}
