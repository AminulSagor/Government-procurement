// app/(vendor)/bids/_components/status-pill.tsx
"use client";

import { cn } from "@/lib/utils";

export type BidStatus = "Under Review" | "Accepted" | "Rejected";

export default function StatusPill({ status }: { status: BidStatus }) {
  const cls =
    status === "Accepted"
      ? "bg-green/10 text-green"
      : status === "Rejected"
      ? "bg-red-500/10 text-red-500"
      : "bg-secondary text-gray";

  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-bold", cls)}>
      {status}
    </span>
  );
}
