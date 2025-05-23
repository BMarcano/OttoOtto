"use client"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"
import { HeroSection } from "@/components/hero-section"

export default function QuienesSomos() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      



      <main className="flex-1 bg-white">
        {/* Hero Banner */}
        <HeroSection
          title="QUIÉNES SOMOS"
          subtitle="CONOCE A NUESTRO EQUIPO DE PROFESIONALES"
          backgroundImage="/images/coastal-aerial-view.jpeg"
        />

        {/* Nuestra Historia */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-logo text-navy-dark mb-8 text-center">NUESTRA HISTORIA</h2>
              <div className="bg-white p-8 shadow-md rounded-lg mb-12">
                <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-secondary text-navy-dark mb-4">
                      Nueva era de Otto+Otto Negocios Inmobiliarios
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Con la misma pasión y compromiso que nos ha definido durante más de 56 años, ahora damos un paso
                      hacia el futuro con una visión renovada y dinámica.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Nuestra nueva generación está formada por los nietos de nuestro fundador Héctor Otto, quienes
                      aportan una perspectiva fresca y moderna a nuestra inmobiliaria. Juntos, hemos creado Otto+Otto
                      para ofrecer una experiencia inmobiliaria innovadora, centrada en el cliente y adaptada a las
                      necesidades actuales.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/images/family-portrait.jpeg"
                        alt="Familia Otto - Tres generaciones unidas"
                        width={600}
                        height={450}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  OTTO+OTTO nace con la visión de transformar el mercado inmobiliario en Punta del Este, ofreciendo un
                  servicio personalizado y de excelencia a nuestros clientes. Con más de 56 años de experiencia en el
                  sector, nos hemos consolidado como una de las inmobiliarias de referencia en la zona.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="max-w-5xl mx-auto mt-16">
              <h2 className="text-3xl sm:text-4xl font-logo text-navy-dark mb-8 text-center">NUESTROS VALORES</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-navy p-8 rounded-lg text-center" data-animation="fade" data-delay="0.3">
                  <div className="h-16 w-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-navy"
                    >
                      <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13Z" />
                      <circle cx="12" cy="8" r="2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-secondary text-white mb-4">COMPROMISO</h3>
                  <p className="text-gray-300">
                    Nos comprometemos a brindar un servicio de excelencia, superando las expectativas de nuestros
                    clientes en cada interacción.
                  </p>
                </div>

                <div
                  className="bg-white border border-gray-200 p-8 rounded-lg text-center"
                  data-animation="fade"
                  data-delay="0.4"
                >
                  <div className="h-16 w-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-navy"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-secondary text-navy-dark mb-4">CONFIANZA</h3>
                  <p className="text-gray-600">
                    Construimos relaciones basadas en la confianza y la transparencia, siendo siempre honestos y éticos
                    en nuestras operaciones.
                  </p>
                </div>

                <div className="bg-navy p-8 rounded-lg text-center" data-animation="fade" data-delay="0.5">
                  <div className="h-16 w-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-navy"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-secondary text-white mb-4">EXCELENCIA</h3>
                  <p className="text-gray-300">
                    Buscamos la excelencia en cada detalle, ofreciendo un servicio de calidad superior y soluciones
                    innovadoras a nuestros clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-logo text-navy-dark mb-8 text-center">NUESTRO EQUIPO</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Contamos con un equipo de profesionales altamente capacitados y comprometidos con brindar el mejor
              servicio a nuestros clientes. Combinamos la experiencia de décadas en el mercado inmobiliario con la
              innovación y energía de las nuevas generaciones.
            </p>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white p-8 shadow-md rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-secondary text-navy-dark mb-2">Tradición Familiar</h3>
                      <p className="text-gray-700">
                        La familia Otto ha estado en el negocio inmobiliario por más de 56 años, construyendo una
                        reputación basada en la confianza, el conocimiento del mercado y el servicio personalizado.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-secondary text-navy-dark mb-2">Innovación Constante</h3>
                      <p className="text-gray-700">
                        La nueva generación aporta ideas frescas y soluciones tecnológicas que nos permiten ofrecer un
                        servicio más eficiente y adaptado a las necesidades actuales del mercado.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-secondary text-navy-dark mb-2">Compromiso con la Excelencia</h3>
                      <p className="text-gray-700">
                        Cada miembro de nuestro equipo está comprometido con brindar un servicio de excelencia,
                        atendiendo cada detalle para garantizar la satisfacción de nuestros clientes.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="bg-navy-dark p-6 rounded-lg text-white">
                      <h3 className="text-xl font-secondary mb-4 text-gold">Nuestra Filosofía</h3>
                      <p className="mb-4">
                        "En Otto+Otto creemos que cada propiedad tiene una historia que contar y cada cliente tiene
                        sueños por realizar. Nuestra misión es conectar ambos de manera perfecta."
                      </p>
                      <p className="text-right text-gold">- Familia Otto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-navy-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-logo tracking-wider mb-6" data-animation="fade">
              ¿QUIERES CONOCERNOS MEJOR?
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8" data-animation="fade" data-delay="0.2">
              Estamos a tu disposición para brindarte toda la información que necesitas. No dudes en contactarnos para
              conocer más sobre nuestros servicios y cómo podemos ayudarte a encontrar la propiedad de tus sueños.
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
