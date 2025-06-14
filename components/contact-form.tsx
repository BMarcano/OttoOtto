// components/contact-form.tsx
"use client";

import { useState, FormEvent } from "react";

export default function ContactForm({
  subject = "Consulta desde otto-otto.com",
}: {
  subject?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const body = new URLSearchParams(new FormData(form) as any).toString();
      const res = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error("network");
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formsubmit.co/ottonegociosinmobiliarios@gmail.com"
      method="POST"
      className="space-y-4"
    >
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_captcha" value="false" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="nombre"
          required
          placeholder="Nombre*"
          className="bg-white text-gray-900 border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-gold"
        />
        <input
          name="apellido"
          required
          placeholder="Apellido*"
          className="bg-white text-gray-900 border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-gold"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="email"
          type="email"
          required
          placeholder="Email*"
          className="bg-white text-gray-900 border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-gold"
        />
        <input
          name="telefono"
          type="tel"
          placeholder="Teléfono"
          className="bg-white text-gray-900 border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-gold"
        />
      </div>
      <textarea
        name="mensaje"
        required
        placeholder="Escribe tu mensaje aquí…"
        className="bg-white text-gray-900 border-gray-300 p-3 w-full h-32 rounded-lg focus:ring-2 focus:ring-gold"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-gold hover:bg-gold-dark text-navy-dark p-3 font-medium rounded-lg transition disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "ENVIAR"}
      </button>
      {status === "ok" && (
        <p className="text-center text-green-600">¡Gracias! Tu mensaje fue enviado.</p>
      )}
      {status === "error" && (
        <p className="text-center text-red-600">Algo salió mal. Intenta nuevamente.</p>
      )}
    </form>
  );
}
