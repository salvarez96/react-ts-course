/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

export default function RandomFox(props: { image: string }) {
  
  return (
    // Image didn't work, so I won't waste more time trying to debbug it
    // <Image
    //   src={image}
    //   alt='A random foxy fox'
    //   width={200}
    //   height={200}
    // />
    <img src={props.image} alt="a foxy fox" width={320} />
  )
}
