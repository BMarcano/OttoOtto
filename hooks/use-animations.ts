"use client"

import { useEffect, useRef } from "react"
import { createIntersectionObserver } from "@/lib/animations"

export function useAnimations() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Crear el observer
    observerRef.current = createIntersectionObserver()

    if (!observerRef.current) return

    // Seleccionar todos los elementos con el atributo data-animation
    const animatedElements = document.querySelectorAll("[data-animation]")

    // Observar cada elemento
    animatedElements.forEach((element) => {
      observerRef.current?.observe(element)
    })

    // Limpiar el observer cuando el componente se desmonte
    return () => {
      if (observerRef.current) {
        animatedElements.forEach((element) => {
          observerRef.current?.unobserve(element)
        })
      }
    }
  }, [])

  return null
}

export function useHoverAnimation() {
  useEffect(() => {
    // Seleccionar todos los elementos con el atributo data-hover-animation
    const hoverElements = document.querySelectorAll("[data-hover-animation]")

    // Añadir listeners para hover
    hoverElements.forEach((element) => {
      const el = element as HTMLElement
      const originalTransform = el.style.transform
      const originalTransition = el.style.transition

      el.addEventListener("mouseenter", () => {
        const animationType = el.dataset.hoverAnimation

        switch (animationType) {
          case "scale":
            el.style.transform = `${originalTransform} scale(1.05)`
            el.style.transition = "transform 0.3s ease-out"
            break
          case "lift":
            el.style.transform = `${originalTransform} translateY(-5px)`
            el.style.transition = "transform 0.3s ease-out"
            break
          case "glow":
            el.style.boxShadow = "0 0 15px rgba(215, 191, 128, 0.5)"
            el.style.transition = "box-shadow 0.3s ease-out"
            break
        }
      })

      el.addEventListener("mouseleave", () => {
        const animationType = el.dataset.hoverAnimation

        switch (animationType) {
          case "scale":
          case "lift":
            el.style.transform = originalTransform
            el.style.transition = originalTransition
            break
          case "glow":
            el.style.boxShadow = "none"
            el.style.transition = originalTransition
            break
        }
      })
    })

    // Limpiar los event listeners
    return () => {
      hoverElements.forEach((element) => {
        const el = element as HTMLElement
        el.removeEventListener("mouseenter", () => {})
        el.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])

  return null
}
