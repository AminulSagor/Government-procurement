"use client";

import React from "react";
import { Info } from "lucide-react";
import Card from "@/components/cards/card";

function TextField({
  label,
  placeholder,
  required,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-black">
        {label} {required ? <span className="text-red">*</span> : null}
      </label>

      <input
        placeholder={placeholder}
        className="
          w-full h-12 rounded-md border border-primary-color/20 bg-white
          px-4 text-sm text-black placeholder:text-medium-gray
          outline-none
          focus:border-primary-color/50 focus:ring-1 focus:ring-primary-color/20
        "
      />
    </div>
  );
}

function SelectField({
  label,
  placeholder,
  required,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-black">
        {label} {required ? <span className="text-red">*</span> : null}
      </label>

      <div className="relative">
        <input
          readOnly
          placeholder={placeholder}
          className="
            w-full h-12 rounded-md border border-primary-color/20 bg-white
            px-4 pr-14 text-sm text-black placeholder:text-medium-gray
            outline-none
            focus:border-primary-color/50 focus:ring-1 focus:ring-primary-color/20
          "
        />

        <div
          className="
            absolute right-3 top-1/2 -translate-y-1/2
            h-8 w-8 rounded-md border border-primary-color/20 bg-off-white
            flex items-center justify-center
          "
          aria-hidden="true"
        >
          <div className="h-3 w-3 rounded-sm bg-primary-color/25" />
        </div>
      </div>
    </div>
  );
}

export default function OfficeDetailsFormCard() {
  return (
    <Card className="p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-center gap-3 px-6 py-4">
        <div className="h-10 w-10 rounded-full bg-off-white border border-primary-color/20 flex items-center justify-center">
          <Info className="h-5 w-5 text-primary-color" />
        </div>

        <h2 className="text-lg font-semibold text-black">অফিসের বিবরণ</h2>
      </div>

      <div className="h-px w-full bg-primary-color/10" />

      {/* form */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 gap-6">
          <TextField
            label="অফিসের নাম (বাংলা)"
            placeholder="যেমনঃ জেলা শিক্ষা অফিস, ঢাকা"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <TextField
              label="১৩-ডিজিটের আইডি"
              placeholder="XXXXXXXXXXXXX"
              required
            />

            <SelectField label="অফিসের ধরন" placeholder="ধরণ নির্বাচন করুন" />

            <SelectField
              label="মূল অফিস (Parent Office)"
              placeholder="মূল অফিস নির্বাচন করুন"
            />

            <SelectField
              label="প্রশাসনিক অঞ্চল"
              placeholder="যেমনঃ ঢাকা মেট্রোপলিটন"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
