"use client";

import React from "react";
import Card from "@/components/cards/card";
import { InventoryStats } from "../_types/product-inventory.types";
import { Boxes, Tag, Bell, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

function StatBox({
  label,
  value,
  icon,
  tone = "primary",
  extraIcon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  tone?: "primary" | "amber" | "orange";
  extraIcon?: React.ReactNode;
}) {
  const toneCls =
    tone === "amber"
      ? "text-[#D97706]"
      : tone === "orange"
      ? "text-[#F97316]"
      : "text-[#1F6F7A]";

  return (
    <Card className="rounded-2xl border border-gray/10 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-light-gray">{label}</p>

          <div className="mt-2 flex items-center gap-2">
            <p className={cn("text-xl font-semibold", toneCls)}>{value}</p>
            {extraIcon}
          </div>
        </div>

        <div
          className={cn(
            "grid h-10 w-10 place-items-center rounded-xl",
            "bg-secondary/60",
            toneCls
          )}
        >
          {icon}
        </div>
      </div>
    </Card>
  );
}

export default function InventoryStatsRow({ stats }: { stats: InventoryStats }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {/* total items */}
      <StatBox
        label="মোট পণ্য (TOTAL ITEMS)"
        value={`${stats.totalItems}টি`}
        icon={<Boxes className="h-5 w-5" />}
        tone="primary"
      />

      {/* active offers */}
      <StatBox
        label="সক্রিয় অফার (ACTIVE OFFERS)"
        value={`${stats.activeOffers}টি`}
        icon={<Tag className="h-5 w-5" />}
        tone="primary"
      />

      {/* stock alerts */}
      <StatBox
        label="স্টক এলার্ট (STOCK ALERTS)"
        value={`${stats.stockAlerts}টি`}
        icon={<Bell className="h-5 w-5" />}
        tone="orange"
        extraIcon={
          <AlertTriangle className="h-4 w-4 text-[#F97316]" />
        }
      />
    </div>
  );
}
