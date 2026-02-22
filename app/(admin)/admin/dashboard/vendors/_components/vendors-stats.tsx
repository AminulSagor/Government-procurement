"use client";

import { Card } from "@/components/ui/card";
import { Store, BadgeCheck, Clock3, CreditCard } from "lucide-react";
import type { VendorStats } from "../_types/vendors.types";
import { bnNumber, bdtBn } from "../_utils/vendors.format";

function StatCard({
  icon,
  label,
  value,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone: "neutral" | "green" | "red" | "blue";
}) {
  const toneBorder =
    tone === "green"
      ? "border-[rgba(7,136,52,0.18)]"
      : tone === "red"
      ? "border-[rgba(231,53,8,0.18)]"
      : tone === "blue"
      ? "border-[rgba(29,78,216,0.18)]"
      : "border-[rgba(100,116,139,0.18)]";

  const iconBg =
    tone === "green"
      ? "bg-[rgba(7,136,52,0.10)]"
      : tone === "red"
      ? "bg-[rgba(231,53,8,0.10)]"
      : tone === "blue"
      ? "bg-[rgba(29,78,216,0.10)]"
      : "bg-[rgba(120,185,181,0.16)]";

  return (
    <Card className={`rounded-2xl border ${toneBorder} bg-white`}>
      <div className="flex items-center gap-3 p-4">
        <div className={`grid h-10 w-10 place-items-center rounded-xl ${iconBg}`}>
          {icon}
        </div>

        <div className="leading-tight">
          <div className="text-xs text-[var(--color-medium-gray)]">{label}</div>
          <div className="text-2xl font-bold text-[var(--color-black)]">{value}</div>
        </div>
      </div>
    </Card>
  );
}

export default function VendorsStats({ stats }: { stats: VendorStats }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        tone="neutral"
        icon={<Store className="h-5 w-5 text-[var(--color-primary-color)]" />}
        label="মোট ভেন্ডর"
        value={bnNumber(stats.totalVendors)}
      />
      <StatCard
        tone="green"
        icon={<BadgeCheck className="h-5 w-5 text-[var(--color-green)]" />}
        label="রেজিস্টার্ড"
        value={bnNumber(stats.registered)}
      />
      <StatCard
        tone="red"
        icon={<Clock3 className="h-5 w-5 text-[var(--color-red)]" />}
        label="অপেক্ষমান (PENDING)"
        value={bnNumber(stats.pending)}
      />
      <StatCard
        tone="blue"
        icon={<CreditCard className="h-5 w-5 text-[var(--color-blue)]" />}
        label="মোট বিক্রয় (টাকার পরিমাণ)"
        value={bdtBn(stats.totalSalesAmount)}
      />
    </div>
  );
}
