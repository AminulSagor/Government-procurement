"use client";

import StatCard from "./stat-card";

export default function StatsStrip() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* TOTAL BUDGET */}
      <div className="col-span-12 md:col-span-4">
        <StatCard
          data={{
            id: "budget",
            icon: "budget",
            variant: "default", // ✅ FIXED
            titleBn: "মোট বরাদ্দ",
            titleEn: "TOTAL BUDGET",
            value: 1245000000,
            chip: {
              label: "+5.2%",
              bg: "bg-green-50 text-green-600 border-green-200",
            },
            note: "Increased from last FY",
          }}
        />
      </div>

      {/* TOTAL SPENT */}
      <div className="col-span-12 md:col-span-4">
        <StatCard
          data={{
            id: "spent",
            icon: "spent",
            variant: "default", // ✅ FIXED
            titleBn: "মোট ব্যয়",
            titleEn: "TOTAL SPENT",
            value: 893245000,
            chip: {
              label: "71.7% Used",
              bg: "bg-orange-50 text-orange-600 border-orange-200",
            },
            note: "of total budget",
          }}
        />
      </div>

      {/* REMAINING */}
      <div className="col-span-12 md:col-span-4">
        <StatCard
          data={{
            id: "remaining",
            icon: "remaining",
            variant: "teal", // ✅ teal card
            titleBn: "অবশিষ্ট",
            titleEn: "REMAINING",
            value: 351755000,
            chip: {
              label: "Healthy",
              bg: "bg-white/10 text-white border-white/20",
              icon: "check",
            },
            note: "Balance available",
          }}
        />
      </div>
    </div>
  );
}
