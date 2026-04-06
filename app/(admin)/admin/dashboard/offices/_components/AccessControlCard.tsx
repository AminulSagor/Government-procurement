"use client";

import React, { useState } from "react";
import { Shield, Save } from "lucide-react";
import Card from "@/components/cards/card";
import SecondaryButton from "@/components/buttons/secondary-button";
import PrimaryButton from "@/components/buttons/primary-button";

function InputField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: "text" | "password" | "email";
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-black">{label}</label>
      <input
        type={type}
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

function StatusToggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`
          relative h-8 w-14 rounded-full transition-colors
          ${checked ? "bg-green" : "bg-primary-color/20"}
        `}
        aria-pressed={checked}
      >
        <span
          className={`
            absolute top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-white
            transition-all
            ${checked ? "left-7" : "left-1"}
          `}
        />
      </button>

      <span className="text-sm font-semibold text-black">
        {checked ? (
          <span className="text-green">সক্রিয়</span>
        ) : (
          <span className="text-medium-gray">নিষ্ক্রিয়</span>
        )}
      </span>
    </div>
  );
}

export default function AccessControlCard() {
  const [active, setActive] = useState(true);

  return (
    <div className="space-y-8">
      <Card className="p-0 overflow-hidden">
        {/* header */}
        <div className="flex items-center gap-3 px-6 py-4">
          <div className="h-10 w-10 rounded-full bg-off-white border border-primary-color/20 flex items-center justify-center">
            <Shield className="h-5 w-5 text-primary-color" />
          </div>

          <h2 className="text-lg font-semibold text-black">এক্সেস কন্ট্রোল</h2>
        </div>

        <div className="h-px w-full bg-primary-color/10" />

        <div className="px-6 py-6 space-y-6">
          {/* status row */}
          <div className="rounded-lg border border-primary-color/10 bg-off-white/60 px-6 py-5 flex items-center justify-between gap-6">
            <div>
              <p className="text-base font-semibold text-black">
                অফিস স্ট্যাটাস
              </p>
              <p className="mt-1 text-sm text-light-gray">
                এই অফিসটি সিস্টেমে সক্রিয় থাকবে কি না
              </p>
            </div>

            <StatusToggle checked={active} onChange={setActive} />
          </div>

          {/* inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <InputField
              label="লগইন ইমেইল"
              placeholder="example@office.gov.bd"
              type="email"
            />
            <InputField
              label="পাসওয়ার্ড"
              placeholder="০২-XXXXXXX"
              type="password"
            />
          </div>
        </div>
      </Card>

      {/* footer actions */}
      <div className="flex items-center justify-center gap-6">
        <SecondaryButton className="px-10 py-3 text-base">
          বাতিল করুন
        </SecondaryButton>

        <PrimaryButton className="px-10 py-3 text-base flex items-center gap-2">
          <Save className="w-5 h-5" />
          অফিস সংরক্ষণ করুন
        </PrimaryButton>
      </div>
    </div>
  );
}
