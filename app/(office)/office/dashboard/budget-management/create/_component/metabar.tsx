"use client";

import Card from "@/components/cards/card";
import { ChevronDown } from "lucide-react";
import type { BudgetEntryMeta } from "@/app/(office)/office/types/budget-entry.types";

export default function MetaBar({ meta }: { meta: BudgetEntryMeta }) {
  return (
    <Card>
      {/* outer container like ss */}
      <div className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4">
        {/* inner pill */}
        <div className="flex-1 rounded-xl border border-secondary-color/70 bg-[rgba(120,185,181,0.12)] px-4 py-3">
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-secondary-color/60">
            <div className="px-3 md:px-6">
              <MetaCell title="অর্থবছর" value={meta.fiscalYear} />
            </div>

            <div className="px-3 md:px-6">
              <MetaCell title="আপলোডের তারিখ" value={meta.uploadedAt} />
            </div>

            <div className="px-3 md:px-6">
              <MetaCell title="মাঠ অফিস" value={meta.officeName} />
            </div>
          </div>
        </div>

        {/* chevron like ss (no square) */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full bg-transparent text-primary-color hover:bg-[rgba(120,185,181,0.10)]"
          aria-label="Toggle"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </Card>
  );
}

function MetaCell({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-medium text-medium-gray">{title}</div>
      <div className="mt-1 text-lg font-semibold text-primary-color">
        {value}
      </div>
    </div>
  );
}
