"use client";

import { Clock } from "lucide-react";

export default function StatusPill({ label }: { label: string }) {
  return (
    <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-orange/25 bg-orange/10 px-4 py-2 text-sm font-medium text-orange">
      <Clock className="h-4 w-4" />
      {label}
    </div>
  );
}
