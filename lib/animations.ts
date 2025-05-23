// Función para animar elementos cuando aparecen en el viewport
export const fadeInAnimation = (element: HTMLElement, delay = 0) => {
  element.style.opacity = "0"
  element.style.transform = "translateY(20px)"
  element.style.transition = `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`

  setTimeout(() => {
    element.style.opacity = "1"
    element.style.transform = "translateY(0)"
  }, 100)
}

// Función para animar elementos con un efecto de zoom suave
export const zoomInAnimation = (element: HTMLElement, delay = 0) => {
  element.style.opacity = "0"
  element.style.transform = "scale(0.95)"
  element.style.transition = `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`

  setTimeout(() => {
    element.style.opacity = "1"
    element.style.transform = "scale(1)"
  }, 100)
}

// Función para animar elementos con un efecto de deslizamiento desde la izquierda
export const slideInLeftAnimation = (element: HTMLElement, delay = 0) => {
  element.style.opacity = "0"
  element.style.transform = "translateX(-20px)"
  element.style.transition = `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`

  setTimeout(() => {
    element.style.opacity = "1"
    element.style.transform = "translateX(0)"
  }, 100)
}

// Función para animar elementos con un efecto de deslizamiento desde la derecha
export const slideInRightAnimation = (element: HTMLElement, delay = 0) => {
  element.style.opacity = "0"
  element.style.transform = "translateX(20px)"
  element.style.transition = `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`

  setTimeout(() => {
    element.style.opacity = "1"
    element.style.transform = "translateX(0)"
  }, 100)
}

// Función para observar elementos y animarlos cuando entran en el viewport
export const createIntersectionObserver = () => {
  if (typeof window === "undefined" || !window.IntersectionObserver) return

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement
        const animationType = element.dataset.animation || "fade"
        const delay = Number.parseFloat(element.dataset.delay || "0")

        switch (animationType) {
          case "fade":
            fadeInAnimation(element, delay)
            break
          case "zoom":
            zoomInAnimation(element, delay)
            break
          case "left":
            slideInLeftAnimation(element, delay)
            break
          case "right":
            slideInRightAnimation(element, delay)
            break
          default:
            fadeInAnimation(element, delay)
        }

        observer.unobserve(element)
      }
    })
  }

  return new IntersectionObserver(handleIntersect, observerOptions)
}
