"use client";

import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";
import { FileText } from "lucide-react";
import type { BudgetSummary } from "@/app/(office)/office/types/budget-entry.types";

export default function BudgetEntryHeader({
  summary,
  onSend,
}: {
  summary: BudgetSummary;
  onSend?: () => void;
}) {
  return (
    <Card className="p-0">
      <div className="p-5 md:p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-md bg-off-white text-primary-color">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <div className="text-lg font-semibold text-black">
              বাজেট বিস্তারিত এন্ট্রি
            </div>
            <div className="mt-1 text-sm text-medium-gray">
              ডকুমেন্ট এ উল্লেখিত কোড অনুযায়ী বাজেটের বিস্তারিত বিবরণ লিখুন
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <StatPill label="ব্যয়ের খাত" value={`${summary.headsCount} টি`} />
          <StatPill label="মোট বরাদ্দ" value={summary.totalBudget} />
          <StatPill label="অবশিষ্ট" value={summary.remaining} />

          {onSend && (
            <PrimaryButton onClick={onSend}>
              সেন্ড করুন
            </PrimaryButton>
          )}
        </div>
      </div>
    </Card>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-[120px] rounded-lg border border-secondary-color/60 bg-[rgba(120,185,181,0.10)] px-4 py-2">
      <div className="text-xs text-medium-gray">{label}</div>
      <div className="mt-1 text-base font-semibold text-primary-color">
        {value}
      </div>
    </div>
  );
}
