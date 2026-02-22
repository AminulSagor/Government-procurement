// app/(admin)/analytics/live-activity-feed/_components/LAFTypeDropdown.tsx
"use client";

import type { LucideIcon } from "lucide-react";
import type { LAFActivityType } from "../_types/live-activity-feed.types";

export default function LAFTypeDropdown({
  label,
  value,
  onChange,
  options,
  Icon,
  RightIcon,
}: {
  label: string;
  value: LAFActivityType;
  onChange: (v: LAFActivityType) => void;
  options: { value: LAFActivityType; label: string }[];
  Icon: LucideIcon;
  RightIcon: LucideIcon;
}) {
  return (
    <div className="flex w-full items-center gap-2 md:w-[220px]">
      <div className="relative w-full">
        <Icon
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-medium-gray)]"
          strokeWidth={2}
        />

        <select
          value={value}
          onChange={(e) => onChange(e.target.value as LAFActivityType)}
          className={[
            "h-10 w-full appearance-none rounded-lg border bg-white pl-9 pr-9 text-sm",
            "border-[rgba(100,116,139,0.18)]",
            "focus:outline-none focus:ring-2 focus:ring-[rgba(31,110,128,0.18)]",
          ].join(" ")}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {label} {o.label}
            </option>
          ))}
        </select>

        <RightIcon
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-medium-gray)]"
          strokeWidth={2}
        />
      </div>
    </div>
  );
}
