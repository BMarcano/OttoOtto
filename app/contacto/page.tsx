"use client"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Twitter, Youtube } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"
import { HeroSection } from "@/components/hero-section"

export default function Contacto() {
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
            <Link href="/" className="text-sm font-medium hover:text-gold">
              INICIO
            </Link>
            <Link href="/proyectos" className="text-sm font-medium hover:text-gold">
              PROYECTOS
            </Link>
            <Link href="/en-venta" className="text-sm font-medium hover:text-gold">
              EN VENTA
            </Link>

            {/* Logo */}
            <Link href="/" className="px-8">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-logo tracking-wider text-navy">OTTO+OTTO</div>
                <div className="text-xs tracking-widest text-gold-dark">NEGOCIOS INMOBILIARIOS</div>
              </div>
            </Link>

            <Link href="/alquiler" className="text-sm font-medium hover:text-gold">
              ALQUILER
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-gold">
              SERVICIOS
            </Link>
            <Link href="/contacto" className="text-sm font-medium hover:text-gold text-gold">
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
          title="CONTÁCTENOS"
          subtitle="ESTAMOS AQUÍ PARA AYUDARLE"
          backgroundImage="/images/coastal-aerial-view.jpeg"
        />

        {/* Contact Information */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl font-logo tracking-wider mb-4 text-navy-dark">NUESTRAS OFICINAS</h2>
              <p className="text-gold-dark mb-8 tracking-wide max-w-2xl mx-auto">
                VISÍTENOS EN CUALQUIERA DE NUESTRAS SUCURSALES
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Sucursal Gorlero */}
              <div className="bg-white border border-gray-100 shadow-md p-8 text-center rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="h-16 w-16 bg-navy-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-2xl font-secondary text-navy-dark mb-4">Sucursal Gorlero</h3>
                <div className="space-y-3 text-gray-600">
                  <p>Gorlero 1047</p>
                  <p className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2 text-gold" />
                    +598 99 383 564
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="https://maps.google.com/?q=Gorlero+1047+Punta+del+Este"
                    target="_blank"
                    className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-6 py-2 text-sm tracking-wider rounded-md transition-all duration-300"
                  >
                    VER EN MAPA
                  </Link>
                </div>
              </div>

              {/* Sucursal Plaza México */}
              <div className="bg-white border border-gray-100 shadow-md p-8 text-center rounded-lg">
                <div className="h-16 w-16 bg-navy-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-2xl font-secondary text-navy-dark mb-4">Sucursal Plaza México</h3>
                <div className="space-y-3 text-gray-600">
                  <p>Yucatan Local 05</p>
                  <p className="text-sm">(entre Biarritz y M' Hijo el Dotor)</p>
                  <p className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2 text-gold" />
                    +598 99 383 564
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="https://maps.google.com/?q=Plaza+Mexico+Punta+del+Este"
                    target="_blank"
                    className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-6 py-2 text-sm tracking-wider rounded-md transition-all duration-300"
                  >
                    VER EN MAPA
                  </Link>
                </div>
              </div>

              {/* Sucursal Buenos Aires */}
              <div className="bg-white border border-gray-100 shadow-md p-8 text-center rounded-lg">
                <div className="h-16 w-16 bg-navy-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-2xl font-secondary text-navy-dark mb-4">Sucursal Buenos Aires</h3>
                <div className="space-y-3 text-gray-600">
                  <p>Avenida Acoyte 580 Departamento 2E</p>
                  <p className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2 text-gold" />
                    +598 99 383 564
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="https://maps.google.com/?q=Avenida+Acoyte+580+Buenos+Aires"
                    target="_blank"
                    className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-6 py-2 text-sm tracking-wider rounded-md transition-all duration-300"
                  >
                    VER EN MAPA
                  </Link>
                </div>
              </div>
            </div>

            {/* General Contact Info */}
            <div className="max-w-4xl mx-auto mt-16 text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 bg-navy-dark rounded-full flex items-center justify-center mb-6">
                    <Mail className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-secondary text-navy-dark mb-4">Email</h3>
                  <p className="text-gray-600">ottonegociosinmobiliarios@gmail.com</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 bg-navy-dark rounded-full flex items-center justify-center mb-6">
                    <Clock className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-secondary text-navy-dark mb-4">Horario de Atención</h3>
                  <p className="text-gray-600">Lunes a Sábados de 10:00 a 18:00 hs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-logo tracking-wider mb-4 text-navy-dark">ENVÍENOS UN MENSAJE</h2>
                <p className="text-gold-dark mb-8 tracking-wide">
                  COMPLETE EL FORMULARIO Y NOS PONDREMOS EN CONTACTO CON USTED
                </p>
              </div>

              <div className="bg-white p-8 shadow-md rounded-lg">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre*
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        className="w-full p-3 border border-gray-300 focus:ring-gold focus:border-gold rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
                        Apellido*
                      </label>
                      <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        required
                        className="w-full p-3 border border-gray-300 focus:ring-gold focus:border-gold rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full p-3 border border-gray-300 focus:ring-gold focus:border-gold rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono*
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        className="w-full p-3 border border-gray-300 focus:ring-gold focus:border-gold rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                      Asunto*
                    </label>
                    <input
                      type="text"
                      id="asunto"
                      name="asunto"
                      required
                      className="w-full p-3 border border-gray-300 focus:ring-gold focus:border-gold rounded-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje*
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={6}
                      required
                      className="w-full p-3 border border-gray-300 focus:ring-gold focus:border-gold rounded-lg"
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacidad"
                      name="privacidad"
                      required
                      className="h-4 w-4 text-gold focus:ring-gold border-gray-300 rounded"
                    />
                    <label htmlFor="privacidad" className="ml-2 block text-sm text-gray-700">
                      Acepto la política de privacidad y el tratamiento de mis datos personales
                    </label>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3 text-sm tracking-wider rounded-lg transition-all duration-300"
                    >
                      ENVIAR MENSAJE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-logo tracking-wider mb-4 text-navy-dark">NUESTRA UBICACIÓN</h2>
              <p className="text-gold-dark mb-8 tracking-wide">ENCUENTRE NUESTRAS OFICINAS PRINCIPALES</p>
            </div>

            <div className="max-w-6xl mx-auto h-[500px] bg-gray-200 relative rounded-lg">
              {/* En un proyecto real, aquí iría un mapa interactivo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-secondary text-navy-dark mb-2">Oficina Principal</h3>
                  <p className="text-gray-600">Gorlero 1047, Punta del Este, Uruguay</p>
                </div>
              </div>
            </div>
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
            <a href="#" className="text-white hover:text-gold">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-gold">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-gold">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-gold">
              <Youtube className="h-5 w-5" />
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
