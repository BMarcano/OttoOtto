// app/contacto/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

import { HeroSection } from "@/components/hero-section";
import ContactForm from "@/components/contact-form";

/* ═══════════════ PÁGINA CONTACTO ═══════════════ */

export default function Contacto() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-white">
        {/* HERO */}
        <HeroSection
          title="CONTÁCTENOS"
          subtitle="ESTAMOS AQUÍ PARA AYUDARLE"
          backgroundImage="/images/coastal-aerial-view.jpeg"
        />

        {/* OFICINAS */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <header className="text-center mb-16">
              <h2 className="text-4xl font-logo tracking-wider mb-4 text-navy-dark">
                NUESTRAS OFICINAS
              </h2>
              <p className="text-gold-dark tracking-wide max-w-2xl mx-auto">
                VISÍTENOS EN CUALQUIERA DE NUESTRAS SUCURSALES
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <OfficeCard
                title="Sucursal Gorlero"
                address="Gorlero 1047"
                tel="+598 99 383 564"
                mapHref="https://maps.google.com/?q=Gorlero+1047+Punta+del+Este"
              />
              <OfficeCard
                title="Sucursal Plaza México"
                address="Yucatán Local 05 (entre Biarritz y M’Hijo el Dotor)"
                tel="+598 99 383 564"
                mapHref="https://maps.google.com/?q=Plaza+Mexico+Punta+del+Este"
              />
              <OfficeCard
                title="Sucursal Buenos Aires"
                address="Av. Acoyte 580 Depto 2E"
                tel="+54 911 6658 6391"
                mapHref="https://maps.google.com/?q=Avenida+Acoyte+580+Buenos+Aires"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16 text-center">
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
        </section>

        {/* FORMULARIO */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 className="text-4xl font-logo tracking-wider mb-4 text-navy-dark">
                ENVÍENOS UN MENSAJE
              </h2>
              <p className="text-gold-dark tracking-wide">
                COMPLETE EL FORMULARIO Y NOS PONDREMOS EN CONTACTO CON USTED
              </p>
            </header>

            <div className="bg-white p-8 shadow-md rounded-lg max-w-4xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* MAPA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 className="text-4xl font-logo tracking-wider mb-4 text-navy-dark">
                NUESTRA UBICACIÓN
              </h2>
              <p className="text-gold-dark tracking-wide">
                ENCUENTRE NUESTRAS OFICINAS PRINCIPALES
              </p>
            </header>

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
    </div>
  );
}

/* ═══════════════ COMPONENTES AUXILIARES ═══════════════ */

function OfficeCard({
  title,
  address,
  tel,
  mapHref,
}: {
  title: string;
  address: string;
  tel: string;
  mapHref: string;
}) {
  return (
    <div className="bg-white border border-gray-100 shadow p-8 text-center rounded-lg hover:shadow-lg transition-shadow">
      <div className="h-16 w-16 bg-navy-dark rounded-full flex items-center justify-center mx-auto mb-6">
        <MapPin className="h-8 w-8 text-gold" />
      </div>
      <h3 className="text-2xl font-secondary text-navy-dark mb-4">{title}</h3>
      <p className="text-gray-600">{address}</p>
      <p className="flex items-center justify-center text-gray-600 mt-2">
        <Phone className="h-4 w-4 mr-2 text-gold" />
        {tel}
      </p>
      <Link
        href={mapHref}
        target="_blank"
        className="inline-block mt-6 bg-gold hover:bg-gold-dark text-navy-dark px-6 py-2 text-sm rounded-md transition-colors"
      >
        VER EN MAPA
      </Link>
    </div>
  );
}

function InfoIcon({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-16 w-16 bg-navy-dark rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-secondary text-navy-dark mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
