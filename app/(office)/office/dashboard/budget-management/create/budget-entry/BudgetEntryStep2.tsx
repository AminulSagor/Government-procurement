"use client";

import { useState } from "react";
import type { BudgetEntryMeta, BudgetHead } from "@/app/(office)/office/types/budget-entry.types";

import { useBudgetEntry } from "./useBudgetEntry";
import MetaBar from "@/app/(office)/office/dashboard/budget-management/create/_component/metabar";
import BudgetEntryHeader from "@/app/(office)/office/dashboard/budget-management/create/_component/budget-entry-header";
import BudgetHeadCard from "@/app/(office)/office/dashboard/budget-management/create/budget-entry/BudgetHeadCard";
import AddNewHeadButton from "@/app/(office)/office/dashboard/budget-management/create/_component/add-new-head-button";

export default function BudgetEntryStep2({
  meta,
  summary,
  heads: initialHeads,
  onSend,
}: {
  meta: BudgetEntryMeta;
  summary: any;
  heads: BudgetHead[];
  onSend: (payload: any) => void; // <-- now sends real payload
}) {
  const [openHeadCodes, setOpenHeadCodes] = useState<Record<string, boolean>>({
    [initialHeads?.[0]?.headCode || ""]: true,
  });

  const { heads, computedSummary, payload, updateCell, updateDescription, addItem, addHead } =
    useBudgetEntry(initialHeads);

  const toggle = (code: string) =>
    setOpenHeadCodes((s) => ({ ...s, [code]: !s[code] }));

  return (
    <div className="space-y-5">
      <MetaBar meta={meta} />

      <BudgetEntryHeader summary={computedSummary} onSend={() => onSend(payload)} />

      <div className="space-y-4">
        {heads.map((h) => (
          <BudgetHeadCard
            key={h.headCode}
            head={h}
            open={!!openHeadCodes[h.headCode]}
            onToggle={() => toggle(h.headCode)}
            mode="edit"
            onAddItem={() => addItem(h.headCode)}
            onCellChange={(rowIndex, key, value) => updateCell(h.headCode, rowIndex, key, value)}
            onDescriptionChange={(rowIndex, value) => updateDescription(h.headCode, rowIndex, value)}
          />
        ))}
      </div>

      <AddNewHeadButton onClick={addHead} />
    </div>
  );
}
