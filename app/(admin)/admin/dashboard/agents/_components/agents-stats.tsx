"use client";

import { Card } from "@/components/ui/card";
import { ClipboardList, Compass, Truck } from "lucide-react";
import type { AgentStats } from "../_types/agents.types";

function StatCard({
  icon,
  labelBn,
  valueBn,
  iconBg,
}: {
  icon: React.ReactNode;
  labelBn: string;
  valueBn: string;
  iconBg: string;
}) {
  return (
    <Card className="rounded-2xl border border-[rgba(100,116,139,0.14)] bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}>
          {icon}
        </div>
        <div>
          <div className="text-sm font-medium text-[var(--color-medium-gray)]">
            {labelBn}
          </div>
          <div className="mt-1 text-2xl font-extrabold text-[var(--color-black)]">
            {valueBn}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function AgentsStats({ stats }: { stats: AgentStats }) {
  // screenshot value style: Bengali digits
  const bn = (n: number) => n.toLocaleString("bn-BD");

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <StatCard
        icon={<ClipboardList className="h-5 w-5 text-[var(--color-primary-color)]" />}
        iconBg="bg-[rgba(120,185,181,0.18)]"
        labelBn="মোট এজেন্ট"
        valueBn={bn(stats.totalAgents)}
      />
      <StatCard
        icon={<Compass className="h-5 w-5 text-[var(--color-orange)]" />}
        iconBg="bg-[rgba(234,88,12,0.12)]"
        labelBn="সক্রিয় এজেন্ট"
        valueBn={bn(stats.activeAgents)}
      />
      <StatCard
        icon={<Truck className="h-5 w-5 text-[var(--color-blue)]" />}
        iconBg="bg-[rgba(29,78,216,0.12)]"
        labelBn="ডেলিভারি"
        valueBn={bn(stats.deliveries)}
      />
    </div>
  );
}
