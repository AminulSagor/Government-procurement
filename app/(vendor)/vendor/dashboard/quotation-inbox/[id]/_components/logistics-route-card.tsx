"use client";

import React from "react";
import Card from "@/components/cards/card";
import { RotateCcw } from "lucide-react";

type Props = {
  title?: string;
  routeNo?: string;       // "০২"
  latestDateText?: string; // "১০ ফেব্রুয়ারি, ২০২৫"
};

export default function LogisticsRouteCard({
  title = "লজিস্টিকসের রাউট",
  routeNo = "০২",
  latestDateText = "১০ ফেব্রুয়ারি, ২০২৫",
}: Props) {
  return (
    <Card className="rounded-2xl border border-gray/10 bg-white p-5 shadow-sm">
      {/* header */}
      <div className="flex items-center gap-2">
        <span className="text-[#FF7A00]">
          <RotateCcw size={18} />
        </span>
        <p className="text-sm font-extrabold text-gray">{title}</p>
      </div>

      {/* yellow box */}
      <div className="mt-4 rounded-2xl border border-[#F4D9A5] bg-[#FFF6E4] px-4 py-3">
        <p className="text-sm font-extrabold text-[#A85A00]">
          রাউটঃ {routeNo}
        </p>
        <p className="mt-1 text-[11px] font-semibold text-[#A85A00]/80">
          সর্বশেষ আপডেটঃ {latestDateText}
        </p>
      </div>
    </Card>
  );
}
