"use client"

import type React from "react"

import { useAnimations, useHoverAnimation } from "@/hooks/use-animations"
import { useAllAdvancedAnimations } from "@/hooks/use-advanced-animations"

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  // Inicializar las animaciones básicas
  useAnimations()
  useHoverAnimation()

  // Inicializar las animaciones avanzadas
  useAllAdvancedAnimations()

  return <>{children}</>
}
