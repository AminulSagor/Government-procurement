"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, Store, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { NegStepData } from "../_types/negotiation-step.types";
import NegInventoryTable from "./neg-inventory-table";

export default function NegRightPanel({ data }: { data: NegStepData }) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const goNegotiation = () => {

    router.push(`/admin/dashboard/requisition-inbox/REQ-2025-001/negotiation-assign`);
  };

  return (
    <div className="rounded-2xl border border-[rgba(100,116,139,0.18)] bg-white shadow-sm overflow-hidden">
      {/* filter bar */}
      <div className="px-5 py-4">
        <div className="rounded-xl border border-[rgba(100,116,139,0.14)] bg-white p-3">
          <div className="flex items-center gap-2 rounded-lg border border-[rgba(100,116,139,0.14)] bg-white px-3">
            <Search className="h-4 w-4 text-[var(--color-medium-gray)]" strokeWidth={1.9} />
            <input
              placeholder={data.filters.qPlaceholderBn}
              className="h-10 w-full bg-transparent text-sm text-[var(--color-black)] outline-none placeholder:text-[rgba(145,145,145,0.95)]"
            />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-3">
            <select className="h-10 rounded-lg border border-[rgba(100,116,139,0.14)] bg-white px-3 text-sm text-[var(--color-black)] outline-none">
              <option>{data.filters.select1LabelBn}</option>
            </select>
            <select className="h-10 rounded-lg border border-[rgba(100,116,139,0.14)] bg-white px-3 text-sm text-[var(--color-black)] outline-none">
              <option>{data.filters.select2LabelBn}</option>
            </select>
            <select className="h-10 rounded-lg border border-[rgba(100,116,139,0.14)] bg-white px-3 text-sm text-[var(--color-black)] outline-none">
              <option>{data.filters.select3LabelBn}</option>
            </select>
          </div>
        </div>
      </div>

      <div className="h-px bg-[rgba(100,116,139,0.12)]" />

      {/* content */}
      <div className="relative px-5 py-5">
        {/* top-right badge */}
        <div className="absolute right-5 top-5">
          <span className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary-color)] px-4 py-2 text-xs font-semibold text-white">
            <CheckCircle2 className="h-4 w-4" strokeWidth={2} />
            {data.header.tagBn}
          </span>
        </div>

        {/* header */}
        <div className="flex items-start gap-4 pr-[170px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(120,185,181,0.18)] text-[var(--color-primary-color)]">
            <Store className="h-6 w-6" strokeWidth={1.9} />
          </div>

          <div className="min-w-0">
            <p className="text-base font-extrabold text-[var(--color-black)]">
              {data.header.officeTitleBn}
            </p>

            <div className="mt-1 flex items-center gap-2 text-xs text-[var(--color-medium-gray)]">
              <span className="inline-flex items-center gap-1">
                <Star className="h-3.5 w-3.5 text-[rgba(245,158,11,0.95)]" strokeWidth={2} />
                <span>{(data.header as any).rating ?? "4.8"}</span>
              </span>

              <span className="text-[rgba(100,116,139,0.55)]">•</span>
              <span className="truncate">{data.header.officeSubTitleBn}</span>
            </div>
          </div>
        </div>

        {/* table */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-[rgba(100,116,139,0.14)] bg-white">
          <NegInventoryTable columns={data.table.columns} rows={data.table.rows} />
        </div>

        {/* divider */}
        <div className="mt-6 h-px bg-[rgba(100,116,139,0.12)]" />

        {/* action button */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={goNegotiation}   // ✅ CLICK HERE
            className="inline-flex h-14 items-center gap-3 rounded-2xl bg-[var(--color-primary-color)] px-10 text-base font-semibold text-white shadow-sm hover:opacity-95"
          >
            নেগোসিয়েশন করুন
            <ArrowRight className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
