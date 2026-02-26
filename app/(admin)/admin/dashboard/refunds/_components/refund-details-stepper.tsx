"use client";

import Card from "@/components/cards/card";
import { Check, Banknote } from "lucide-react";

const steps = [
  "ধাপ ১",
  "ধাপ ২",
  "ধাপ ৩",
  "ধাপ ৪",
  "ধাপ ৫",
  "ফাইনাল সেটেলমেন্ট",
];

export default function RefundDetailsStepper() {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between gap-2">
        {steps.map((label, idx) => {
          const isLast = idx === steps.length - 1;

          return (
            <div key={label} className="flex items-center gap-3 min-w-0 flex-1">
              {!isLast ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-green text-white flex items-center justify-center">
                    <Check className="h-5 w-5" />
                  </div>
                  <div className="text-xs text-green">{label}</div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-white border-4 border-primary-color flex items-center justify-center">
                    <div className="h-9 w-9 rounded-full bg-blue/10 flex items-center justify-center">
                      <Banknote className="h-5 w-5 text-primary-color" />
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-primary-color">{label}</div>
                </div>
              )}

              {idx !== steps.length - 1 && (
                <div className="h-0.5 bg-green flex-1 -mt-4.5" />
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
