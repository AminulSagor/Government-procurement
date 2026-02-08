"use client";

import React from "react";
import { LedgerStatCard } from "../_types/payment-ledger.types";
import StatCard from "./stat-card";

export default function StatCardsRow({ stats }: { stats: LedgerStatCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((s) => (
        <StatCard key={s.key} stat={s} />
      ))}
    </div>
  );
}
