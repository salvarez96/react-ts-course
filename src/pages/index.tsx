import Head from 'next/head'
import RandomFox from '@/components/RandomFox'
import { useState } from 'react'

const randomNumber = () => Math.floor(Math.random() * 123) + 1

type ImageItems = {
  id: string,
  url: string
}

const generateId = () => Math.random().toString(36).substring(2).repeat(3)

export default function Home() {
  
  const image = `https://randomfox.ca/images/${randomNumber()}.jpg`

  const [images, setImages] = useState<ImageItems[]>([{ id: generateId(), url: image}])

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
        {images.map((image) => (
          <div key={image.id}>
            <RandomFox image={image.url} />
          </div>
        ))}
      </main>
    </>
  )
}
