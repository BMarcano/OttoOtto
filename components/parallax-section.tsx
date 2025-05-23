"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface ParallaxSectionProps {
  imageUrl: string
  height?: number
  children: React.ReactNode
  overlayOpacity?: number
  speed?: number
}

export function ParallaxSection({
  imageUrl,
  height = 500,
  children,
  overlayOpacity = 0.5,
  speed = 0.5,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const { top } = sectionRef.current.getBoundingClientRect()
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Solo aplicar parallax cuando la sección está visible
      if (top < windowHeight && top > -height) {
        const sectionTop = scrollPosition + top
        const offset = (scrollPosition - sectionTop) * speed
        setOffsetY(offset)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Inicializar

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [height, speed])

  return (
    <div ref={sectionRef} className="relative overflow-hidden" style={{ height: `${height}px` }}>
      <div className="absolute inset-0 w-full h-full" style={{ transform: `translateY(${offsetY}px)` }}>
        <Image src={imageUrl || "/placeholder.svg"} alt="Parallax background" fill className="object-cover" />
      </div>

      <div className="absolute inset-0 bg-navy-dark" style={{ opacity: overlayOpacity }}></div>

      <div className="relative z-10 h-full flex items-center justify-center">{children}</div>
    </div>
  )
}
