"use client";

import React from "react";
import { IdCard } from "lucide-react";
import Card from "@/components/cards/card";

function InputField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-black">{label}</label>

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

function TextareaField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-black">{label}</label>

      <textarea
        placeholder={placeholder}
        rows={4}
        className="
          w-full rounded-md border border-primary-color/20 bg-white
          px-4 py-3 text-sm text-black placeholder:text-medium-gray
          outline-none resize-none
          focus:border-primary-color/50 focus:ring-1 focus:ring-primary-color/20
        "
      />
    </div>
  );
}

export default function OfficeContactAddressCard() {
  return (
    <Card className="p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-center gap-3 px-6 py-4">
        <div className="h-10 w-10 rounded-full bg-off-white border border-primary-color/20 flex items-center justify-center">
          <IdCard className="h-5 w-5 text-primary-color" />
        </div>

        <h2 className="text-lg font-semibold text-black">যোগাযোগ ও ঠিকানা</h2>
      </div>

      <div className="h-px w-full bg-primary-color/10" />

      {/* form */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          <InputField
            label="দায়িত্বপ্রাপ্ত কর্মকর্তা (Officer in Charge)"
            placeholder="example@office.gov.bd"
          />

          <InputField label="পদবি (Designation)" placeholder="০২-XXXXXXX" />

          <div className="md:col-span-2">
            <TextareaField
              label="ঠিকানা"
              placeholder="অফিসের পূর্ণ ঠিকানা লিখুন"
            />
          </div>

          <InputField label="ইমেইল" placeholder="example@office.gov.bd" />

          <InputField label="ফোন" placeholder="০২-XXXXXXX" />
        </div>
      </div>
    </Card>
  );
}
