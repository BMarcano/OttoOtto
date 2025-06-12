"use client"
import ContactForm from "@/components/contact-form";
import { useEffect, useRef, useState, FormEvent } from "react";
import Image                          from "next/image"
import Link                           from "next/link"
import { MapPin, Phone, Star, StarHalf } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { PropertyCard } from "@/components/property-card"
import { MobileMenu   } from "@/components/mobile-menu"
import { supabase     } from "@/lib/supabaseClient"

/* ──────────────────────────────────────────────────────────────────── */
/*  tipo mínimo de fila que leeremos de Supabase                       */
type PropertyRow = {
  id               : string
  title            : string
  location         : string | null
  description_short: string | null
  currency         : string | null
  price            : number | null
  bedrooms         : number | null
  bathrooms        : number | null
  area          : number | null
  cover_url        : string | null
  image_url        : string | null
   featured?: boolean            
}
type ProjectRow = {
  id            : string
  slug          : string
  title         : string
  location      : string | null
  price_from    : number | null
  currency      : string | null
  image_url     : string | null
  units: number | null
  description_short: string
}
  
export default function Home() {
  /* refs para desplazamiento suave ---------------------------------- */
  const servicesRef = useRef<HTMLElement>(null)
  const homeRef     = useRef<HTMLElement>(null)

  const scrollToSection = (id: string) => {
    if (id === "services") servicesRef.current?.scrollIntoView({ behavior:"smooth" })
    if (id === "home")     homeRef.current?.scrollIntoView({ behavior:"smooth" })
  }

  useEffect(() => {
    if (window.location.hash)
      setTimeout(()=>scrollToSection(window.location.hash.substring(1)), 100)
  }, [])
    /* ───────── estado proyectos portada ───────── */

  const [projects, setProjects] = useState<ProjectRow[]>([])
  const [loadingProj, setLoadingProj] = useState(true)
  useEffect(()=>{
    let cancel=false
    ;(async()=>{
      const { data, error } = await supabase
        .from("projectss")
        .select("id, slug, title, location, price_from, currency, image_url, units, description_short")
        .order("created_at",{ascending:false})
        .limit(4)                       // solo 4 en portada
      if(!cancel){
        setProjects(error?[]:data as ProjectRow[])
        setLoadingProj(false)
      }
    })()
    return()=>{cancel=true}
  },[])
  /* estado: propiedades destacadas ---------------------------------- */
  const [featured, setFeatured] = useState<PropertyRow[]>([])
  const [loading,  setLoading ] = useState(true)

  useEffect(() => {
    let ignore = false
    ;(async () => {
      /* ajusta el filtro a tu gusto — aquí flag featured=true          */
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("featured", true)                 // ⇦ cámbialo si no usas esta columna
        .order("created_at", { ascending:false })
        .limit(6)

      if (!ignore) {
        setFeatured(error ? [] : (data as PropertyRow[]))
        setLoading(false)
      }
    })()
    return ()=>{ ignore = true }
  }, [])

  /* ───────────────────────────────────────────────────────────────── */

  return (
    <div className="flex flex-col min-h-screen">

      
      {/* ——————————————————————  MAIN  ————————————————————————— */}
      <main className="relative flex-1">

        {/* ═══════════════ Hero Section ═══════════════ */}
        <section id="home" ref={homeRef} className="relative">
          <div className="relative h-[calc(100vh-120px)] w-full">
            <div className="absolute inset-0 bg-navy/40 z-10"></div>
            <Image
              src="/images/hero-image.jpeg"
              alt="Vista aérea de costa con aguas turquesas"
              fill
              className="object-cover"
              priority
            />
            <canvas
              className="absolute inset-0 z-20 pointer-events-none"
              data-particles
              data-particles-count="100"
            ></canvas>

            {/* Hero content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-logo tracking-[0.15em] sm:tracking-[0.2em] mb-6">
                Propiedades &
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-logo tracking-[0.15em] sm:tracking-[0.2em] mb-6">
                Inversiones
              </h1>
              <p className="text-xs sm:text-sm md:text-base tracking-[0.2em] md:tracking-[0.3em] mb-12 text-gold">
                DESCUBRE PROPIEDADES EXCLUSIVAS EN LAS MEJORES UBICACIONES
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contacto"
                  className="bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3 text-sm tracking-wider rounded-md transition-all"
                >
                  AGENDAR UNA ASESORÍA
                </Link>
                <Link
                  href="/en-venta"
                  className="border border-gold hover:bg-gold/10 text-gold px-8 py-3 text-sm tracking-wider rounded-md transition-all"
                >
                  VER PROPIEDADES
                </Link>
              </div>
            </div>

            {/* Buy-now lateral (desktop) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden md:block">
              <Link
                href="/contacto"
                className="bg-gold text-navy-dark py-6 px-3 flex flex-col items-center justify-center text-xs font-bold tracking-widest hover:bg-gold-dark transition-colors"
              >
{"COMPRAR".split("").map((c, i) => <span key={`${c}-${i}`}>{c}</span>)}
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════ PROPIEDADES DE LUJO EN PUNTA DEL ESTE ═══════════════ */}
        <section id="downtown" className="py-16 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="px-4 lg:px-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-logo text-navy-dark leading-tight mb-6 text-center lg:text-left">
                PROPIEDADES
                <br />
                DE LUJO EN
                <br />
                PUNTA DEL ESTE
              </h2>
              <p className="text-gold-dark mb-8 tracking-wide text-center lg:text-left">
                BIENVENIDO A OTTO+OTTO
                <br />
                SU INMOBILIARIA DE CONFIANZA
              </p>
              <div className="text-center lg:text-left">
                <Link
                  href="/en-venta"
                  className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3 text-sm tracking-wider rounded-md transition-all"
                >
                  EXPLORAR PROPIEDADES
                </Link>
              </div>
            </div>

            <div className="relative grid grid-cols-12 gap-4 px-4 lg:px-0">
              <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                <Image
                  src="/images/property-pool-1.png"
                  alt="Apartamento de lujo con vista al mar"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="col-span-10 lg:col-span-9 lg:col-start-1 lg:-mt-24">
                <Image
                  src="/images/property-exterior-1.png"
                  alt="Terraza con vista panorámica"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ SERVICIOS ═══════════════ */}
        <section id="services" ref={servicesRef} className="py-16 bg-gray-light">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl sm:text-5xl font-logo tracking-wider mb-4 text-navy-dark">
              SERVICIOS
            </h2>
            <p className="text-gold-dark mb-16 tracking-wide">
              ASESORAMIENTO INMOBILIARIO DE EXCELENCIA
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* … los 6 bloques de servicio exactamente como estaban … */}
              {/* (copio el HTML original sin cambios) */}
              {/* Service 1 */}
              <div className="bg-navy p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-md">
                <div className="h-10 w-10 text-gold mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <span className="text-gold uppercase tracking-wider text-sm mb-2">SERVICIOS</span>
                <h3 className="text-2xl font-secondary text-white mb-4">Búsqueda Personalizada</h3>
                <p className="text-gray-400 text-center">
                  Encontramos la propiedad perfecta según sus necesidades y preferencias.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white border border-gray-200 p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-md">
                <div className="h-10 w-10 text-gold mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" /><path d="m3 14 7 7 11-11" />
                  </svg>
                </div>
                <span className="text-gold uppercase tracking-wider text-sm mb-2">SERVICIOS</span>
                <a
  href="https://otto-otto.my.canva.site/clubotto"
  target="_blank"
  rel="noopener noreferrer"
  className="block text-center cursor-pointer"
>
  <h3 className="text-2xl font-secondary text-navy-dark mb-4">CLUB+OTTO</h3>
  <p className="text-gray-500">
    Una membresía exclusiva para todos nuestros clientes que podrán acceder a descuentos y beneficios
    premium en gastronomía, belleza, entretenimiento, interiorismo y más.
  </p>
</a>

              </div>

              {/* Service 3 */}
              <div className="bg-navy p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-md">
                <div className="h-10 w-10 text-gold mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <span className="text-gold uppercase tracking-wider text-sm mb-2">SERVICIOS</span>
                <h3 className="text-2xl font-secondary text-white mb-4">Asesoría Legal, Notarial y Contable</h3>
                <p className="text-gray-400 text-center">
                  Asistencia completa en todos los aspectos legales de su transacción inmobiliaria.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-white border border-gray-200 p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-md">
                <div className="h-10 w-10 text-gold mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <span className="text-gold uppercase tracking-wider text-sm mb-2">SERVICIOS</span>
                <h3 className="text-2xl font-secondary text-navy-dark mb-4">Inversiones</h3>
                <p className="text-gray-500 text-center">
                  Asesoramiento experto para maximizar el retorno de su inversión inmobiliaria.
                </p>
              </div>

              {/* Service 5 */}
              <div className="bg-navy p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-md">
                <div className="h-10 w-10 text-gold mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />
                  </svg>
                </div>
                <span className="text-gold uppercase tracking-wider text-sm mb-2">SERVICIOS</span>
                <h3 className="text-2xl font-secondary text-white mb-4">Administración y Marketing Premium</h3>
                <p className="text-gray-400 text-center">
                  Gestión integral de su propiedad y estrategias de marketing exclusivas para vender al mejor precio.
                </p>
              </div>

              {/* Service 6 */}
              <div className="bg-white border border-gray-200 p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-md">
                <div className="h-10 w-10 text-gold mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-gold uppercase tracking-wider text-sm mb-2">SERVICIOS</span>
                <h3 className="text-2xl font-secondary text-navy-dark mb-4">Puntos de Atención al Cliente</h3>
                <p className="text-gray-500 text-center">
                  Asistencia completa para clientes y puntos físicos de atención, recibo de dinero y firma de
                  documentación en Argentina, Buenos Aires y Punta del Este Uruguay.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ PROPIEDADES DESTACADAS (dinámicas) ═══════════════ */}
        <section id="properties" className="py-16 bg-white">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl sm:text-5xl font-logo tracking-wider mb-4 text-navy-dark">
              PROPIEDADES DESTACADAS
            </h2>
            <p className="text-gold-dark mb-16 tracking-wide">
              NUESTRA SELECCIÓN DE PROPIEDADES IDEALES PARA CONVERTIR EN TU PRÓXIMO HOGAR
            </p>

            {loading ? (
              <p className="text-gray-500">Cargando propiedades…</p>
            ) : featured.length === 0 ? (
              <p className="text-gray-500">Aún no hay propiedades destacadas.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {featured.map(prop => (
                  <PropertyCard
                    key={prop.id}
                    id={prop.id}
                    title={prop.title}
                    location={prop.location ?? ""}
                    description={prop.description_short ?? ""}
                    price={`${prop.currency || "USD"} ${prop.price?.toLocaleString()}`}
                    bedrooms={prop.bedrooms ?? 0}
                    bathrooms={prop.bathrooms ?? 0}
                    area={prop.area ?? 0}
                    image={prop.cover_url || prop.image_url || "/images/fallback.jpg"}
                    featured
                  />
                ))}
              </div>
            )}

            <div className="mt-12">
              <Link
                href="/en-venta"
                className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3 text-sm tracking-wider rounded-md transition-all"
              >
                VER TODAS LAS PROPIEDADES
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════ TESTIMONIOS ═══════════════ */}
        <section className="py-16 bg-gray-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-logo tracking-wider mb-4 text-navy-dark">
                TESTIMONIOS
              </h2>
              <p className="text-gold-dark mb-16 tracking-wide">
                LA SATISFACCIÓN DE NUESTROS CLIENTES NOS RESPALDA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 shadow-md rounded-lg transform transition-all duration-500">
                <div className="flex text-gold mb-4">
                  {[...Array(5)].map((_,i)=><Star key={i} className="w-5 h-5 fill-gold"/>)}
                </div>
                <p className="text-gray-600 mb-6">
                  "El servicio de Otto+Otto fue excepcional. Encontraron exactamente lo que buscábamos en tiempo récord.
                  Su conocimiento del mercado inmobiliario en Punta del Este es incomparable."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/images/testimonial-1.png" alt="Juan Rodríguez" width={300} height={300}
                           className="object-cover w-full h-full"/>
                  </div>
                  <div>
                    <h4 className="font-secondary text-lg text-navy-dark">Juan Rodríguez</h4>
                    <p className="text-gold-dark text-sm">Empresario</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-8 shadow-md rounded-lg transform transition-all duration-500">
                <div className="flex text-gold mb-4">
                  {[...Array(5)].map((_,i)=><Star key={i} className="w-5 h-5 fill-gold"/> )}
                </div>
                <p className="text-gray-600 mb-6">
                  "Después de meses buscando, ellos entendieron exactamente lo que necesitábamos. No solo encontramos un
                  apartamento, encontramos un hogar. ¡Gracias por hacerlo tan fácil!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/images/testimonial-2.png" alt="Carlos Rodríguez" width={300} height={300}
                           className="object-cover w-full h-full"/>
                  </div>
                  <div>
                    <h4 className="font-secondary text-lg text-navy-dark">Carlos Rodríguez</h4>
                    <p className="text-gold-dark text-sm">Arquitecto</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-8 shadow-md rounded-lg transform transition-all duration-500">
                <div className="flex text-gold mb-4">
                  {[...Array(4)].map((_,i)=><Star key={i} className="w-5 h-5 fill-gold"/> )}
                  <StarHalf className="w-5 h-5 fill-gold"/>
                </div>
                <p className="text-gray-600 mb-6">
                  "La atención personalizada y el seguimiento constante durante todo el proceso de compra fueron
                  impecables. Recomendaría Otto+Otto a cualquiera que busque propiedades de lujo en Punta del Este."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/images/testimonial-3.png" alt="Ana Martínez" width={300} height={300}
                           className="object-cover w-full h-full"/>
                  </div>
                  <div>
                    <h4 className="font-secondary text-lg text-navy-dark">Ana Martínez</h4>
                    <p className="text-gold-dark text-sm">Médica</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-white p-8 shadow-md rounded-lg transform transition-all duration-500">
                <div className="flex text-gold mb-4">
                  {[...Array(5)].map((_,i)=><Star key={i} className="w-5 h-5 fill-gold"/> )}
                </div>
                <p className="text-gray-600 mb-6">
                  "Como inversor extranjero, valoré enormemente la transparencia y profesionalismo de Otto+Otto. Su
                  equipo me guió a través de todo el proceso legal y encontró una propiedad que superó mis
                  expectativas."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/images/testimonial-4.png" alt="Martín Fernández" width={300} height={300}
                           className="object-cover w-full h-full"/>
                  </div>
                  <div>
                    <h4 className="font-secondary text-lg text-navy-dark">Martín Fernández</h4>
                    <p className="text-gold-dark text-sm">Inversor</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="bg-white p-8 shadow-md rounded-lg transform transition-all duration-500">
                <div className="flex text-gold mb-4">
                  {[...Array(4)].map((_,i)=><Star key={i} className="w-5 h-5 fill-gold"/> )}
                  <StarHalf className="w-5 h-5 fill-gold"/>
                </div>
                <p className="text-gray-600 mb-6">
                  "La experiencia con Otto+Otto fue excepcional desde el primer contacto. Su conocimiento del mercado y
                  su capacidad para entender exactamente lo que buscábamos nos permitió encontrar nuestra casa de playa
                  ideal."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/images/testimonial-5.png" alt="Diego Méndez" width={300} height={300}
                           className="object-cover w-full h-full"/>
                  </div>
                  <div>
                    <h4 className="font-secondary text-lg text-navy-dark">Diego Méndez</h4>
                    <p className="text-gold-dark text-sm">Diseñador</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ PROYECTOS EXCLUSIVOS ═══════════════ */}
        <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl sm:text-5xl font-logo tracking-wider mb-4 text-navy-dark">
            PROYECTOS EXCLUSIVOS
          </h2>
          <p className="text-gold-dark mb-16 tracking-wide">
            DESCUBRA NUESTROS DESARROLLOS INMOBILIARIOS DE LUJO
          </p>

          {loadingProj ? (
            <p className="text-gray-500">Cargando proyectos…</p>
          ) : projects.length === 0 ? (
            <p className="text-gray-500">Aún no hay proyectos cargados.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map(pr=>(
                <ProjectCard
  key={pr.id}
  id={pr.slug || pr.id}
  name={pr.title}
  location={pr.location ?? ""}
  image={pr.image_url || "/images/fallback.jpg"}
  availableUnits={pr.units ?? 0}
  priceFrom={`${pr.currency || "USD"} ${pr.price_from?.toLocaleString()}`}
  description={pr.description_short || ""}
  features={[]}
/>

              ))}
            </div>
          )}

          <div className="mt-12">
            <Link
              href="/proyectos"
              className="inline-block bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3 text-sm tracking-wider rounded-md transition-all"
            >
              VER TODOS LOS PROYECTOS
            </Link>
          </div>
        </div>
      </section>
        {/* ═══════════════ CONTACTO ═══════════════ */}
        <section id="contact" className="py-16 bg-navy text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="px-4">
                <h2 className="text-4xl font-logo tracking-wider mb-4">
                  AGENDA
                  <br />
                  UNA ASESORÍA
                </h2>
                <p className="text-gray-400 mb-8">
                  Contáctanos para programar una asesoría personalizada sobre
                  nuestras exclusivas propiedades y descubre el lujo que te
                  espera.
                </p>
              </div>

              <div className="px-4">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ NEWSLETTER ═══════════════ */}
        <section className="py-8 bg-gold-light">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            <p className="text-lg font-logo mb-4 md:mb-0 text-navy-dark text-center md:text-left">
              ¡Únete a nuestra lista para recibir las mejores propiedades en tu bandeja de entrada!
            </p>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Ingresa tu email aquí*"
                className="bg-white border-none p-3 flex-grow md:w-64 rounded-l-lg focus:ring-2 focus:ring-gold transition-all"
              />
              <button
                className="bg-navy hover:bg-navy-medium text-white px-6 py-3 rounded-r-lg transition-all"
              >
                SUSCRIBIRSE
              </button>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}
