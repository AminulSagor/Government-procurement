// app/(admin)/analytics/live-activity-feed/_components/LAFHeader.tsx
"use client";

import { FileText, Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import type { LAFActivityType } from "../_types/live-activity-feed.types";
import LAFSearchInput from "./LAFSearchInput";
import LAFTypeDropdown from "./LAFTypeDropdown";

export default function LAFHeader({
  header,
  q,
  onQChange,
  type,
  onTypeChange,
  typeOptions,
}: {
  header: {
    titleBn: string;
    titleEn: string;
    subtitleEn: string;
    searchPlaceholderBn: string;
    activityTypeLabel: string;
  };
  q: string;
  onQChange: (v: string) => void;
  type: LAFActivityType;
  onTypeChange: (v: LAFActivityType) => void;
  typeOptions: { value: LAFActivityType; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
      {/* Left title */}
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-off-white)]">
          <FileText className="h-5 w-5 text-[var(--color-primary-color)]" strokeWidth={2.2} />
        </span>

        <div>
          <h2 className="text-lg font-extrabold text-[var(--color-black)]">
            {header.titleBn}{" "}
            <span className="font-bold">({header.titleEn})</span>
          </h2>
          <p className="mt-1 text-xs font-medium text-[var(--color-medium-gray)]">
            {header.subtitleEn}
          </p>
        </div>
      </div>

      {/* Right controls */}
      <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
        <LAFSearchInput
          value={q}
          onChange={onQChange}
          placeholder={header.searchPlaceholderBn}
          Icon={Search}
        />

        <LAFTypeDropdown
          label={header.activityTypeLabel}
          value={type}
          onChange={onTypeChange}
          options={typeOptions}
          Icon={SlidersHorizontal}
          RightIcon={ChevronDown}
        />
      </div>
    </div>
  );
}
