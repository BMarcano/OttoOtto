/* app/layout.tsx
 * Root layout global de la aplicación
 * ——————————————————————————————————————— */
import type { ReactNode } from "react";
import "./globals.css";
import { Montserrat } from "next/font/google";
import GTranslateFlags from "@/components/gtranslateflags";
import { ThemeProvider }     from "@/components/theme-provider";
import { AnimationProvider } from "@/components/animation-provider";
import { Navbar }            from "@/components/navbar";
import Footer                from "@/components/footer";
import WhatsAppButton        from "@/components/whatsapp-button";

/* ---------- Google Font ---------- */
const montserrat = Montserrat({
  subsets : ["latin"],
  variable: "--font-montserrat",
});

/* ---------- Metadatos ---------- */
export const metadata = {
  title      : "Otto+Otto | Viviendas de Lujo",
  description: "Viviendas privadas de lujo en el centro de la ciudad",
  generator  : "v0.dev",
};

/* ========================================================== */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
<head>
  <link href="https://fonts.cdnfonts.com/css/new-york"      rel="stylesheet" />
  <link href="https://fonts.cdnfonts.com/css/editorial-new" rel="stylesheet" />
</head>

      <body className={`${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AnimationProvider>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}