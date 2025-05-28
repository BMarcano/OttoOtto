"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"

interface ProjectCardProps {
  id: string
  name: string
  location: string
  description: string
  image: string
  availableUnits: number
  priceFrom: string
  features: string[]
}

export function ProjectCard({
  id,
  name,
  location,
  description,
  image,
  availableUnits,
  priceFrom,
  features,
}: ProjectCardProps) {
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

    const element = document.getElementById(`project-card-${id}`)
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
      id={`project-card-${id}`}
      className={`bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden rounded-lg transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transition: "transform 0.5s ease-out, opacity 0.5s ease-out, box-shadow 0.3s ease-out" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-3d-hover
    >
      <div className="relative h-64">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-navy-dark/70 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-90" : "opacity-70"
          }`}
        ></div>
        <div className="absolute bottom-4 left-4 text-white z-10">
          <h2 className="text-2xl font-logo">{name}</h2>
          <p className="text-sm flex items-center">
            <MapPin className="h-3 w-3 mr-1 text-gold" />
            {location}
          </p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
          <span>
            Disponibles: <span className="text-gold-dark font-bold">{availableUnits}</span>
          </span>
        </div>
        <div className="mb-6">
          <ul className="grid grid-cols-2 gap-2">
            {features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <div className="h-1.5 w-1.5 bg-gold rounded-full mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={`/proyectos/${id}`}
          className={`flex items-center justify-center bg-gold hover:bg-gold-dark text-navy-dark px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
            isHovered ? "bg-gold-dark" : "bg-gold"
          }`}
        >
          VER UNIDADES DISPONIBLES
          <ArrowRight
            className={`h-4 w-4 ml-2 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
          />
        </Link>
      </div>
    </div>
  )
}
