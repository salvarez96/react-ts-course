import Head from 'next/head'
import RandomFox from '@/components/RandomFox'
import { useState } from 'react'

const randomNumber = () => Math.floor(Math.random() * 123) + 1

export default function Home() {
  
  const image = `https://randomfox.ca/images/${randomNumber()}.jpg`

  const [images, setImages] = useState<string[]>([image])

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
        {images.map((image, i) => (
          <div key={i}>
            <RandomFox image={image} />
          </div>
        ))}
      </main>
    </>
  )
}
