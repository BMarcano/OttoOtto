/*  app/proyectos/page.tsx
 *  -----------------------------------------------------------
 *  Listado de proyectos – datos “projects” desde Supabase
 *  -----------------------------------------------------------
 */
"use client"

import { useEffect, useState } from "react"
import { supabase }            from "@/lib/supabaseClient"
import { HeroSection }         from "@/components/hero-section"
import { ProjectCard }         from "@/components/project-card"

export default function Proyectos() {
  /* ───────────── state ───────────── */
  const [projects, setProjects] = useState<any[]>([])
  const [loading , setLoading ] = useState(true)

  /* ─────────── fetch util ────────── */
  async function load() {
    setLoading(true)

    const { data, error } = await supabase
      .from("projectss")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) console.error("Error cargando proyectos:", error)
    else       setProjects(data ?? [])

    setLoading(false)
  }

  /* primera carga */
  useEffect(() => { load() }, [])

  /* ───────────── UI ──────────────── */
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-white">
        <HeroSection
          title="NUESTROS PROYECTOS"
          subtitle="DESCUBRÍ LA POSIBILIDAD DE COMPRAR EN POZO CON FINANCIACIÓN DIRECTA Y FLEXIBLE"
          backgroundImage="/images/coastal-aerial-view.jpeg"
        />

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            {loading ? (
              <p className="text-center text-gray-500">Cargando proyectos…</p>
            ) : projects.length === 0 ? (
              <p className="text-center text-gray-500">No hay proyectos disponibles.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
                {projects.map(p => (
                  <ProjectCard
                    key={p.id}
                    id={p.slug}
                    name={p.title}
                    location={p.location}
                    description={p.description_short ?? ""}
                    image={p.image_url}
                    availableUnits={p.units}
                    priceFrom={
                      p.price
                        ? `${p.currency || "USD"} ${p.price.toLocaleString()}`
                        : ""
                    }
                    features={p.features ?? []}     
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
