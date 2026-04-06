"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, Download, Clock3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HandledOrdersTable from "./handled-orders-table";
import MiniPagination from "./mini-pagination";
import type { HandledOrderRow } from "../_types/agent-profile.types";

export default function HandledOrdersSection({ rows }: { rows: HandledOrderRow[] }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const k = q.trim().toLowerCase();
    if (!k) return rows;
    return rows.filter(
      (r) =>
        r.orderCode.toLowerCase().includes(k) ||
        r.areaBn.toLowerCase().includes(k) ||
        r.centerBn.toLowerCase().includes(k)
    );
  }, [q, rows]);

  return (
    <Card className="overflow-hidden rounded-2xl border border-[rgba(100,116,139,0.14)] bg-white">
      {/* header bar (same like screenshot) */}
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(120,185,181,0.18)]">
            <Clock3 className="h-5 w-5 text-[var(--color-primary-color)]" />
          </span>
          <div className="text-[18px] font-extrabold text-[var(--color-black)]">
            হ্যান্ডেল করা অর্ডারসমূহ
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* search input */}
          <div className="flex h-11 items-center gap-2 rounded-xl border border-[rgba(100,116,139,0.14)] bg-white px-4">
            <Search className="h-4 w-4 text-[var(--color-medium-gray)]" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="অর্ডার আইডি সার্চ করুন..."
              className="h-10 w-[260px] bg-transparent text-sm outline-none placeholder:text-[var(--color-medium-gray)]"
            />
          </div>

          {/* filter */}
          <Button
            variant="outline"
            className="h-11 w-11 rounded-xl border border-[rgba(100,116,139,0.14)] bg-white p-0"
            onClick={() => console.log("filter")}
          >
            <SlidersHorizontal className="h-5 w-5 text-[var(--color-medium-gray)]" />
          </Button>

          {/* download */}
          <Button
            variant="outline"
            className="h-11 w-11 rounded-xl border border-[rgba(100,116,139,0.14)] bg-white p-0"
            onClick={() => console.log("export")}
          >
            <Download className="h-5 w-5 text-[var(--color-medium-gray)]" />
          </Button>
        </div>
      </div>

      {/* divider */}
      <div className="border-t border-[rgba(100,116,139,0.10)]" />

      {/* table */}
      <div className="px-4 pb-0 pt-4">
        <HandledOrdersTable rows={filtered} />
      </div>

      {/* footer like screenshot */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-xs text-[var(--color-medium-gray)]">
          প্রদর্শন করা হচ্ছে {Math.min(filtered.length, 2).toLocaleString("bn-BD")} টি রেকর্ড
        </div>
        <MiniPagination page={1} totalPages={2} onChange={(p) => console.log(p)} />
      </div>
    </Card>
  );
}
