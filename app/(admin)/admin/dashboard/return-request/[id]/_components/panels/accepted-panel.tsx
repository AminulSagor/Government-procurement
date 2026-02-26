"use client";

import React from "react";
import Card from "@/components/cards/card";
import type { ReturnRequestItem } from "../../../_types/return-request.types";
import {
  CheckCircle2,
  MessageSquareText,
  Image as ImageIcon,
  Phone,
  Send,
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

export default function AcceptedPanel({ active }: { active: ReturnRequestItem }) {
  const evidence = (active.evidence ?? []).slice(0, 2);

  return (
    <Card className="overflow-hidden rounded-2xl p-0">
      {/* GREEN TOP BAR */}
      <div className="flex items-center justify-between gap-3 bg-green px-6 py-4 text-white">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <CheckCircle2 className="h-4 w-4" />
          ভেন্ডর রেসপন্স অনুযায়ী সিদ্ধান্ত গ্রহণ করা হয়েছে
        </div>

        <div className="rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-xs font-semibold">
          স্ট্যাটাস: রিকোয়েস্ট অ্যাকসেপ্টেড
        </div>
      </div>

      <div className="p-6">
        {/* META ROW (office/date small boxes optional) */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="rounded-xl border border-primary-color/10 bg-white px-4 py-3 text-xs font-semibold text-medium-gray">
            সিদ্ধান্তের তারিখ
            <div className="mt-1 text-[11px] font-medium text-light-gray">
              {active.createdAt}
            </div>
          </div>

          <div className="rounded-xl border border-primary-color/10 bg-white px-4 py-3 text-xs font-semibold text-medium-gray">
            সিদ্ধান্তকারী অফিস
            <div className="mt-1 text-[11px] font-medium text-light-gray">
              {active.officeName}
            </div>
          </div>
        </div>

        {/* CASE OVERVIEW */}
        <div className="mt-4 rounded-2xl border border-primary-color/10 bg-off-white p-5">
          <div className="text-[11px] font-semibold tracking-wide text-light-gray">
            CASE OVERVIEW
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <KV label="CASE ID" value={`#${active.caseId}`} />
            <KV label="PRODUCT NAME" value={active.productName} />
            <KV
              label="DAMAGE CLAIM SUMMARY"
              value={<span className="font-semibold">{active.returnReason}</span>}
            />
          </div>
        </div>

        {/* VENDOR COMMUNICATION */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-medium-gray">
            <MessageSquareText className="h-4 w-4 text-primary-color" />
            ভেন্ডর কমিউনিকেশন
          </div>

          {/* status pill on right */}
          <span className="rounded-full border border-green/20 bg-green/10 px-3 py-2 text-xs font-semibold text-green">
            রিকোয়েস্ট অ্যাকসেপ্টেড
          </span>
        </div>

        <div className="mt-3 rounded-2xl border border-primary-color/10 bg-white p-5">
          <div className="text-xs font-semibold text-light-gray">ভেন্ডর</div>

          <div className="mt-1 text-sm font-semibold text-medium-gray">
            {active.vendorName}
          </div>

          {/* Green highlight message (same as screenshot vibe) */}
          <div className="mt-4 rounded-xl border border-green/20 bg-green/10 p-4 text-sm text-medium-gray">
            <div className="mb-1 text-[11px] font-semibold text-green">
              ভেন্ডর রেসপন্স (সারাংশ)
            </div>
            ভেন্ডরের উত্তরের ভিত্তিতে রিকোয়েস্ট গ্রহণ করা হয়েছে এবং ফাইনাল
            সেটেলমেন্ট প্রসেস শুরু হবে।
          </div>

          <div className="mt-4 text-[11px] font-semibold tracking-wide text-light-gray">
            ভেন্ডরের মেসেজ
          </div>

          <p className="mt-2 text-sm leading-6 text-medium-gray">
            {active.vendorClaimText}
          </p>

          <div className="mt-2 text-[11px] text-light-gray">
            প্রেরিত: ২৪ অক্টোবর ২০২৪, সন্ধ্যা ৭:০১
          </div>

          {/* EVIDENCE */}
          <div className="mt-6 text-[11px] font-semibold tracking-wide text-light-gray">
            EVIDENCE FORWARDED
          </div>

          <div className="mt-3 flex flex-wrap gap-4">
            {evidence.length ? (
              evidence.map((e) => <EvidenceTile key={e.name} name={e.name} />)
            ) : (
              <div className="text-sm text-light-gray">No evidence</div>
            )}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-6 rounded-xl border border-primary-color/10 bg-off-white px-4 py-3 text-xs text-medium-gray">
          রিকোয়েস্ট গ্রহণ করা হয়েছে। এখন ফাইনাল সেটেলমেন্ট ও পরবর্তী কার্যক্রম
          সম্পন্ন করুন।
        </div>

        {/* Bottom actions */}
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button className="inline-flex min-w-[260px] flex-1 items-center justify-center gap-2 rounded-xl border border-primary-color/40 bg-white px-4 py-3 text-sm font-semibold text-primary-color">
            <Phone className="h-4 w-4" />
            ভেন্ডরের সাথে যোগাযোগ
          </button>

          <button className="inline-flex min-w-[260px] flex-1 items-center justify-center gap-2 rounded-xl bg-primary-color px-4 py-3 text-sm font-semibold text-white">
            <Send className="h-4 w-4" />
            ফাইনাল সেটেলমেন্ট শুরু করুন
          </button>
        </div>
      </div>
    </Card>
  );
}