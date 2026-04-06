// app/(admin)/analytics/live-activity-feed/_components/LAFMetaRow.tsx
"use client";

import type { LucideIcon } from "lucide-react";
import { Clock3 } from "lucide-react";

export default function LAFMetaRow({
  timeBn,
  statusLabel,
  StatusIcon,
  statusClass,
}: {
  timeBn: string;
  statusLabel: string;
  StatusIcon: LucideIcon;
  statusClass: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px]">
      <div className="inline-flex items-center gap-2 text-[var(--color-medium-gray)]">
        <Clock3 className="h-4 w-4" strokeWidth={2.2} />
        <span className="font-semibold">{timeBn}</span>
      </div>

      <div className={["inline-flex items-center gap-2", statusClass].join(" ")}>
        <StatusIcon className="h-4 w-4" strokeWidth={2.2} />
        <span className="font-semibold">{statusLabel}</span>
      </div>
    </div>
  );
}
