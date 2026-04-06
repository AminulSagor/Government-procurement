"use client";

import { RotateCcw } from "lucide-react";

export default function ChangePasswordHeader({ titleBn }: { titleBn: string }) {
  return (
    <div className="flex items-center gap-3 bg-[var(--color-off-white)] px-6 py-4">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white">
        <RotateCcw className="h-4 w-4 text-[var(--color-primary-color)]" strokeWidth={2.2} />
      </span>

      <p className="text-[15px] font-semibold text-[var(--color-black)]">{titleBn}</p>
    </div>
  );
}
