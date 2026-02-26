"use client";

import React, { useState } from "react";
import Card from "@/components/cards/card";
import {
  Pencil,
  FilePenLine,
  Search,
  ChevronDown,
  Copy,
} from "lucide-react";

import type { OfficeConfigurationDetails } from "../_types/office-configuration-details.type";

function ReadonlyInput({
  label,
  value,
  rightIcon,
}: {
  label: string;
  value: string;
  rightIcon?: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-black">{label}</label>

      <div className="relative">
        <input
          readOnly
          value={value}
          className={[
            "w-full h-11 rounded-md border border-primary-color/20 bg-white",
            "px-4 pr-12 text-sm text-black",
            "outline-none",
          ].join(" ")}
        />

        {rightIcon ? (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-medium-gray">
            {rightIcon}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function StatusToggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-3 py-5">
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={[
          "relative h-8 w-14 rounded-full transition-colors",
          checked ? "bg-green" : "bg-primary-color/20",
        ].join(" ")}
        aria-pressed={checked}
      >
        <span
          className={[
            "absolute top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-white transition-all",
            checked ? "left-7" : "left-1",
          ].join(" ")}
        />
      </button>

      <span className="text-sm font-semibold text-black">সক্রিয় স্ট্যাটাস</span>
    </div>
  );
}

export default function OfficeConfigurationDetailsCard({
  data,
  onEdit,
}: {
  data: OfficeConfigurationDetails;
  onEdit?: () => void;
}) {
  const [active, setActive] = useState(data.isActive);

  return (
    <Card className="p-0 overflow-hidden">
      {/* top bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-off-white/40">
        <div className="flex items-center gap-3">
          <FilePenLine className="w-5 h-5 text-light-gray" />
          <p className="text-base font-semibold text-black">
            অফিস কনফিগারেশন বিবরণ
          </p>
        </div>

        <button
          type="button"
          onClick={onEdit}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-color"
        >
          <Pencil className="w-4 h-4" />
          তথ্য সংশোধন করুন
        </button>
      </div>

      <div className="h-px w-full bg-primary-color/10" />

      {/* content */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-12 gap-x-8 gap-y-6">
          {/* row 1 */}
          <div className="col-span-12 md:col-span-6">
            <ReadonlyInput label="মন্ত্রণালয়" value={data.ministry} />
          </div>
          <div className="col-span-12 md:col-span-6">
            <ReadonlyInput label="অধিদপ্তর" value={data.directorate} />
          </div>

          {/* row 2 (3 cols) */}
          <div className="col-span-12 md:col-span-4">
            <ReadonlyInput label="বিভাগ" value={data.division} />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ReadonlyInput label="জেলা" value={data.district} />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ReadonlyInput
              label="উপজেলা"
              value={data.upazila}
              rightIcon={
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  <ChevronDown className="w-4 h-4" />
                </div>
              }
            />
          </div>

          {/* row 3 (3 cols) */}
          <div className="col-span-12 md:col-span-4">
            <ReadonlyInput label="অফিসের ধরন" value={data.officeType} />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ReadonlyInput
              label="মূল অফিস (Parent Office)"
              value={data.parentOffice}
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ReadonlyInput
              label="প্রশাসনিক অঞ্চল"
              value={data.administrativeArea}
            />
          </div>

          {/* row 4 */}
          <div className="col-span-12 md:col-span-4">
            <ReadonlyInput
              label="১০-ডিজিটের অফিস আইডি"
              value={data.officeId10Digit}
              rightIcon={<Copy className="w-4 h-4" />}
            />
          </div>

          <div className="col-span-12 md:col-span-8">
            <ReadonlyInput
              label="অফিসের পূর্ণ নাম (বাংলা)"
              value={data.officeNameBn}
            />
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-primary-color/10" />

      {/* bottom toggle */}
      <StatusToggle checked={active} onChange={setActive} />
    </Card>
  );
}