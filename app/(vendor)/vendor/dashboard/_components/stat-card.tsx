"use client";

import React from "react";
import { LucideIcon, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

type Props = {
  title: string;
  value: string;
  Icon?: LucideIcon;

  // bottom helpers (image অনুযায়ী)
  badgeText?: string;      // "+12.3%"
  badgeLabel?: string;     // "গত মাসের তুলনায়"
  linkText?: string;       // "Withdraw Funds →"
};

export default function StatCard({
  title,
  value,
  Icon,
  badgeText,
  badgeLabel,
  linkText,
}: Props) {
  return (
    <Card className="relative overflow-hidden rounded-xl bg-primary-color px-5 py-4 text-white">
      {/* watermark icon */}
      {Icon && (
        <div className="pointer-events-none absolute right-4 top-3 opacity-[0.18]">
          <Icon size={56} />
        </div>
      )}

      {/* title */}
      <p className="text-sm font-semibold text-white/90">{title}</p>

      {/* value */}
      <p className="mt-1 text-2xl font-extrabold tracking-tight">
        {value}
      </p>

      {/* bottom area */}
      <div className="mt-3 flex items-center justify-between">
        {/* left badge */}
        {badgeText ? (
          <div className="flex items-center gap-2 text-xs">
            <span className="rounded-md bg-white/15 px-2 py-0.5 font-bold">
              {badgeText}
            </span>
            <span className="text-white/80 font-medium">
              {badgeLabel}
            </span>
          </div>
        ) : (
          <span className="text-xs text-white/70">{badgeLabel}</span>
        )}

        {/* right link */}
        {linkText && (
          <button
            type="button"
            className="flex items-center gap-1 text-xs font-semibold text-white/90 hover:underline"
          >
            {linkText}
            <ArrowUpRight size={14} />
          </button>
        )}
      </div>
    </Card>
  );
}
