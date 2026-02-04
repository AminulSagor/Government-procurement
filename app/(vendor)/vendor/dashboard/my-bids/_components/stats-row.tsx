"use client";

import Card from "@/components/cards/card";
import { CheckCircle2, ClipboardList, Hourglass } from "lucide-react";

type Tone = "teal" | "green" | "orange";

function StatCard({
  icon,
  titleBn,
  subtitleEn,
  value,
  chipText,
  tone,
}: {
  icon: React.ReactNode;
  titleBn: string;
  subtitleEn: string;
  value: string;
  chipText: string;
  tone: Tone;
}) {
  const topBar =
    tone === "teal"
      ? "bg-primary"
      : tone === "green"
      ? "bg-green"
      : "bg-amber-500";

  const iconBox =
    tone === "teal"
      ? "bg-primary/10 text-primary"
      : tone === "green"
      ? "bg-green/10 text-green"
      : "bg-amber-500/10 text-amber-600";

  const chip =
    tone === "orange"
      ? "bg-gray/10 text-gray/60"
      : tone === "green"
      ? "bg-green/10 text-green"
      : "bg-primary/10 text-primary";

  return (
    <Card className="relative overflow-hidden rounded-2xl border border-gray/15 bg-white p-5">
      {/* top accent */}
      <div className={`absolute left-0 top-0 h-[3px] w-full ${topBar}`} />

      {/* chip */}
      <div
        className={`absolute right-4 top-3 rounded-full px-3 py-1 text-[11px] font-semibold ${chip}`}
      >
        {chipText}
      </div>

      {/* content */}
      <div className="flex items-start gap-3">
        <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${iconBox}`}>
          {icon}
        </div>

        <div>
          <p className="text-sm font-extrabold text-gray">{titleBn}</p>
          <p className="text-xs font-semibold text-gray/60">{subtitleEn}</p>
        </div>
      </div>

      {/* value */}
      <p className="mt-6 text-[34px] font-extrabold leading-none tracking-tight text-gray">
        {value}
      </p>
    </Card>
  );
}

export default function StatsRow() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <StatCard
        tone="teal"
        icon={<ClipboardList size={18} />}
        titleBn="মোট জমাকৃত"
        subtitleEn="Total Submitted"
        value="১২"
        chipText="↗ +২.৬%"
      />

      <StatCard
        tone="green"
        icon={<CheckCircle2 size={18} />}
        titleBn="গৃহীত জমাসমূহ"
        subtitleEn="Accepted Bids"
        value="৩"
        chipText="↑ +১"
      />

      <StatCard
        tone="orange"
        icon={<Hourglass size={18} />}
        titleBn="পর্যালোচনাধীন"
        subtitleEn="Under Review"
        value="৫"
        chipText="বিড"
      />
    </div>
  );
}
