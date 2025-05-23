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
     

      {/* Navigation */}
      
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

    </div>
  )
}
