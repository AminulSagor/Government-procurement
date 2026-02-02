"use client";

import React from "react";
import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";
import { Building2, Clock3, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export type QuotationTag = "নির্মাণ কাজ" | "সেবা" | "পণ্য";

export type Quotation = {
  id: string; // RFQ-2024-...
  tag: QuotationTag;
  title: string;
  desc: string;
  department: string; // "গণপূর্ত অধিদপ্তর" / "স্বাস্থ্য অধিদপ্তর"

  // Variant A: progress card (left)
  timeLeftText?: string; // "১ সপ্তাহ অবশিষ্ট"
  progressPct?: number; // 0-100

  // Variant B: submitted/update card (right)
  statusTitle?: string; // "জমাকৃত"
  statusText?: string; // "যাচাইযোগ্য: ১২ অক্টোবর, সকাল ১০:০০"

  amountLabel?: string; // "আনুমানিক মূল্য" / "উদ্ভূত মূল্য"
  amount: string;

  ctaText: string; // "দরপত্র জমা দিন" / "দরপত্র দেখুন"
  ctaVariant?: "solid" | "outline";
};

const tagPill = (tag: QuotationTag) => {
  if (tag === "নির্মাণ কাজ") return "bg-secondary text-primary-color";
  if (tag === "সেবা") return "bg-secondary text-green";
  return "bg-secondary text-primary-color";
};

export default function QuotationCard({ q }: { q: Quotation }) {
  const pct = Math.max(0, Math.min(100, q.progressPct ?? 0));
  const showProgress = typeof q.progressPct === "number" && !!q.timeLeftText;
  const showStatus = !!q.statusTitle && !!q.statusText;

  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-5">
      {/* top row: pill + id */}
      <div className="flex items-center justify-between gap-3">
        <span
          className={[
            "rounded-md px-3 py-1 text-[11px] font-extrabold",
            tagPill(q.tag),
          ].join(" ")}
        >
          {q.tag}
        </span>

        <span className="text-xs font-semibold text-gray/50">{q.id}</span>
      </div>

      {/* title */}
      <h4 className="mt-4 text-[22px] font-extrabold text-gray leading-[1.25]">
        {q.title}
      </h4>

      {/* description */}
      <p className="mt-3 text-sm text-light-gray leading-6">{q.desc}</p>

      {/* department row */}
      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-gray/55">
        <Building2 size={18} className="text-gray/35" />
        <span>{q.department}</span>
      </div>

      {/* Variant A: progress */}
      {showProgress && (
        <div className="mt-8">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray/60">
              <Clock3 size={18} className="text-primary-color" />
              <span>{q.timeLeftText}</span>
            </div>

            <span className="text-sm font-semibold text-gray/50">
              {pct}% সময় অতিবাহিত
            </span>
          </div>

          <div className="mt-3 h-2 w-full rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full rounded-full bg-primary-color"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      )}

      {/* Variant B: green submitted box */}
      {showStatus && (
        <div className="mt-6 rounded-xl border border-gray/10 bg-secondary p-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-green">
              <CheckCircle2 size={18} />
            </span>

            <div>
              <p className="text-sm font-extrabold text-gray">
                {q.statusTitle}
              </p>
              <p className="mt-1 text-xs font-semibold text-gray/55 leading-5">
                {q.statusText}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* divider like screenshot */}
      <div className="mt-6 h-px w-full bg-gray/10" />

      {/* amount center */}
      <div className="mt-5 text-center">
        <p className="text-sm font-semibold text-gray/55">
          {q.amountLabel || "আনুমানিক মূল্য"}
        </p>
        <p className="mt-2 text-2xl font-extrabold text-gray">{q.amount}</p>
      </div>

      {/* CTA */}
      {q.ctaVariant === "outline" ? (
        <button
          type="button"
          className="mt-5 w-full rounded-xl border border-gray/15 bg-secondary py-3 text-sm font-extrabold text-primary-color"
        >
          {q.ctaText}
        </button>
      ) : (
        <Link href="/vendor/dashboard/quotation-inbox/quotation-details">
          <PrimaryButton className="mt-5 w-full py-3 text-sm font-extrabold flex items-center justify-center gap-2">
            {q.ctaText} <ArrowRight size={18} />
          </PrimaryButton>
        </Link>
      )}
    </Card>
  );
}
