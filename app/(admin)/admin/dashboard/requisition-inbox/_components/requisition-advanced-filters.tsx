"use client";

import { AdvancedFiltersState } from "../_types/requisition-inbox.types";

type Props = {
  open: boolean;
  onClose: () => void;
  value: AdvancedFiltersState;
  onChange: (next: AdvancedFiltersState) => void;
  onApply: () => void;
  onReset: () => void;
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium text-[var(--color-black)]">{children}</p>
  );
}

function SelectBox({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-11 w-full rounded-lg border border-[rgba(100,116,139,0.25)] bg-white px-3 text-sm text-[var(--color-black)] outline-none focus:border-[rgba(31,110,128,0.45)]"
    >
      <option value="">{placeholder}</option>
      <option value="opt1">অপশন ১</option>
      <option value="opt2">অপশন ২</option>
    </select>
  );
}

function InputBox(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`h-11 w-full rounded-lg border border-[rgba(100,116,139,0.25)] bg-white px-3 text-sm text-[var(--color-black)] outline-none placeholder:text-[rgba(145,145,145,0.95)] focus:border-[rgba(31,110,128,0.45)] ${props.className ?? ""}`}
    />
  );
}

export default function RequisitionAdvancedFilters(props: Props) {
  const { open, onClose, value, onChange, onApply, onReset } = props;

  if (!open) return null;

  return (
    <>
      {/* overlay */}
      <button
        type="button"
        aria-label="close"
        onClick={onClose}
        className="fixed inset-0 z-40 cursor-default bg-black/20"
      />

      {/* panel (match image: right aligned wide box) */}
      <div className="fixed right-6 top-[92px] z-50 w-[720px] max-w-[calc(100vw-24px)] rounded-2xl border border-[rgba(100,116,139,0.25)] bg-[rgba(246,247,248,0.96)] p-6 shadow-xl backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-[var(--color-black)]">
            ফিল্টার অপশনসমূহ
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <FieldLabel>বিভাগ</FieldLabel>
            <SelectBox
              value={value.division}
              onChange={(v) => onChange({ ...value, division: v })}
              placeholder="সিলেক্ট করুন"
            />
          </div>

          <div className="space-y-2">
            <FieldLabel>জেলা</FieldLabel>
            <SelectBox
              value={value.district}
              onChange={(v) => onChange({ ...value, district: v })}
              placeholder="সিলেক্ট করুন"
            />
          </div>

          <div className="space-y-2">
            <FieldLabel>উপজেলা</FieldLabel>
            <SelectBox
              value={value.upazila}
              onChange={(v) => onChange({ ...value, upazila: v })}
              placeholder="সিলেক্ট করুন"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <FieldLabel>মন্ত্রণালয়</FieldLabel>
            <SelectBox
              value={value.ministry}
              onChange={(v) => onChange({ ...value, ministry: v })}
              placeholder="সকল মন্ত্রণালয়"
            />
          </div>

          <div className="space-y-2">
            <FieldLabel>অধিদপ্তর</FieldLabel>
            <SelectBox
              value={value.office}
              onChange={(v) => onChange({ ...value, office: v })}
              placeholder="সকল অধিদপ্তর"
            />
          </div>

          <div className="space-y-2">
            <FieldLabel>ব্যয়ের সীমা (৳)</FieldLabel>
            <div className="grid grid-cols-2 gap-3">
              <InputBox
                placeholder="সর্বনিম্ন"
                value={value.amountMin}
                onChange={(e) => onChange({ ...value, amountMin: e.target.value })}
              />
              <InputBox
                placeholder="সর্বোচ্চ"
                value={value.amountMax}
                onChange={(e) => onChange({ ...value, amountMax: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <FieldLabel>তারিখের পরিসীমা</FieldLabel>
            <div className="grid grid-cols-2 gap-3">
              <InputBox
                type="date"
                value={value.dateFrom}
                onChange={(e) => onChange({ ...value, dateFrom: e.target.value })}
              />
              <InputBox
                type="date"
                value={value.dateTo}
                onChange={(e) => onChange({ ...value, dateTo: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onReset}
            className="h-11 rounded-lg border border-[rgba(100,116,139,0.25)] bg-white px-5 text-sm font-medium text-[var(--color-black)] hover:bg-[var(--color-off-white)]"
          >
            রিসেট করুন
          </button>

          <button
            type="button"
            onClick={onApply}
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-[var(--color-primary-color)] px-5 text-sm font-semibold text-white hover:opacity-95"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/15">
              ✓
            </span>
            ফিল্টার প্রয়োগ করুন
          </button>
        </div>
      </div>
    </>
  );
}
