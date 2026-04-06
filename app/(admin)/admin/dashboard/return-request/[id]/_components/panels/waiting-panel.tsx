"use client";

import React from "react";
import Card from "@/components/cards/card";
import type { ReturnRequestItem } from "../../../_types/return-request.types";
import {
  Hourglass,
  MessageSquareText,
  Image as ImageIcon,
  Phone,
  Bell,
  Check,
} from "lucide-react";

function KV({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-[11px] font-semibold tracking-wide text-light-gray">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-medium-gray">{value}</div>
    </div>
  );
}

function EvidenceTile({ name }: { name: string }) {
  return (
    <div className="w-[150px]">
      <div className="flex h-[92px] w-full flex-col items-center justify-center rounded-xl border border-primary-color/10 bg-off-white">
        <ImageIcon className="h-6 w-6 text-light-gray" />
      </div>
      <div className="mt-2 truncate text-center text-[11px] font-semibold text-medium-gray">
        {name}
      </div>
    </div>
  );
}

export default function WaitingPanel({ active }: { active: ReturnRequestItem }) {
  // demo countdown text (backend এ থাকলে replace করবা)
  const remainingText = "০৫ ঘন্টা ১২ মিনিট";

  const evidence = (active.evidence ?? []).slice(0, 2);

  return (
    <Card className="overflow-hidden rounded-2xl p-0">
      {/* ORANGE TOP BAR */}
      <div className="flex items-center justify-between gap-3 bg-orange px-6 py-4 text-white">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Hourglass className="h-4 w-4" />
          ভেন্ডরের উত্তরের জন্য অপেক্ষা করা হচ্ছে
        </div>

        <div className="rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-xs font-semibold">
          জানানো পাঠানোর পর সময় অবশিষ্ট: {remainingText}
        </div>
      </div>

      <div className="p-6">
        {/* CASE OVERVIEW CARD */}
        <div className="rounded-2xl border border-primary-color/10 bg-off-white p-5">
          <div className="text-[11px] font-semibold tracking-wide text-light-gray">
            CASE OVERVIEW
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <KV label="CASE ID" value={`#${active.caseId}`} />
            <KV label="PRODUCT NAME" value={active.productName} />
            <KV
              label="DAMAGE CLAIM SUMMARY"
              value={
                <span className="font-semibold text-medium-gray">
                  {active.returnReason}
                </span>
              }
            />
          </div>
        </div>

        {/* SECTION TITLE + SEEN PILL */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-medium-gray">
            <MessageSquareText className="h-4 w-4 text-primary-color" />
            ভেন্ডর কমিউনিকেশন
          </div>

          <button className="inline-flex items-center gap-2 rounded-full border border-blue/20 bg-blue/5 px-3 py-2 text-xs font-semibold text-blue">
            <Check className="h-4 w-4" />
            ভেন্ডর আবেদন নোটিফাই করেছেন (SEEN)
          </button>
        </div>

        {/* VENDOR MESSAGE BOX */}
        <div className="mt-3 rounded-2xl border border-primary-color/10 bg-white p-5">
          <div className="text-xs font-semibold text-light-gray">ভেন্ডর</div>

          <div className="mt-1 text-sm font-semibold text-medium-gray">
            {active.vendorName}
          </div>

          <div className="mt-2 inline-flex rounded-full bg-primary-color/10 px-3 py-1 text-[11px] font-semibold text-primary-color">
            এডমিন নোটের কপি
          </div>

          <p className="mt-3 text-sm leading-6 text-medium-gray">
            {active.vendorClaimText}
          </p>

          <div className="mt-2 text-[11px] text-light-gray">
            প্রেরিত: ২৪ অক্টোবর ২০২৪, সন্ধ্যা ৭:০১
          </div>

          {/* EVIDENCE */}
          <div className="mt-6 text-[11px] font-semibold tracking-wide text-light-gray">
            EVIDENCE FORWARDED TO VENDOR
          </div>

          <div className="mt-3 flex flex-wrap gap-4">
            {evidence.length ? (
              evidence.map((e) => <EvidenceTile key={e.name} name={e.name} />)
            ) : (
              <div className="text-sm text-light-gray">No evidence</div>
            )}
          </div>
        </div>

        {/* INFO NOTE */}
        <div className="mt-6 rounded-xl border border-primary-color/10 bg-off-white px-4 py-3 text-xs text-medium-gray">
          ভেন্ডরের পক্ষ থেকে সিদ্ধান্ত না আসা পর্যন্ত আপনার পরবর্তী পদক্ষেপ নেওয়া যাবে না।
        </div>

        {/* BOTTOM BUTTONS */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <button className="inline-flex min-w-[260px] flex-1 items-center justify-center gap-2 rounded-xl border border-primary-color/40 bg-white px-4 py-3 text-sm font-semibold text-primary-color">
            <Phone className="h-4 w-4" />
            ভেন্ডরের সাথে সরাসরি কথা বলুন
          </button>

          <button className="inline-flex min-w-[220px] flex-1 items-center justify-center gap-2 rounded-xl border border-primary-color/40 bg-white px-4 py-3 text-sm font-semibold text-primary-color">
            <Bell className="h-4 w-4" />
            রিলনোটিফাই করুন
          </button>
        </div>
      </div>
    </Card>
  );
}