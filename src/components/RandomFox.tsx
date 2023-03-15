/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect, useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}

export default function LazyImage({src, alt, ...props}: LazyImageProps) {
  
  const node = useRef<HTMLImageElement>(null)

  const [currentSrc, setCurrentSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSrc(src)
        }
      })
    })
    
    node.current ? intersectionObserver.observe(node.current) : ''

    return () => { intersectionObserver.disconnect() }
  }, [src])

  return (
    <img ref={node} src={currentSrc} alt={alt} {...props} />
  )
}
