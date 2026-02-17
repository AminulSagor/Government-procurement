"use client";

import type { CreateAgentFormState } from "../_types/create-agent.types";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="text-sm font-bold text-[rgba(16,24,25,0.80)]">{label}</div>
      {children}
    </div>
  );
}

const inputCls =
  "h-12 w-full rounded-xl border border-[rgba(100,116,139,0.14)] bg-[rgba(255,255,255,0.96)] px-4 text-sm text-[rgba(16,24,25,0.80)] outline-none placeholder:text-[rgba(145,145,145,0.85)] focus:border-[rgba(31,110,128,0.45)] focus:ring-4 focus:ring-[rgba(31,110,128,0.10)]";

export default function CreateAgentPersonalForm({
  value,
  onChange,
}: {
  value: CreateAgentFormState;
  onChange: (v: CreateAgentFormState) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
      <Field label="নাম">
        <input
          className={inputCls}
          value={value.fullNameBn}
          onChange={(e) => onChange({ ...value, fullNameBn: e.target.value })}
          placeholder="পুরো নাম লিখুন"
        />
      </Field>

      <Field label="প্রাথমিক মোবাইল নম্বর">
        <input
          className={inputCls}
          value={value.phonePrimary}
          onChange={(e) => onChange({ ...value, phonePrimary: e.target.value })}
          placeholder="+৮৮০ ০১৭১১-XXXXXX"
        />
      </Field>

      <Field label="ইমেইল">
        <input
          className={inputCls}
          value={value.email}
          onChange={(e) => onChange({ ...value, email: e.target.value })}
          placeholder="example@domain.com"
        />
      </Field>

      <Field label="এনআইডি নম্বর (NID)">
        <input
          className={inputCls}
          value={value.nidNumber}
          onChange={(e) => onChange({ ...value, nidNumber: e.target.value })}
          placeholder="জাতীয় পরিচয়পত্র নম্বর"
        />
      </Field>

      <Field label="বর্তমান ঠিকানা">
        <input
          className={inputCls}
          value={value.presentAddressBn}
          onChange={(e) =>
            onChange({ ...value, presentAddressBn: e.target.value })
          }
          placeholder="নির্ধারিত বর্তমান ঠিকানা"
        />
      </Field>

      <Field label="স্থায়ী ঠিকানা">
        <input
          className={inputCls}
          value={value.permanentAddressBn}
          onChange={(e) =>
            onChange({ ...value, permanentAddressBn: e.target.value })
          }
          placeholder="নির্ধারিত স্থায়ী ঠিকানা"
        />
      </Field>

      <Field label="বিকল্প মোবাইল নম্বর">
        <input
          className={inputCls}
          value={value.phoneSecondary || ""}
          onChange={(e) =>
            onChange({ ...value, phoneSecondary: e.target.value })
          }
          placeholder="+৮৮০ ০১৭১১-XXXXXX"
        />
      </Field>

      <div className="hidden md:block" />
    </div>
  );
}
