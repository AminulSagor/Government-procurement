"use client";

import type { StatCard as StatCardType } from "../_types/analytics.types";
import StatCard from "./stat-card";

export default function StatCardsRow({ items }: { items: StatCardType[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {items.map((x) => (
        <StatCard key={x.id} item={x} />
      ))}
    </div>
  );
}
