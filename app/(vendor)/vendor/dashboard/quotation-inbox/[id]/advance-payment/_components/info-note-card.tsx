"use client";

import React from "react";
import Card from "@/components/cards/card";
import { Info } from "lucide-react";

type Props = {
  title?: string;
  description?: string;
};

export default function InfoNoteCard({
  title = "নীতিমালা সংক্রান্ত তথ্য",
  description = "৫০% এর বেশি অগ্রিম পেমেন্টের ক্ষেত্রে এক পরিদর্শকের অতিরিক্ত অনুমোদন প্রয়োজন। অনুগ্রহ করে নিশ্চিত করুন যে সকল নথিপত্র সংযুক্ত আছে।",
}: Props) {
  return (
    <Card
      className={[
        "rounded-2xl border border-primary-color/25",
        "bg-[#F1F8FF]",
        "px-5 py-4",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        {/* icon */}
        <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-full border border-primary-color/30 bg-white text-primary-color">
          <Info size={16} />
        </div>

        {/* text */}
        <div>
          <p className="text-sm font-extrabold text-primary-color">{title}</p>
          <p className="mt-1 text-xs font-semibold leading-relaxed text-primary-color/80">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
