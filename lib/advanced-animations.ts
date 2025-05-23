// Animaciones avanzadas para elementos interactivos

// Efecto de parallax para imágenes de fondo
export const parallaxEffect = (element: HTMLElement, scrollPosition: number, speed = 0.5) => {
  const offset = scrollPosition * speed
  element.style.transform = `translateY(${offset}px)`
}

// Efecto de revelación de texto letra por letra
export const revealTextByLetter = (element: HTMLElement, delay = 0.05) => {
  const text = element.innerText
  element.innerText = ""
  element.style.opacity = "1"

  Array.from(text).forEach((char, index) => {
    const span = document.createElement("span")
    span.innerText = char
    span.style.opacity = "0"
    span.style.display = "inline-block"
    span.style.transition = `opacity 0.2s ease-out ${delay * index}s, transform 0.3s ease-out ${delay * index}s`
    span.style.transform = "translateY(20px)"

    setTimeout(() => {
      span.style.opacity = "1"
      span.style.transform = "translateY(0)"
    }, 100)

    element.appendChild(span)
  })
}

// Efecto de desplazamiento 3D en hover
export const hover3DEffect = (element: HTMLElement) => {
  element.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = element.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5

    element.style.transform = `perspective(1000px) rotateX(${y * -5}deg) rotateY(${x * 5}deg) scale3d(1.02, 1.02, 1.02)`
    element.style.transition = "transform 0.1s ease-out"
  })

  element.addEventListener("mouseleave", () => {
    element.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"
    element.style.transition = "transform 0.5s ease-out"
  })
}

// Efecto de desplazamiento suave para navegación
export const smoothScrollTo = (targetId: string) => {
  const target = document.getElementById(targetId)
  if (!target) return

  window.scrollTo({
    top: target.offsetTop - 100,
    behavior: "smooth",
  })
}

// Efecto de contador animado
export const animateCounter = (element: HTMLElement, target: number, duration = 2000) => {
  let startTime: number | null = null
  const startValue = 0

  function updateCounter(timestamp: number) {
    if (!startTime) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / duration, 1)
    const currentValue = Math.floor(progress * (target - startValue) + startValue)
    element.innerText = currentValue.toString()

    if (progress < 1) {
      window.requestAnimationFrame(updateCounter)
    } else {
      element.innerText = target.toString()
    }
  }

  window.requestAnimationFrame(updateCounter)
}

// Efecto de imagen con zoom al hacer hover
export const imageZoomEffect = (element: HTMLElement) => {
  const img = element.querySelector("img")
  if (!img) return

  element.style.overflow = "hidden"
  img.style.transition = "transform 0.5s ease-out"

  element.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.1)"
  })

  element.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)"
  })
}

// Efecto de desvanecimiento para carrusel
export const carouselFadeEffect = (container: HTMLElement, interval = 5000) => {
  const slides = container.querySelectorAll(".carousel-slide")
  if (slides.length < 2) return

  let currentSlide = 0

  // Configurar estilos iniciales
  slides.forEach((slide, index) => {
    const el = slide as HTMLElement
    el.style.opacity = index === 0 ? "1" : "0"
    el.style.transition = "opacity 1s ease-in-out"
    el.style.position = "absolute"
    el.style.top = "0"
    el.style.left = "0"
    el.style.width = "100%"
    el.style.height = "100%"
  })

  // Iniciar carrusel
  setInterval(() => {
    const nextSlide = (currentSlide + 1) % slides.length

    // Ocultar slide actual
    ;(slides[currentSlide] as HTMLElement).style.opacity = "0"

    // Mostrar siguiente slide
    ;(slides[nextSlide] as HTMLElement).style.opacity = "1"

    currentSlide = nextSlide
  }, interval)
}

// Efecto de partículas flotantes
export const floatingParticles = (canvas: HTMLCanvasElement, particleCount = 50) => {
  const ctx = canvas.getContext("2d")
  if (!ctx) return

  // Ajustar tamaño del canvas
  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  window.addEventListener("resize", resizeCanvas)
  resizeCanvas()

  // Crear partículas
  const particles: {
    x: number
    y: number
    radius: number
    color: string
    speedX: number
    speedY: number
  }[] = []

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      color: `rgba(215, 191, 128, ${Math.random() * 0.5 + 0.1})`, // Color dorado con opacidad variable
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25,
    })
  }

  // Animar partículas
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((particle) => {
      // Mover partícula
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Rebote en los bordes
      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

      // Dibujar partícula
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.fill()
    })

    requestAnimationFrame(animate)
  }

  animate()
}

// Efecto de texto que sigue al cursor
export const cursorFollowText = (element: HTMLElement, offset = 20) => {
  const text = document.createElement("div")
  text.className = "cursor-follow-text"
  text.style.position = "fixed"
  text.style.pointerEvents = "none"
  text.style.opacity = "0"
  text.style.transition = "opacity 0.3s ease"
  text.style.zIndex = "9999"
  text.style.color = "#D7BF80"
  text.style.fontWeight = "bold"
  text.style.fontSize = "14px"
  text.innerText = element.dataset.hoverText || "Ver más"

  document.body.appendChild(text)

  element.addEventListener("mouseenter", () => {
    text.style.opacity = "1"
  })

  element.addEventListener("mousemove", (e) => {
    text.style.left = `${e.clientX + offset}px`
    text.style.top = `${e.clientY + offset}px`
  })

  element.addEventListener("mouseleave", () => {
    text.style.opacity = "0"
  })
}

// Efecto de desplazamiento de imágenes en carrusel
export const imageSlider = (container: HTMLElement, autoplay = true, interval = 3000) => {
  const slider = container.querySelector(".slider-track") as HTMLElement
  if (!slider) return

  const slides = slider.querySelectorAll(".slider-slide")
  if (slides.length < 2) return

  const slideWidth = (slides[0] as HTMLElement).offsetWidth
  let currentSlide = 0

  // Configurar slider
  slider.style.display = "flex"
  slider.style.transition = "transform 0.5s ease-in-out"

  // Función para ir a un slide específico
  const goToSlide = (index: number) => {
    currentSlide = index
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`

    // Actualizar indicadores si existen
    const indicators = container.querySelectorAll(".slider-indicator")
    indicators.forEach((indicator, i) => {
      if (i === currentSlide) {
        indicator.classList.add("active")
      } else {
        indicator.classList.remove("active")
      }
    })
  }

  // Crear controles de navegación
  const createControls = () => {
    const prevBtn = document.createElement("button")
    prevBtn.className = "slider-prev"
    prevBtn.innerHTML = "&lt;"
    prevBtn.style.position = "absolute"
    prevBtn.style.top = "50%"
    prevBtn.style.left = "10px"
    prevBtn.style.transform = "translateY(-50%)"
    prevBtn.style.zIndex = "2"
    prevBtn.style.background = "rgba(0,0,0,0.5)"
    prevBtn.style.color = "white"
    prevBtn.style.border = "none"
    prevBtn.style.borderRadius = "50%"
    prevBtn.style.width = "40px"
    prevBtn.style.height = "40px"
    prevBtn.style.cursor = "pointer"

    const nextBtn = document.createElement("button")
    nextBtn.className = "slider-next"
    nextBtn.innerHTML = "&gt;"
    nextBtn.style.position = "absolute"
    nextBtn.style.top = "50%"
    nextBtn.style.right = "10px"
    nextBtn.style.transform = "translateY(-50%)"
    nextBtn.style.zIndex = "2"
    nextBtn.style.background = "rgba(0,0,0,0.5)"
    nextBtn.style.color = "white"
    nextBtn.style.border = "none"
    nextBtn.style.borderRadius = "50%"
    nextBtn.style.width = "40px"
    nextBtn.style.height = "40px"
    nextBtn.style.cursor = "pointer"

    container.appendChild(prevBtn)
    container.appendChild(nextBtn)

    prevBtn.addEventListener("click", () => {
      const newIndex = (currentSlide - 1 + slides.length) % slides.length
      goToSlide(newIndex)
    })

    nextBtn.addEventListener("click", () => {
      const newIndex = (currentSlide + 1) % slides.length
      goToSlide(newIndex)
    })
  }

  // Crear indicadores
  const createIndicators = () => {
    const indicators = document.createElement("div")
    indicators.className = "slider-indicators"
    indicators.style.position = "absolute"
    indicators.style.bottom = "20px"
    indicators.style.left = "50%"
    indicators.style.transform = "translateX(-50%)"
    indicators.style.display = "flex"
    indicators.style.gap = "10px"

    slides.forEach((_, i) => {
      const dot = document.createElement("button")
      dot.className = `slider-indicator ${i === 0 ? "active" : ""}`
      dot.style.width = "10px"
      dot.style.height = "10px"
      dot.style.borderRadius = "50%"
      dot.style.background = i === 0 ? "#D7BF80" : "rgba(255,255,255,0.5)"
      dot.style.border = "none"
      dot.style.padding = "0"
      dot.style.cursor = "pointer"

      dot.addEventListener("click", () => goToSlide(i))
      indicators.appendChild(dot)
    })

    container.appendChild(indicators)
  }

  // Iniciar autoplay
  let autoplayInterval: number | null = null

  if (autoplay) {
    autoplayInterval = window.setInterval(() => {
      const newIndex = (currentSlide + 1) % slides.length
      goToSlide(newIndex)
    }, interval)

    // Pausar autoplay al hacer hover
    container.addEventListener("mouseenter", () => {
      if (autoplayInterval !== null) {
        clearInterval(autoplayInterval)
        autoplayInterval = null
      }
    })

    container.addEventListener("mouseleave", () => {
      if (autoplayInterval === null) {
        autoplayInterval = window.setInterval(() => {
          const newIndex = (currentSlide + 1) % slides.length
          goToSlide(newIndex)
        }, interval)
      }
    })
  }

  // Inicializar
  createControls()
  createIndicators()
}
