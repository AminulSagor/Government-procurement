"use client";

import { Search, ChevronDown } from "lucide-react";
import { OrderFilterOptions, OrderStage } from "../_types/order-management.types";

const selectCls =
  "h-11 w-full appearance-none rounded-xl border border-border bg-white px-4 pr-10 text-sm text-[var(--color-black)] outline-none " +
  "focus:ring-2 focus:ring-[color-mix(in_oklab,var(--color-primary-color)_25%,transparent)]";

export default function OrderFilters({
  query,
  onQueryChange,
  economicCode,
  onEconomicCodeChange,
  office,
  onOfficeChange,
  stage,
  onStageChange,
  filterOptions,
}: {
  query: string;
  onQueryChange: (v: string) => void;

  economicCode: string;
  onEconomicCodeChange: (v: string) => void;

  office: string;
  onOfficeChange: (v: string) => void;

  stage: OrderStage | "all";
  onStageChange: (v: OrderStage | "all") => void;

  filterOptions: OrderFilterOptions;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        {/* Search (wide) */}
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-light-gray)]" />
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="অর্ডার আইডি, দপ্তর বা ভেন্ডর দিয়ে খুঁজুন..."
            className="h-11 w-full rounded-xl border border-border bg-white pl-11 pr-4 text-sm text-[var(--color-black)] outline-none
            focus:ring-2 focus:ring-[color-mix(in_oklab,var(--color-primary-color)_25%,transparent)]"
          />
        </div>

        {/* Selects (same width like screenshot) */}
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 lg:w-auto">
          <div className="relative lg:w-[210px]">
            <select
              value={economicCode}
              onChange={(e) => onEconomicCodeChange(e.target.value)}
              className={selectCls}
            >
              {filterOptions.economicCodes.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-light-gray)]" />
          </div>

          <div className="relative lg:w-[180px]">
            <select value={office} onChange={(e) => onOfficeChange(e.target.value)} className={selectCls}>
              {filterOptions.offices.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-light-gray)]" />
          </div>

          <div className="relative lg:w-[160px]">
            <select
              value={stage}
              onChange={(e) => onStageChange(e.target.value as OrderStage | "all")}
              className={selectCls}
            >
              {filterOptions.stages.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-light-gray)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
