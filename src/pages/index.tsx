import Head from 'next/head'
import { Inter } from 'next/font/google'
import RandomFox from '@/components/RandomFox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
        <RandomFox />
      </main>
    </>
  )
}
