/* app/en-alquiler/page.tsx
 * ────────────────────────────────────────────────────────────────
 * Página “Propiedades en Alquiler”  |  Supabase + filtros + paginación
 */
"use client"

import { useEffect, useState } from "react"
import Image        from "next/image"
import Link         from "next/link"
import { supabase } from "@/lib/supabaseClient"
import { HeroSection } from "@/components/hero-section"

const PAGE_SIZE = 30;                    // ← cantidad por página

/* ───── util: traer alquileres filtrados + paginados ───── */
async function fetchRentals({
  propertyType,
  location,
  priceMin = 0,
  priceMax = 99_999_999,
  bedrooms,
  page = 1,
}: {
  propertyType?: string
  location?: string
  priceMin?: number
  priceMax?: number
  bedrooms?: number
  page?: number
}) {
  const from = (page - 1) * PAGE_SIZE;
  const to   = from + PAGE_SIZE - 1;

  let q = supabase
    .from("properties")
    .select("*", { count: "exact" }) // 👈 total filas
    .eq("deal_type", "rent")
    .gte("price", priceMin)
    .lte("price", priceMax)
    .order("created_at", { ascending: false })
    .range(from, to);

  if (propertyType) q = q.eq("type", propertyType);
  if (location)     q = q.ilike("location", `%${location}%`);
  if (bedrooms)     q = q.gte("bedrooms", bedrooms);

  const { data, error, count } = await q;
  if (error) throw error;
  return { data, count };
}

/* ─────────────────────────────────────────────────────────────── */
export default function Alquiler() {
  /* --------------- state principal --------------- */
  const [properties, setProperties] = useState<any[]>([]);
  const [loading   , setLoading]    = useState(true);
  const [total     , setTotal]      = useState(0);

  /* filtros */
  const [propertyType, setPropertyType] = useState("");
  const [location    , setLocation]     = useState("");
  const [priceRange  , setPriceRange]   = useState("");
  const [bedrooms    , setBedrooms]     = useState("");

  /* lista dinámica de ubicaciones */
  const [locations, setLocations] = useState<string[]>([]);

  /* paginación */
  const [page, setPage]     = useState(1);
  const totalPages = Math.ceil(total / PAGE_SIZE) || 1;

  /* ────── cargar ubicaciones únicas ────── */
  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("properties")
        .select("location")
        .neq("location", null)
        .neq("location", "")
        .order("location", { ascending: true });

      if (error) {
        console.error("Error trayendo ubicaciones:", error);
        return;
      }
      const unique = Array.from(new Set(data.map((r) => r.location.trim())));
      setLocations(unique);
    })();
  }, []);

  /* ────── carga cada vez que cambian filtros / página ────── */
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyType, location, priceRange, bedrooms, page]);

  /* reset page a 1 si modifico filtros */
  const resetPage = () => setPage(1);

  /* ---------------- loader ---------------- */
  async function load() {
    setLoading(true);

    /* rango precio mensual */
    let priceMin = 0, priceMax = 99_999_999;
    if (priceRange === "0-1000")      priceMax = 1_000;
    if (priceRange === "1000-2000") { priceMin = 1_000; priceMax = 2_000 }
    if (priceRange === "2000-3000") { priceMin = 2_000; priceMax = 3_000 }
    if (priceRange === "3000+")       priceMin = 3_000;

    const beds = bedrooms ? parseInt(bedrooms, 10) : undefined;
    const loc  = location === "Todas" ? undefined : location || undefined;

    try {
      const { data, count } = await fetchRentals({
        propertyType: propertyType || undefined,
        location    : loc,
        priceMin,
        priceMax,
        bedrooms    : beds,
        page,
      });
      setProperties(data);
      setTotal(count ?? 0);
    } catch (err) {
      console.error("Error cargando alquileres:", err);
    } finally {
      setLoading(false);
    }
  }

  /* -------------------- UI -------------------- */
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-white">
        <HeroSection
          title="PROPIEDADES EN ALQUILER"
          subtitle="DESCUBRA NUESTRAS EXCLUSIVAS PROPIEDADES EN ALQUILER ANUAL, INVERNAL O TEMPORAL."
          backgroundImage="/images/coastal-aerial-view.jpeg"
        />

        {/* FILTROS */}
        <div className="bg-gray-50 py-6 md:py-8 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {/* tipo */}
              <select
                value={propertyType}
                onChange={(e)=>{ setPropertyType(e.target.value); resetPage(); }}
                className="w-full md:w-48 p-2 border border-gray-300 rounded-sm"
              >
                <option value="">Tipo de propiedad</option>
                <option value="casa">Casa</option>
                <option value="apartamento">Apartamento</option>
                <option value="terreno">Terreno</option>
                <option value="local">Local</option>
              </select>

              {/* ubicación */}
              <select
                value={location}
                onChange={(e)=>{ setLocation(e.target.value); resetPage(); }}
                className="w-full md:w-48 p-2 border border-gray-300 rounded-sm"
              >
                <option value="">Ubicación</option>
                <option value="Todas">Todas</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>

              {/* precio mensual */}
              <select
                value={priceRange}
                onChange={(e)=>{ setPriceRange(e.target.value); resetPage(); }}
                className="w-full md:w-48 p-2 border border-gray-300 rounded-sm"
              >
                <option value="">Precio mensual</option>
                <option value="0-1000">Hasta USD 1.000</option>
                <option value="1000-2000">USD 1.000-2.000</option>
                <option value="2000-3000">USD 2.000-3.000</option>
                <option value="3000+">Más de USD 3.000</option>
              </select>

              {/* dormitorios */}
              <select
                value={bedrooms}
                onChange={(e)=>{ setBedrooms(e.target.value); resetPage(); }}
                className="w-full md:w-48 p-2 border border-gray-300 rounded-sm"
              >
                <option value="">Dormitorios</option>
                <option value="0">Monoambiente</option>
                <option value="1">1 +</option>
                <option value="2">2 +</option>
                <option value="3">3 +</option>
                <option value="4">4 +</option>
              </select>

              <button
                onClick={load}
                className="w-full md:w-auto bg-gold hover:bg-gold-dark text-navy-dark px-6 py-2 transition-colors duration-300"
              >
                BUSCAR
              </button>
            </div>
          </div>
        </div>

        {/* GRID + PAGINACIÓN */}
        <div className="container mx-auto py-12 px-4">
          {loading ? (
            <p className="text-center text-gray-500">Cargando propiedades…</p>
          ) : properties.length === 0 ? (
            <p className="text-center text-gray-500">No hay propiedades disponibles.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((p) => (
                  <div key={p.id} className="bg-white border border-gray-100 shadow-sm overflow-hidden rounded-sm">
                    <Link href={`/propiedad/${p.id}`} className="block relative">
                      <div className="relative">
                        <Image
                          src={p.cover_url || p.image_url || "/images/fallback.jpg"}
                          alt={p.title}
                          width={800}
                          height={600}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-gold px-3 py-1 text-xs text-navy-dark font-medium">
                          Ref.&nbsp;{p.legacy_id?.split("/").pop() ?? p.crm_id}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-secondary text-navy-dark mb-2">{p.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{p.description_short ?? ""}</p>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-xl font-bold text-gold-dark">
                            {(p.currency || "USD")}&nbsp;{p.price?.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                          <div>🛏 {p.bedrooms ?? "-"} Hab.</div>
                          <div>🛁 {p.bathrooms ?? "-"} Baños</div>
                          <div>📐 {p.area ?? "-"} m²</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* PAGINADOR */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-10 space-x-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-3 py-1 border rounded disabled:opacity-40"
                  >
                    ‹ Anterior
                  </button>

                  {Array.from({ length: totalPages }).map((_, i) => {
                    const n = i + 1;
                    if (
                      n === 1 ||
                      n === totalPages ||
                      (n >= page - 1 && n <= page + 1)
                    ) {
                      return (
                        <button
                          key={n}
                          onClick={() => setPage(n)}
                          className={`px-3 py-1 border rounded ${
                            n === page ? "bg-gold text-navy-dark font-semibold" : "bg-white"
                          }`}
                        >
                          {n}
                        </button>
                      );
                    }
                    if (
                      (n === page - 2 && n > 2) ||
                      (n === page + 2 && n < totalPages - 1)
                    ) {
                      return (
                        <span key={n} className="px-2 select-none">…</span>
                      );
                    }
                    return null;
                  })}

                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-3 py-1 border rounded disabled:opacity-40"
                  >
                    Siguiente ›
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
