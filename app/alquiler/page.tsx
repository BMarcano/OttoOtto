"use client"


import { useEffect, useState } from "react"
import Image              from "next/image"
import Link               from "next/link"
import { MapPin, Phone }  from "lucide-react"
import { supabase }       from "@/lib/supabaseClient"
import { MobileMenu }     from "@/components/mobile-menu"
import { HeroSection }    from "@/components/hero-section"

/* ---------------- util – query con filtros ---------------- */
async function fetchRentals({
  propertyType,
  location,
  priceMin = 0,
  priceMax = 99_999_999,
  bedrooms,
}: {
  propertyType?: string
  location?: string
  priceMin?: number
  priceMax?: number
  bedrooms?: number
}) {
  let q = supabase
    .from("properties")
    .select("*")
    .eq("deal_type", "rent")                  // ← sólo alquileres
    .gte("price", priceMin)
    .lte("price", priceMax)
    .order("created_at", { ascending: false })

  if (propertyType)  q = q.eq("type", propertyType)     // ej. “apartamento”
  if (location)      q = q.ilike("location", `%${location}%`)
  if (bedrooms)      q = q.gte("bedrooms", bedrooms)

  const { data, error } = await q
  if (error) throw error
  return data
}

/* ------------------------- page --------------------------- */
export default function Alquiler() {
  /* state -------------------------------------------------- */
  const [properties, setProperties] = useState<any[]>([])
  const [loading   , setLoading]    = useState(true)
const [locations, setLocations] = useState<string[]>([]);

  /* filtros */
  const [propertyType, setPropertyType] = useState("")
  const [location    , setLocation]     = useState("")
  const [priceRange  , setPriceRange]   = useState("")
  const [bedrooms    , setBedrooms]     = useState("")
useEffect(() => {
  (async () => {
    const { data, error } = await supabase
      // pido SOLO la columna location
      .from("properties")
      .select("location")
      .neq("location", null)           // quita nulos
      .neq("location", "")             // quita vacíos
      .order("location", { ascending: true });

    if (error) {
      console.error("Error trayendo ubicaciones:", error);
      return;
    }

    // saco duplicados con un Set
    const unique = Array.from(new Set(data.map((r) => r.location.trim())));
    setLocations(unique);
  })();
}, []);
// ─────────────────────────────────────────────────

  /* carga inicial */
  useEffect(() => { load() }, [])

  /* recarga al cambiar filtros (opcional, quitar si querés usar sólo el botón) */
  useEffect(() => { load() }, [propertyType, location, priceRange, bedrooms])

  /* ------------------------ load -------------------------- */
  async function load() {
    setLoading(true)

    /* traducir rango precio */
    let priceMin = 0, priceMax = 99_999_999
    if (priceRange === "0-1000")     priceMax = 1000
    if (priceRange === "1000-2000") { priceMin = 1000; priceMax = 2000 }
    if (priceRange === "2000-3000") { priceMin = 2000; priceMax = 3000 }
    if (priceRange === "3000+")     priceMin = 3000

    /* dormitorios */
    const beds = bedrooms ? parseInt(bedrooms, 10) : undefined

    /* ubicación “Todas” equivale a sin filtro */
    const loc = location === "Todas" ? undefined : location || undefined

    try {
      const data = await fetchRentals({
        propertyType: propertyType || undefined,
        location    : loc,
        priceMin,
        priceMax,
        bedrooms    : beds,
      })
      setProperties(data)
    } catch (err) {
      console.error("Error cargando alquileres:", err)
    } finally {
      setLoading(false)
    }
  }

  /* ------------------------- UI --------------------------- */
  return (
    <div className="flex flex-col min-h-screen">
      {/* ---------- TOP BAR ---------- */}
      

      

      {/* ---------- HERO ---------- */}
      <main className="flex-1 bg-white">
        <HeroSection
          title="PROPIEDADES EN ALQUILER"
          subtitle="DESCUBRA NUESTRAS EXCLUSIVAS PROPIEDADES"
          backgroundImage="/images/coastal-aerial-view.jpeg"
        />

        {/* ---------- FILTROS ---------- */}
        <div className="bg-gray-50 py-6 md:py-8 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {/* tipo */}
              <select value={propertyType} onChange={e=>setPropertyType(e.target.value)}
                className="w-full md:w-48 p-2 border border-gray-300 rounded-sm">
                <option value="">Tipo de propiedad</option>
                <option value="casa">Casa</option>
                <option value="apartamento">Apartamento</option>
                <option value="terreno">Terreno</option>
                <option value="local">Local</option>
              </select>

              <select
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  className="w-full md:w-48 p-2 border border-gray-300 rounded-sm"
>
  <option value="">Ubicación</option>
  <option value="Todas">Todas</option>

  {/* genera una <option> por cada barrio real */}
  {locations.map((loc) => (
    <option key={loc} value={loc}>
      {loc}
    </option>
  ))}
</select>


              {/* precio */}
              <select value={priceRange} onChange={e=>setPriceRange(e.target.value)}
                className="w-full md:w-48 p-2 border border-gray-300 rounded-sm">
                <option value="">Precio mensual</option>
                <option value="0-1000">Hasta USD 1 000</option>
                <option value="1000-2000">USD 1 000-2 000</option>
                <option value="2000-3000">USD 2 000-3 000</option>
                <option value="3000+">Más de USD 3 000</option>
              </select>

              {/* dormitorios */}
              <select value={bedrooms} onChange={e=>setBedrooms(e.target.value)}
                className="w-full md:w-48 p-2 border border-gray-300 rounded-sm">
                <option value="">Dormitorios</option>
                <option value="0">Monoambiente</option>
                <option value="1">1 +</option>
                <option value="2">2 +</option>
                <option value="3">3 +</option>
                <option value="4">4 +</option>
              </select>

              {/* botón */}
              <button type="button" onClick={load}
                className="w-full md:w-auto bg-gold hover:bg-gold-dark text-navy-dark px-6 py-2 transition-colors duration-300">
                BUSCAR
              </button>
            </div>
          </div>
        </div>

        {/* ---------- GRID ---------- */}
        <div className="container mx-auto py-12 px-4">
          {loading ? (
            <p className="text-center text-gray-500">Cargando propiedades…</p>
          ) : properties.length === 0 ? (
            <p className="text-center text-gray-500">No hay propiedades disponibles.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map(p => (
                <div key={p.id} className="bg-white border border-gray-100 shadow-sm overflow-hidden rounded-sm">
                  <Link href={`/propiedad/${p.id}`} className="block relative">
                    <div className="relative">
                      <Image
                        src={p.cover_url /* ⇦ tu columna con la foto principal */
                             || p.image_url /* fallback si la llamás así */
                             || "/images/fallback.jpg"}
                        alt={p.title}
                        width={800}
                        height={600}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-gold px-3 py-1 text-xs text-navy-dark font-medium">
                        Ref.&nbsp;{p.legacy_id?.split("/").pop() ?? p.id}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-secondary text-navy-dark mb-2">{p.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{p.description ?? ""}</p>

                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xl font-bold text-gold-dark">
                          {(p.currency || "USD")}&nbsp;{p.price?.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-500">
                        <div>🛏&nbsp;{p.bedrooms ?? "-"} Hab.</div>
                        <div>🛁&nbsp;{p.bathrooms ?? "-"} Baños</div>
                        <div>📐&nbsp;{p.area ?? "-"} m²</div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>


    </div>
  )
}
