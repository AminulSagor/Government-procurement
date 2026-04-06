"use client";

import React from "react";
import Card from "@/components/cards/card";
import type { ReturnRequestItem } from "../../../_types/return-request.types";
import {
  XCircle,
  MessageSquareText,
  Image as ImageIcon,
  Info,
  Phone,
  ShieldCheck,
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

export default function DeniedPanel({ active }: { active: ReturnRequestItem }) {
  const evidence = (active.evidence ?? []).slice(0, 2);

  return (
    <Card className="overflow-hidden rounded-2xl p-0">
      {/* RED TOP BAR */}
      <div className="flex items-center justify-center gap-2 bg-red px-6 py-4 text-white">
        <XCircle className="h-4 w-4" />
        <div className="text-sm font-semibold">
          ভেন্ডর কর্তৃক অনুরোধ বাতিলকরণ করেছেন
        </div>
      </div>

      <div className="p-6">
        {/* Summary box */}
        <div className="rounded-2xl border border-primary-color/10 bg-off-white p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-medium-gray">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary-color/10 text-primary-color">
              <ShieldCheck className="h-4 w-4" />
            </span>
            সিদ্ধান্তের সারসংক্ষেপ
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-semibold text-medium-gray">
              সিদ্ধান্তের তারিখ
              <div className="mt-1 text-[11px] font-medium text-light-gray">
                {active.createdAt}
              </div>
            </div>

            <div className="text-xs font-semibold text-medium-gray">
              সিদ্ধান্তকারী অফিস
              <div className="mt-1 text-[11px] font-medium text-light-gray">
                {active.officeName}
              </div>
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

        {/* Vendor comm title */}
        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-medium-gray">
          <MessageSquareText className="h-4 w-4 text-primary-color" />
          ভেন্ডর কমিউনিকেশন লগ
        </div>

        {/* Vendor message card */}
        <div className="mt-3 rounded-2xl border border-primary-color/10 bg-white p-5">
          <div className="text-xs font-semibold text-light-gray">ভেন্ডর</div>
          <div className="mt-1 text-sm font-semibold text-medium-gray">
            {active.vendorName}
          </div>

          <div className="mt-3 text-[11px] font-semibold tracking-wide text-light-gray">
            ভেন্ডর সিদ্ধান্ত
          </div>

          {/* Red highlighted decision */}
          <div className="mt-2 rounded-xl border border-red/20 bg-red/10 p-4 text-sm text-medium-gray">
            <div className="mb-1 text-[11px] font-semibold text-red">
              অনুরোধ বাতিল
            </div>
            “আপনার পণ্যের সাথে মিল নেই। ফেরত সম্ভব নয়”
          </div>

          <div className="mt-4 text-[11px] font-semibold tracking-wide text-light-gray">
            এডমিন আবেদনের কপি
          </div>
          <p className="mt-2 text-sm leading-6 text-medium-gray">
            {active.vendorClaimText}
          </p>

          <div className="mt-2 text-[11px] text-light-gray">
            প্রেরিত: ২৪ অক্টোবর ২০২৪, সন্ধ্যা ৭:০১
          </div>

          {/* Evidence */}
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

        {/* Note */}
        <div className="mt-6 rounded-xl border border-primary-color/10 bg-off-white px-4 py-3">
          <div className="flex items-start gap-2 text-xs text-medium-gray">
            <Info className="mt-0.5 h-4 w-4 text-light-gray" />
            ভেন্ডর কর্তৃক সিদ্ধান্ত বাতিলের বিষয়ে সিদ্ধান্ত পুনর্বিবেচনা বা আপিল করা যেতে পারে।
          </div>
        </div>

        {/* Bottom actions */}
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button className="inline-flex min-w-[240px] flex-1 items-center justify-center gap-2 rounded-xl border border-primary-color/40 bg-white px-4 py-3 text-sm font-semibold text-primary-color">
            <Phone className="h-4 w-4" />
            ভেন্ডর যোগাযোগ
          </button>

          <button className="inline-flex min-w-[260px] flex-1 items-center justify-center gap-2 rounded-xl bg-primary-color px-4 py-3 text-sm font-semibold text-white">
            <ShieldCheck className="h-4 w-4" />
            নিরপেক্ষতা নিশ্চিত করুন
          </button>
        </div>
      </div>
    </Card>
  );
}