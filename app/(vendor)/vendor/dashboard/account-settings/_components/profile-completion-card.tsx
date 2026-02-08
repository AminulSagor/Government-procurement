"use client";

import React from "react";
import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import { Verified } from "lucide-react";

export default function ProfileCompletionCard({
  percent,
  label,
  hint,
}: {
  percent: number;
  label: string;
  hint: string;
}) {
  const safe = Math.max(0, Math.min(100, percent));

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-green/10 text-green">
            <Verified className="h-3 w-3" />
          </span>
          <p className="text-sm font-semibold text-black">{label}</p>
        </div>

        <p className="text-xs font-semibold text-green bg-green-100 px-3 py-1 rounded-md">{safe}%</p>
      </div>

      <div className="mt-3">
        <div className="h-2 w-full rounded-full bg-secondary">
          <div
            className={cn("h-2 rounded-full bg-green")}
            style={{ width: `${safe}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-light-gray">{hint}</p>
      </div>
    </Card>
  );
}
