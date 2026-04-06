// app/(vendor)/vendor/dashboard/return-items-management/_components/UiPill.tsx
import type { PillTone } from "../_types/return-items-management.types";

export default function UiPill({ tone, children }: { tone: PillTone; children: React.ReactNode }) {
  const cls =
    tone === "green"
      ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
      : tone === "orange"
      ? "bg-orange-50 text-orange-700 ring-1 ring-orange-200"
      : tone === "red"
      ? "bg-red-50 text-red-700 ring-1 ring-red-200"
      : tone === "blue"
      ? "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
      : "bg-slate-100 text-slate-700 ring-1 ring-slate-200";

  return (
    <span className={["inline-flex items-center rounded-full px-3 py-1 text-[12px] font-extrabold", cls].join(" ")}>
      {children}
    </span>
  );
}