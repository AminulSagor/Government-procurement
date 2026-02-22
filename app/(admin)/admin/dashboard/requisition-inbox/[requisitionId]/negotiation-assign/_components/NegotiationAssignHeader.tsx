"use client";

import { ArrowLeft, Clock3, FileText } from "lucide-react";
import Link from "next/link";

export default function NegotiationAssignHeader({
  titleBn,
  fiscalYearBn,
  requisitionNoBn,
  itemsCountBn,
  totalVendorsBn,
}: {
  titleBn: string;
  fiscalYearBn: string;
  requisitionNoBn: string; // e.g. "#REQ-2024-0892"
  itemsCountBn: string; // e.g. "০৩ টি"
  totalVendorsBn: string; // e.g. "০৪ টি" (you can map it to status if needed)
}) {
  return (
    <div className="w-full rounded-2xl bg-white border border-black/10 px-6 py-5">
      <div className="flex items-start justify-between gap-6">
        {/* LEFT */}
        <div className="min-w-0">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-[12px] font-semibold text-[var(--color-primary-color)] hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>ফেরত যান</span>
          </Link>

          <div className="mt-3 flex items-start gap-3">
            <div className="h-10 w-10 rounded-xl bg-[var(--color-off-white)] border border-black/10 flex items-center justify-center shrink-0">
              <FileText className="h-5 w-5 text-[var(--color-primary-color)]" />
            </div>

            <div className="min-w-0">
              <div className="text-[16px] font-extrabold text-[var(--color-black)]">
                {titleBn}
              </div>

              {/* meta row like screenshot */}
              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-[var(--color-light-gray)]">
                <span>{fiscalYearBn}</span>
                <span className="text-[var(--color-primary-color)] font-semibold">
                  {requisitionNoBn}
                </span>
                <span className="text-[var(--color-medium-gray)]">|</span>
                <span>নেগোসিয়েশন চলছে:</span>
                <span className="inline-flex items-center rounded-full border border-[var(--color-primary-color)]/20 bg-[var(--color-off-white)] px-3 py-1 text-[12px] font-semibold text-[var(--color-primary-color)]">
                  নেগোসি/ ভেন্ডর অ্যাসাইন
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT pills */}
        <div className="flex items-center gap-3 shrink-0">
          <StatPill label="স্ট্যাটাস" value="ড্রাফট" />
          <StatPill label="আইটেম" value={itemsCountBn} />
          <TimePill label="নির্ধারিত সময়" value="০৩ দিন ০০ ঘন্টা" />
        </div>
      </div>
    </div>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white px-4 py-2.5">
      <div className="text-[11px] font-semibold text-[var(--color-light-gray)]">
        {label}
      </div>
      <div className="mt-0.5 text-[12px] font-extrabold text-[var(--color-primary-color)]">
        {value}
      </div>
    </div>
  );
}

function TimePill({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-[var(--color-off-white)] px-4 py-2.5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-[11px] font-semibold text-[var(--color-light-gray)]">
            {label}
          </div>
          <div className="mt-0.5 text-[12px] font-extrabold text-[var(--color-primary-color)]">
            {value}
          </div>
        </div>
        <div className="h-8 w-8 rounded-xl bg-white border border-black/10 flex items-center justify-center">
          <Clock3 className="h-4 w-4 text-[var(--color-primary-color)]" />
        </div>
      </div>
    </div>
  );
}
