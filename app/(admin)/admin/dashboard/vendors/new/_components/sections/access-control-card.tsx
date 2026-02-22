"use client";

import { Shield } from "lucide-react";
import FormCard from "../ui/form-card";
import type { VendorCreateValues } from "../../_types/vendor";

type Props = {
  values: VendorCreateValues;
  onChange: (next: Partial<VendorCreateValues>) => void;
};

export default function AccessControlCard({ values, onChange }: Props) {
  return (
    <FormCard title="একসেস কন্ট্রোল" icon={<Shield className="h-[18px] w-[18px]" />}>
      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-extrabold text-slate-900">ভেন্ডর স্ট্যাটাস</div>
              <div className="mt-1 text-xs text-slate-600">
                এই ভেন্ডরটি সিস্টেমে সক্রিয় থাকবে কি না
              </div>
            </div>

            <button
              type="button"
              onClick={() => onChange({ isActive: !values.isActive })}
              className={[
                "relative h-8 w-[54px] rounded-full transition",
                values.isActive ? "bg-green" : "bg-slate-300",
              ].join(" ")}
            >
              <span
                className={[
                  "absolute top-1 h-6 w-6 rounded-full bg-white shadow transition",
                  values.isActive ? "left-[26px]" : "left-1",
                ].join(" ")}
              />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-bold text-slate-700">লগইন ইমেইল</div>
          <input
            value={values.loginEmail}
            onChange={(e) => onChange({ loginEmail: e.target.value })}
            placeholder="example@office.gov.bd"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:ring-4 focus:ring-sky-100"
          />
        </div>

        <div className="space-y-2">
          <div className="text-sm font-bold text-slate-700">পাসওয়ার্ড</div>
          <input
            value={values.password}
            onChange={(e) => onChange({ password: e.target.value })}
            placeholder="০২-XXXXXXX"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:ring-4 focus:ring-sky-100"
          />
        </div>
      </div>
    </FormCard>
  );
}