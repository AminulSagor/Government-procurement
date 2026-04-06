"use client";

import type { OrderDeliveryStatus } from "../../_types/agent-profile.types";

export default function StatusPill({ status }: { status: OrderDeliveryStatus }) {
  const map: Record<OrderDeliveryStatus, { labelBn: string; cls: string }> = {
    delivered: {
      labelBn: "ডেলিভারি সম্পন্ন",
      cls: "bg-[rgba(7,136,52,0.12)] text-[var(--color-green)]",
    },
    pending: {
      labelBn: "প্রক্রিয়াধীন",
      cls: "bg-[rgba(234,179,8,0.18)] text-[var(--color-orange)]",
    },
    cancelled: {
      labelBn: "বাতিল",
      cls: "bg-[rgba(231,53,8,0.12)] text-[var(--color-red)]",
    },
  };

  const m = map[status];
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${m.cls}`}>
      {m.labelBn}
    </span>
  );
}
