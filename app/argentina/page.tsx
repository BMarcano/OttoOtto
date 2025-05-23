"use client"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"
import { HeroSection } from "@/components/hero-section"

export default function Argentina() {
  // Datos de las inmobiliarias asociadas
  const partners = [
    {
      name: "Virgin Realty",
      logo: "/images/virgin-realty-logo.png", // Logo de VIRGIN (letras blancas sobre fondo negro)
      location: "Buenos Aires, Argentina",
      description: "Inmobiliaria especializada en propiedades de lujo en las zonas más exclusivas de Buenos Aires.",
      website: "https://www.virginrealty.com.ar/",
      bgColor: "bg-black", // Fondo negro para el logo de Virgin
    },
    {
      name: "Carlos Dodorico",
      logo: "/images/carlos-dodorico-logo.png", // Logo de Carlos (marcador verde)
      location: "Buenos Aires, Argentina",
      description:
        "Más de 30 años de experiencia en el mercado inmobiliario argentino, ofreciendo un servicio personalizado y de calidad.",
      website: "https://www.carlosdodorico.com/",
    },
    {
      name: "Busca Propiedades",
      logo: "/images/busca-propiedades-logo.png",
      location: "Buenos Aires, Argentina",
      description: "Portal inmobiliario líder en Argentina, con una amplia cartera de propiedades en todo el país.",
      website: "https://www.buscapropiedades.com.ar/",
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
            <span>+598 99 383 564</span>
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
            <Link
              href="/argentina"
              className="text-sm font-medium hover:text-gold text-gold transition-colors duration-300"
            >
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
          title="ALIANZA CON ARGENTINA"
          subtitle="EN OTTO+OTTO SI LO HACEMOS, ES CON LOS MEJORES"
          backgroundImage="/images/coastal-aerial-view.jpeg"
        />

        {/* Descripción */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg text-gray-700 leading-relaxed">
                Nos aliamos con las inmobiliarias más prestigiosas de Argentina para brindarte una asesoría integral,
                gratuita y de calidad. Entendemos las necesidades de nuestros clientes y le facilitamos la entrega de
                dinero, firma de documentación y reuniones presenciales en Buenos Aires.
              </p>
            </div>

            {/* Inmobiliarias asociadas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white p-8 shadow-md rounded-lg transform transition-all duration-500 hover:shadow-xl"
                  data-animation="fade"
                  data-delay={`${0.3 + index * 0.1}`}
                  data-hover-animation="lift"
                >
                  <div className="flex justify-center mb-6">
                    <div className={`flex justify-center items-center ${partner.bgColor || "bg-white"} p-2 rounded`}>
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={`Logo de ${partner.name}`}
                        width={200}
                        height={100}
                        className="object-contain h-20"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-secondary text-navy-dark mb-2 text-center">{partner.name}</h3>
                  <p className="text-gold-dark text-sm mb-4 text-center">{partner.location}</p>
                  <p className="text-gray-600 mb-6 text-center">{partner.description}</p>
                  <div className="text-center">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-4 py-2 text-sm rounded-md transition-all duration-300"
                    >
                      Visitar Sitio Web
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-navy-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-logo tracking-wider mb-6" data-animation="fade">
              ¿INTERESADO EN NUESTROS SERVICIOS EN ARGENTINA?
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8" data-animation="fade" data-delay="0.2">
              Nuestro equipo está listo para brindarte toda la información que necesitas sobre nuestros servicios en
              Argentina y ayudarte a encontrar la propiedad perfecta para ti.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3 text-sm tracking-wider rounded-md transition-all duration-300"
              data-hover-animation="lift"
            >
              CONTÁCTANOS
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
