/* lib/fetchProperty.ts */
import { supabase } from "@/lib/supabaseClient";
import "server-only";

export async function fetchProperty(rawId: string) {
  /* 0 · validar ID */
  const isDigits = /^\d+$/.test(rawId);
  const isUuid =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
      .test(rawId);
  if (!isDigits && !isUuid) return null;

  /* 1 · buscar en Supabase (limita a 1 fila) */
  const { data } = await supabase
    .from("properties")
    .select("*")
    .eq(isUuid ? "id" : "crm_id", rawId)
    .limit(1)
    .maybeSingle();

  if (data) return data; // ya existe ⇒ fin

  /* 2 · llamar al webhook si no está en la BD */
  const url = `https://n8n.media-geekn8n.xyz/webhook/property-resolver?id=${rawId}`;

  let res: Response;
  try {
    res = await fetch(url, { cache: "no-store" });
  } catch (e) {
    console.error("❌ Error de red al contactar webhook:", e);
    return null;
  }

  if (!res.ok) {
    console.error("Webhook falló:", res.status, await res.text());
    return null;
  }

  /* 3 · usar la fila que devuelve el webhook */
  const inserted = await res.json();
  if (!inserted || !inserted.id) {
    console.error("El webhook no devolvió una fila válida:", inserted);
    return null;
  }

  return inserted as any; // ← cámbialo por el tipo correcto si lo tienes
}
