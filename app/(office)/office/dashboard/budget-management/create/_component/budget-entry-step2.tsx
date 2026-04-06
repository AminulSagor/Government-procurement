"use client";
import { useState } from "react";
import type { BudgetEntryMeta, BudgetHead, BudgetSummary } from "@/app/(office)/office/types/budget-entry.types";
import MetaBar from "@/app/(office)/office/dashboard/budget-management/create/_component/metabar";
import BudgetEntryHeader from "@/app/(office)/office/dashboard/budget-management/create/_component/budget-entry-header";
import BudgetHeadCard from "@/app/(office)/office/dashboard/budget-management/create/_component/budget-head-card";
import AddNewHeadButton from "@/app/(office)/office/dashboard/budget-management/create/_component/add-new-head-button";


export default function BudgetEntryStep2({
  meta,
  summary,
  heads,
  onSend,
}: {
  meta: BudgetEntryMeta;
  summary: BudgetSummary;
  heads: BudgetHead[];
  onSend: () => void;
}) {
  const [openHeadCodes, setOpenHeadCodes] = useState<Record<string, boolean>>({
    [heads?.[0]?.headCode || ""]: true,
  });

  const toggle = (code: string) =>
    setOpenHeadCodes((s) => ({ ...s, [code]: !s[code] }));

  return (
    <div className="space-y-5">
      <MetaBar meta={meta} />

      <BudgetEntryHeader summary={summary} onSend={onSend} />

      <div className="space-y-4">
        {heads.map((h) => (
          <BudgetHeadCard
            key={h.headCode}
            head={h}
            open={!!openHeadCodes[h.headCode]}
            onToggle={() => toggle(h.headCode)}
            mode="edit"
          />
        ))}
      </div>

      <AddNewHeadButton />
    </div>
  );
}
