"use client"

import Link from "next/link"
import Image from "next/image"
import {
  MapPin, Phone, Mail, Clock,
  Facebook, Linkedin, Twitter, Youtube
} from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"
import { HeroSection } from "@/components/hero-section"

export default function Contacto() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar y Navbar (si los tienes en componentes aparte) */}
      {/* <TopBar /> */}
      {/* <MainNav /> */}

      <main className="flex-1 bg-white">
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <HeroSection
          title="CONTÁCTENOS"
          subtitle="ESTAMOS AQUÍ PARA AYUDARLE"
          backgroundImage="/images/coastal-aerial-view.jpeg"
        />

        {/* ─── SUCURSALES ──────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl font-logo tracking-wider mb-4 text-navy-dark">
                NUESTRAS OFICINAS
              </h2>
              <p className="text-gold-dark mb-8 tracking-wide max-w-2xl mx-auto">
                VISÍTENOS EN CUALQUIERA DE NUESTRAS SUCURSALES
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* ── Gorlero ───────────────────── */}
              <OfficeCard
                title="Sucursal Gorlero"
                address="Gorlero 1047"
                tel="+598 99 383 564"
                mapHref="https://maps.google.com/?q=Gorlero+1047+Punta+del+Este"
              />

              {/* ── Plaza México ──────────────── */}
              <OfficeCard
                title="Sucursal Plaza México"
                address="Yucatán Local 05 (entre Biarritz y M’Hijo el Dotor)"
                tel="+598 99 383 564"
                mapHref="https://maps.google.com/?q=Plaza+Mexico+Punta+del+Este"
              />

              {/* ── Buenos Aires ─────────────── */}
              <OfficeCard
                title="Sucursal Buenos Aires"
                address="Av. Acoyte 580 Depto 2E"
                tel="+598 99 383 564"
                mapHref="https://maps.google.com/?q=Avenida+Acoyte+580+Buenos+Aires"
              />
            </div>

            {/* ─ General contact info ─ */}
            <div className="max-w-4xl mx-auto mt-16 text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InfoIcon
                  icon={<Mail className="h-8 w-8 text-gold" />}
                  title="Email"
                  text="ottonegociosinmobiliarios@gmail.com"
                />
                <InfoIcon
                  icon={<Clock className="h-8 w-8 text-gold" />}
                  title="Horario de Atención"
                  text="Lunes a Sábados de 10:00 a 18:00 hs"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── FORMULARIO DE CONTACTO ──────────────────────────── */}
        <ContactFormSection />

        {/* ─── MAPA ─────────────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-logo tracking-wider mb-4 text-navy-dark">
                NUESTRA UBICACIÓN
              </h2>
              <p className="text-gold-dark mb-8 tracking-wide">
                ENCUENTRE NUESTRAS OFICINAS PRINCIPALES
              </p>
            </div>

            {/* iframe 100 % responsive */}
            <div className="max-w-6xl mx-auto h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Mapa oficina Gorlero 1047"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.469731800574!2d-54.951973884886835!3d-34.95700974283496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a59db88b49d16f%3A0xb66e4fab79e927d!2sGorlero%201047%2C%20Punta%20del%20Este%2C%20Uruguay!5e0!3m2!1ses!2suy!4v1700000000000!5m2!1ses!2suy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ────────────────────────────────────────────── */}
    </div>
  )
}

/* ══════════════════ COMPONENTES AUXILIARES ══════════════════ */

function OfficeCard({
  title,
  address,
  tel,
  mapHref,
}: {
  title: string
  address: string
  tel: string
  mapHref: string
}) {
  return (
    <div className="bg-white border border-gray-100 shadow-md p-8 text-center rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="h-16 w-16 bg-navy-dark rounded-full flex items-center justify-center mx-auto mb-6">
        <MapPin className="h-8 w-8 text-gold" />
      </div>
      <h3 className="text-2xl font-secondary text-navy-dark mb-4">{title}</h3>
      <div className="space-y-3 text-gray-600">
        <p>{address}</p>
        <p className="flex items-center justify-center">
          <Phone className="h-4 w-4 mr-2 text-gold" />
          {tel}
        </p>
      </div>
      <div className="mt-6">
        <Link
          href={mapHref}
          target="_blank"
          className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-6 py-2 text-sm tracking-wider rounded-md transition-all duration-300"
        >
          VER EN MAPA
        </Link>
      </div>
    </div>
  )
}

function InfoIcon({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-16 w-16 bg-navy-dark rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-secondary text-navy-dark mb-4">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  )
}

/* ─── sección con el formulario ------------------------------ */
function ContactFormSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-logo tracking-wider mb-4 text-navy-dark">
              ENVÍENOS UN MENSAJE
            </h2>
            <p className="text-gold-dark mb-8 tracking-wide">
              COMPLETE EL FORMULARIO Y NOS PONDREMOS EN CONTACTO CON USTED
            </p>
          </div>

          <div className="bg-white p-8 shadow-md rounded-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input id="nombre" label="Nombre*" required />
                <Input id="apellido" label="Apellido*" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input id="email" label="Email*" type="email" required />
                <Input id="telefono" label="Teléfono*" type="tel" required />
              </div>
              <Input id="asunto" label="Asunto*" required />
              <Textarea id="mensaje" label="Mensaje*" rows={6} required />

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacidad"
                  required
                  className="h-4 w-4 text-gold focus:ring-gold border-gray-300 rounded"
                />
                <label htmlFor="privacidad" className="ml-2 text-sm text-gray-700">
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
  )
}

/* --- helpers formulario ------------------------------------ */
function Input({
  id,
  label,
  type = "text",
  required,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className="w-full p-3 border border-gray-300 focus:ring-gold focus:border-gold rounded-lg"
      />
    </div>
  )
}
function Textarea({
  id,
  label,
  rows,
  required,
}: {
  id: string
  label: string
  rows?: number
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        required={required}
        className="w-full p-3 border border-gray-300 focus:ring-gold focus:border-gold rounded-lg"
      ></textarea>
    </div>
  )
}

