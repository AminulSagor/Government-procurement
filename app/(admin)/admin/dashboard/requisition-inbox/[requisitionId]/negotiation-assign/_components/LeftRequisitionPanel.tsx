"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import type { RequisitionItem } from "../_types/negotiation-assign.types";
import RequisitionItemCard from "./RequisitionItemCard";

export default function LeftRequisitionPanel({
  items,
  onViewDetails,
}: {
  items: RequisitionItem[];
  onViewDetails: (item: RequisitionItem) => void;
}) {
  const [expandedId, setExpandedId] = useState<string | null>(
    items.find((x) => x.isActive)?.id ?? items[0]?.id ?? null
  );

  return (
    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden">
      <div className="px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-[var(--color-off-white)] border border-black/10 flex items-center justify-center">
            <ShoppingCart className="h-5 w-5 text-[var(--color-primary-color)]" />
          </div>
          <div className="text-[16px] font-extrabold text-[var(--color-black)]">অর্ডার সারাংশ</div>
        </div>

        <div className="rounded-xl bg-white border border-black/10 px-3 py-2 text-[12px] font-semibold text-[var(--color-light-gray)]">
          {items.length} টি আইটেম
        </div>
      </div>

      <div className="h-px bg-black/5" />

      <div className="p-5 space-y-4 bg-[var(--color-off-white)]/40">
        {items.map((item) => (
          <RequisitionItemCard
            key={item.id}
            item={item}
            expanded={expandedId === item.id}
            onToggle={() => setExpandedId((p) => (p === item.id ? null : item.id))}
            onViewDetails={onViewDetails} // ✅ pass down
          />
        ))}
      </div>
    </div>
  );
}
