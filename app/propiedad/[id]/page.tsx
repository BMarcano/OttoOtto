import Image    from "next/image"
import Link     from "next/link"
import { notFound } from "next/navigation"
import {
  MapPin, Phone, Mail, ArrowLeft,
  Home, Ruler, Bath, BedDouble, Car
} from "lucide-react"

import { supabase }   from "@/lib/supabaseClient"
import Footer         from "@/components/footer"

import Gallery   from "@/components/gallery"   // ‼️ nuevo

/* ═════════════════════════ COMPONENTE PRINCIPAL ════════════════════ */
export default async function PropertyDetail({ params }: { params: { id: string } }) {
  /* 1 · traer la fila ------------------------------------------------ */
  const { data: p, error } = await supabase
    .from("properties")
    .select("*")                  // cover_url · gallery_urls[] · etc.
    .eq("id", params.id)
    .single()

  if (error || !p) notFound()

  /* 2 · helpers ------------------------------------------------------ */
  const priceTxt = `${p.currency || "USD"} ${p.price?.toLocaleString()}`
  const features: string[] = p.features?.length
    ? p.features
    : [
        `${p.bedrooms ?? "-"} Dormitorios`,
        `${p.bathrooms ?? "-"} Baños`,
        p.area ? `${p.area} m²` : null,
        p.garage   ? `${p.garage} Garaje${p.garage > 1 ? "s" : ""}` : null,
      ].filter(Boolean) as string[]

  /* fotos ------------------------------------------------------------ */
  const gallery: string[] = (p.gallery_urls ?? []).filter(Boolean)
  const cover = p.cover_url || p.image_url || gallery[0] || "/images/fallback.jpg"

  const areaFeature = features.find(f => f.includes("m²"))
  const garaje      = features.find(f => f.toLowerCase().includes("garaje"))

  /* 3 · UI ----------------------------------------------------------- */
  return (
    <div className="flex flex-col min-h-screen">


      {/* ───────── MAIN ───────── */}
      <main className="flex-1 bg-gray-50">

        {/* breadcrumb + back btn */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto py-3 px-4 text-sm text-gray-500 flex items-center">
            <Link href="/"            className="hover:text-gold">Inicio</Link><span className="mx-2">/</span>
            <Link href="/#properties" className="hover:text-gold">Propiedades</Link><span className="mx-2">/</span>
            <span className="text-navy-dark">{p.title}</span>
          </div>
        </div>
        <div className="container mx-auto pt-6 px-4">
          <Link href="/#properties" className="inline-flex items-center text-navy-dark hover:text-gold">
            <ArrowLeft className="h-4 w-4 mr-2" />Volver a propiedades
          </Link>
        </div>

        {/* encabezado */}
        <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-logo text-navy-dark">{p.title}</h1>
            {p.location && (
              <p className="text-gray-500 mt-2 flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-gold" />{p.location}
              </p>
            )}
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-2xl md:text-3xl font-bold text-gold-dark">{priceTxt}</span>
            <div className="text-sm text-gray-500 mt-1">
              Ref. {p.legacy_id?.split("/").pop() ?? p.id.slice(0, 6)}
            </div>
          </div>
        </div>

        {/* ───────── GALERÍA ───────── */}
        <Gallery cover={cover} images={gallery} title={p.title} />

        {/* ───────── DESCRIPCIÓN + DETALLES ───────── */}
        <div className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* —— columna izquierda —— */}
            <div className="md:col-span-2">

              {/* descripción */}
              <section className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-secondary text-navy-dark mb-4">Descripción</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {p.description_full || "Sin descripción detallada."}
                </p>
              </section>

              {/* características */}
              <section className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-secondary text-navy-dark mb-4">Características</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center">
                      <div className="h-2 w-2 bg-gold rounded-full mr-3" />
                      <span className="text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>
              </section>

              
            </div>

            {/* —— columna derecha —— */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-secondary text-navy-dark mb-4">Detalles</h3>
                <div className="space-y-4">
                  <Detail icon={<Home    className="h-5 w-5 text-gold mr-3" />} label="Tipo"
                          value={(p.type || p.title)?.split("|")[0].trim()} />
                  <Detail icon={<Ruler   className="h-5 w-5 text-gold mr-3" />} label="Área"
                          value={areaFeature ?? "-"} />
                  <Detail icon={<BedDouble className="h-5 w-5 text-gold mr-3" />} label="Dormitorios"
                          value={p.bedrooms ?? "-"} />
                  <Detail icon={<Bath    className="h-5 w-5 text-gold mr-3" />} label="Baños"
                          value={p.bathrooms ?? "-"} />
                  <Detail icon={<Car     className="h-5 w-5 text-gold mr-3" />} label="Garaje"
                          value={garaje ?? (p.garage ?? "-")} />
                </div>
              </div>

              <ContactForm />
            </aside>
          </div>
        </div>
      </main>

    </div>
  )
}

/* ══════════════ COMPONENTES AUXILIARES ═════════════════════════════ */
function Detail({ icon, label, value }: { icon: React.ReactNode; label: string; value: any }) {
  return (
    <div className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-none">
      <div className="flex items-center">
        {icon}<span className="text-gray-600">{label}</span>
      </div>
      <span className="font-medium">{value}</span>
    </div>
  )
}

function ContactForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-secondary text-navy-dark mb-4">
        ¿Te interesa esta propiedad?
      </h3>
      <form className="space-y-4">
        <input type="text"  placeholder="Nombre"
               className="bg-gray-50 border border-gray-200 p-3 w-full rounded-lg" />
        <input type="email" placeholder="Email"
               className="bg-gray-50 border border-gray-200 p-3 w-full rounded-lg" />
        <input type="tel"   placeholder="Teléfono"
               className="bg-gray-50 border border-gray-200 p-3 w-full rounded-lg" />
        <textarea placeholder="Mensaje"
                  className="bg-gray-50 border border-gray-200 p-3 w-full h-32 rounded-lg" />
        <button className="w-full bg-gold hover:bg-gold-dark text-navy-dark p-3 font-medium rounded-lg transition-all">
          CONTACTAR
        </button>
      </form>
      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-gray-500 text-sm mb-4">O contáctanos directamente:</p>
        <div className="flex items-center text-navy-dark mb-2">
          <Phone className="h-4 w-4 mr-2 text-gold" />4249 9355
        </div>
        <div className="flex items-center text-navy-dark">
          <Mail className="h-4 w-4 mr-2 text-gold" />info@otto-otto.com
        </div>
      </div>
    </div>
  )
}
