"use client";

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { MobileMenu } from "@/components/mobile-menu";

export function Navbar() {
  return (
    <header className="w-full z-50">
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

      {/* Main Navigation */}
      <nav className="container mx-auto flex items-center justify-between px-4 lg:justify-center py-4">
        {/* Logo para móviles */}
        <div className="flex lg:hidden items-center">
          <div className="flex flex-col items-center">
            <div className="text-xl font-logo tracking-wider text-navy">OTTO+OTTO</div>
            <div className="text-xs tracking-widest text-gold-dark">NEGOCIOS INMOBILIARIOS</div>
          </div>
        </div>

        {/* Menú de escritorio */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-gold transition-colors duration-300">INICIO</Link>
          <Link href="/proyectos" className="text-sm font-medium hover:text-gold transition-colors duration-300">PROYECTOS</Link>
          <Link href="/en-venta" className="text-sm font-medium hover:text-gold transition-colors duration-300">EN VENTA</Link>
          <Link href="/alquiler" className="text-sm font-medium hover:text-gold transition-colors duration-300">ALQUILER</Link>

          {/* Logo central */}
          <Link href="/" className="px-8 group">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-logo tracking-wider text-navy group-hover:text-gold-dark transition-colors duration-300">
                OTTO+OTTO
              </div>
              <div className="text-xs tracking-widest text-gold-dark">NEGOCIOS INMOBILIARIOS</div>
            </div>
          </Link>

          <Link href="/#services" className="text-sm font-medium hover:text-gold transition-colors duration-300">SERVICIOS</Link>
          <Link href="/argentina" className="text-sm font-medium hover:text-gold transition-colors duration-300">ARGENTINA</Link>
          <Link href="/quienes-somos" className="text-sm font-medium hover:text-gold transition-colors duration-300">QUIENES SOMOS</Link>
          <Link href="/contacto" className="text-sm font-medium hover:text-gold transition-colors duration-300">CONTACTO</Link>
        </div>

        {/* Menú móvil */}
        <MobileMenu />
      </nav>
    </header>
  );
}
