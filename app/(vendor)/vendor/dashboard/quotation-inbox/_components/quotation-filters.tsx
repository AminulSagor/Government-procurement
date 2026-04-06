"use client";

import React from "react";
import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";
import { Filter, CalendarDays, Check } from "lucide-react";

type Opt = { label: string; value: string };

const kindOptions: Opt[] = [
  { label: "পণ্য", value: "product" },
  { label: "নির্মাণ কাজ", value: "construction" },
  { label: "সেবা", value: "service" },
];

const statusOptions: Opt[] = [
  { label: "খোলা", value: "open" },
  { label: "আসন্ন", value: "upcoming" },
  { label: "বন্ধ", value: "closed" },
];

function RadioRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="flex w-full items-center gap-3 text-left"
    >
      <span
        className={[
          "h-4 w-4 rounded-full border",
          checked ? "border-primary-color bg-primary-color" : "border-gray/20 bg-white",
          "flex items-center justify-center",
        ].join(" ")}
      >
        {checked ? <Check size={12} className="text-white" /> : null}
      </span>

      <span className="text-xs font-semibold text-gray/70">{label}</span>
    </button>
  );
}

function DateInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray/40">
        <CalendarDays size={16} />
      </span>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full rounded-xl border border-gray/15 bg-white pl-10 pr-3 text-xs font-semibold text-gray"
        aria-label={placeholder}
      />
    </div>
  );
}

export default function QuotationFilters() {
  const [kind, setKind] = React.useState("product");
  const [status, setStatus] = React.useState("open");
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");

  const resetAll = () => {
    setKind("product");
    setStatus("open");
    setFrom("");
    setTo("");
  };

  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-4 h-fit">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-primary-color">
            <Filter size={16} />
          </span>
          <h3 className="text-sm font-extrabold text-gray">ফিল্টার</h3>
        </div>

        <button
          type="button"
          onClick={resetAll}
          className="text-xs font-semibold text-primary-color hover:underline"
        >
          সব রিসেট করুন
        </button>
      </div>

      {/* section: kind */}
      <div className="mt-4 border-t border-gray/10 pt-4">
        <p className="text-xs font-extrabold text-gray">কাজের ধরন</p>
        <div className="mt-3 space-y-3">
          {kindOptions.map((o) => (
            <RadioRow
              key={o.value}
              label={o.label}
              checked={kind === o.value}
              onChange={() => setKind(o.value)}
            />
          ))}
        </div>
      </div>

      {/* section: status */}
      <div className="mt-4 border-t border-gray/10 pt-4">
        <p className="text-xs font-extrabold text-gray">অবস্থা</p>
        <div className="mt-3 space-y-3">
          {statusOptions.map((o) => (
            <RadioRow
              key={o.value}
              label={o.label}
              checked={status === o.value}
              onChange={() => setStatus(o.value)}
            />
          ))}
        </div>
      </div>

      {/* section: date */}
      <div className="mt-4 border-t border-gray/10 pt-4">
        <p className="text-xs font-extrabold text-gray">সময়সীমা</p>

        <div className="mt-3 space-y-2">
          <DateInput value={from} onChange={setFrom} placeholder="From" />
          <DateInput value={to} onChange={setTo} placeholder="To" />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-5">
        <PrimaryButton className="w-full py-2.5 text-xs font-extrabold">
          ফিল্টার প্রয়োগ করুন
        </PrimaryButton>
      </div>
    </Card>
  );
}
