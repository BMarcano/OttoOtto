"use client"

import { useEffect } from "react"
import {
  parallaxEffect,
  revealTextByLetter,
  hover3DEffect,
  animateCounter,
  imageZoomEffect,
  carouselFadeEffect,
  floatingParticles,
  cursorFollowText,
  imageSlider,
} from "@/lib/advanced-animations"

export function useParallaxEffect() {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll("[data-parallax]")
    if (!parallaxElements.length) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      parallaxElements.forEach((element) => {
        const el = element as HTMLElement
        const speed = Number.parseFloat(el.dataset.parallaxSpeed || "0.5")
        parallaxEffect(el, scrollPosition, speed)
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Inicializar posiciones

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return null
}

export function useTextRevealEffect() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            const delay = Number.parseFloat(element.dataset.textRevealDelay || "0.05")
            revealTextByLetter(element, delay)
            observer.unobserve(element)
          }
        })
      },
      { threshold: 0.1 },
    )

    const textElements = document.querySelectorAll("[data-text-reveal]")
    textElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      textElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  return null
}

export function use3DHoverEffect() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-3d-hover]")
    elements.forEach((element) => {
      hover3DEffect(element as HTMLElement)
    })
  }, [])

  return null
}

export function useCounterAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            const target = Number.parseInt(element.dataset.counterTarget || "0", 10)
            const duration = Number.parseInt(element.dataset.counterDuration || "2000", 10)
            animateCounter(element, target, duration)
            observer.unobserve(element)
          }
        })
      },
      { threshold: 0.1 },
    )

    const counterElements = document.querySelectorAll("[data-counter]")
    counterElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      counterElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  return null
}

export function useImageZoomEffect() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-image-zoom]")
    elements.forEach((element) => {
      imageZoomEffect(element as HTMLElement)
    })
  }, [])

  return null
}

export function useCarouselEffect() {
  useEffect(() => {
    const carousels = document.querySelectorAll("[data-carousel]")
    carousels.forEach((carousel) => {
      const interval = Number.parseInt((carousel as HTMLElement).dataset.carouselInterval || "5000", 10)
      carouselFadeEffect(carousel as HTMLElement, interval)
    })
  }, [])

  return null
}

export function useParticlesEffect() {
  useEffect(() => {
    const canvases = document.querySelectorAll("canvas[data-particles]")
    canvases.forEach((canvas) => {
      const count = Number.parseInt((canvas as HTMLElement).dataset.particlesCount || "50", 10)
      floatingParticles(canvas as HTMLCanvasElement, count)
    })
  }, [])

  return null
}

export function useCursorFollowText() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-cursor-text]")
    elements.forEach((element) => {
      const offset = Number.parseInt((element as HTMLElement).dataset.cursorOffset || "20", 10)
      cursorFollowText(element as HTMLElement, offset)
    })
  }, [])

  return null
}

export function useImageSlider() {
  useEffect(() => {
    const sliders = document.querySelectorAll("[data-slider]")
    sliders.forEach((slider) => {
      const autoplay = (slider as HTMLElement).dataset.sliderAutoplay !== "false"
      const interval = Number.parseInt((slider as HTMLElement).dataset.sliderInterval || "3000", 10)
      imageSlider(slider as HTMLElement, autoplay, interval)
    })
  }, [])

  return null
}

export function useAllAdvancedAnimations() {
  useParallaxEffect()
  useTextRevealEffect()
  use3DHoverEffect()
  useCounterAnimation()
  useImageZoomEffect()
  useCarouselEffect()
  useParticlesEffect()
  useCursorFollowText()
  useImageSlider()

  return null
}
