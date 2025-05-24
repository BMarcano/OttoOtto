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
      logo: "/images/virgin.jpg", // Logo de VIRGIN (letras blancas sobre fondo negro)
      location: "Buenos Aires, Argentina",
      description: "Inmobiliaria especializada en propiedades de lujo en las zonas más exclusivas de Buenos Aires.",
      website: "https://www.virginrealty.com.ar/",
      bgColor: "bg-black", // Fondo negro para el logo de Virgin
    },
    {
      name: "Carlos Dodorico",
      logo: "/images/carlos-dodorico.jpg", // Logo de Carlos (marcador verde)
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

          </div>
  )
}
