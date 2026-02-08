"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { StockStatus } from "../_types/product-inventory.types";

export default function StockBadge({ status }: { status: StockStatus }) {
  const label =
    status === "in_stock" ? "IN STOCK" : status === "out_of_stock" ? "OUT OF STOCK" : "UNAVAILABLE";

  const cls =
    status === "in_stock"
      ? "border-green/20 bg-green/10 text-green"
      : status === "out_of_stock"
      ? "border-primary/20 bg-primary/10 text-primary"
      : "border-gray/15 bg-secondary text-gray";

  return (
    <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold", cls)}>
      {label}
    </span>
  );
}
