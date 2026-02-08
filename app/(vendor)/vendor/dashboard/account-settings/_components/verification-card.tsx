"use client";

import React from "react";
import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import { VerificationItem } from "../_types/profile-status.types";
import { Gavel, BadgeCheck, IdCard, Hash, Check } from "lucide-react";

function iconAndTone(key: VerificationItem["key"]) {
  if (key === "trade_license")
    return { tone: "blue" as const, icon: <BadgeCheck className="h-5 w-5" /> };
  if (key === "tin")
    return { tone: "purple" as const, icon: <IdCard className="h-5 w-5" /> };
  return { tone: "orange" as const, icon: <Hash className="h-5 w-5" /> };
}

function IconCircle({
  tone,
  icon,
}: {
  tone: "blue" | "purple" | "orange";
  icon: React.ReactNode;
}) {
  const cls =
    tone === "blue"
      ? "bg-primary-color/10 text-primary-color"
      : tone === "purple"
      ? "bg-purple/10 text-purple"
      : "bg-orange/10 text-orange";

  return (
    <div className={cn("grid h-10 w-10 place-items-center rounded-full", cls)}>
      {icon}
    </div>
  );
}

export default function VerificationCard({ items }: { items: VerificationItem[] }) {
  return (
    <Card className="p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-center gap-2 px-6 py-4">
        <Gavel className="h-5 w-5 text-primary-color" />
        <p className="text-sm font-semibold text-gray">আইনি নথিপত্র</p>
      </div>

      <div className="border-t border-gray/10" />

      {/* list */}
      <div className="space-y-4 px-6 py-5">
        {items.map((it) => {
          const { tone, icon } = iconAndTone(it.key);

          return (
            <div
              key={it.key}
              className="flex items-center justify-between gap-4 rounded-xl border border-gray/10 bg-white px-5 py-4"
            >
              <div className="flex min-w-0 items-center gap-4">
                <IconCircle tone={tone} icon={icon} />

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray">{it.title}</p>
                  <p className="mt-1 text-sm text-gray">{it.value}</p>
                </div>
              </div>

              {/* right status pill */}
              <div className="inline-flex items-center gap-2 rounded-lg bg-green/10 px-3 py-1.5">
                <Check className="h-4 w-4 text-green" />
                <span className="text-sm font-semibold text-green">Verified</span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
