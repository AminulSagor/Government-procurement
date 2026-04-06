// app/(admin)/analytics/live-activity-feed/_components/LAFList.tsx
"use client";

import type { LAFItem } from "../_types/live-activity-feed.types";
import LAFItemRow from "./LAFItemRow";

export default function LAFList({ items }: { items: LAFItem[] }) {
  return (
    <div>
      {items.map((it, idx) => (
        <div
          key={it.id}
          className={idx === 0 ? "" : "border-t border-[rgba(100,116,139,0.10)]"}
        >
          <LAFItemRow item={it} />
        </div>
      ))}
    </div>
  );
}
