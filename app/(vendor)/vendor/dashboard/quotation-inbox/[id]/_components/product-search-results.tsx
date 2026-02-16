"use client";

import React from "react";
import Card from "@/components/cards/card";
import { Info, Package } from "lucide-react";

export type SearchResultItem = {
  id: string;
  name: string;
  itemCode: string; // e.g. "035601"
  brand: string; // Canon, HP
  price: number; // estimated price
};

type Props = {
  countLabel?: string; // e.g. "ইনভেন্টরি ফলাফল (০৩ টি পাওয়া গেছে)"
  infoText?: string;
  items?: SearchResultItem[];
  onSelect?: (item: SearchResultItem) => void;
};

const money = (n: number) => {
  try {
    return `৳ ${n.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
  } catch {
    return `৳ ${n}`;
  }
};

const demoItems: SearchResultItem[] = [
  { id: "1", name: "Canon NPG-51 Toner", itemCode: "035601", brand: "Canon", price: 6950 },
  { id: "2", name: "HP 85A Black LaserJet Toner", itemCode: "035602", brand: "HP", price: 8300 },
  { id: "3", name: "Samsung MLT-D101S Toner", itemCode: "035603", brand: "Samsung", price: 9250 },
];

export default function ProductSearchResults({
  countLabel = "ইনভেন্টরি ফলাফল (০৩ টি পাওয়া গেছে)",
  infoText = "অফিসের চাহিদা অনুযায়ী নির্দিষ্ট পণ্যটি তুলে না পেলে, অনুগ্রহ করে প্রথমে পণ্যটি আপনার ইনভেন্টরিতে যুক্ত করুন। এরপর এখান থেকে পুনরায় অনুসন্ধান করুন।",
  items = demoItems,
  onSelect,
}: Props) {
  return (
    <Card className="rounded-2xl border border-primary-color/20 bg-white p-0 overflow-hidden shadow-sm">
      {/* info banner */}
      <div className="flex items-start gap-3 border-b border-primary-color/15 bg-[#F1F8FA] px-4 py-3">
        <span className="mt-0.5 text-primary-color">
          <Info size={16} />
        </span>
        <p className="text-[11px] font-semibold text-primary-color leading-5">
          {infoText}
        </p>
      </div>

      {/* list title */}
      <div className="bg-secondary/40 px-4 py-3">
        <p className="text-xs font-extrabold text-light-gray">{countLabel}</p>
      </div>

      {/* results */}
      <div className="divide-y divide-gray/10">
        {items.map((it) => (
          <button
            key={it.id}
            type="button"
            onClick={() => onSelect?.(it)}
            className="w-full text-left hover:bg-secondary/40"
          >
            <div className="flex items-center justify-between gap-4 px-4 py-4">
              {/* left */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-secondary grid place-items-center text-gray/60">
                  <Package size={18} />
                </div>

                <div>
                  <p className="text-xs font-extrabold text-gray">{it.name}</p>

                  <p className="mt-1 text-[11px] font-semibold text-light-gray">
                    আইটেম কোড: {it.itemCode} <span className="mx-1 text-gray/25">|</span>{" "}
                    ব্র্যান্ড: <span className="text-gray/60">{it.brand}</span>
                  </p>
                </div>
              </div>

              {/* right price */}
              <div className="text-right">
                <p className="text-[11px] font-semibold text-light-gray">
                  ইস্টিমেটেড মূল্য
                </p>
                <p className="mt-1 text-xs font-extrabold text-primary-color">
                  {money(it.price)}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
}
