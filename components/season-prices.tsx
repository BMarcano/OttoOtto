"use client";

import React from "react";

function fmtMoney(amount: number, currency?: string | null) {
  const cur = currency || "USD";
  const locale = cur === "UYU" ? "es-UY" : "en-US";
  try {
    return new Intl.NumberFormat(locale, { style: "currency", currency: cur, maximumFractionDigits: 0 }).format(amount);
  } catch {
    return `${cur} ${amount.toLocaleString(locale)}`;
  }
}

const ORDER = [
  "DiciembreQuincena1","DiciembreQuincena2","Diciembre",
  "EneroQuincena1","EneroQuincena2","Enero",
  "FebreroQuincena1","FebreroQuincena2","Febrero",
  "MarzoQuincena1","MarzoQuincena2","Marzo",
  "Carnaval","SemanaSanta","Reveillon"
];

const LABELS: Record<string,string> = {
  DiciembreQuincena1: "Diciembre (1ª quincena)",
  DiciembreQuincena2: "Diciembre (2ª quincena)",
  Diciembre: "Diciembre (mes)",
  EneroQuincena1: "Enero (1ª quincena)",
  EneroQuincena2: "Enero (2ª quincena)",
  Enero: "Enero (mes)",
  FebreroQuincena1: "Febrero (1ª quincena)",
  FebreroQuincena2: "Febrero (2ª quincena)",
  Febrero: "Febrero (mes)",
  MarzoQuincena1: "Marzo (1ª quincena)",
  MarzoQuincena2: "Marzo (2ª quincena)",
  Marzo: "Marzo (mes)",
  Carnaval: "Carnaval",
  SemanaSanta: "Semana Santa",
  Reveillon: "Reveillón",
};

export default function SeasonPrices({
  json,
  currency,
}: {
  json: any;                 // puede venir como objeto o string JSON
  currency?: string | null;  // USD/UYU
}) {
  const obj = typeof json === "string" ? JSON.parse(json) : (json || {});
  const orderIdx = new Map(ORDER.map((k, i) => [k, i]));

  const entries = Object.entries(obj)
    .filter(([_, v]) => typeof v === "number" && v > 0) // <-- ignora 0
    .sort(([a], [b]) => (orderIdx.get(a) ?? 999) - (orderIdx.get(b) ?? 999));

  if (!entries.length) {
    return <p className="text-gray-500">Sin tarifas de temporada cargadas.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2 pr-4 font-semibold">Periodo</th>
            <th className="py-2 text-right font-semibold">Precio</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([k, v]) => (
            <tr key={k} className="border-b last:border-0">
              <td className="py-2 pr-4">{LABELS[k] || k}</td>
              <td className="py-2 text-right font-medium">{fmtMoney(v as number, currency)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
