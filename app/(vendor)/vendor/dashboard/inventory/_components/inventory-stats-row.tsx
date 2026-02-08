"use client";

import React from "react";
import Card from "@/components/cards/card";
import { InventoryStats } from "../_types/product-inventory.types";

function StatBox({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-gray">{label}</p>
          <p className="mt-2 text-xl font-semibold text-gray">{value}</p>
        </div>
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-secondary text-primary">
          {icon}
        </div>
      </div>
    </Card>
  );
}

export default function InventoryStatsRow({ stats }: { stats: InventoryStats }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <StatBox
        label="মোট পণ্য (TOTAL ITEMS)"
        value={`${stats.totalItems}`}
        icon={<span>▦</span>}
      />
      <StatBox
        label="সক্রিয় অফার (ACTIVE OFFERS)"
        value={`${stats.activeOffers}`}
        icon={<span>🏷</span>}
      />
      <StatBox
        label="স্টক এলার্ট (STOCK ALERTS)"
        value={`${stats.stockAlerts}`}
        icon={<span>🔔</span>}
      />
    </div>
  );
}
