// app/(admin)/analytics/live-activity-feed/_components/LAFSearchInput.tsx
"use client";

import type { LucideIcon } from "lucide-react";

export default function LAFSearchInput({
  value,
  onChange,
  placeholder,
  Icon,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  Icon: LucideIcon;
}) {
  return (
    <div className="relative w-full md:w-[260px]">
      <Icon
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-medium-gray)]"
        strokeWidth={2}
      />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={[
          "h-10 w-full rounded-lg border bg-white pl-9 pr-3 text-sm",
          "border-[rgba(100,116,139,0.18)]",
          "placeholder:text-[var(--color-medium-gray)]",
          "focus:outline-none focus:ring-2 focus:ring-[rgba(31,110,128,0.18)]",
        ].join(" ")}
      />
    </div>
  );
}
