"use client";

import { AdvancePaymentStepperItem } from "@/app/(office)/office/types/advance-payment";

export default function Stepper({
  items,
  currentStepIndex,
}: {
  items: AdvancePaymentStepperItem[];
  currentStepIndex: number;
}) {
  return (
    <div className="mt-6 rounded-lg border border-medium-gray/15 bg-white p-4">
      <div className="grid grid-cols-3 gap-2">
        {items.map((it, idx) => {
          const active = idx === currentStepIndex;
          return (
            <div
              key={it.key}
              className="flex items-center justify-center gap-3"
            >
              <div
                className={[
                  "flex h-10 w-10 items-center justify-center rounded-full border",
                  active
                    ? "border-primary-color text-primary-color"
                    : "border-medium-gray/20 text-medium-gray",
                ].join(" ")}
              >
                <span className="text-sm font-semibold">{idx + 1}</span>
              </div>

              <div className="hidden sm:block">
                <p
                  className={[
                    "text-sm font-semibold",
                    active ? "text-primary-color" : "text-black",
                  ].join(" ")}
                >
                  {it.title}
                </p>
                <p className="text-xs text-medium-gray">{it.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
