"use client";

import { AlertTriangle } from "lucide-react";

export default function WarningBanner({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-orange/25 bg-orange/10 px-4 py-3">
      <div className="mt-0.5 rounded-md bg-orange/15 p-2 text-orange">
        <AlertTriangle className="h-4 w-4" />
      </div>
      <div className="text-sm text-orange">{text}</div>
    </div>
  );
}
