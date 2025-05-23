"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Star, StarHalf } from "lucide-react"
import { PropertyCard } from "@/components/property-card"
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
  // Referencias para las secciones
  const servicesRef = useRef<HTMLElement>(null)
  const homeRef = useRef<HTMLElement>(null)

  // Función para manejar la navegación a secciones
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "services" && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" })
    } else if (sectionId === "home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Manejar los enlaces de anclaje al cargar la página
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      setTimeout(() => {
        scrollToSection(id)
      }, 100)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-navy-dark text-white py-2 px-4 flex flex-col md:flex-row justify-between items-center text-xs">
        <div className="text-gray-300 text-center md:text-left mb-2 md:mb-0">
          <span className="text-gold">APOSTANDO POR OTTO+OTTO, GANAS VOS</span>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gold" />
            <span>GORLERO 1047 PUNTA DEL ESTE</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-gold" />
            <span>‪+598 99 383 564</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white py-4 border-b border-gray-200 sticky top-0 z-30">
        <nav className="container mx-auto flex items-center justify-between px-4 lg:justify-center">
          {/* Logo para móviles */}
          <div className="flex lg:hidden items-center">
            <div className="flex flex-col items-center">
              <div className="text-xl font-logo tracking-wider text-navy">OTTO+OTTO</div>
              <div className="text-xs tracking-widest text-gold-dark">NEGOCIOS INMOBILIARIOS</div>
            </div>
          </div>

          {/* Menú de escritorio */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-sm font-medium hover:text-gold transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("home")
              }}
            >
              INICIO
            </Link>
            <Link href="/proyectos" className="text-sm font-medium hover:text-gold transition-colors duration-300">
              PROYECTOS
            </Link>
            <Link href="/en-venta" className="text-sm font-medium hover:text-gold transition-colors duration-300">
              EN VENTA
            </Link>
            <Link href="/alquiler" className="text-sm font-medium hover:text-gold transition-colors duration-300">
              ALQUILER
            </Link>

            {/* Logo */}
            <Link
              href="#home"
              className="px-8 group"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("home")
              }}
            >
              <div className="flex flex-col items-center">
                <div className="text-2xl font-logo tracking-wider text-navy group-hover:text-gold-dark transition-colors duration-300">
                  OTTO+OTTO
                </div>
                <div className="text-xs tracking-widest text-gold-dark">NEGOCIOS INMOBILIARIOS</div>
              </div>
            </Link>

            <Link
              href="#services"
              className="text-sm font-medium hover:text-gold transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("services")
              }}
            >
              SERVICIOS
            </Link>
            <Link href="/argentina" className="text-sm font-medium hover:text-gold transition-colors duration-300">
              ARGENTINA
            </Link>
            <Link href="/quienes-somos" className="text-sm font-medium hover:text-gold transition-colors duration-300">
              QUIENES SOMOS
            </Link>
            <Link href="/contacto" className="text-sm font-medium hover:text-gold transition-colors duration-300">
              CONTACTO
            </Link>
          </div>

          {/* Menú móvil */}
          <MobileMenu onNavigate={scrollToSection} />
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative flex-1">
        <section id="home" ref={homeRef} className="relative">
          <div className="relative h-[calc(100vh-120px)] w-full">
            {/* Hero Image with Overlay */}
            <div className="absolute inset-0 bg-navy/70 z-10"></div>
            <Image
              src="/images/hero-image.jpeg"
              alt="Vista aérea de costa con aguas turquesas"
              fill
              className="object-cover"
              priority
            />

            {/* Floating particles canvas */}
            <canvas
              className="absolute inset-0 z-20 pointer-events-none"
              data-particles
              data-particles-count="100"
            ></canvas>

            {/* Hero Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-logo tracking-[0.15em] sm:tracking-[0.2em] mb-6"
                data-text-reveal
                data-text-reveal-delay="0.05"
              >
                Propiedades &
              </h1>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-logo tracking-[0.15em] sm:tracking-[0.2em] mb-6"
                data-text-reveal
                data-text-reveal-delay="0.05"
              >
                Inversiones
              </h1>
              <p
                className="text-xs sm:text-sm md:text-base tracking-[0.2em] md:tracking-[0.3em] mb-12 text-gold"
                data-animation="fade"
                data-delay="0.6"
              >
                DESCUBRE PROPIEDADES EXCLUSIVAS EN LAS MEJORES UBICACIONES
              </p>
              <div
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                data-animation="fade"
                data-delay="0.8"
              >
                <Link
                  href="/contacto"
                  className="bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3 text-sm tracking-wider rounded-md transition-all duration-300"
                  data-hover-animation="lift"
                >
                  AGENDAR UNA ASESORÍA
                </Link>
                <Link
                  href="/en-venta"
                  className="border border-gold hover:bg-gold/10 text-gold px-8 py-3 text-sm tracking-wider rounded-md transition-all duration-300"
                  data-hover-animation="lift"
                >
                  VER PROPIEDADES
                </Link>
              </div>
            </div>

            {/* Buy Now Button - solo visible en desktop */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden md:block"
              data-animation="right"
              data-delay="1"
            >
              <Link
                href="/contacto"
                className="bg-gold text-navy-dark py-6 px-3 flex flex-col items-center justify-center text-xs font-bold tracking-widest hover:bg-gold-dark transition-colors duration-300"
              >
                <span>C</span>
                <span>O</span>
                <span>M</span>
                <span>P</span>
                <span>R</span>
                <span>A</span>
                <span>R</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Luxury Properties Section */}
        <section id="downtown" className="py-16 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="px-4 lg:px-12" data-animation="left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-logo text-navy-dark leading-tight mb-6 text-center lg:text-left">
                PROPIEDADES
                <br />
                DE LUJO EN
                <br />
                PUNTA DEL ESTE
              </h2>
              <p className="text-gold-dark mb-8 tracking-wide text-center lg:text-left">
                BIENVENIDO A OTTO+OTTO
                <br />
                SU INMOBILIARIA DE CONFIANZA
              </p>
              <div className="text-center lg:text-left">
                <Link
                  href="/en-venta"
                  className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3 text-sm tracking-wider rounded-md transition-all duration-300"
                  data-hover-animation="lift"
                >
                  EXPLORAR PROPIEDADES
                </Link>
              </div>
            </div>
            <div className="relative grid grid-cols-12 gap-4 px-4 lg:px-0" data-animation="right">
              <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                <Image
                  src="/images/property-pool-1.png"
                  alt="Apartamento de lujo con vista al mar"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="col-span-10 lg:col-span-9 lg:col-start-1 lg:-mt-24">
                <Image
                  src="/images/property-exterior-1.png"
                  alt="Terraza con vista panorámica"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" ref={servicesRef} className="py-16 bg-gray-light">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl sm:text-5xl font-logo tracking-wider mb-4 text-navy-dark" data-animation="fade">
              SERVICIOS
            </h2>
            <p className="text-gold-dark mb-16 tracking-wide" data-animation="fade" data-delay="0.2">
              ASESORAMIENTO INMOBILIARIO DE EXCELENCIA
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Service 1 - Property Search */}
              <div
                className="bg-navy p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-md"
                data-animation="fade"
                data-delay="0.3"
                data-hover-animation="lift"
              >
                <div className="h-10 w-10 text-gold mb-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <span className="text-gold uppercase tracking-wider text-sm mb-2">SERVICIOS</span>
                <h3 className="text-2xl font-secondary text-white mb-4">Búsqueda Personalizada</h3>
                <p className="text-gray-400 text-center">
                  Encontramos la propiedad perfecta según sus necesidades y preferencias.
                </p>
              </div>

              {/* Service 2 - Club+OTTO */}
              <div
                className="bg-white border border-gray-200 p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-md"
                data-animation="fade"
                data-delay="0.4"
                data-hover-animation="lift"
              >
                <div className="h-10 w-10 text-gold mb-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                    <path d="m3 14 7 7 11-11" />
                  </svg>
                </div>
                <span className="text-gold uppercase tracking-wider text-sm mb-2">SERVICIOS</span>
                <h3 className="text-2xl font-secondary text-navy-dark mb-4">CLUB+OTTO</h3>
                <p className="text-gray-500 text-center">
                  Una membresía exclusiva para todos nuestros clientes que podrán acceder a descuentos y beneficios
                  premium en gastronomía, belleza, entretenimiento, interiorismo y más.
                </p>
              </div>

              {/* Service 3 - Legal Advice */}
              <div
                className="bg-navy p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-md"
                data-animation="fade"
                data-delay="0.5"
                data-hover-animation="lift"
              >
                <div className="h-10 w-10 text-gold mb-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <span className="text-gold uppercase tracking-wider text-sm mb-2">SERVICIOS</span>
                <h3 className="text-2xl font-secondary text-white mb-4">Asesoría Legal, Notarial y Contable</h3>
                <p className="text-gray-400 text-center">
                  Asistencia completa en todos los aspectos legales de su transacción inmobiliaria.
                </p>
              </div>

              {/* Service 4 - Investment */}
              <div
                className="bg-white border border-gray-200 p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-md"
                data-animation="fade"
                data-delay="0.6"
                data-hover-animation="lift"
              >
                <div className="h-10 w-10 text-gold mb-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <span className="text-gold uppercase tracking-wider text-sm mb-2">SERVICIOS</span>
                <h3 className="text-2xl font-secondary text-navy-dark mb-4">Inversiones</h3>
                <p className="text-gray-500 text-center">
                  Asesoramiento experto para maximizar el retorno de su inversión inmobiliaria.
                </p>
              </div>

              {/* Service 5 - Administration & Marketing */}
              <div
                className="bg-navy p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-md"
                data-animation="fade"
                data-delay="0.7"
                data-hover-animation="lift"
              >
                <div className="h-10 w-10 text-gold mb-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                    <path d="M22 12A10 10 0 0 0 12 2v10z" />
                  </svg>
                </div>
                <span className="text-gold uppercase tracking-wider text-sm mb-2">SERVICIOS</span>
                <h3 className="text-2xl font-secondary text-white mb-4">Administración y Marketing Premium</h3>
                <p className="text-gray-400 text-center">
                  Gestión integral de su propiedad y estrategias de marketing exclusivas para vender al mejor precio.
                </p>
              </div>

              {/* Service 6 - Customer Service Points */}
              <div
                className="bg-white border border-gray-200 p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-md"
                data-animation="fade"
                data-delay="0.8"
                data-hover-animation="lift"
              >
                <div className="h-10 w-10 text-gold mb-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-gold uppercase tracking-wider text-sm mb-2">SERVICIOS</span>
                <h3 className="text-2xl font-secondary text-navy-dark mb-4">Puntos de Atención al Cliente</h3>
                <p className="text-gray-500 text-center">
                  Asistencia completa para clientes y puntos físicos de atención, recibo de dinero y firma de
                  documentación en Argentina, Buenos Aires y Punta del Este Uruguay.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties Section */}
        <section id="properties" className="py-16 bg-white">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl sm:text-5xl font-logo tracking-wider mb-4 text-navy-dark" data-animation="fade">
              PROPIEDADES DESTACADAS
            </h2>
            <p className="text-gold-dark mb-16 tracking-wide" data-animation="fade" data-delay="0.2">
              NUESTRA SELECCIÓN DE PROPIEDADES IDEALES PARA CONVERTIR EN TU PRÓXIMO HOGAR
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Property 1 */}
              <PropertyCard
                id="15653"
                title="Apartamento | San Rafael"
                location="San Rafael, Punta del Este"
                description="¡Increíble oportunidad de inversión a tan solo metros de Playa Mansa, Punta del Este!"
                price="USD 200.000"
                bedrooms={3}
                bathrooms={2}
                area={120}
                image="/images/property-interior-1.png"
                featured={true}
              />

              {/* Property 2 */}
              <PropertyCard
                id="17363"
                title="Apartamento | Brava"
                location="Playa Brava, Punta del Este"
                description="¡Bienvenido a tu nuevo hogar en Brava, Punta del Este! A solo 100 metros del mar."
                price="USD 500.000"
                bedrooms={2}
                bathrooms={3}
                area={120}
                image="/images/property-exterior-1.png"
              />

              {/* Property 3 */}
              <PropertyCard
                id="28073"
                title="Casa | Pinares"
                location="Pinares, Punta del Este"
                description="¡Descubre la joya escondida de Punta del Este! Presentamos una casa familiar de lujo."
                price="USD 395.000"
                bedrooms={4}
                bathrooms={3}
                area={150}
                image="/images/property-pool-1.png"
              />
            </div>

            <div className="mt-12" data-animation="fade" data-delay="0.6">
              <Link
                href="/en-venta"
                className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3 text-sm tracking-wider rounded-md transition-all duration-300"
                data-hover-animation="lift"
              >
                VER TODAS LAS PROPIEDADES
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-logo tracking-wider mb-4 text-navy-dark" data-animation="fade">
                TESTIMONIOS
              </h2>
              <p className="text-gold-dark mb-16 tracking-wide" data-animation="fade" data-delay="0.2">
                LA SATISFACCIÓN DE NUESTROS CLIENTES NOS RESPALDA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Testimonial 1 */}
              <div
                className="bg-white p-8 shadow-md rounded-lg transform transition-all duration-500"
                data-animation="fade"
                data-delay="0.3"
                data-hover-animation="lift"
              >
                <div className="flex text-gold mb-4">
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                </div>
                <p className="text-gray-600 mb-6">
                  "El servicio de Otto+Otto fue excepcional. Encontraron exactamente lo que buscábamos en tiempo récord.
                  Su conocimiento del mercado inmobiliario en Punta del Este es incomparable."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/images/testimonial-1.png"
                      alt="Juan Rodríguez"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-secondary text-lg text-navy-dark">Juan Rodríguez</h4>
                    <p className="text-gold-dark text-sm">Empresario</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div
                className="bg-white p-8 shadow-md rounded-lg transform transition-all duration-500"
                data-animation="fade"
                data-delay="0.4"
                data-hover-animation="lift"
              >
                <div className="flex text-gold mb-4">
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                </div>
                <p className="text-gray-600 mb-6">
                  "Después de meses buscando, ellos entendieron exactamente lo que necesitábamos. No solo encontramos un
                  apartamento, encontramos un hogar. ¡Gracias por hacerlo tan fácil!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/images/testimonial-2.png"
                      alt="Carlos Rodríguez"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-secondary text-lg text-navy-dark">Carlos Rodríguez</h4>
                    <p className="text-gold-dark text-sm">Arquitecto</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div
                className="bg-white p-8 shadow-md rounded-lg transform transition-all duration-500"
                data-animation="fade"
                data-delay="0.5"
                data-hover-animation="lift"
              >
                <div className="flex text-gold mb-4">
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <StarHalf className="w-5 h-5 fill-gold" />
                </div>
                <p className="text-gray-600 mb-6">
                  "La atención personalizada y el seguimiento constante durante todo el proceso de compra fueron
                  impecables. Recomendaría Otto+Otto a cualquiera que busque propiedades de lujo en Punta del Este."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/images/testimonial-3.png"
                      alt="Ana Martínez"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-secondary text-lg text-navy-dark">Ana Martínez</h4>
                    <p className="text-gold-dark text-sm">Médica</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div
                className="bg-white p-8 shadow-md rounded-lg transform transition-all duration-500"
                data-animation="fade"
                data-delay="0.6"
                data-hover-animation="lift"
              >
                <div className="flex text-gold mb-4">
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                </div>
                <p className="text-gray-600 mb-6">
                  "Como inversor extranjero, valoré enormemente la transparencia y profesionalismo de Otto+Otto. Su
                  equipo me guió a través de todo el proceso legal y encontró una propiedad que superó mis
                  expectativas."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/images/testimonial-4.png"
                      alt="Martín Fernández"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-secondary text-lg text-navy-dark">Martín Fernández</h4>
                    <p className="text-gold-dark text-sm">Inversor</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div
                className="bg-white p-8 shadow-md rounded-lg transform transition-all duration-500"
                data-animation="fade"
                data-delay="0.7"
                data-hover-animation="lift"
              >
                <div className="flex text-gold mb-4">
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <StarHalf className="w-5 h-5 fill-gold" />
                </div>
                <p className="text-gray-600 mb-6">
                  "La experiencia con Otto+Otto fue excepcional desde el primer contacto. Su conocimiento del mercado y
                  su capacidad para entender exactamente lo que buscábamos nos permitió encontrar nuestra casa de playa
                  ideal."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/images/testimonial-5.png"
                      alt="Diego Méndez"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-secondary text-lg text-navy-dark">Diego Méndez</h4>
                    <p className="text-gold-dark text-sm">Diseñador</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl sm:text-5xl font-logo tracking-wider mb-4 text-navy-dark" data-animation="fade">
              PROYECTOS EXCLUSIVOS
            </h2>
            <p className="text-gold-dark mb-16 tracking-wide" data-animation="fade" data-delay="0.2">
              DESCUBRA NUESTROS DESARROLLOS INMOBILIARIOS DE LUJO
            </p>

            <div className="max-w-6xl mx-auto" data-animation="fade" data-delay="0.4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[400px] rounded-lg overflow-hidden" data-image-zoom>
                  <Image src="/images/project-building-1.png" alt="Proyecto Marina Bay" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-logo mb-2">Marina Bay</h3>
                    <p className="text-sm text-gold mb-4">Punta del Este</p>
                    <Link
                      href="/proyectos/marina-bay"
                      className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-4 py-2 text-sm rounded-md transition-all duration-300"
                    >
                      Ver Proyecto
                    </Link>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden" data-image-zoom>
                  <Image
                    src="/images/project-building-2.png"
                    alt="Proyecto Ocean Towers"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-logo mb-2">Ocean Towers</h3>
                    <p className="text-sm text-gold mb-4">La Barra</p>
                    <Link
                      href="/proyectos/ocean-towers"
                      className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-4 py-2 text-sm rounded-md transition-all duration-300"
                    >
                      Ver Proyecto
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[400px] rounded-lg overflow-hidden" data-image-zoom>
                  <Image
                    src="/images/project-building-3.png"
                    alt="Proyecto Pinares Park"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-logo mb-2">Pinares Park</h3>
                    <p className="text-sm text-gold mb-4">Pinares</p>
                    <Link
                      href="/proyectos/pinares-park"
                      className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-4 py-2 text-sm rounded-md transition-all duration-300"
                    >
                      Ver Proyecto
                    </Link>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden" data-image-zoom>
                  <Image src="/images/project-building-4.png" alt="Proyecto Mansa View" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-logo mb-2">Mansa View</h3>
                    <p className="text-sm text-gold mb-4">Playa Mansa</p>
                    <Link
                      href="/proyectos/mansa-view"
                      className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-4 py-2 text-sm rounded-md transition-all duration-300"
                    >
                      Ver Proyecto
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Link
                  href="/proyectos"
                  className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3 text-sm tracking-wider rounded-md transition-all duration-300"
                  data-hover-animation="lift"
                >
                  VER TODOS LOS PROYECTOS
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-navy text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="px-4" data-animation="left" data-delay="0.2">
                <h2 className="text-4xl font-logo tracking-wider mb-4">
                  AGENDA
                  <br />
                  UNA ASESORÍA
                </h2>
                <p className="text-gray-400 mb-8">
                  Contáctanos para programar una asesoría personalizada sobre nuestras exclusivas propiedades y descubre
                  el lujo que te espera.
                </p>
              </div>

              <div className="px-4" data-animation="right" data-delay="0.4">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="bg-white border-none p-3 w-full rounded-lg focus:ring-2 focus:ring-gold transition-all duration-300"
                    />
                    <input
                      type="text"
                      placeholder="Apellido"
                      className="bg-white border-none p-3 w-full rounded-lg focus:ring-2 focus:ring-gold transition-all duration-300"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-white border-none p-3 w-full rounded-lg focus:ring-2 focus:ring-gold transition-all duration-300"
                    />
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className="bg-white border-none p-3 w-full rounded-lg focus:ring-2 focus:ring-gold transition-all duration-300"
                    />
                  </div>
                  <textarea
                    placeholder="Escribe tu mensaje aquí..."
                    className="bg-white border-none p-3 w-full h-32 rounded-lg focus:ring-2 focus:ring-gold transition-all duration-300"
                  ></textarea>
                  <button
                    className="w-full bg-gold hover:bg-gold-dark text-navy-dark p-3 font-medium rounded-lg transition-all duration-300"
                    data-hover-animation="lift"
                  >
                    ENVIAR
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-8 bg-gold-light">
          <div
            className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4"
            data-animation="fade"
          >
            <p className="text-lg font-logo mb-4 md:mb-0 text-navy-dark text-center md:text-left">
              ¡Únete a nuestra lista para recibir las mejores propiedades en tu bandeja de entrada!
            </p>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Ingresa tu email aquí*"
                className="bg-white border-none p-3 flex-grow md:w-64 rounded-l-lg focus:ring-2 focus:ring-gold transition-all duration-300"
              />
              <button
                className="bg-navy hover:bg-navy-medium text-white px-6 py-3 rounded-r-lg transition-all duration-300"
                data-hover-animation="lift"
              >
                SUSCRIBIRSE
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy-dark text-white py-12">
        <div className="container mx-auto text-center px-4">
          <div className="mb-8">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-logo tracking-wider">OTTO+OTTO</div>
              <div className="text-xs tracking-widest text-gold">NEGOCIOS INMOBILIARIOS</div>
            </div>
          </div>

          <div className="text-gray-400 text-sm mb-6">
            Llámanos: +598 99 383 564 | Email: ottonegociosinmobiliarios@gmail.com | Dirección: Gorlero 1047 Punta del
            Este
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://wa.me/59899383564"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/ottoyotto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://facebook.com/ottoyotto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://tiktok.com/@ottoyotto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/ottoyotto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://youtube.com/channel/ottoyotto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>

          <div className="text-xs text-gray-500">
            © 2023 Otto+Otto Negocios Inmobiliarios. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
