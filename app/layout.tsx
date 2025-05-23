import type { ReactNode } from "react";
import "./globals.css";
import { Montserrat } from "next/font/google";

import { ThemeProvider }     from "@/components/theme-provider";
import { AnimationProvider } from "@/components/animation-provider";
import { Navbar }            from "@/components/navbar";      // 👈 nuevo
import Footer                from "@/components/footer";
import WhatsAppButton        from "@/components/whatsapp-button";

const montserrat = Montserrat({
  subsets : ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title      : "Otto+Otto | Viviendas de Lujo",
  description: "Viviendas privadas de lujo en el centro de la ciudad",
  generator  : "v0.dev",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Tipografías externas */}
        <link href="https://fonts.cdnfonts.com/css/new-york"     rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/editorial-new" rel="stylesheet" />
      </head>

      <body className={`${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AnimationProvider>

            {/* ----------- NAVBAR GLOBAL ----------- */}
            <Navbar />

            {/* ----------- CONTENIDO DE CADA PÁGINA ----------- */}
            {children}

            {/* ----------- FOOTER + BOTÓN WHATSAPP ----------- */}
            <Footer />
            <WhatsAppButton />

          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
