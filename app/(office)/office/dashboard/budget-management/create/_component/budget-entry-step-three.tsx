"use client";
import { useState } from "react";
import type {
  BudgetEntryMeta,
  BudgetHead,
  BudgetSummary,
} from "@/app/(office)/office/types/budget-entry.types";
import MetaBar from "@/app/(office)/office/dashboard/budget-management/create/_component/metabar";
import BudgetEntryHeader from "@/app/(office)/office/dashboard/budget-management/create/_component/budget-entry-header";
import ActionRow from "@/app/(office)/office/dashboard/budget-management/create/_component/action-row";
import BudgetHeadCard from "@/app/(office)/office/dashboard/budget-management/create/_component/budget-head-card";

export default function BudgetEntryStep3({
  meta,
  summary,
  heads,
  onViewPdf,
  onSave,
}: {
  meta: BudgetEntryMeta;
  summary: BudgetSummary;
  heads: BudgetHead[];
  onViewPdf: () => void;
  onSave: () => void;
}) {
  const [openHeadCodes, setOpenHeadCodes] = useState<Record<string, boolean>>({
    [heads?.[0]?.headCode || ""]: true,
  });

  const toggle = (code: string) =>
    setOpenHeadCodes((s) => ({ ...s, [code]: !s[code] }));

  return (
    <div className="space-y-5">
      <MetaBar meta={meta} />

      <BudgetEntryHeader summary={summary} />

      <ActionRow onViewPdf={onViewPdf} onSave={onSave} />

      <div className="space-y-4">
        {heads.map((h) => (
          <BudgetHeadCard
            key={h.headCode}
            head={h}
            open={!!openHeadCodes[h.headCode]}
            onToggle={() => toggle(h.headCode)}
            mode="view"
          />
        ))}
      </div>
    </div>
  );
}
