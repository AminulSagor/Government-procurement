"use client";

import React from "react";
import type { ReturnRequestStatus } from "../_types/return-request.types";

const map: Record<ReturnRequestStatus, { label: string; cls: string }> = {
  pending: { label: "PENDING REVIEW", cls: "bg-orange/10 text-orange border-orange/20" },
  waiting: { label: "WAITING", cls: "bg-yellow/10 text-yellow border-yellow/20" },
  accepted: { label: "ACCEPTED", cls: "bg-green/10 text-green border-green/20" },
  denied: { label: "DENIED", cls: "bg-red/10 text-red border-red/20" },
};

export default function StatusPill({ status }: { status: ReturnRequestStatus }) {
  const s = map[status];
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1",
        "text-[11px] font-semibold tracking-wide",
        s.cls,
      ].join(" ")}
    >
      {s.label}
    </span>
  );
}