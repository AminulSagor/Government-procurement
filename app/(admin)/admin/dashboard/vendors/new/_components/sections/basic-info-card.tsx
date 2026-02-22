"use client";

import { Info } from "lucide-react";
import FormCard from "../ui/form-card";
import type { VendorCreateValues } from "../../_types/vendor";

type Props = {
  values: VendorCreateValues;
  onChange: (next: Partial<VendorCreateValues>) => void;
};

export default function BasicInfoCard({ values, onChange }: Props) {
  return (
    <FormCard
      title="মৌলিক তথ্য"
      icon={<Info className="h-[18px] w-[18px]" />}
    >
      <div className="space-y-4">
        <Field label="প্রতিষ্ঠানের পূর্ণ নাম">
          <input
            value={values.orgName}
            onChange={(e) => onChange({ orgName: e.target.value })}
            placeholder="যেমন: রুহী ট্রেডার্স"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:ring-4 focus:ring-sky-100"
          />
        </Field>

        <Field label="মালিকের নাম ও পদবি">
          <input
            value={values.ownerName}
            onChange={(e) => onChange({ ownerName: e.target.value })}
            placeholder="নাম ও পদবি লিখুন"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:ring-4 focus:ring-sky-100"
          />
        </Field>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="মোবাইল নম্বর">
            <input
              value={values.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              placeholder="০১XXXXXXXXX"
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:ring-4 focus:ring-sky-100"
            />
          </Field>

          <Field label="ইমেইল">
            <input
              value={values.email}
              onChange={(e) => onChange({ email: e.target.value })}
              placeholder="example@mail.com"
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:ring-4 focus:ring-sky-100"
            />
          </Field>
        </div>
      </div>
    </FormCard>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <div className="text-sm font-bold text-slate-700">{label}</div>
      {children}
    </div>
  );
}