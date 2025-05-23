"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageCarouselProps {
  images: string[]
  autoplay?: boolean
  interval?: number
  height?: number
}

export function ImageCarousel({ images, autoplay = true, interval = 5000, height = 500 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (autoplay && !isHovered) {
      timerRef.current = setInterval(nextSlide, interval)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [autoplay, interval, isHovered])

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      style={{ height: `${height}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <div className="h-full relative">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all duration-300 opacity-0 hover:opacity-100 focus:opacity-100 z-10"
        onClick={prevSlide}
        style={{ opacity: isHovered ? 0.7 : 0 }}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all duration-300 opacity-0 hover:opacity-100 focus:opacity-100 z-10"
        onClick={nextSlide}
        style={{ opacity: isHovered ? 0.7 : 0 }}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-gold w-6" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
