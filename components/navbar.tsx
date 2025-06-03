"use client"

import { useEffect } from "react"
import Link          from "next/link"
import { MapPin, Phone } from "lucide-react"
import { MobileMenu }    from "@/components/mobile-menu"
import GTranslateWrapper from "./gtranslateflags"

export function Navbar() {
  /* ── (opcional) evita parpadeo en hidratación ─────────────────────── */
  useEffect(() => {

    const w = document.querySelector(".gtranslate_wrapper")
    w?.removeAttribute("data-ssr")
  }, [])

  return (
    <header className="w-full z-50">
      {/* —— TOP BAR —— */}
      <div className="bg-navy-dark text-white py-2 px-4 text-xs flex flex-col md:flex-row md:justify-between md:items-center">

        {/* lado izquierdo */}  
        <span className="text-gray-300 text-center md:text-left mb-2 md:mb-0">
          <span className="text-gold">APOSTANDO POR OTTO+OTTO, GANAS VOS</span>
        </span>

        {/* lado derecho */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">

          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gold" />
            GORLERO&nbsp;1047&nbsp;PUNTA&nbsp;DEL&nbsp;ESTE
          </div>

          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-gold" />
            +598&nbsp;99&nbsp;383&nbsp;564
          </div>

          {/* —— Banderas GTranslate —— */}
          <GTranslateWrapper />

        </div>
      </div>

      {/* —— NAV PRINCIPAL —— */}
      <nav className="container mx-auto flex items-center justify-between lg:justify-center px-4 py-4">

        {/* logo para móvil */}
        <div className="flex lg:hidden">
          <div className="flex flex-col items-center">
            <div className="text-xl font-logo tracking-wider text-navy">OTTO+OTTO</div>
            <div className="text-xs tracking-widest text-gold-dark">NEGOCIOS INMOBILIARIOS</div>
          </div>
        </div>

        {/* links desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/"            className="navlink">INICIO</Link>
          <Link href="/proyectos"   className="navlink">PROYECTOS</Link>
          <Link href="/en-venta"    className="navlink">EN&nbsp;VENTA</Link>
          <Link href="/alquiler"    className="navlink">ALQUILER</Link>

          {/* logo central */}
          <Link href="/" className="px-8 group">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-logo tracking-wider text-navy group-hover:text-gold-dark transition-colors">
                OTTO+OTTO
              </div>
              <div className="text-xs tracking-widest text-gold-dark">NEGOCIOS INMOBILIARIOS</div>
            </div>
          </Link>

          <Link href="/#services"    className="navlink">SERVICIOS</Link>
          <Link href="/argentina"    className="navlink">ARGENTINA</Link>
          <Link href="/quienes-somos" className="navlink">QUIENES&nbsp;SOMOS</Link>
          <Link href="/contacto"     className="navlink">CONTACTO</Link>
        </div>

        {/* menú móvil */}
        <MobileMenu />
      </nav>
    </header>
  )
}

/* —— estilo util para enlaces —— */
function NavLink({ href, children }: { href:string; children:React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-medium hover:text-gold transition-colors duration-300">
      {children}
    </Link>
  )
}
