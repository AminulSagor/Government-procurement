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
  active = "advance",
}: {
  active?: StepKey;
}) {
  const activeIndex = steps.findIndex((s) => s.key === active);

  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-6">
      <div className="relative">
        {/* BASE LINE (gray) */}
        <div className="absolute left-8 right-8 top-[20px] h-[2px] bg-gray/20 rounded-full" />

        {/* PROGRESS LINE (colored) */}
        <div
          className="absolute left-8 top-[20px] h-[2px] bg-teal-700 rounded-full"
          style={{
            width:
              activeIndex <= 0
                ? "0%"
                : `calc(${(activeIndex / (steps.length - 1)) * 100}% - 8px)`,
          }}
        />

        <div className="grid grid-cols-4">
          {steps.map((s, i) => {
            const state =
              i < activeIndex ? "done" : i === activeIndex ? "active" : "idle";

            return (
              <div key={s.key} className="flex flex-col items-center">
                {/* circle */}
                <div
                  className={cn(
                    "relative z-10 flex h-10 w-10 items-center justify-center rounded-full",
                    state === "done" && "bg-teal-700 text-white",
                    state === "active" && "bg-orange-500 text-white",
                    state === "idle" && "bg-light-gray/10 text-light-gray"
                  )}
                >
                  {state === "done" ? (
                    <Check size={18} />
                  ) : (
                    <s.Icon size={18} />
                  )}
                </div>

                {/* labels */}
                <p
                  className={cn(
                    "mt-3 text-xs font-extrabold",
                    state === "idle" ? "text-light-gray" : "text-light-gray"
                  )}
                >
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
