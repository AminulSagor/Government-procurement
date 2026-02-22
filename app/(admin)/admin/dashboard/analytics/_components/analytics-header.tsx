"use client";

import { Button } from "@/components/ui/button";
import { Download, CalendarDays } from "lucide-react";
import type { AnalyticsHeaderData } from "../_types/analytics.types";

export default function AnalyticsHeader({ data }: { data: AnalyticsHeaderData }) {
  return (
    <div className="rounded-2xl border border-[rgba(100,116,139,0.16)] bg-white px-6 py-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-xl font-bold text-[var(--color-black)]">{data.titleBn}</h1>
          <p className="mt-1 text-sm text-[var(--color-light-gray)]">{data.subtitleBn}</p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="h-10 rounded-xl border border-[rgba(100,116,139,0.16)] bg-white px-4 text-[var(--color-black)]"
          >
            <Download className="mr-2 h-4 w-4 text-[var(--color-light-gray)]" />
            {data.actionExportBn}
          </Button>

          <div className="flex h-10 items-center gap-2 rounded-xl border border-[rgba(100,116,139,0.16)] bg-white px-4">
            <CalendarDays className="h-4 w-4 text-[var(--color-light-gray)]" />
            <span className="text-sm font-semibold text-[var(--color-black)]">{data.dateBadgeBn}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
