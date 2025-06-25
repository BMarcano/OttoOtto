// app/(properties)/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  ArrowLeft,
  Home,
  Ruler,
  Bath,
  BedDouble,
  Car,
} from "lucide-react";

import { supabase } from "@/lib/supabaseClient";
import Gallery from "@/components/gallery";
import ContactForm from "@/components/contact-form";

export default async function PropertyDetail({
  params,
}: {
  params: { id: string };
}) {
const { data: p, error } = await supabase
  .from("properties")
  .select("*")
  .eq("id", params.id)
  .single();

const { data: siblings } = await supabase
  .from("properties")
  .select("*")
  .eq("crm_id", p.crm_id)
  .neq("id", p.id);                            // ⟵ evita duplicar la actual

const deals = [p, ...(siblings ?? [])];

const sale = deals.find((d) => d.deal_type === "sale") ?? null;
const rent = deals.find((d) => d.deal_type === "rent") ?? null;

if (error || !p) notFound();

  const priceTxt = `${p.currency || "USD"} ${
    p.price ? p.price.toLocaleString() : "-"
  }`;
  const features: string[] = p.features?.length
    ? p.features
    : [
        p.bedrooms != null ? `${p.bedrooms} Dormitorios` : null,
        p.bathrooms != null ? `${p.bathrooms} Baños` : null,
        p.area != null ? `${p.area} m²` : null,
        p.garage != null ? `${p.garage} Garaje${p.garage > 1 ? "s" : ""}` : null,
      ].filter(Boolean) as string[];

  const gallery: string[] = (p.gallery_urls ?? []).filter(Boolean);
  const cover =
    p.cover_url || p.image_url || gallery[0] || "/images/fallback.jpg";

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gray-50">
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto py-3 px-4 text-sm text-gray-500 flex items-center">
            <Link href="/" className="hover:text-gold">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#properties" className="hover:text-gold">
              Propiedades
            </Link>
            <span className="mx-2">/</span>
            <span className="text-navy-dark">{p.title}</span>
          </div>
        </div>
        <div className="container mx-auto pt-6 px-4">
          <Link
            href="/#properties"
            className="inline-flex items-center text-navy-dark hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a propiedades
          </Link>
        </div>

        <header className="container mx-auto py-6 px-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
    <h1 className="text-3xl md:text-4xl font-logo text-navy-dark">
      {p.title}
    </h1>
    {p.location && (
      <p className="text-gray-500 mt-2 flex items-center">
        <MapPin className="h-4 w-4 mr-1 text-gold" />
        {p.location}
      </p>
    )}
  </div>

  <div className="mt-4 md:mt-0 space-y-1">
    {sale && (
      <PriceTag
        label="Venta"
        currency={sale.currency ?? "USD"}
        amount={sale.price}
      />
    )}
    {rent && (
      <PriceTag
        label="Alquiler"
        currency={rent.currency ?? "USD"}
        amount={rent.price}
      />
    )}
    <div className="text-sm text-gray-500">
      Ref. {p.legacy_id?.split("/").pop() ?? p.crm_id}
    </div>
          </div>
        </header>

        <Gallery cover={cover} images={gallery} title={p.title} />

        <div className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <section className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-secondary text-navy-dark mb-4">
                  Descripción
                </h2>
                <p className="text-gray-600 whitespace-pre-line">
                  {p.description_full || "Sin descripción detallada."}
                </p>
              </section>

              <section className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-secondary text-navy-dark mb-4">
                  Características
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((f) => (
                    <div key={f} className="flex items-center">
                      <div className="h-2 w-2 bg-gold rounded-full mr-3" />
                      <span className="text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-secondary text-navy-dark mb-4">
                  Detalles
                </h3>
                <Detail
                  icon={<Home className="h-5 w-5 text-gold mr-3" />}
                  label="Tipo"
                  value={p.type ?? "Propiedad"}
                />
                <Detail
                  icon={<Ruler className="h-5 w-5 text-gold mr-3" />}
                  label="Área"
                  value={p.area ? `${p.area} m²` : "-"}
                />
                <Detail
                  icon={<BedDouble className="h-5 w-5 text-gold mr-3" />}
                  label="Dormitorios"
                  value={p.bedrooms ?? "-"}
                />
                <Detail
                  icon={<Bath className="h-5 w-5 text-gold mr-3" />}
                  label="Baños"
                  value={p.bathrooms ?? "-"}
                />
                <Detail
                  icon={<Car className="h-5 w-5 text-gold mr-3" />}
                  label="Garaje"
                  value={
                    p.garage != null
                      ? `${p.garage} Garaje${p.garage > 1 ? "s" : ""}`
                      : "-"
                  }
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-secondary text-navy-dark mb-4">
                  ¿Te interesa esta propiedad?
                </h3>
                <ContactForm subject={`Interés por ${p.title}`} />
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-gray-500 text-sm mb-4">
                    O contáctanos directamente:
                  </p>
                  <div className="flex items-center text-navy-dark mb-2">
                    <Phone className="h-4 w-4 mr-2 text-gold" />
                    4249 9355
                  </div>
                  <div className="flex items-center text-navy-dark">
                    <Mail className="h-4 w-4 mr-2 text-gold" />
                    ottonegociosinmobiliarios@gmail.com
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

function Detail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: any;
}) {
  return (
    <div className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-none">
      <div className="flex items-center">
        {icon}
        <span className="text-gray-600">{label}</span>
      </div>
      <span className="font-medium">{value}</span>
    </div>
  );
}
function PriceTag({
  label,
  currency,
  amount,
}: {
  label: string;
  currency: string;
  amount: number | null;
}) {
  return (
    <div className="flex items-center gap-2">
      {/* etiqueta (Venta / Alquiler) */}
      <span className="inline-block w-14 text-center text-xs bg-gold/20 text-gold-dark px-2 py-0.5">
        {label}
      </span>

      {/* precio */}
      <span className="text-2xl md:text-3xl font-bold text-gold-dark">
        {amount ? `${currency} ${amount.toLocaleString("es-UY")}` : "-"}
      </span>
    </div>
  );
}

