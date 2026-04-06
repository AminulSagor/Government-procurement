"use client";

import { Save } from "lucide-react";

export default function ProductSaveBar({ onSave }: { onSave: () => void }) {
  return (
    <div className="mt-8 flex justify-end">
      <button
        type="button"
        onClick={onSave}
        className="inline-flex h-12 min-w-[220px] items-center justify-center gap-2 rounded-xl bg-primary-color px-6 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(15,23,42,0.18)] hover:opacity-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
      >
        <Save className="h-4 w-4" />
        সংরক্ষণ করুন
      </button>
    </div>
  );
}