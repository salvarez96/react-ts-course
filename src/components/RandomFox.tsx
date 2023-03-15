/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect, useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

const defaultImg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string,
  onLazyLoad?: (node: HTMLImageElement) => void
}

export default function LazyImage({src, alt, onLazyLoad, ...imgOptionalAttrs}: LazyImageProps) {
  
  const node = useRef<HTMLImageElement>(null)
  
  const [currentSrc, setCurrentSrc] = useState(defaultImg)
  
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSrc(src)
          onLazyLoad && onLazyLoad(entry.target as HTMLImageElement)
          intersectionObserver.unobserve(entry.target)
        }
      })
    })
    
    node.current && intersectionObserver.observe(node.current)
    return () => { intersectionObserver.disconnect() }
  // DANGER ZONE:
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src])

  return (
    <img ref={node} src={currentSrc} alt={alt} {...imgOptionalAttrs} />
  )
}
