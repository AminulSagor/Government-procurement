"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AgentFilters, Option } from "../_types/agents.types";

export default function AgentsFiltersBar({
  filters,
  districtOptions,
  statusOptions,
  onChange,
  onOpenAdvanced,
}: {
  filters: AgentFilters;
  districtOptions: Option[];
  statusOptions: Option[];
  onChange: (next: AgentFilters) => void;
  onOpenAdvanced: () => void;
}) {
  return (
    <div className="rounded-2xl border border-[rgba(100,116,139,0.14)] bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        {/* search */}
        <div className="flex flex-1 items-center gap-2 rounded-xl bg-[var(--color-off-white)] px-3">
          <Search className="h-4 w-4 text-[var(--color-medium-gray)]" />
          <input
            value={filters.q}
            onChange={(e) => onChange({ ...filters, q: e.target.value })}
            placeholder="নাম বা কোড লিখুন..."
            className="h-11 w-full bg-transparent text-sm text-[var(--color-black)] placeholder:text-[var(--color-medium-gray)] outline-none"
          />
        </div>

        {/* district */}
        <div className="min-w-[160px] rounded-xl bg-[var(--color-off-white)] px-3">
          <select
            value={filters.district}
            onChange={(e) => onChange({ ...filters, district: e.target.value })}
            className="h-11 w-full bg-transparent text-sm text-[var(--color-black)] outline-none"
          >
            {districtOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {/* status */}
        <div className="min-w-[160px] rounded-xl bg-[var(--color-off-white)] px-3">
          <select
            value={filters.status}
            onChange={(e) =>
              onChange({ ...filters, status: e.target.value as any })
            }
            className="h-11 w-full bg-transparent text-sm text-[var(--color-black)] outline-none"
          >
            {statusOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {/* filter icon button */}
        <Button
          type="button"
          variant="outline"
          onClick={onOpenAdvanced}
          className="h-11 w-11 rounded-xl border border-[rgba(100,116,139,0.14)] bg-white p-0"
        >
          <SlidersHorizontal className="h-4 w-4 text-[var(--color-medium-gray)]" />
        </Button>
      </div>
    </div>
  );
}
