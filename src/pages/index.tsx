import Head from 'next/head'
import LazyImage from '@/components/RandomFox'
import { useState } from 'react'
import type { MouseEventHandler } from 'react'
import { random } from 'lodash'

// const randomNumber = () => Math.floor(Math.random() * 123) + 1
const randomNumber = () => random(1, 123)

const generateId = () => Math.random().toString(36).substring(2).repeat(3)

export default function Home() {
  
  const image = `https://randomfox.ca/images/${randomNumber()}.jpg`

  const [images, setImages] = useState<IFoxImageItems[]>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    const newImgItem: IFoxImageItems = {
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
        {images.map((image, i) => (
          <div key={image.id}>
            <LazyImage 
              src={image.url} 
              alt='a foxy fox'
              onLazyLoad={(e) => setTimeout(() => console.log(`Image: ${i + 1}, src: ${e.src}`), 0)}
              width={320}
              />
          </div>
        ))}
      </main>
    </>
  )
}
