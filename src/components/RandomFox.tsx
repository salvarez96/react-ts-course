/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react'

export default function RandomFox(props: { image: string }) {
  
  const node = useRef<HTMLImageElement>(null)

  node.current?.src

  return (
    <img ref={node} src={props.image} alt="a foxy fox" width={320} />
  )
}
