"use client";

import type { AreaOptions, CreateAgentFormState } from "../_types/create-agent.types";
import { ChevronDown } from "lucide-react";

const controlCls =
  "h-12 w-full rounded-xl border border-[rgba(100,116,139,0.14)] bg-[rgba(255,255,255,0.96)] px-4 text-sm text-[rgba(16,24,25,0.80)] outline-none focus:border-[rgba(31,110,128,0.45)] focus:ring-4 focus:ring-[rgba(31,110,128,0.10)]";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <div className="text-sm font-bold text-[rgba(16,24,25,0.80)]">{label}</div>
      {children}
    </div>
  );
}

function Select({
  value,
  onChange,
  children,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <select
        className={[controlCls, "appearance-none pr-10"].join(" ")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {children}
      </select>

      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgba(100,116,139,0.70)]" />
    </div>
  );
}

export default function CreateAgentAreaForm({
  value,
  onChange,
  options,
}: {
  value: CreateAgentFormState;
  onChange: (v: CreateAgentFormState) => void;
  options: AreaOptions;
}) {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-7 md:grid-cols-4">
      <Field label="বরাদ্দকৃত বিভাগ">
        <Select
          value={value.division}
          onChange={(v) => onChange({ ...value, division: v })}
          placeholder="বিভাগ নির্বাচন করুন"
        >
          {options.divisions
            .filter((o) => o.value !== "")
            .map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
        </Select>
      </Field>

      <Field label="বরাদ্দকৃত জেলা">
        <Select
          value={value.district}
          onChange={(v) => onChange({ ...value, district: v })}
          placeholder="জেলা নির্বাচন করুন"
        >
          {options.districts
            .filter((o) => o.value !== "")
            .map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
        </Select>
      </Field>

      <Field label="বরাদ্দকৃত উপজেলা">
        <Select
          value={value.upazila}
          onChange={(v) => onChange({ ...value, upazila: v })}
          placeholder="উপজেলা নির্বাচন করুন"
        >
          {options.upazilas
            .filter((o) => o.value !== "")
            .map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
        </Select>
      </Field>

      <Field label="পদবি">
        <input
          className={controlCls}
          value={value.roleBn}
          onChange={(e) => onChange({ ...value, roleBn: e.target.value })}
          placeholder="পদবি লিখুন"
        />
      </Field>
    </div>
  );
}
