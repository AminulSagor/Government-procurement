"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { LedgerStatus } from "../_types/payment-ledger.types";

export default function StatusPill({ status }: { status: LedgerStatus }) {
  const cls =
    status === "পরিশোধিত"
      ? "border-green/20 bg-green/10 text-green"
      : status === "প্রক্রিয়াধীন"
      ? "border-primary/20 bg-primary/10 text-primary"
      : "border-primary/20 bg-primary/10 text-primary";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        cls
      )}
    >
      {status}
    </span>
  );
}
