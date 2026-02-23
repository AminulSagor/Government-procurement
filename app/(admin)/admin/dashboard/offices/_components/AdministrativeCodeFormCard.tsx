"use client";

import React from "react";
import { Network } from "lucide-react";
import Card from "@/components/cards/card";

function CodeInput({
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

export default function AdministrativeCodeFormCard() {
  return (
    <Card className="p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-center gap-3 px-6 py-4">
        <div className="h-10 w-10 rounded-full bg-off-white border border-primary-color/20 flex items-center justify-center">
          <Network className="h-5 w-5 text-primary-color" />
        </div>

        <h2 className="text-lg font-semibold text-black">প্রশাসনিক কোড</h2>
      </div>

      <div className="h-px w-full bg-primary-color/10" />

      {/* form grid */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          <CodeInput
            label="মন্ত্রণালয়/বিভাগীয় কোড"
            placeholder="৩ সংখ্যার মন্ত্রণালয় / বিভাগীয় কোড লিখুন"
            required
          />

          <CodeInput
            label="প্রতিষ্ঠানিক কোড"
            placeholder="৫ সংখ্যার প্রতিষ্ঠানিক লিখুন"
            required
          />

          <CodeInput
            label="পরিচালন কোড"
            placeholder="৭ সংখ্যার পরিচালন কোড লিখুন"
            required
          />

          <CodeInput
            label="মাঠ অফিস কোড"
            placeholder="১৩ সংখ্যার মাঠ অফিস কোড লিখুন"
            required
          />
        </div>
      </div>
    </Card>
  );
}
