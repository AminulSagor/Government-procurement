"use client";

import { useMemo } from "react";
import { FiltersState, SelectOption } from "../_types/requisition-inbox.types";

type Props = {
  value: FiltersState;
  onChange: (next: FiltersState) => void;

  economicOptions: SelectOption[];
  ministryOrDivisionOptions: SelectOption[];
  statusOptions: SelectOption[];

  onOpenAdvanced: () => void;
};

export default function RequisitionFiltersBar(props: Props) {
  const { value, onChange } = props;

  const pillBtnClass = useMemo(
    () =>
      "inline-flex h-11 items-center gap-2 rounded-lg border border-[rgba(100,116,139,0.25)] bg-white px-4 text-sm font-semibold text-[var(--color-black)] hover:bg-[var(--color-off-white)]",
    []
  );

  return (
    <div className="mt-4 rounded-2xl border border-[rgba(100,116,139,0.20)] bg-white p-4 ">
      <div className="grid grid-cols-12 gap-3">
        {/* search */}
        <div className="col-span-12 lg:col-span-6">
          <div className="flex h-11 items-center gap-2 rounded-lg border border-[rgba(100,116,139,0.25)] bg-white px-3">
            <span className="text-[var(--color-medium-gray)]">
              {/* search icon */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M16.5 16.5 21 21"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <input
              value={value.q}
              onChange={(e) => onChange({ ...value, q: e.target.value })}
              placeholder="চাহিদাপত্র আইডি বা অফিস নাম দিয়ে খুঁজুন..."
              className="h-full w-full bg-transparent text-sm text-[var(--color-black)] outline-none placeholder:text-[rgba(145,145,145,0.95)]"
            />
          </div>
        </div>

        {/* selects */}
        <div className="col-span-12 md:col-span-4 lg:col-span-2">
          <select
            value={value.economicCode}
            onChange={(e) => onChange({ ...value, economicCode: e.target.value })}
            className="h-11 w-full rounded-lg border border-[rgba(100,116,139,0.25)] bg-white px-3 text-sm font-medium text-[var(--color-black)] outline-none focus:border-[rgba(31,110,128,0.45)]"
          >
            {props.economicOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-12 md:col-span-4 lg:col-span-2">
          <select
            value={value.ministryOrDivision}
            onChange={(e) =>
              onChange({ ...value, ministryOrDivision: e.target.value })
            }
            className="h-11 w-full rounded-lg border border-[rgba(100,116,139,0.25)] bg-white px-3 text-sm font-medium text-[var(--color-black)] outline-none focus:border-[rgba(31,110,128,0.45)]"
          >
            {props.ministryOrDivisionOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-12 md:col-span-4 lg:col-span-2">
          <select
            value={value.status}
            onChange={(e) => onChange({ ...value, status: e.target.value as any })}
            className="h-11 w-full rounded-lg border border-[rgba(100,116,139,0.25)] bg-white px-3 text-sm font-medium text-[var(--color-black)] outline-none focus:border-[rgba(31,110,128,0.45)]"
          >
            {props.statusOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {/* advanced button (top-right in image, but keep aligned right in bar for responsive) */}
        <div className="col-span-12 lg:col-span-12 flex justify-end">
          <button type="button" onClick={props.onOpenAdvanced} className={pillBtnClass}>
            {/* sliders icon */}
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path
                d="M4 6h10M4 18h10M14 6h6M14 18h6M8 6v6M8 18v-6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            অ্যাডভান্সড ফিল্টার
          </button>
        </div>
      </div>
    </div>
  );
}
