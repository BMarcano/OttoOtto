"use client"

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="container mx-auto text-center px-4">
        {/* ­­­— logo — */}
        <div className="mb-8">
          <h3 className="text-2xl font-logo tracking-wider mb-1">OTTO+OTTO</h3>
          <p className="text-xs tracking-widest text-gold">
            NEGOCIOS&nbsp;INMOBILIARIOS
          </p>
        </div>

        {/* ­­­— contact line — */}
        <p className="text-gray-400 text-sm mb-8">
          Llámanos: +598&nbsp;99&nbsp;383&nbsp;564&nbsp;&nbsp;|&nbsp;&nbsp;
          Email: ottonegociosinmobiliarios@gmail.com&nbsp;&nbsp;|&nbsp;&nbsp;
          Dirección: Gorlero&nbsp;1047 Punta&nbsp;del&nbsp;Este
        </p>

        {/* ­­­— social icons — */}
        <div className="flex justify-center space-x-6 mb-10">
          <SocialLink href="https://www.facebook.com/profile.php?id=61560097268562">
            <Facebook className="h-5 w-5" />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/company/otto-otto-negocios-inmobiliarios/">
            <Linkedin className="h-5 w-5" />
          </SocialLink>
          <SocialLink href="https://twitter.com">
            <Twitter className="h-5 w-5" />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/ottonegociosinmobiliarios/">
            <Instagram className="h-5 w-5" />
          </SocialLink>
          <SocialLink href="https://youtube.com">
            <Youtube className="h-5 w-5" />
          </SocialLink>
        </div>

        {/* ­­­— copyright — */}
        <p className="text-xs text-gray-500">
          © 2023 Otto+Otto Negocios Inmobiliarios. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

/* helper */
function SocialLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gold transition-colors duration-300"
    >
      {children}
    </Link>
  )
}
