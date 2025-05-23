import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, ArrowLeft, Home, Ruler, Bath, BedDouble, Car, Mail } from "lucide-react"

// Datos de proyectos (en un proyecto real, esto vendría de una base de datos)
const projects = {
  "marina-bay": {
    name: "Marina Bay",
    location: "Punta del Este",
    description:
      "Marina Bay es un exclusivo complejo residencial ubicado en una de las zonas más privilegiadas de Punta del Este, con vista directa al puerto y acceso al mar. Este desarrollo de lujo combina la sofisticación arquitectónica con amenities de primer nivel, ofreciendo una experiencia de vida única para quienes buscan exclusividad y confort.",
    longDescription:
      "Marina Bay se erige como un símbolo de elegancia y exclusividad en Punta del Este. Su diseño arquitectónico de vanguardia se integra armoniosamente con el entorno marítimo, aprovechando al máximo las vistas panorámicas al puerto y al océano. Cada detalle ha sido cuidadosamente pensado para ofrecer una experiencia de vida incomparable, desde los acabados de lujo hasta los espacios comunes diseñados para el disfrute y la socialización. El complejo cuenta con acceso directo al mar, permitiendo a sus residentes disfrutar de todas las ventajas de vivir junto al agua. La seguridad 24 horas, el servicio de conserjería y el mantenimiento integral garantizan tranquilidad y comodidad para todos los propietarios.",
    image: "/images/project-building-1.png",
    units: 24,
    availableUnits: 8,
    priceFrom: "USD 350.000",
    features: ["Piscina infinity", "Gimnasio", "Seguridad 24hs", "Muelle privado", "Spa", "Salón de eventos"],
    availableProperties: [
      {
        id: "mb-101",
        type: "Apartamento",
        bedrooms: 2,
        bathrooms: 2,
        area: 120,
        price: "USD 350.000",
        image: "/images/property-interior-1.png",
        features: ["Vista al mar", "Terraza", "Cocina equipada", "Estacionamiento"],
      },
      {
        id: "mb-205",
        type: "Apartamento",
        bedrooms: 3,
        bathrooms: 2,
        area: 150,
        price: "USD 480.000",
        image: "/images/property-living-1.png",
        features: ["Vista panorámica", "Terraza amplia", "Cocina equipada", "2 estacionamientos"],
      },
      {
        id: "mb-301",
        type: "Penthouse",
        bedrooms: 4,
        bathrooms: 3,
        area: 220,
        price: "USD 750.000",
        image: "/images/property-sunroom-1.png",
        features: ["Vista 360°", "Terraza con jacuzzi", "Cocina gourmet", "3 estacionamientos"],
      },
    ],
  },
  "ocean-towers": {
    name: "Ocean Towers",
    location: "La Barra",
    description:
      "Ocean Towers es un impresionante desarrollo de torres de lujo ubicado frente al mar en La Barra, ofreciendo amplias terrazas y vistas panorámicas al océano. Este proyecto combina la exclusividad de su ubicación con amenities de primer nivel.",
    longDescription:
      "Ocean Towers redefine el concepto de lujo frente al mar en La Barra. Este impresionante desarrollo consta de dos torres de diseño contemporáneo que se elevan majestuosamente frente al océano, ofreciendo vistas panorámicas inigualables desde cada unidad. Los apartamentos han sido diseñados pensando en maximizar la luz natural y las vistas al mar, con amplias terrazas que permiten disfrutar plenamente del entorno. Los espacios interiores destacan por su amplitud y acabados de alta gama, creando ambientes sofisticados y acogedores. El complejo cuenta con una impresionante piscina climatizada con vista al mar, un completo spa con sauna y jacuzzi, gimnasio equipado con tecnología de punta, y un elegante salón de eventos para reuniones sociales. La seguridad es una prioridad, con control de acceso las 24 horas y estacionamiento subterráneo para mayor comodidad de los residentes.",
    image: "/images/project-building-2.png",
    units: 45,
    availableUnits: 12,
    priceFrom: "USD 280.000",
    features: [
      "Piscina climatizada",
      "Spa",
      "Salón de eventos",
      "Estacionamiento subterráneo",
      "Gimnasio",
      "Seguridad 24hs",
    ],
    availableProperties: [
      {
        id: "ot-103",
        type: "Apartamento",
        bedrooms: 1,
        bathrooms: 1,
        area: 85,
        price: "USD 280.000",
        image: "/images/property-exterior-1.png",
        features: ["Vista lateral al mar", "Terraza", "Cocina integrada", "Estacionamiento"],
      },
      {
        id: "ot-207",
        type: "Apartamento",
        bedrooms: 2,
        bathrooms: 2,
        area: 110,
        price: "USD 350.000",
        image: "/images/property-interior-1.png",
        features: ["Vista frontal al mar", "Terraza", "Cocina equipada", "Estacionamiento"],
      },
      {
        id: "ot-312",
        type: "Apartamento",
        bedrooms: 3,
        bathrooms: 2,
        area: 140,
        price: "USD 420.000",
        image: "/images/property-living-1.png",
        features: ["Vista panorámica", "Terraza amplia", "Cocina equipada", "2 estacionamientos"],
      },
    ],
  },
  "pinares-park": {
    name: "Pinares Park",
    location: "Pinares",
    description:
      "Pinares Park es un exclusivo conjunto de casas de diseño contemporáneo rodeadas de naturaleza y tranquilidad en el prestigioso barrio de Pinares. Este desarrollo ofrece una combinación perfecta de privacidad y comodidades de primer nivel.",
    longDescription:
      "Pinares Park representa una propuesta única en el mercado inmobiliario de Punta del Este, ofreciendo casas de diseño contemporáneo en un entorno natural privilegiado. Ubicado en el prestigioso barrio de Pinares, este desarrollo se distingue por su concepto de vida en armonía con la naturaleza, sin renunciar a las comodidades y el lujo. Cada casa ha sido diseñada por reconocidos arquitectos, con especial atención a la integración con el entorno y la optimización de los espacios. Los amplios jardines privados permiten disfrutar de la tranquilidad y la privacidad, mientras que las áreas comunes ofrecen espacios de socialización y recreación para toda la familia. El club house es el corazón social del complejo, con instalaciones que incluyen piscina, gimnasio y salón de usos múltiples. Las canchas de tenis y los senderos para caminatas complementan la oferta recreativa, permitiendo un estilo de vida activo en contacto con la naturaleza. La seguridad perimetral y el control de acceso garantizan la tranquilidad de todos los residentes.",
    image: "/images/project-building-3.png",
    units: 16,
    availableUnits: 5,
    priceFrom: "USD 420.000",
    features: ["Jardines privados", "Club house", "Canchas de tenis", "Seguridad perimetral", "Piscina", "Gimnasio"],
    availableProperties: [
      {
        id: "pp-03",
        type: "Casa",
        bedrooms: 3,
        bathrooms: 2,
        area: 180,
        price: "USD 420.000",
        image: "/images/property-garden-1.png",
        features: ["Jardín privado", "Parrillero", "Cocina equipada", "Garaje para 2 autos"],
      },
      {
        id: "pp-08",
        type: "Casa",
        bedrooms: 4,
        bathrooms: 3,
        area: 220,
        price: "USD 520.000",
        image: "/images/property-pool-1.png",
        features: ["Jardín amplio", "Piscina privada", "Cocina equipada", "Garaje para 2 autos"],
      },
      {
        id: "pp-12",
        type: "Casa",
        bedrooms: 5,
        bathrooms: 4,
        area: 280,
        price: "USD 650.000",
        image: "/images/property-exterior-1.png",
        features: ["Jardín extenso", "Piscina privada", "Cocina gourmet", "Garaje para 3 autos"],
      },
    ],
  },
  "mansa-view": {
    name: "Mansa View",
    location: "Playa Mansa",
    description:
      "Mansa View es un exclusivo desarrollo de apartamentos de lujo con vista directa a Playa Mansa y acceso privilegiado a la playa. Este proyecto combina una ubicación inmejorable con amenities de primer nivel para una experiencia de vida única.",
    longDescription:
      "Mansa View se erige como uno de los desarrollos más exclusivos de Punta del Este, ofreciendo apartamentos de lujo con vista directa a la icónica Playa Mansa. Su privilegiada ubicación permite a los residentes disfrutar de espectaculares atardeceres y un acceso directo a una de las playas más codiciadas de la península. La arquitectura del edificio ha sido cuidadosamente diseñada para maximizar las vistas al mar desde cada unidad, con amplios ventanales y terrazas que crean una conexión perfecta entre el interior y el paisaje exterior. Los apartamentos destacan por sus espaciosos ambientes, acabados de alta gama y distribuciones funcionales que priorizan el confort y la elegancia. El complejo cuenta con una impresionante piscina exterior con vista al mar, complementada por una piscina interior climatizada para disfrutar durante todo el año. El gimnasio equipado con tecnología de última generación, el spa con sauna y sala de masajes, y el servicio de conserjería las 24 horas completan una oferta de amenities pensada para satisfacer las expectativas más exigentes.",
    image: "/images/project-building-4.png",
    units: 32,
    availableUnits: 7,
    priceFrom: "USD 390.000",
    features: [
      "Piscina exterior e interior",
      "Sauna",
      "Gimnasio equipado",
      "Servicio de conserjería",
      "Acceso directo a la playa",
      "Seguridad 24hs",
    ],
    availableProperties: [
      {
        id: "mv-105",
        type: "Apartamento",
        bedrooms: 2,
        bathrooms: 2,
        area: 110,
        price: "USD 390.000",
        image: "/images/property-sunroom-1.png",
        features: ["Vista al mar", "Terraza", "Cocina equipada", "Estacionamiento"],
      },
      {
        id: "mv-208",
        type: "Apartamento",
        bedrooms: 3,
        bathrooms: 2,
        area: 140,
        price: "USD 480.000",
        image: "/images/property-living-1.png",
        features: ["Vista panorámica", "Terraza amplia", "Cocina equipada", "2 estacionamientos"],
      },
      {
        id: "mv-301",
        type: "Penthouse",
        bedrooms: 4,
        bathrooms: 3,
        area: 200,
        price: "USD 680.000",
        image: "/images/property-interior-1.png",
        features: ["Vista 360°", "Terraza con jacuzzi", "Cocina gourmet", "2 estacionamientos"],
      },
    ],
  },
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-dark text-white">
        <div className="text-center">
          <h1 className="text-4xl font-logo mb-4">Proyecto no encontrado</h1>
          <p className="text-gold mb-8">El proyecto que buscas no existe o ha sido removido.</p>
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-navy-dark text-white py-2 px-4 flex justify-between items-center text-xs">
        <div className="text-gray-300">
          <span className="text-gold">APOSTANDO POR OTTO+OTTO, GANAS VOS</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gold" />
            <span>GORLERO 1047 PUNTA DEL ESTE</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-gold" />
            <span>‪+598 99 383 564</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white py-4 border-b border-gray-200">
        <nav className="container mx-auto flex items-center justify-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-gold">
              INICIO
            </Link>
            <Link href="/proyectos" className="text-sm font-medium hover:text-gold text-gold">
              PROYECTOS
            </Link>
            <Link href="/en-venta" className="text-sm font-medium hover:text-gold">
              EN VENTA
            </Link>

            {/* Logo */}
            <Link href="/" className="px-8">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-logo tracking-wider text-navy">OTTO+OTTO</div>
                <div className="text-xs tracking-widest text-gold-dark">NEGOCIOS INMOBILIARIOS</div>
              </div>
            </Link>

            <Link href="/alquiler" className="text-sm font-medium hover:text-gold">
              ALQUILER
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-gold">
              SERVICIOS
            </Link>
            <Link href="/contacto" className="text-sm font-medium hover:text-gold">
              CONTACTO
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto py-3 px-4">
            <div className="flex items-center text-sm text-gray-500">
              <Link href="/" className="hover:text-gold">
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <Link href="/proyectos" className="hover:text-gold">
                Proyectos
              </Link>
              <span className="mx-2">/</span>
              <span className="text-navy-dark">{project.name}</span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="container mx-auto pt-6 px-4">
          <Link href="/proyectos" className="inline-flex items-center text-navy-dark hover:text-gold">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Volver a proyectos</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-logo text-navy-dark">{project.name}</h1>
              <p className="text-gray-500 mt-2 flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-gold" />
                {project.location}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-2xl md:text-3xl font-bold text-gold-dark">Desde {project.priceFrom}</span>
            </div>
          </div>
        </div>

        {/* Project Images */}
        <div className="container mx-auto px-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative h-[400px] md:h-[500px] w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[1, 2, 3].map((img, index) => (
                <div key={index} className="relative h-[150px] w-full">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt={`${project.name} - Imagen ${index + 2}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Description */}
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-secondary text-navy-dark mb-4">Descripción</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                <p className="text-gray-600 leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Features */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-secondary text-navy-dark mb-4">Características del Proyecto</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-2 w-2 bg-gold rounded-full mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Properties */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-secondary text-navy-dark mb-6">Unidades Disponibles</h2>
                <div className="space-y-6">
                  {project.availableProperties.map((property) => (
                    <div key={property.id} className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="relative h-48 md:h-auto">
                          <Image
                            src={property.image || "/placeholder.svg"}
                            alt={`${property.type} - ${property.id}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4 md:col-span-2">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-secondary text-navy-dark">
                                {property.type} - Ref. {property.id}
                              </h3>
                              <p className="text-gray-500 text-sm">
                                {project.name}, {project.location}
                              </p>
                            </div>
                            <span className="text-xl font-bold text-gold-dark">{property.price}</span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="flex items-center">
                              <BedDouble className="h-5 w-5 text-gold mr-2" />
                              <span className="text-gray-600">{property.bedrooms} Hab.</span>
                            </div>
                            <div className="flex items-center">
                              <Bath className="h-5 w-5 text-gold mr-2" />
                              <span className="text-gray-600">{property.bathrooms} Baños</span>
                            </div>
                            <div className="flex items-center">
                              <Ruler className="h-5 w-5 text-gold mr-2" />
                              <span className="text-gray-600">{property.area} m²</span>
                            </div>
                            <div className="flex items-center">
                              <Car className="h-5 w-5 text-gold mr-2" />
                              <span className="text-gray-600">Garage</span>
                            </div>
                          </div>
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-navy-dark mb-2">Características:</h4>
                            <div className="flex flex-wrap gap-2">
                              {property.features.map((feature, index) => (
                                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <Link
                              href={`/contacto?ref=${property.id}`}
                              className="bg-gold hover:bg-gold-dark text-navy-dark px-4 py-2 text-sm font-medium rounded-md transition-all duration-300"
                            >
                              Solicitar Información
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact and Details */}
            <div>
              {/* Quick Info */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-secondary text-navy-dark mb-4">Detalles del Proyecto</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div className="flex items-center">
                      <Home className="h-5 w-5 text-gold mr-3" />
                      <span className="text-gray-600">Tipo</span>
                    </div>
                    <span className="font-medium">Desarrollo Inmobiliario</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div className="flex items-center">
                      <Ruler className="h-5 w-5 text-gold mr-3" />
                      <span className="text-gray-600">Unidades Totales</span>
                    </div>
                    <span className="font-medium">{project.units}</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div className="flex items-center">
                      <Home className="h-5 w-5 text-gold mr-3" />
                      <span className="text-gray-600">Disponibles</span>
                    </div>
                    <span className="font-medium">{project.availableUnits}</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gold mr-3" />
                      <span className="text-gray-600">Ubicación</span>
                    </div>
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Home className="h-5 w-5 text-gold mr-3" />
                      <span className="text-gray-600">Precio desde</span>
                    </div>
                    <span className="font-medium">{project.priceFrom}</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-secondary text-navy-dark mb-4">¿Te interesa este proyecto?</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="bg-gray-50 border border-gray-200 p-3 w-full rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-gray-50 border border-gray-200 p-3 w-full rounded-lg"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="bg-gray-50 border border-gray-200 p-3 w-full rounded-lg"
                  />
                  <textarea
                    placeholder="Mensaje"
                    className="bg-gray-50 border border-gray-200 p-3 w-full h-32 rounded-lg"
                  ></textarea>
                  <button className="w-full bg-gold hover:bg-gold-dark text-navy-dark p-3 font-medium rounded-lg transition-all duration-300">
                    CONTACTAR
                  </button>
                </form>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-gray-500 text-sm mb-4">O contáctanos directamente:</p>
                  <div className="flex items-center text-navy-dark mb-2">
                    <Phone className="h-4 w-4 mr-2 text-gold" />
                    <span>4249 9355</span>
                  </div>
                  <div className="flex items-center text-navy-dark">
                    <Mail className="h-4 w-4 mr-2 text-gold" />
                    <span>info@otto-otto.com</span>
                  </div>
                </div>
              </div>
            </div>
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
