import Card from "@/components/cards/card";

import { BudgetFiltersState } from "../_types/budget-report.types";
import { Button } from "@/components/ui/button";

export default function FiltersBar({
  state,
  onChange,
  onReset,
}: {
  state: BudgetFiltersState;
  onChange: (patch: Partial<BudgetFiltersState>) => void;
  onReset: () => void;
}) {
  return (
    <Card className="p-4">
      <div className="grid grid-cols-12 gap-3 items-end">
        <div className="col-span-12 lg:col-span-3">
          <label className="text-xs font-medium text-[var(--color-light-gray)]">
            ফিল্টার
          </label>
          <select
            value={state.officeCode}
            onChange={(e) => onChange({ officeCode: e.target.value })}
            className="mt-2 h-11 w-full rounded-lg border border-[var(--color-border)] bg-white px-3 text-sm text-[var(--color-black)]"
          >
            <option value="all">সকল প্রাতিষ্ঠানিক কোড (All)</option>
            <option value="1250101">1250101</option>
            <option value="1270201">1270201</option>
          </select>
        </div>

        <div className="col-span-12 lg:col-span-3">
          <label className="text-xs font-medium text-[var(--color-light-gray)]">
            ধাপ (HIERARCHY)
          </label>
          <select
            value={state.hierarchy}
            onChange={(e) => onChange({ hierarchy: e.target.value })}
            className="mt-2 h-11 w-full rounded-lg border border-[var(--color-border)] bg-white px-3 text-sm text-[var(--color-black)]"
          >
            <option value="all">সকল দপ্তর</option>
            <option value="ministry">মন্ত্রণালয়</option>
            <option value="department">অধিদপ্তর</option>
          </select>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <label className="text-xs font-medium text-[var(--color-light-gray)]">
            তারিখের পরিসীমা
          </label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <input
              type="date"
              value={state.dateFrom}
              onChange={(e) => onChange({ dateFrom: e.target.value })}
              className="h-11 w-full rounded-lg border border-[var(--color-border)] bg-white px-3 text-sm text-[var(--color-black)]"
            />
            <input
              type="date"
              value={state.dateTo}
              onChange={(e) => onChange({ dateTo: e.target.value })}
              className="h-11 w-full rounded-lg border border-[var(--color-border)] bg-white px-3 text-sm text-[var(--color-black)]"
            />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-2 flex gap-2 lg:justify-end">
          <Button
            type="button"
            className="h-11 w-full lg:w-auto rounded-lg bg-[var(--color-primary-color)] text-white px-4"
            onClick={() => {}}
          >
            রিপোর্ট দেখুন
          </Button>

          <button
            type="button"
            onClick={onReset}
            className="h-11 w-full lg:w-auto rounded-lg border border-[var(--color-border)] bg-white px-4 text-sm font-medium text-[var(--color-light-gray)] hover:bg-[var(--color-off-white)]"
          >
            রিসেট করুন
          </button>
        </div>
      </div>
    </Card>
  );
}
