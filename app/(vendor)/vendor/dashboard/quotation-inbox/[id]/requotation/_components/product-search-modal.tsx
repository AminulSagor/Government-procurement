"use client";

import React from "react";
import Card from "@/components/cards/card";
import { X, Search, Info, Package } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";

export type ProductSearchItem = {
  id: string;
  name: string;
  itemCode: string;
  model: string;
  estimatedPrice: number;
};

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;

  value: string;
  onChange: (v: string) => void;

  items: ProductSearchItem[];
  onSelect: (item: ProductSearchItem) => void;
};

const money = (n: number) => {
  try {
    return `৳ ${n.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
  } catch {
    return `৳ ${n}`;
  }
};

export default function ProductSearchModal({
  open,
  onOpenChange,
  value,
  onChange,
  items,
  onSelect,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={[
          // size like your screenshot
          "max-w-[920px] p-0 border-0 bg-transparent shadow-none",
        ].join(" ")}
      >
        <Card className="rounded-2xl border border-gray/10 bg-white p-0 overflow-hidden shadow-lg">
          {/* header */}
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="text-primary-color">
                <Package size={18} />
              </span>
              <p className="text-sm font-extrabold text-gray">
                পণ্য অনুসন্ধান (Product Search)
              </p>
            </div>

            {/* <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary"
            >
              <X size={18} className="text-gray/60" />
            </button> */}
          </div>

          {/* search input */}
          <div className="px-6">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray/45">
                <Search size={18} />
              </span>

              <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Toner"
                className={[
                  "h-12 w-full rounded-xl bg-white pl-11 pr-4",
                  "border-2 border-primary-color",
                  "text-sm font-semibold text-gray",
                  "focus:outline-none",
                ].join(" ")}
              />
            </div>

            {/* info banner */}
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-primary-color/20 bg-[#F1F8FA] px-4 py-3">
              <span className="mt-0.5 text-primary-color">
                <Info size={16} />
              </span>
              <p className="text-[11px] font-semibold leading-relaxed text-gray/70">
                অফিসের চাহিদা অনুযায়ী নির্দিষ্ট পণ্যটি তুলে না পেলে, অনুগ্রহ করে
                প্রথমে পণ্যটি আপনার ইনভেন্টরিতে যুক্ত করুন।
              </p>
            </div>
          </div>

          {/* results */}
          <div className="mt-5 px-6 pb-6">
            <div className="rounded-2xl border border-gray/10 bg-white overflow-hidden">
              <div className="divide-y divide-gray/10">
                {items.map((it) => (
                  <button
                    key={it.id}
                    type="button"
                    onClick={() => onSelect(it)}
                    className="w-full text-left hover:bg-secondary/40"
                  >
                    <div className="flex items-center justify-between gap-4 px-4 py-4">
                      {/* left */}
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-secondary grid place-items-center text-gray/60">
                          <Package size={18} />
                        </div>

                        <div>
                          <p className="text-xs font-extrabold text-gray">
                            {it.name}
                          </p>

                          <div className="mt-1 flex items-center gap-2 text-[11px] font-semibold text-gray/45">
                            <span className="rounded-lg bg-primary-color/10 px-2 py-0.5 text-primary-color">
                              আইটেম কোড: {it.itemCode}
                            </span>
                            <span>মডেল: {it.model}</span>
                          </div>
                        </div>
                      </div>

                      {/* right */}
                      <div className="text-right">
                        <p className="text-[11px] font-semibold text-gray/45">
                          ইস্টিমেটেড মূল্য
                        </p>
                        <p className="mt-1 text-xs font-extrabold text-gray">
                          {money(it.estimatedPrice)}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}

                {items.length === 0 ? (
                  <div className="px-4 py-8 text-center">
                    <p className="text-xs font-semibold text-gray/50">
                      কোন ফলাফল পাওয়া যায়নি
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
