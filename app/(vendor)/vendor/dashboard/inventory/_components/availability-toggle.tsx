"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function AvailabilityToggle({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onChange}
        className={cn(
          "relative h-5 w-9 rounded-full border border-gray/15 transition",
          checked ? "bg-primary-color" : "bg-secondary"
        )}
        aria-pressed={checked}
      >
        <span
          className={cn(
            "absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white shadow-sm transition",
            checked ? "left-4.5" : "left-0.5"
          )}
          style={{ left: checked ? "18px" : "2px" }}
        />
      </button>

      <p className="text-xs font-semibold text-gray">{label}</p>
    </div>
  );
}
