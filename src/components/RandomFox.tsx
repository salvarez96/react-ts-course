/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect, useState } from 'react'

export default function RandomFox(props: { image: string }) {
  
  const node = useRef<HTMLImageElement>(null)

  const [src, setSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      console.log(entries)
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSrc(props.image)
        }
      })
    })
    
    node.current ? intersectionObserver.observe(node.current) : ''

    return () => { intersectionObserver.disconnect() }
  }, [props.image])

  return (
    <img ref={node} src={src} alt="a foxy fox" width={320} />
  )
}
