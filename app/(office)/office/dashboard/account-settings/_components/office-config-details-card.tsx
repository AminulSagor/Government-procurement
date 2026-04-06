"use client";

import { useState } from "react";
import Card from "@/components/cards/card";
import { PencilLine, Search, ChevronDown } from "lucide-react";
import { OfficeConfigDetails } from "@/app/(office)/office/types/office-config-details.type";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold text-light-gray">{label}</p>
      {children}
    </div>
  );
}

function InputLike({
  value,
  placeholder,
  right,
}: {
  value?: string;
  placeholder?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="relative">
      <input
        value={value ?? ""}
        placeholder={placeholder}
        readOnly
        className="
          w-full h-11 rounded-lg border border-light-gray/30 bg-white
          px-4 pr-12 text-base text-black
          outline-none
        "
      />
      {right ? (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">{right}</div>
      ) : null}
    </div>
  );
}

export default function OfficeConfigDetailsCard({
  data,
}: {
  data: OfficeConfigDetails;
}) {
  const [active, setActive] = useState<boolean>(data.isActive);

  return (
    <Card className="p-0 overflow-hidden">
      {/* HEADER */}
      <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-light-gray/20 bg-off-white">
        <div className="flex items-center gap-2">
          <PencilLine className="w-5 h-5 text-light-gray" />
          <h3 className="text-base font-semibold text-black">
            অফিস কনফিগারেশন বিবরণ
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-sm text-medium-gray">{data.primaryKeyLabel}</p>
          <span className="px-3 py-1 rounded-md border border-primary-color/30 bg-white text-sm font-semibold text-primary-color">
            {data.primaryKeyValue}
          </span>
        </div>
      </div>

      {/* BODY */}
      <div className="px-5 py-5">
        {/* responsive grid:
            - mobile: 1 col
            - md: 2 col
            - lg: 3 col
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Field label={data.ministryLabel}>
            <InputLike value={data.ministryValue} />
          </Field>

          <Field label={data.departmentLabel}>
            <InputLike value={data.departmentValue} />
          </Field>

          <Field label={data.divisionLabel}>
            <InputLike value={data.divisionValue} />
          </Field>

          <Field label={data.districtLabel}>
            <InputLike value={data.districtValue} />
          </Field>

          <Field label={data.upazilaLabel}>
            <InputLike
              placeholder={data.upazilaPlaceholder}
              right={
                <div className="flex items-center gap-2 text-light-gray">
                  <Search className="w-4 h-4" />
                  <ChevronDown className="w-4 h-4" />
                </div>
              }
            />
          </Field>

          <Field label={data.officeTypeLabel}>
            <InputLike value={data.officeTypeValue} />
          </Field>

          <Field label={data.parentOfficeLabel}>
            <InputLike value={data.parentOfficeValue} />
          </Field>

          <Field label={data.adminAreaLabel}>
            <InputLike value={data.adminAreaValue} />
          </Field>

          <Field label={data.tenDigitOfficeIdLabel}>
            <InputLike
              value={data.tenDigitOfficeIdValue}
              right={<span className="text-light-gray text-sm">◌</span>}
            />
          </Field>

          {/* full width on md+ like screenshot */}
          <div className="md:col-span-2 lg:col-span-2">
            <Field label={data.officeFullNameBnLabel}>
              <InputLike placeholder={data.officeFullNameBnPlaceholder} />
            </Field>
          </div>
        </div>
      </div>

      {/* FOOTER (toggle centered) */}
      <div className="border-t border-light-gray/20 bg-white px-5 py-4">
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setActive((v) => !v)}
            className={`
              relative inline-flex h-7 w-14 items-center rounded-full
              transition-colors
              ${active ? "bg-primary-color" : "bg-light-gray/30"}
            `}
          >
            <span
              className={`
                inline-block h-6 w-6 transform rounded-full bg-white shadow
                transition-transform
                ${active ? "translate-x-7" : "translate-x-1"}
              `}
            />
          </button>

          <p className="text-sm font-semibold text-black">{data.activeLabel}</p>
        </div>
      </div>
    </Card>
  );
}
