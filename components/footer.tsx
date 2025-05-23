import Link from "next/link"
import { MessageCircle, Instagram, Facebook, Linkedin, Youtube } from "lucide-react"
import { TiktokIcon } from "./tiktok-icon"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">Otto+Otto</h3>
            <p className="mb-4">Negocios Inmobiliarios desde 1967</p>
            <p>+598 99 383 564</p>
            <p>info@ottoyotto.com</p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/en-venta" className="hover:text-gray-300">
                  En Venta
                </Link>
              </li>
              <li>
                <Link href="/alquiler" className="hover:text-gray-300">
                  Alquiler
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-gray-300">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/argentina" className="hover:text-gray-300">
                  Argentina
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="hover:text-gray-300">
                  Quienes Somos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-gray-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Horario</h3>
            <p className="mb-4">Lunes a Viernes: 9:00 - 18:00</p>
            <p>Sábados: 9:00 - 13:00</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>&copy; {currentYear} Otto+Otto. Todos los derechos reservados.</p>

            <div className="flex space-x-4">
              <Link
                href="https://wa.me/59899383564"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-2 text-black transition-colors hover:bg-gray-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </Link>

              <Link
                href="https://instagram.com/ottoyotto"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-2 text-black transition-colors hover:bg-gray-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>

              <Link
                href="https://facebook.com/ottoyotto"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-2 text-black transition-colors hover:bg-gray-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>

              <Link
                href="https://tiktok.com/@ottoyotto"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-2 text-black transition-colors hover:bg-gray-200"
                aria-label="TikTok"
              >
                <TiktokIcon size={20} />
              </Link>

              <Link
                href="https://linkedin.com/company/ottoyotto"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-2 text-black transition-colors hover:bg-gray-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>

              <Link
                href="https://youtube.com/channel/ottoyotto"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-2 text-black transition-colors hover:bg-gray-200"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
