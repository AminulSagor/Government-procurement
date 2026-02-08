"use client";

import React from "react";
import { cn } from "@/lib/utils";

function Toggle({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative h-6 w-12 rounded-full border border-gray/15 transition",
        on ? "bg-primary" : "bg-secondary"
      )}
      aria-pressed={on}
    >
      <span
        className={cn(
          "absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-white shadow-sm transition",
          on ? "left-6" : "left-1"
        )}
      />
    </button>
  );
}

export default function StockStatusRow({
  active,
  onToggle,
}: {
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-lg border border-gray/10 bg-secondary px-4 py-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold text-gray">স্টক স্ট্যাটাস (Stock Status)</p>
          <p className="mt-1 text-[11px] text-gray">
            This controls the product visibility in the marketplace.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={cn(
              "rounded-full px-3 py-1 text-[11px] font-semibold",
              active ? "bg-green/10 text-green" : "bg-white text-gray border border-gray/15"
            )}
          >
            {active ? "সক্রিয় (Active)" : "নিষ্ক্রিয় (Inactive)"}
          </span>

          <Toggle on={active} onClick={onToggle} />
        </div>
      </div>
    </div>
  );
}
