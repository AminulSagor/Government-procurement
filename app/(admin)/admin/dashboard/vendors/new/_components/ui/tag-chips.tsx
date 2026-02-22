"use client";

import { X } from "lucide-react";

type Chip = { key: string; label: string };

type Props = {
  items: Chip[];
  onRemove: (key: string) => void;
  onAddNew: () => void;
  addLabel: string;
};

export default function TagChips({ items, onRemove, onAddNew, addLabel }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {items.map((it) => (
        <span
          key={it.key}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700"
        >
          {it.label}
          <button
            type="button"
            onClick={() => onRemove(it.key)}
            className="grid h-5 w-5 place-items-center rounded-full hover:bg-slate-200/60"
            aria-label="Remove"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </span>
      ))}

      <button
        type="button"
        onClick={onAddNew}
        className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
      >
        {addLabel}
      </button>
    </div>
  );
}