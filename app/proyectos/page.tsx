"use client"
import Link from "next/link"
import { MapPin, Phone } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { MobileMenu } from "@/components/mobile-menu"
import { HeroSection } from "@/components/hero-section"

export default function Proyectos() {
  // Datos de proyectos (en un proyecto real, esto vendría de una base de datos)
  const projects = [
    {
      id: "marina-bay",
      name: "Marina Bay",
      location: "Punta del Este",
      description: "Exclusivo complejo residencial con vista al puerto y acceso directo al mar.",
      image: "/images/project-building-1.png",
      units: 24,
      availableUnits: 8,
      priceFrom: "USD 350.000",
      features: ["Piscina infinity", "Gimnasio", "Seguridad 24hs", "Muelle privado"],
    },
    {
      id: "ocean-towers",
      name: "Ocean Towers",
      location: "La Barra",
      description: "Torres de lujo frente al mar con amplias terrazas y vistas panorámicas al océano.",
      image: "/images/project-building-2.png",
      units: 45,
      availableUnits: 12,
      priceFrom: "USD 280.000",
      features: ["Piscina climatizada", "Spa", "Salón de eventos", "Estacionamiento subterráneo"],
    },
    {
      id: "pinares-park",
      name: "Pinares Park",
      location: "Pinares",
      description: "Conjunto de casas de diseño contemporáneo rodeadas de naturaleza y tranquilidad.",
      image: "/images/project-building-3.png",
      units: 16,
      availableUnits: 5,
      priceFrom: "USD 420.000",
      features: ["Jardines privados", "Club house", "Canchas de tenis", "Seguridad perimetral"],
    },
    {
      id: "mansa-view",
      name: "Mansa View",
      location: "Playa Mansa",
      description: "Apartamentos de lujo con vista directa a Playa Mansa y acceso privilegiado a la playa.",
      image: "/images/project-building-4.png",
      units: 32,
      availableUnits: 7,
      priceFrom: "USD 390.000",
      features: ["Piscina exterior e interior", "Sauna", "Gimnasio equipado", "Servicio de conserjería"],
    },
  ]

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
            <Link href="/" className="text-sm font-medium hover:text-gold transition-colors duration-300">
              INICIO
            </Link>
            <Link
              href="/proyectos"
              className="text-sm font-medium hover:text-gold text-gold transition-colors duration-300"
            >
              PROYECTOS
            </Link>
            <Link href="/en-venta" className="text-sm font-medium hover:text-gold transition-colors duration-300">
              EN VENTA
            </Link>
            <Link href="/alquiler" className="text-sm font-medium hover:text-gold transition-colors duration-300">
              ALQUILER
            </Link>

            {/* Logo */}
            <Link href="/" className="px-8 group">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-logo tracking-wider text-navy group-hover:text-gold-dark transition-colors duration-300">
                  OTTO+OTTO
                </div>
                <div className="text-xs tracking-widest text-gold-dark">NEGOCIOS INMOBILIARIOS</div>
              </div>
            </Link>

            <Link href="/#services" className="text-sm font-medium hover:text-gold transition-colors duration-300">
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
          <MobileMenu />
        </nav>
      </header>

      <main className="flex-1 bg-white">
        {/* Hero Banner */}
        <HeroSection
          title="NUESTROS PROYECTOS"
          subtitle="DESCUBRÍ LA POSIBILIDAD DE COMPRAR UNA PROPIEDAD EN POZO, ACCEDER A LOS PRECIOS MÁS BAJOS DEL MERCADO CON FINANCIACIÓN DIRECTA Y FLEXIBLE"
          backgroundImage="/images/coastal-aerial-view.jpeg"
        />

        {/* Projects Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  location={project.location}
                  description={project.description}
                  image={project.image}
                  units={project.units}
                  availableUnits={project.availableUnits}
                  priceFrom={project.priceFrom}
                  features={project.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-navy-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-logo tracking-wider mb-6" data-animation="fade">
              ¿INTERESADO EN NUESTROS PROYECTOS?
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8" data-animation="fade" data-delay="0.2">
              Nuestro equipo de asesores inmobiliarios está listo para brindarle toda la información que necesita sobre
              nuestros exclusivos proyectos y ayudarle a encontrar la propiedad perfecta para usted.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3 text-sm tracking-wider rounded-md transition-all duration-300"
              data-hover-animation="lift"
            >
              AGENDAR UNA ASESORÍA
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy-dark text-white py-12">
        <div className="container mx-auto text-center">
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
            <a href="#" className="text-white hover:text-gold transition-colors duration-300">
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
            <a href="#" className="text-white hover:text-gold transition-colors duration-300">
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
            <a href="#" className="text-white hover:text-gold transition-colors duration-300">
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
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gold transition-colors duration-300">
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
