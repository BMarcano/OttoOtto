// app/proyectos/[slug]/page.tsx

import { supabase } from "@/lib/supabaseClient"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Home, Ruler, Phone, Mail } from "lucide-react"

interface ProjectDetailProps {
  params: { slug: string }
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = params

  // Fetch directo en el servidor
  const { data: project, error } = await supabase
    .from("projectss")
    .select("*")
    .eq("slug", slug)
    .single()

  // Si no hay proyecto o hay error, muestro "no encontrado"
  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-dark text-white">
        <div className="text-center">
          <h1 className="text-4xl font-logo mb-4">Proyecto no encontrado</h1>
          <Link
            href="/proyectos"
            className="bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3 text-sm tracking-wider rounded-md transition-all duration-300"
          >
            VOLVER A PROYECTOS
          </Link>
        </div>
      </div>
    )
  }

  // Render normal si existe
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-white">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto py-3 px-4 text-sm text-gray-500">
            <Link href="/" className="hover:text-gold">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/proyectos" className="hover:text-gold">Proyectos</Link>
            <span className="mx-2">/</span>
            <span className="text-navy-dark">{project.title}</span>
          </div>
        </div>

        {/* Back link */}
        <div className="container mx-auto pt-6 px-4">
          <Link href="/proyectos" className="inline-flex items-center text-navy-dark hover:text-gold">
            <ArrowLeft className="h-4 w-4 mr-2" /> Volver a proyectos
          </Link>
        </div>

        {/* Título y precio */}
        <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-logo text-navy-dark">{project.title}</h1>
            {project.location && (
              <p className="text-gray-500 mt-2 flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-gold" /> {project.location}
              </p>
            )}
          </div>
          {project.price && (
            <span className="text-2xl md:text-3xl font-bold text-gold-dark mt-4 md:mt-0">
              Desde {(project.currency || "USD")}&nbsp;{project.price.toLocaleString()}
            </span>
          )}
        </div>

        {/* Imágenes */}
        <div className="container mx-auto px-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative h-[400px] md:h-[500px] w-full">
              <Image
                src={project.image_url || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {(project.gallery_urls ?? []).slice(1, 5).map((url: string, i: number) => (
                <div key={i} className="relative h-[150px] w-full">
                  <Image src={url} alt={`${project.title} ${i}`} fill className="object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Descripción & detalles */}
        <div className="container mx-auto px-4 mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-secondary text-navy-dark mb-4">Descripción</h2>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {project.description_full}
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-secondary text-navy-dark mb-4">Datos básicos</h3>
              <div className="space-y-4 text-sm">
                {project.units && (
                  <div className="flex justify-between border-b pb-3">
                    <span className="flex items-center"><Home className="h-4 w-4 mr-2 text-gold"/>Unidades Disponibles</span>
                    <span className="font-medium">{project.units}</span>
                  </div>
                )}
               
                {project.area_m2 && (
                  <div className="flex justify-between border-b pb-3">
                    <span className="flex items-center"><Ruler className="h-4 w-4 mr-2 text-gold"/>Área prom.</span>
                    <span className="font-medium">{project.area_m2} m²</span>
                  </div>
                )}
                {project.location && (
                  <div className="flex justify-between pb-3 border-b">
                    <span className="flex items-center"><MapPin className="h-4 w-4 mr-2 text-gold"/>Ubicación</span>
                    <span className="font-medium">{project.location}</span>
                  </div>
                )}
                {project.price && (
                  <div className="flex justify-between">
                    <span className="flex items-center"><Home className="h-4 w-4 mr-2 text-gold"/>Precio desde</span>
                    <span className="font-medium">
                      {(project.currency || "USD")} {project.price.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Contacto rápido */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-secondary text-navy-dark mb-4">¿Te interesa?</h3>
              <Link
                href={`/contacto?ref=${project.slug}`}
                className="block text-center bg-gold hover:bg-gold-dark text-navy-dark p-3 font-medium rounded-lg transition-all duration-300"
              >
                Solicitar información
              </Link>
              <div className="mt-6 pt-6 border-t border-gray-100 text-sm space-y-2">
                <span className="flex items-center text-navy-dark">
                  <Phone className="h-4 w-4 mr-2 text-gold"/> +598 99 383 564
                </span>
                <span className="flex items-center text-navy-dark">
                  <Mail className="h-4 w-4 mr-2 text-gold"/> ottonegociosinmobiliarios@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
