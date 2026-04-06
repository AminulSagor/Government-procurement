"use client";

import { Search } from "lucide-react";
import Select from "./select";


export default function IbasFilterPopover({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
<div className="w-[380px] rounded-2xl border border-border bg-white p-4 shadow-xl">
      <p className="text-sm font-bold text-black">প্যারেন্ট হেড নির্বাচন করুন</p>

      <div className="mt-3 flex h-11 items-center gap-2 rounded-xl border border-[var(--color-light-gray)]/30 bg-[var(--color-off-white)] px-3">
        <Search className="h-4 w-4 text-[var(--color-medium-gray)]" />
        <input
          placeholder="৪-ডিজিট কোড খুঁজুন..."
          className="h-full w-full bg-transparent text-sm outline-none placeholder:text-[var(--color-medium-gray)]"
        />
      </div>

      <div className="mt-4">
        <p className="mb-2 text-sm font-bold text-black">অবস্থা</p>
        <Select
          value={"any"}
          onChange={() => {}}
          options={[
            { value: "any", label: "সকল" },
            { value: "active", label: "সক্রিয়" },
            { value: "inactive", label: "নিষ্ক্রিয়" },
          ]}
        />
      </div>

      <div className="mt-5 flex items-center justify-end gap-3">
        <button
          type="button"
          className="h-10 rounded-xl border border-[var(--color-light-gray)]/30 bg-white px-4 text-sm font-semibold text-black hover:bg-[var(--color-off-white)]"
          onClick={onClose}
        >
          রিসেট করুন
        </button>

        <button
          type="button"
          className="h-10 rounded-xl bg-[var(--color-primary-color)] px-4 text-sm font-semibold text-white hover:opacity-95"
          onClick={onClose}
        >
          ফিল্টার প্রয়োগ করুন
        </button>
      </div>
    </div>
  );
}
