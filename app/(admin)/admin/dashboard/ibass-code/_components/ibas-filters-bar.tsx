"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import type {
  EconomicFiltersState,
  IBasTab,
  ParentFiltersState,
} from "../_types/ibas-codes.types";
import Select from "./select";
import IbasFilterPopover from "./ibas-filter-popover";

export default function IbasFiltersBar({
  tab,
  parentState,
  economicState,
  onChangeParent,
  onChangeEconomic,
}: {
  tab: IBasTab;
  parentState: ParentFiltersState;
  economicState: EconomicFiltersState;
  onChangeParent: (v: ParentFiltersState) => void;
  onChangeEconomic: (v: EconomicFiltersState) => void;
}) {
  const isParent = tab === "parent";
  const [open, setOpen] = useState(false);

  const statusOptions = useMemo(
    () => [
      { value: "any", label: "Any Status" },
      { value: "active", label: "সক্রিয়" },
      { value: "inactive", label: "নিষ্ক্রিয়" },
    ],
    []
  );

  const typeOptions = useMemo(
    () => [
      { value: "all", label: "All Types" },
      { value: "procurement_product", label: "ক্রয় আইটেম (পণ্য)" },
      { value: "procurement_service", label: "ক্রয় আইটেম (সেবা)" },
      { value: "salary_allowance", label: "বেতন/ভাতা" },
    ],
    []
  );

  return (
    <div className="rounded-xl border border-border bg-white p-4">
      <div className="grid grid-cols-12 items-end gap-4">
        {/* SEARCH */}
        <div className={`col-span-12 ${isParent ? "lg:col-span-10" : "lg:col-span-8"}`}>
          <p className="mb-2 text-[11px] font-bold tracking-wide text-[var(--color-medium-gray)]">
            SEARCH CODE OR NAME
          </p>

          <div className="flex h-11 items-center gap-2 rounded-lg border border-[var(--color-light-gray)]/40 bg-white px-3">
            <Search className="h-4 w-4 text-[var(--color-medium-gray)]" />
            <input
              value={isParent ? parentState.q : economicState.q}
              onChange={(e) => {
                const q = e.target.value;
                if (isParent) onChangeParent({ ...parentState, q });
                else onChangeEconomic({ ...economicState, q });
              }}
              placeholder={
                isParent
                  ? "Search by Parent Code, Name..."
                  : "Search by Code, Name, or Type..."
              }
              className="h-full w-full bg-transparent text-sm outline-none placeholder:text-[var(--color-medium-gray)]"
            />
          </div>
        </div>

        {/* TYPE (only economic tab) */}
        {!isParent && (
          <div className={`col-span-12 ${isParent ? "lg:col-span-2" : "lg:col-span-2"}`}>
            <p className="mb-2 text-[11px] font-bold tracking-wide text-[var(--color-medium-gray)]">
              FILTER BY TYPE
            </p>
            <Select
              value={economicState.type}
              onChange={(v) =>
                onChangeEconomic({ ...economicState, type: v as any })
              }
              options={typeOptions}
            />
          </div>
        )}

        {/* STATUS */}
        <div className={`col-span-12 ${isParent ? "lg:col-span-2" : "lg:col-span-2"}`}>
          <p className="mb-2 text-[11px] font-bold tracking-wide text-[var(--color-medium-gray)]">
            STATUS
          </p>
          <Select
            value={isParent ? parentState.status : economicState.status}
            onChange={(v) => {
              if (isParent) onChangeParent({ ...parentState, status: v as any });
              else onChangeEconomic({ ...economicState, status: v as any });
            }}
            options={statusOptions}
          />
        </div>


      </div>
    </div>
  );
}
