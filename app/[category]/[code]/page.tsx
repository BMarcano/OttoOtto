/* app/[category]/[code]/page.tsx
 * Redirige enlaces antiguos del tipo  /Apartamento/28853  →  /propiedad/<uuid>
 * ------------------------------------------------------- */
import { redirect }   from "next/navigation";
import { supabase }   from "@/lib/supabaseClient";

export default async function LegacyRedirect({
  params:{ code },
}:{ params:{ code:string } }) {

  /* 1 · busca primero VENTA; si no hay toma ALQUILER ---------------- */
  const { data } = await supabase
  .from("properties")
  .select("id, deal_type")
  .eq("crm_id", code)              // ← ahora busca por crm_id
  .order("deal_type", { ascending: false }) // 'sale' antes que 'rent'
  .single();

  /* 2 · si no existe ⇒ 404 ----------------------------------------- */
  if (!data) redirect("/404");

  /* 3 · redirección permanente ------------------------------------- */
  redirect(`/propiedad/${data.id}`);           // 301
}
