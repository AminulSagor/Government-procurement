"use client";

import RefundStatCard from "@/app/(admin)/admin/dashboard/refunds/_components/refund-stat-card";
import { REFUNDS_STATS_DATA } from "@/app/(admin)/admin/dashboard/refunds/_data/refunds-stats-data";

export default function RefundStatsOverview() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {REFUNDS_STATS_DATA.map((item) => (
          <RefundStatCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
