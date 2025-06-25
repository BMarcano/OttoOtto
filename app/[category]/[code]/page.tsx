/* app/[category]/[code]/page.tsx  */
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default async function LegacyRedirect({
  params: { code },
}: {
  params: { code: string };
}) {
  const { data: matches, error } = await supabase
    .from("properties")
    .select("id, deal_type")
    .eq("crm_id", code);

  if (error || !matches?.length) redirect("/404");

  const primary =
    matches.find((p) => p.deal_type === "sale") ?? matches[0];

  redirect(`/propiedad/${primary.id}`);                     // 301
}
