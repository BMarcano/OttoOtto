/* app/[category]/[code]/page.tsx */
import { redirect, notFound } from "next/navigation";
import { fetchProperty } from "@/lib/fetchProperty";
import { supabase } from "@/lib/supabaseClient";

export default async function LegacyRedirect({
  params: { code },           // ← `code` = crm_id numérico que viene en la URL antigua
}: {
  params: { code: string };
}) {
if (!/^\d+$/.test(code)) notFound();   // solo aceptamos números
  const p = await fetchProperty(code);     // busca por crm_id
  if (!p) notFound();                      // ni Supabase ni CRM → 404 real

  /* 2 ── Busca las otras versiones (venta / alquiler) para elegir la canonical */
  const { data: matches } = await supabase
    .from("properties")
    .select("id, deal_type")
    .eq("crm_id", code);

  const primary =
    matches?.find((m) => m.deal_type === "sale") // prioriza "sale"
      ?? matches?.[0]                            // o el primero
      ?? { id: p.id };                           // fallback: la que acabamos de crear

  /* 3 ── Redirige permanentemente al nuevo enlace limpio */
  redirect(`/propiedad/${primary.id}`); // status 308 en Next 13/14
}
