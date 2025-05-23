import type React from "react"
import "./globals.css"
import { Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimationProvider } from "@/components/animation-provider"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "@/components/footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Otto+Otto | Viviendas de Lujo",
  description: "Viviendas privadas de lujo en el centro de la ciudad",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link href="https://fonts.cdnfonts.com/css/new-york" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/editorial-new" rel="stylesheet" />
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AnimationProvider>
            {children}
            <Footer />
            <WhatsAppButton />
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
