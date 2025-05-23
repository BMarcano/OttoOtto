"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-navy-dark focus:outline-none"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="p-2 text-navy-dark focus:outline-none">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center h-full">
            <div className="mb-8">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-logo tracking-wider text-navy">OTTO+OTTO</div>
                <div className="text-xs tracking-widest text-gold-dark">NEGOCIOS INMOBILIARIOS</div>
              </div>
            </div>

            <nav className="flex flex-col items-center space-y-6">
              <Link
                href="/"
                className="text-lg font-medium text-navy-dark hover:text-gold transition-colors duration-300"
                onClick={toggleMenu}
              >
                INICIO
              </Link>
              <Link
                href="/proyectos"
                className="text-lg font-medium text-navy-dark hover:text-gold transition-colors duration-300"
                onClick={toggleMenu}
              >
                PROYECTOS
              </Link>
              <Link
                href="/en-venta"
                className="text-lg font-medium text-navy-dark hover:text-gold transition-colors duration-300"
                onClick={toggleMenu}
              >
                EN VENTA
              </Link>
              <Link
                href="/alquiler"
                className="text-lg font-medium text-navy-dark hover:text-gold transition-colors duration-300"
                onClick={toggleMenu}
              >
                ALQUILER
              </Link>
              <Link
                href="/#services"
                className="text-lg font-medium text-navy-dark hover:text-gold transition-colors duration-300"
                onClick={toggleMenu}
              >
                SERVICIOS
              </Link>
              <Link
                href="/argentina"
                className="text-lg font-medium text-navy-dark hover:text-gold transition-colors duration-300"
                onClick={toggleMenu}
              >
                ARGENTINA
              </Link>
              <Link
                href="/quienes-somos"
                className="text-lg font-medium text-navy-dark hover:text-gold transition-colors duration-300"
                onClick={toggleMenu}
              >
                QUIENES SOMOS
              </Link>
              <Link
                href="/contacto"
                className="text-lg font-medium text-navy-dark hover:text-gold transition-colors duration-300"
                onClick={toggleMenu}
              >
                CONTACTO
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
