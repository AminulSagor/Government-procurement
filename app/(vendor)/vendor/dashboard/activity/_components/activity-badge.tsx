"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ActivityStatus } from "../_types/live-activity.types";

export default function ActivityBadge({ status }: { status: ActivityStatus }) {
  const cls =
    status === "Approved"
      ? "bg-green/10 text-green border-green/20"
      : status === "Payment Received"
      ? "bg-green/10 text-green border-green/20"
      : status === "New Opportunity"
      ? "bg-primary/10 text-primary border-primary/20"
      : status === "System Alert"
      ? "bg-primary/10 text-primary border-primary/20"
      : "bg-secondary text-gray border-gray/15";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
        cls
      )}
    >
      {/* small dot like screenshot */}
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
