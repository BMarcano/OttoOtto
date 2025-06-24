"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface PropertyCardProps {
  id: string
  title: string
  location: string
  description: string
  price: string
  bedrooms: number
  bathrooms: number
  area: number
  image: string
  featured?: boolean
  crm_id:number
}

export function PropertyCard({
  id,
  title,
  location,
  description,
  price,
  bedrooms,
  bathrooms,
  area,
  image,
  featured = false,
  crm_id,
}: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`property-card-${id}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [id])

  return (
    <div
      id={`property-card-${id}`}
      className={`bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden rounded-md transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${featured ? "scale-105 z-10" : ""}`}
      style={{ transition: "transform 0.5s ease-out, opacity 0.5s ease-out, box-shadow 0.3s ease-out" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-image-zoom
    >
      <Link href={`/propiedad/${id}`} className="block relative">
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent z-10 opacity-0 transition-opacity duration-300"
            style={{ opacity: isHovered ? 0.7 : 0 }}
          ></div>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={800}
            height={600}
            className="w-full h-64 object-cover transition-transform duration-700"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
          <div className="absolute top-4 right-4 bg-gold px-3 py-1 text-xs text-navy-dark font-medium z-20">
            Ref. {crm_id}
          </div>

          {featured && (
            <div className="absolute top-4 left-4 bg-navy-dark px-3 py-1 text-xs text-white font-medium z-20">
              Destacado
            </div>
          )}
        </div>

        <div className="p-6 relative">
          <h3 className="text-xl font-secondary text-navy-dark mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-gold-dark">{price}</span>
            <span className="text-sm text-gray-500">{location}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              {bedrooms} Hab.
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {bathrooms} Baños
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                />
              </svg>
              {area} m²
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 bg-gold text-navy-dark py-3 text-center font-medium transform translate-y-full transition-transform duration-300 flex items-center justify-center"
            style={{ transform: isHovered ? "translateY(0)" : "translateY(100%)" }}
          >
            Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </Link>
    </div>
  )
}
