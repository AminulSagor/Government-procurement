"use client";

import React from "react";
import { Network } from "lucide-react";
import Card from "@/components/cards/card";

type Field = {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
};

function FormSelectField({
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

        {/* right small icon area */}
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

export default function AdministrativeHierarchyForm() {
  const fields: Field[] = [
    {
      id: "ministry",
      label: "মন্ত্রণালয়",
      placeholder: "মন্ত্রণালয় নির্বাচন করুন",
      required: true,
    },
    {
      id: "department",
      label: "অধিদপ্তর",
      placeholder: "অধিদপ্তর নির্বাচন করুন",
      required: true,
    },
    {
      id: "divisionOffice",
      label: "বিভাগীয় অফিস",
      placeholder: "বিভাগীয় অফিস নির্বাচন করুন",
      required: true,
    },
    {
      id: "districtOffice",
      label: "জেলা অফিস",
      placeholder: "জেলা অফিস নির্বাচন করুন",
      required: true,
    },
    {
      id: "upazilaOffice",
      label: "উপজেলা অফিস",
      placeholder: "উপজেলা অফিস নির্বাচন করুন",
      required: true,
    },
  ];

  return (
    <Card className="p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-center gap-3 px-6 py-4">
        <div className="h-10 w-10 rounded-full bg-off-white border border-primary-color/20 flex items-center justify-center">
          <Network className="h-5 w-5 text-primary-color" />
        </div>

        <h2 className="text-lg font-semibold text-black">
          প্রশাসনিক হায়ারারকি
        </h2>
      </div>

      <div className="h-px w-full bg-primary-color/10" />

      {/* form grid (design only) */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          <FormSelectField
            label={fields[0].label}
            placeholder={fields[0].placeholder}
            required
          />
          <FormSelectField
            label={fields[1].label}
            placeholder={fields[1].placeholder}
            required
          />
          <FormSelectField
            label={fields[2].label}
            placeholder={fields[2].placeholder}
            required
          />
          <FormSelectField
            label={fields[3].label}
            placeholder={fields[3].placeholder}
            required
          />

          {/* last one single like screenshot */}
          <div className="md:col-span-1">
            <FormSelectField
              label={fields[4].label}
              placeholder={fields[4].placeholder}
              required
            />
          </div>
          <div className="hidden md:block" />
        </div>
      </div>
    </Card>
  );
}
