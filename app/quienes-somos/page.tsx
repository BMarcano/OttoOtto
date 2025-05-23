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
            <Link href="/argentina" className="text-sm font-medium hover:text-gold transition-colors duration-300">
              ARGENTINA
            </Link>
            <Link
              href="/quienes-somos"
              className="text-sm font-medium hover:text-gold text-gold transition-colors duration-300"
            >
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
