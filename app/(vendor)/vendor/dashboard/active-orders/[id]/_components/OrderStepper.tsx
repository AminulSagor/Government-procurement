"use client";

import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import { Check, CreditCard, Truck, Package } from "lucide-react";

type StepKey = "confirmed" | "advance" | "shipment" | "received";

const steps = [
  { key: "confirmed", bn: "অর্ডার নিশ্চিত", en: "Confirmed", Icon: Check },
  { key: "advance", bn: "অগ্রিম পেমেন্ট", en: "Advance Payment", Icon: CreditCard },
  { key: "shipment", bn: "শিপমেন্ট", en: "Shipment", Icon: Truck },
  { key: "received", bn: "পণ্য গ্রহণ", en: "Received", Icon: Package },
];

export default function OrderStepper({
  activeIndex = 0,
}: {
  /** 0..3 (Confirmed..Received) */
  activeIndex?: number;
}) {
  const safeIndex = Math.max(0, Math.min(activeIndex, steps.length - 1));

  const progressWidth =
    safeIndex <= 0
      ? "0%"
      : `calc(${(safeIndex / (steps.length - 1)) * 100}% - 8px)`;

  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-6">
      <div className="relative">
        {/* BASE LINE */}
        <div className="absolute left-8 right-8 top-[20px] h-[2px] rounded-full bg-gray/15" />

        {/* PROGRESS LINE */}
        <div
          className="absolute left-8 top-[20px] h-[2px] rounded-full bg-primary-color"
          style={{ width: progressWidth }}
        />

        <div className="grid grid-cols-4">
          {steps.map((s, i) => {
            const state =
              i < safeIndex ? "done" : i === safeIndex ? "active" : "idle";

            return (
              <div key={s.key} className="flex flex-col items-center">
                {/* circle */}
                <div
                  className={cn(
                    "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border",
                    state === "done" && "border-primary-color bg-primary-color text-white",
                    state === "active" && "border-yellow bg-yellow text-white",
                    state === "idle" && "border-gray/15 bg-secondary text-light-gray"
                  )}
                >
                  {state === "done" ? <Check size={18} /> : <s.Icon size={18} />}
                </div>

                {/* labels */}
                <p className="mt-3 text-xs font-extrabold text-light-gray">
                  {s.bn}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-light-gray">
                  {s.en}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
