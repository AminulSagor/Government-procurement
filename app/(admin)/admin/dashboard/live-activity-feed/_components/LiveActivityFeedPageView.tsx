// app/(admin)/analytics/live-activity-feed/_components/LiveActivityFeedPageView.tsx
"use client";

import { useMemo, useState } from "react";
import type { LAFActivityType, LAFDemo } from "../_types/live-activity-feed.types";
import LAFHeader from "./LAFHeader";
import LAFList from "./LAFList";
import LAFPagination from "./LAFPagination";

export default function LiveActivityFeedPageView({ demo }: { demo: LAFDemo }) {
  const [q, setQ] = useState("");
  const [type, setType] = useState<LAFActivityType>("all");
  const [page, setPage] = useState(demo.meta.page);

  const filtered = useMemo(() => {
    const byType =
      type === "all" ? demo.items : demo.items.filter((x) => x.statusType === type);

    if (!q.trim()) return byType;

    const key = q.trim().toLowerCase();
    return byType.filter((x) => {
      return (
        x.titleBn.toLowerCase().includes(key) ||
        (x.codeText ?? "").toLowerCase().includes(key) ||
        x.descriptionBn.toLowerCase().includes(key)
      );
    });
  }, [demo.items, q, type]);

  const pageSize = demo.meta.limit;
  const total = filtered.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));

  const safePage = Math.min(pageCount, Math.max(1, page));
  const slice = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  return (
    <div className="space-y-7">
      {/* Card container */}
      <div className="rounded-2xl border border-[rgba(100,116,139,0.18)] bg-white shadow-sm">
        <LAFHeader
          header={demo.header}
          q={q}
          onQChange={setQ}
          type={type}
          onTypeChange={(v) => {
            setType(v);
            setPage(1);
          }}
          typeOptions={demo.typeOptions}
        />

        <div className="border-t border-[rgba(100,116,139,0.12)]">
          <LAFList items={slice} />
        </div>

        <div className="border-t border-[rgba(100,116,139,0.12)] px-6 py-4">
          <LAFPagination
            total={total}
            page={safePage}
            pageSize={pageSize}
            pageCount={pageCount}
            onChange={setPage}
          />
        </div>
      </div>
    </div>
  );
}
