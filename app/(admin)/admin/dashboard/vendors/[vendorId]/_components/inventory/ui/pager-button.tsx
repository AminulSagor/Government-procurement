// app/(admin)/admin/dashboard/vendors/[vendorId]/_components/inventory/ui/pager-button.tsx
"use client";

export default function PagerButton({
  label,
  active,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={[
        "grid h-9 w-9 place-items-center rounded-lg border text-xs font-extrabold",
        active
          ? "border-primary-color bg-primary-color text-white"
          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
      ].join(" ")}
    >
      {label}
    </button>
  );
}