"use client";

import React from "react";

import { AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

type Props = {
  title?: string;
  message?: string;
  badgeText?: string;
};

export default function AttentionBanner({
  title = "আবশ্যিক সতর্কতা",
  message = "আপনার সরবরাহকৃত পণ্যের স্পেসিফিকেশন অনুযায়ী সঠিক নয়। অনুগ্রহ করে সঠিক আইটেম কোডসহ পণ্যটি নির্বাচন করে আবার চেষ্টা করুন।",
  badgeText = "এখনই দেখুন",
}: Props) {
  return (
    <Card className="rounded-2xl border border-primary-color/25 bg-[#F1F8FA] p-4">
      <div className="flex items-start justify-between gap-4">
        {/* left */}
        <div className="flex items-start gap-3">
          {/* icon */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-color text-white">
            <AlertTriangle size={18} />
          </div>

          {/* text */}
          <div>
            <p className="text-sm font-extrabold text-gray">{title}</p>
            <p className="mt-1 text-xs font-semibold leading-relaxed text-gray/70">
              {message}
            </p>
          </div>
        </div>

        {/* right badge */}
        {badgeText ? (
          <span className="shrink-0 rounded-lg bg-primary-color/10 px-3 py-1 text-xs font-extrabold text-primary-color">
            {badgeText}
          </span>
        ) : null}
      </div>
    </Card>
  );
}
