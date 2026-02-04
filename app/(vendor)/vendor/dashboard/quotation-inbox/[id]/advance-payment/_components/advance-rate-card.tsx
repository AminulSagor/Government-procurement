"use client";

import React from "react";
import Card from "@/components/cards/card";
import { ChevronRight } from "lucide-react";

type Props = {
  initialRate?: number; // default 50
  min?: number;
  max?: number;

  totalAmount?: number; // full order total
  presets?: number[]; // [25,50,75]

  onSubmit?: (payload: {
    rate: number;
    advanceAmount: number;
    note: string;
  }) => void;
};

const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));

const money = (n: number) => {
  try {
    return n.toLocaleString("en-US");
  } catch {
    return String(n);
  }
};

export default function AdvanceRateCard({
  initialRate = 50,
  min = 0,
  max = 100,
  totalAmount = 14000,
  presets = [25, 50, 75],
  onSubmit,
}: Props) {
  const [rate, setRate] = React.useState<number>(initialRate);
  const [note, setNote] = React.useState("");

  const advanceAmount = React.useMemo(() => {
    const v = Math.round((totalAmount * rate) / 100);
    return v;
  }, [rate, totalAmount]);

  const setPreset = (p: number) => setRate(clamp(p, min, max));

  return (
    <Card className="rounded-2xl border border-gray/10 bg-white p-0 overflow-hidden shadow-sm">
      <div className="px-6 py-5">
        {/* header row */}
        <div className="flex items-start justify-between">
          <p className="text-sm font-extrabold text-gray">
            অগ্রিম পেমেন্টের হার (%)
          </p>

          <span className="rounded-lg border border-gray/10 bg-secondary/30 px-3 py-1 text-[11px] font-extrabold text-primary-color">
            সীমা: {max}%
          </span>
        </div>

        {/* chips + % box */}
        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {presets.map((p) => {
              const active = rate === p;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPreset(p)}
                  className={[
                    "h-9 rounded-lg px-3 text-xs font-extrabold",
                    "border border-gray/12",
                    active
                      ? "bg-primary-color text-white border-primary-color"
                      : "bg-white text-gray/70 hover:bg-secondary/40",
                  ].join(" ")}
                >
                  {p}%
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <div className="grid h-9 w-14 place-items-center rounded-lg border border-gray/12 bg-white text-xs font-extrabold text-gray/70">
              %
            </div>
          </div>
        </div>

        {/* slider */}
        <div className="mt-4">
          <input
            type="range"
            min={min}
            max={max}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full accent-primary-color"
          />

          <div className="mt-1 flex items-center justify-between text-[10px] font-semibold text-gray/40">
            <span>{min}%</span>
            <span>{max}%</span>
          </div>
        </div>

        {/* calculated amount */}
        <div className="mt-6">
          <p className="text-xs font-semibold text-gray/50">
            হিসাবকৃত টাকার পরিমাণ
          </p>

          <div className="mt-2 rounded-2xl border border-gray/10 bg-secondary/25 px-5 py-4">
            <div className="flex items-start gap-4">
              <div className="h-12 w-1 rounded-full bg-primary-color" />

              <div>
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-extrabold text-primary-color leading-none">
                    ৳ {money(advanceAmount)}
                  </p>
                  <p className="pb-1 text-xs font-semibold text-gray/50">
                    টাকা
                  </p>
                </div>

                <p className="mt-2 text-[11px] font-semibold text-gray/50">
                  চুক্তির মোট মূল্যের {rate}% শতাংশ
                  {/* টেন্ডার মোট মূল্যের {rate}% অগ্রিম পরিশোধ */}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* note */}
        <div className="mt-6 ">
          <div className="flex gap-1.5">
            <p className="text-xs font-semibold text-gray/50">মন্তব্য </p>
            <p className="text-xs font-semibold text-light-gray">(ঐচ্ছিক) </p>
          </div>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="mt-2 min-h-[120px] w-full rounded-2xl border border-gray/12 bg-white p-4 text-xs font-semibold text-gray placeholder:text-gray/35 focus:outline-none"
          />
        </div>
      </div>

      {/* footer */}
      <div className="mt-8 border-t border-gray/10 px-6 py-5">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold text-gray/45">
            ক্রমধারা নিশ্চিত করে সাবমিট করুন
          </p>

          <button
            type="button"
            onClick={() => onSubmit?.({ rate, advanceAmount, note })}
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#FF7A00] px-6 text-xs font-extrabold text-white shadow-md hover:opacity-95"
          >
            সেভ করুন <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </Card>
  );
}
