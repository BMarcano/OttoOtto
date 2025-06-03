"use client";

import { useEffect, useState } from "react";

/**
 * Carga el widget de banderas G-Translate una vez que
 * la aplicación ya está hidratada en el navegador.
 */
export default function GTranslateWrapper() {
  // únicamente para forzar un re-render opcional cuando el script cargue
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // ① Configuración (la misma que tenías en <head>)
    (window as any).gtranslateSettings = {
      default_language  : "es",
      languages         : ["es", "en", "pt"],
      url_structure     : "none",      // plan FREE
      wrapper_selector  : ".gtranslate_wrapper",
      flag_style        : "circle",
      flag_size         : 24,
    };

    // ② Inyectar el JS del widget
    const s = document.createElement("script");
    s.src   = "https://cdn.gtranslate.net/widgets/latest/flags.js";
    s.async = true;
    s.onload = () => setLoaded(true); // (opcional)
    document.body.appendChild(s);

    // sin cleanup porque la página no desmonta
  }, []);

  /* El div vacío se hidrata sin problemas;
     después el script lo rellena con las banderas. */
  return (
    <div
      className="gtranslate_wrapper flex items-center space-x-2 md:ml-2"
      suppressHydrationWarning   // evita cualquier warning residual
    />
  );
}
