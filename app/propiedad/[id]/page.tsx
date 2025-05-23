import Image                 from "next/image"
import Link                  from "next/link"
import { notFound }          from "next/navigation"
import {
  MapPin, Phone, Mail, ArrowLeft,
  Home, Ruler, Bath, BedDouble, Car
} from "lucide-react"
import { supabase } from "@/lib/supabaseClient"

/* --------------------------------------------------------------- */
export default async function PropertyDetail ({ params }:{ params:{ id:string } }) {

  /* 1 · traer la fila --------------------------------------------------- */
  const { data: p, error } = await supabase
    .from("properties")
    .select("*")
    .eq("id", params.id)      // ⇦ PK uuid
    .single()

  if (error || !p) notFound()             // 404 automático

  /* 2 · preparar helpers ------------------------------------------------ */
  const priceTxt = `${p.currency || "USD"} ${p.price?.toLocaleString()}`

  /* features: si en tu tabla existe un array “features” lo uso;         */
  /* si no, lo genero con los campos actuales -------------------------- */
  const features : string[] = p.features?.length
    ? p.features
    : [
        `${p.bedrooms ?? "-"} Dormitorios`,
        `${p.bathrooms ?? "-"} Baños`,
        p.area_m2 ? `${p.area_m2} m²` : null,
        p.garage  ? `${p.garage} Garaje${p.garage>1?"s":""}` : null,
      ].filter(Boolean) as string[]

  /* imágenes extra: columna derecha del mosaico ----------------------- */
  const extraImages : string[] = p.additional_images?.length
    ? p.additional_images
    : []   /* si no hay, quedará vacío */

  /* helpers para icon-detail (columna derecha) ------------------------ */
  const areaFeature = features.find(f=>f.includes("m²"))
  const garaje      = features.find(f=>f.toLowerCase().includes("garaje"))

  /* 3 · UI – MISMO DISEÑO --------------------------------------------- */
  return (
    <div className="flex flex-col min-h-screen">
      {/* ---------- TOP BAR ---------- */}
      <div className="bg-navy-dark text-white py-2 px-4 flex justify-between items-center text-xs">
        <span className="text-gold">APOSTANDO POR OTTO+OTTO, GANAS VOS</span>
        <div className="flex items-center space-x-6">
          <div className="flex items-center"><MapPin className="h-4 w-4 mr-2 text-gold"/>GORLERO 1047&nbsp;– Punta del Este</div>
          <div className="flex items-center"><Phone  className="h-4 w-4 mr-2 text-gold"/>+598&nbsp;99&nbsp;383&nbsp;564</div>
        </div>
      </div>

      {/* ---------- NAV ---------- */}
      {/* …exactamente tu mismo bloque de navegación (omitido por brevedad) */}

      {/* ---------- MAIN ---------- */}
      <main className="flex-1 bg-gray-50">

        {/* breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto py-3 px-4 text-sm text-gray-500 flex items-center">
            <Link href="/" className="hover:text-gold">Inicio</Link><span className="mx-2">/</span>
            <Link href="/#properties" className="hover:text-gold">Propiedades</Link><span className="mx-2">/</span>
            <span className="text-navy-dark">{p.title}</span>
          </div>
        </div>

        {/* botón volver */}
        <div className="container mx-auto pt-6 px-4">
          <Link href="/#properties" className="inline-flex items-center text-navy-dark hover:text-gold">
            <ArrowLeft className="h-4 w-4 mr-2"/>Volver a propiedades
          </Link>
        </div>

        {/* encabezado */}
        <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-logo text-navy-dark">{p.title}</h1>
            {p.location && (
              <p className="text-gray-500 mt-2 flex items-center"><MapPin className="h-4 w-4 mr-1 text-gold"/>{p.location}</p>
            )}
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-2xl md:text-3xl font-bold text-gold-dark">{priceTxt}</span>
            <div className="text-sm text-gray-500 mt-1">Ref. {p.legacy_id?.split("/").pop() ?? p.id.slice(0,6)}</div>
          </div>
        </div>

        {/* ---------- MOSAICO DE FOTOS ---------- */}
        <div className="container mx-auto px-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative h-[400px] md:h-[500px] w-full">
                <Image
                  src={p.cover_url || p.image_url || "/images/fallback.jpg"}
                  alt={p.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {extraImages.slice(0,3).map((img,i)=>(
                <div key={i} className="relative h-[150px] w-full">
                  <Image
                    src={img || "/images/fallback.jpg"}
                    alt={`${p.title} imagen ${i+2}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- DESCRIPCIÓN + CARACTERÍSTICAS + UBICACIÓN ---------- */}
        <div className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* ----- columna izquierda ----- */}
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
                  {features.map((f,i)=>(
                    <div key={i} className="flex items-center">
                      <div className="h-2 w-2 bg-gold rounded-full mr-3"></div>
                      <span className="text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ubicación */}
              <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-secondary text-navy-dark mb-4">Ubicación</h2>
                <div className="relative h-[300px] w-full bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-gold mx-auto mb-2"/>
                    <p className="text-navy-dark">Coordenadas: {p.coordinates ?? "–"}</p>
                    <p className="text-gray-500 mt-2">{p.location ?? "–"}</p>
                  </div>
                </div>
              </section>
            </div>

            {/* ----- columna derecha ----- */}
            <aside>
              {/* resumen */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-secondary text-navy-dark mb-4">Detalles</h3>
                <div className="space-y-4">
                  <Detail icon={<Home    className="h-5 w-5 text-gold mr-3"/>} label="Tipo"
                          value={(p.type || p.title)?.split("|")[0].trim()}/>
                  <Detail icon={<Ruler   className="h-5 w-5 text-gold mr-3"/>} label="Área"
                          value={areaFeature ?? "-"} />
                  <Detail icon={<BedDouble className="h-5 w-5 text-gold mr-3"/>} label="Dormitorios"
                          value={p.bedrooms ?? "-"} />
                  <Detail icon={<Bath    className="h-5 w-5 text-gold mr-3"/>} label="Baños"
                          value={p.bathrooms ?? "-"} />
                  <Detail icon={<Car     className="h-5 w-5 text-gold mr-3"/>} label="Garaje"
                          value={garaje ?? (p.garage ?? "-")} />
                </div>
              </div>

              {/* formulario contacto – idéntico al tuyo */}
              <ContactForm/>
            </aside>
          </div>
        </div>
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
            <a href="#" className="text-white hover:text-gold">
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
            <a href="#" className="text-white hover:text-gold">
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
            <a href="#" className="text-white hover:text-gold">
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
/* ------------------------------------------------------------------ */
/* helpers UI                                                         */
function Detail({icon,label,value}:{icon:React.ReactNode,label:string,value:any}){
  return (
    <div className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-none">
      <div className="flex items-center">{icon}<span className="text-gray-600">{label}</span></div>
      <span className="font-medium">{value}</span>
    </div>
  )
}

function ContactForm(){
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-secondary text-navy-dark mb-4">¿Te interesa esta propiedad?</h3>
      <form className="space-y-4">
        <input type="text"  placeholder="Nombre"    className="bg-gray-50 border border-gray-200 p-3 w-full rounded-lg"/>
        <input type="email" placeholder="Email"     className="bg-gray-50 border border-gray-200 p-3 w-full rounded-lg"/>
        <input type="tel"   placeholder="Teléfono"  className="bg-gray-50 border border-gray-200 p-3 w-full rounded-lg"/>
        <textarea placeholder="Mensaje" className="bg-gray-50 border border-gray-200 p-3 w-full h-32 rounded-lg"/>
        <button className="w-full bg-gold hover:bg-gold-dark text-navy-dark p-3 font-medium rounded-lg transition-all duration-300">
          CONTACTAR
        </button>
      </form>
      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-gray-500 text-sm mb-4">O contáctanos directamente:</p>
        <div className="flex items-center text-navy-dark mb-2"><Phone className="h-4 w-4 mr-2 text-gold"/>4249&nbsp;9355</div>
        <div className="flex items-center text-navy-dark"><Mail className="h-4 w-4 mr-2 text-gold"/>info@otto-otto.com</div>
      </div>
    </div>
  )
}