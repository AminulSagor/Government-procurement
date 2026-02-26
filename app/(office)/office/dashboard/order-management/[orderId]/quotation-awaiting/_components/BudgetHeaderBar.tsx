"use client";

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-off-white border border-primary-color/10 overflow-hidden">
      <div
        className="h-full bg-primary-color rounded-full"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

export default function BudgetHeaderBar({
  budgetCodeText,
  balanceLabel,
  balanceAmountText,
  progressValue,
}: {
  budgetCodeText: string;
  balanceLabel: string;
  balanceAmountText: string;
  progressValue: number;
}) {
  return (
    <div className="w-full rounded-lg border border-primary-color/15 bg-white px-5 py-4">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm text-light-gray">{budgetCodeText}</div>

        <div className="text-right">
          <div className="text-xs text-light-gray">{balanceLabel}</div>
          <div className="text-base font-semibold text-black">
            {balanceAmountText}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <ProgressBar value={progressValue} />
      </div>
    </div>
  );
}
