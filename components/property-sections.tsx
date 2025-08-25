"use client";

import { useState, ReactNode } from "react";
import {
  MapPin, ExternalLink, Building2, Compass, Eye, DollarSign,
  Home, Ruler, Bath, BedDouble, Car, Camera, PlayCircle, ShieldCheck
} from "lucide-react";
import Image from "next/image";

function TabButton({active, onClick, children}: {active:boolean; onClick:()=>void; children:ReactNode}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 text-sm rounded-full border ${
        active ? "bg-gold/20 border-gold text-gold-dark" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
}

function Row({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value ?? "-"}</span>
    </div>
  );
}

function yesNo(v: boolean | null | undefined) {
  return v == null ? "-" : v ? "Sí" : "No";
}

function money(v?: number|null, cur?: string|null) {
  if (!v) return "-";
  const C = cur || "USD";
  const locale = C === "UYU" ? "es-UY" : "en-US";
  try {
    return new Intl.NumberFormat(locale, { style:"currency", currency:C, maximumFractionDigits:0 }).format(v);
  } catch {
    return `${C} ${Number(v).toLocaleString(locale)}`;
  }
}

export default function PropertySections({
  p,
  sale,
  rent,
  features,
}: {
  p: any;
  sale: any;
  rent: any;
  features: string[];
}) {
  const tabs = ["Características","Ubicación","Edificio","Gastos","Amenities","Media"] as const;
  const [tab, setTab] = useState<(typeof tabs)[number]>("Características");

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(t => (
          <TabButton key={t} active={tab===t} onClick={() => setTab(t)}>{t}</TabButton>
        ))}
      </div>

      {/* Contenido */}
      {tab === "Características" && (
        <>
          <h3 className="text-xl font-secondary text-navy-dark mb-4">Características</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-center">
                <div className="h-2 w-2 bg-gold rounded-full mr-3" />
                <span className="text-gray-600">{f}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            <Row label="Tipo" value={p.type ?? "Propiedad"} />
            <Row label="Área total" value={p.area_total ? `${p.area_total} m²` : "-"} />
            <Row label="Dormitorios" value={p.bedrooms ?? "-"} />
            <Row label="Baños" value={p.bathrooms ?? "-"} />
            <Row label="Garaje" value={p.garage != null ? (p.garage_count ?? (p.garage ? 1 : 0)) : "-"} />
            <Row label="Estado" value={p.condition ?? "-"} />
          </div>
        </>
      )}

      {tab === "Ubicación" && (
        <>
          <h3 className="text-xl font-secondary text-navy-dark mb-4">Ubicación</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Row label="Departamento" value={p.dept} />
            <Row label="Ciudad" value={p.city} />
            <Row label="Barrio" value={p.neighborhood} />
            <Row label="Dirección" value={p.address} />
            <Row label="Distancia al mar" value={p.distance_sea_m != null ? `${p.distance_sea_m} m` : "-"} />
            <Row label="Frente al mar" value={yesNo(p.ocean_front)} />
            <Row
              label="Mapa"
              value={p.maps_url ? <a className="text-gold hover:underline inline-flex items-center" href={p.maps_url} target="_blank"><ExternalLink className="h-4 w-4 mr-1" /> Abrir</a> : "-"}
            />
          </div>
        </>
      )}

      {tab === "Edificio" && (
        <>
          <h3 className="text-xl font-secondary text-navy-dark mb-4">Edificio & orientación</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Row label="Tipo de edificio" value={p.building_type} />
            <Row label="Piso" value={p.floor_number} />
            <Row label="Pisos totales" value={p.floors_total} />
            <Row label="Aptos por piso" value={p.apartments_per_floor} />
            <Row label="Orientación" value={p.orientation} />
            <Row label="Disposición" value={p.disposition} />
            <Row label="Vista" value={p.view} />
            <Row label="ID Edificio" value={p.building_id} />
          </div>
        </>
      )}

      {tab === "Gastos" && (
        <>
          <h3 className="text-xl font-secondary text-navy-dark mb-4">Gastos & tributos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Row label={`Gastos comunes (${p.expenses_frequency ?? "—"})`} value={money(p.expenses_amount, p.expenses_currency)} />
            <Row label={`Contribución (${p.contrib_frequency ?? "—"})`} value={money(p.contrib_amount, p.contrib_currency)} />
            <Row label={`Primaria (${p.primaria_frequency ?? "—"})`} value={money(p.primaria_amount, p.primaria_currency)} />
            <Row label={`Fondo de reserva (${p.reserve_fund_validity ?? "—"})`} value={money(p.reserve_fund_amount, p.reserve_fund_currency)} />
          </div>
        </>
      )}

      {tab === "Amenities" && (
        <>
          <h3 className="text-xl font-secondary text-navy-dark mb-4">Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
            {[
              ["Piscina", p.amenity_pool],
              ["Parrillero", p.amenity_parrillero],
              ["Gimnasio", p.amenity_gym],
              ["Sauna", p.amenity_sauna],
              ["Playroom", p.amenity_playroom],
              ["Vigilancia", p.amenity_vigilancia],
              ["Servicio de playa", p.amenity_servicio_playa],
              ["Lavadero", p.amenity_laundry],
              ["Canchas", p.amenity_canchas],
            ].map(([label, val]) => (
              <span key={label as string} className={`inline-flex items-center px-2 py-1 text-xs rounded-full ${val ? "bg-gold/20 text-gold-dark" : "bg-gray-100 text-gray-500"}`}>
                {label}: {val ? "Sí" : "—"}
              </span>
            ))}
          </div>
        </>
      )}

      

      {tab === "Media" && (
        <>
          <h3 className="text-xl font-secondary text-navy-dark mb-4">Media</h3>
          <div className="space-y-3">
            {p.youtube_url && (
              <a href={p.youtube_url} target="_blank" className="inline-flex items-center text-gold hover:underline">
                <PlayCircle className="h-5 w-5 mr-2" /> Ver video (YouTube)
              </a>
            )}
            {p.matterport_url && (
              <a href={p.matterport_url} target="_blank" className="inline-flex items-center text-gold hover:underline">
                <Camera className="h-5 w-5 mr-2" /> Recorrido 3D (Matterport)
              </a>
            )}
            {p.source_url && (
              <a href={p.source_url} target="_blank" className="inline-flex items-center text-gold hover:underline">
                <ExternalLink className="h-5 w-5 mr-2" /> Ver ficha original
              </a>
            )}
          </div>
        </>
      )}
    </section>
  );
}
