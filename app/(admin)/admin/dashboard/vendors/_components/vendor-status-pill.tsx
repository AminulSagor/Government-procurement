"use client";

import type { VendorStatus } from "../_types/vendors.types";

export default function VendorStatusPill({ status }: { status: VendorStatus }) {
  if (status === "pending") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(231,53,8,0.18)] bg-[rgba(231,53,8,0.10)] px-3 py-1 text-xs font-semibold text-[var(--color-red)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-red)]" />
        নিষ্ক্রিয়
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(7,136,52,0.18)] bg-[rgba(7,136,52,0.10)] px-3 py-1 text-xs font-semibold text-[var(--color-green)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
      সক্রিয়
    </span>
  );
}
