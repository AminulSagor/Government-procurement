// app/(admin)/requisition-inbox/[requisitionId]/vendor-inventory/_components/vi-item-list.tsx
import { VIItem } from "../_types/vendor-inventory.types";
import { ClipboardList, Laptop, Printer, FileText } from "lucide-react";

export default function VIItemList({ items }: { items: VIItem[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[rgba(100,116,139,0.18)] bg-white shadow-sm">
      {/* header row */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2">
          <HeaderIcon />
          <p className="text-sm font-semibold text-[var(--color-black)]">
            অনুমোদিতকৃত পণ্যের তালিকা
          </p>
        </div>

        {/* right pill */}
        <span className="rounded-full bg-[rgba(120,185,181,0.18)] px-3 py-1 text-xs font-semibold text-[var(--color-primary-color)]">
          {items.length}টি আইটেম
        </span>
      </div>

      {/* divider like screenshot */}
      <div className="h-px bg-[rgba(100,116,139,0.12)]" />

      {/* list */}
      <div className="px-5 py-5">
        <div className="space-y-4">
          {items.map((it) => (
            <div
              key={it.id}
              className="flex items-center justify-between rounded-xl border border-[rgba(100,116,139,0.14)] bg-white px-4 py-4"
            >
              <div className="flex items-center gap-4">
                {/* left item icon box */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(120,185,181,0.18)] text-[var(--color-primary-color)]">
                  <ItemIcon name={it.nameBn} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[var(--color-black)]">
                    {it.nameBn}
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-medium-gray)]">
                    {it.qtyBn}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-[rgba(100,116,139,0.18)] bg-white px-4 text-sm font-semibold text-[var(--color-primary-color)] hover:bg-[var(--color-off-white)]"
              >
                <FileText className="h-4 w-4" strokeWidth={1.9} />
                Specs
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* bottom padding like screenshot */}
      <div className="h-4" />
    </div>
  );
}

/** header small icon (left of title) */
function HeaderIcon() {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(120,185,181,0.18)] text-[var(--color-primary-color)]">
      <ClipboardList className="h-5 w-5" strokeWidth={1.9} />
    </span>
  );
}

/** choose icon by item name (demo) */
function ItemIcon({ name }: { name: string }) {
  const n = name.toLowerCase();

  if (n.includes("ল্যাপটপ") || n.includes("laptop")) {
    return <Laptop className="h-5 w-5" strokeWidth={1.9} />;
  }
  if (n.includes("প্রিন্টার") || n.includes("printer")) {
    return <Printer className="h-5 w-5" strokeWidth={1.9} />;
  }
  return <ClipboardList className="h-5 w-5" strokeWidth={1.9} />;
}
