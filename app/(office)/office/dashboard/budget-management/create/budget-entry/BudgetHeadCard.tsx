"use client";

import Card from "@/components/cards/card";
import { Minus, Plus } from "lucide-react";
import type { BudgetHead } from "@/app/(office)/office/types/budget-entry.types";
import BudgetEntryTable from "./BudgetEntryTable";

type EditableKey =
  | "approvedBudget"
  | "approvedRevised"
  | "approvedDivision"
  | "approvedExpected"
  | "approvedExpense"
  | "actualExpense"
  | "unapprovedDivision"
  | "unapprovedExpected";

export default function BudgetHeadCard({
  head,
  open,
  onToggle,
  mode,
  onAddItem,
  onCellChange,
  onDescriptionChange,
}: {
  head: BudgetHead;
  open: boolean;
  onToggle: () => void;
  mode: "edit" | "view";
  onAddItem?: () => void;
  onCellChange?: (rowIndex: number, key: EditableKey, value: string) => void;
  onDescriptionChange?: (rowIndex: number, value: string) => void;
}) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-4 md:p-5 flex items-center gap-3">
        <button
          type="button"
          onClick={onToggle}
          className="grid h-9 w-9 place-items-center rounded-md bg-[rgba(120,185,181,0.12)] border border-secondary-color/60 text-primary-color"
          aria-label="Toggle head"
        >
          {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </button>

        <div className="min-w-[72px] rounded-md border border-primary-color/15 bg-white px-3 py-2 text-center text-sm font-semibold text-black">
          {head.headCode}
        </div>

        <div className="text-base font-semibold text-black">{head.headTitle}</div>

        <div className="ml-3 rounded-full border border-secondary-color/60 bg-[rgba(120,185,181,0.10)] px-3 py-1 text-xs font-semibold text-primary-color">
          আইটেম {head.itemsCount} টি
        </div>

        <div className="ml-auto flex items-center gap-6">
          <div className="text-right">
            <div className="text-xs text-medium-gray">মোট বরাদ্দ</div>
            <div className="mt-1 text-sm font-semibold text-black">{head.totalBudget}</div>
          </div>
          <div className="h-10 w-px bg-medium-gray/30" />
          <div className="text-right">
            <div className="text-xs text-medium-gray">অবশিষ্ট</div>
            <div className="mt-1 text-sm font-semibold text-primary-color">{head.remaining}</div>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-primary-color/15">
          <BudgetEntryTable
            rows={head.rows}
            subtotal={head.subtotal}
            mode={mode}
            onCellChange={onCellChange}
            onDescriptionChange={onDescriptionChange}
          />

          {mode === "edit" && (
            <button
              type="button"
              onClick={onAddItem}
              className="w-full flex items-center gap-3 px-5 py-4 text-primary-color border-t border-primary-color/15 hover:bg-off-white"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-color text-white">
                <Plus className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold">নতুন আইটেম যোগ করুন</span>
            </button>
          )}
        </div>
      )}
    </Card>
  );
}
