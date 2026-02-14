"use client";


import { FolderOpen, ListChecks } from "lucide-react";
import { IBasTab } from "../_types/ibas-codes.types";

export default function IbasTabs({
  value,
  onChange,
}: {
  value: IBasTab;
  onChange: (v: IBasTab) => void;
}) {
  const base =
    "inline-flex items-center gap-2 border-b-2 px-2 py-3 text-sm font-semibold";
  const active = "border-[var(--color-primary-color)] text-[var(--color-primary-color)]";
  const inactive = "border-transparent text-[var(--color-medium-gray)] hover:text-black";

  return (
    <div className="flex gap-6 border-b border-border">
      <button
        type="button"
        className={`${base} ${value === "parent" ? active : inactive}`}
        onClick={() => onChange("parent")}
      >
        <FolderOpen className="h-4 w-4" />
        প্যারেন্ট কোড / ক্যাটাগরি
      </button>

      <button
        type="button"
        className={`${base} ${value === "economic" ? active : inactive}`}
        onClick={() => onChange("economic")}
      >
        <ListChecks className="h-4 w-4" />
        প্রোকিউ ও স্যালারি কোড
      </button>
    </div>
  );
}
