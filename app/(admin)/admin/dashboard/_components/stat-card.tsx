"use client";

import Card from "@/components/cards/card";
import { Banknote, BadgePercent, Wallet, CheckCircle2 } from "lucide-react";
import { StatCardData } from "../_types/admin-dashboard.types";

/* icon choose */
function getIcon(icon: string) {
  if (icon === "spent") return BadgePercent;
  if (icon === "remaining") return Wallet;
  return Banknote;
}

/* format money */
function formatBDT(n: number) {
  return `৳ ${n.toLocaleString("en-IN")}`;
}

export default function StatCard({ data }: { data: StatCardData }) {
  const Icon = getIcon(data.icon);

  return (
    <div
      className={`rounded-2xl p-6 shadow-sm bg-primary-color ${
        data.variant === "teal"
          ? "bg-primary-color text-white"
          : "bg-white border border-slate-200"
      }`}
    >
      {/* Top */}
      <div className="flex items-center gap-3">
        <div
          className={`h-10 w-10 rounded-xl flex items-center justify-center ${
            data.variant === "teal"
              ? "bg-white/10"
              : "bg-slate-100"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>

        <p className="text-sm font-semibold">
          {data.titleBn} ({data.titleEn})
        </p>
      </div>

      {/* Value */}
      <h2 className="mt-5 text-3xl font-extrabold">
        {typeof data.value === "number" ? formatBDT(data.value) : data.value}
      </h2>

      {/* Bottom */}
      <div className="mt-5 flex items-center gap-3 text-sm">
        <div className="flex items-center gap-1 rounded-full border px-3 py-1">
          {data.icon === "remaining" && <CheckCircle2 className="h-4 w-4" />}
          <span>{data.chip?.label}</span>
        </div>

        <span>{data.note}</span>
      </div>
    </div>
  );
}
