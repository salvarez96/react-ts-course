import Head from 'next/head'
import LazyImage from '@/components/RandomFox'
import { useState } from 'react'
import type { MouseEventHandler } from 'react'

const randomNumber = () => Math.floor(Math.random() * 123) + 1

type ImageItems = {
  id: string,
  url: string
}

const generateId = () => Math.random().toString(36).substring(2).repeat(3)

export default function Home() {
  
  const image = `https://randomfox.ca/images/${randomNumber()}.jpg`

  const [images, setImages] = useState<ImageItems[]>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    const newImgItem: ImageItems = {
      id: generateId(),
      url: image
    }

    setImages([...images, newImgItem])
  }

  return (
    <>
      <Head>
        <title>React + TS Platzi project</title>
        <meta name="description" content="React + TS Platzi project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello, Platzi</h1>
        <button onClick={addNewFox}>Add new fox</button>
        {images.map((image) => (
          <div key={image.id}>
            <LazyImage 
              src={image.url} 
              alt='a foxy fox'
              width={320}
              onClick={(e) => console.log(e.currentTarget.src)} 
              />
          </div>
        ))}
      </main>
    </>
  )
}
