"use client"

import type { ReactNode } from "react"
import Image from "next/image"

interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage: string
  height?: number
  children?: ReactNode
}

export function HeroSection({ title, subtitle, backgroundImage, height = 300, children }: HeroSectionProps) {
  return (
    <div className="relative h-[300px] bg-navy-dark">
      <div className="absolute inset-0 bg-navy/70 z-10"></div>
      <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" />

      {/* Partículas flotantes */}
      <canvas className="absolute inset-0 z-20 pointer-events-none" data-particles data-particles-count="70"></canvas>

      <div className="relative z-30 container mx-auto h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-logo tracking-wider mb-4 md:mb-6" data-text-reveal>
          {title}
        </h1>
        {subtitle && (
          <p className="text-gold tracking-widest max-w-2xl mx-auto" data-animation="fade" data-delay="0.4">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  )
}
