"use client";

import React from "react";
import Card from "@/components/cards/card";

type Props = {
  titleBn?: string;
  subtitleEn?: string;

  productName?: string;
  qtyText?: string;

  detailsText?: string;
  bullets?: string[];
};

export default function ProductRequirementsCard({
  titleBn = "অফিসের চাহিদা",
  subtitleEn = "Product Requirements",

  productName = "HP LaserJet Pro P1102 Toner (Original)",
  qtyText = "৫ টি (5 Units)",

  detailsText =
    "Intel Core i7 11th Gen প্রসেসর, ১৬ জিবি DDR4 র‍্যাম, ৫১২ জিবি NVMe SSD স্টোরেজ এবং ১৪ ইঞ্চি FHD (1920x1080) ডিসপ্লে।",
  bullets = [
    "ইন্টেল আইরিস এক্স গ্রাফিক্স",
    "ব্যাকলিট কী-বোর্ড এবং ফিঙ্গারপ্রিন্ট রিডার",
    "উইন্ডোজ ১০ প্রো প্রি-ইনস্টল্ড করা",
    "৪-সেল ব্যাটারি এবং ফাস্ট চার্জিং সাপোর্ট",
  ],
}: Props) {
  return (
    <Card className="rounded-2xl border border-gray/10 bg-white p-0 shadow-sm overflow-hidden">
      {/* header */}
      <div className="px-5 pt-5 pb-4 bg-gray-100 border-b border-gray/10">
        <h3 className="text-lg font-extrabold text-gray">{titleBn}</h3>
        <p className="mt-1 text-xs font-semibold text-light-gray">
          {subtitleEn}
        </p>
      </div>

      <div className="h-px w-full bg-gray/10" />

      {/* content */}
      <div className="px-5 py-5 space-y-5">
        {/* Product Name */}
        <div>
          <p className="text-xs font-semibold text-light-gray">
            পণ্যের নাম (Product Name)
          </p>

          <p className="mt-2 text-[15px] font-extrabold text-gray leading-6">
            {productName}
          </p>
        </div>

        {/* Quantity */}
        <div>
          <p className="text-xs font-semibold text-light-gray">
            পরিমাণ (Quantity)
          </p>

          <span className="mt-2 inline-flex rounded-lg bg-primary-color/10 px-3 py-1.5 text-xs font-extrabold text-primary-color">
            {qtyText}
          </span>
        </div>

        {/* Details */}
        <div>
          <p className="text-xs font-semibold text-light-gray">
            পণ্যের বিস্তারিত বিবরণ
          </p>

          <div className="mt-3 rounded-2xl border border-gray/10 bg-secondary/40 p-4">
            <p className="text-xs font-semibold text-gray/65 leading-6">
              {detailsText}
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-xs font-semibold text-gray/65">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}
