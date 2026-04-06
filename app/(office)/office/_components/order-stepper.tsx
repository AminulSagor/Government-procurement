"use client";

import * as React from "react";
import { Check, RefreshCw, Truck, FileText } from "lucide-react";

export type OrderStepKey =
  | "confirmed"
  | "processing"
  | "in_transit"
  | "received";

export type OrderStep = {
  key: OrderStepKey;
  label: string;
  icon: React.ReactNode;
};

const DEFAULT_STEPS: OrderStep[] = [
  { key: "confirmed", label: "কনফার্মড", icon: <Check className="h-5 w-5" /> },
  {
    key: "processing",
    label: "প্রক্রিয়াধীন",
    icon: <RefreshCw className="h-5 w-5" />,
  },
  {
    key: "in_transit",
    label: "ইন ট্রানজিট",
    icon: <Truck className="h-5 w-5" />,
  },
  { key: "received", label: "রিসিভড", icon: <FileText className="h-5 w-5" /> },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function OrderStepper({
  current,
  steps = DEFAULT_STEPS,
  className,
}: {
  current: OrderStepKey;
  steps?: OrderStep[];
  className?: string;
}) {
  const currentIndex = React.useMemo(() => {
    const idx = steps.findIndex((s) => s.key === current);
    return Math.max(0, idx);
  }, [steps, current]);

  const progress = React.useMemo(() => {
    if (steps.length <= 1) return 0;
    return currentIndex / (steps.length - 1);
  }, [currentIndex, steps.length]);

  return (
    <div className={cn("w-full", className)}>
      <div className="relative">
        <div
          className="absolute top-5 h-[3px] bg-off-white"
          style={{
            left: `calc(100% / ${steps.length} / 2)`,
            right: `calc(100% / ${steps.length} / 2)`,
          }}
        />

        {/* Progress line */}
        <div
          className="absolute top-5 h-[3px]"
          style={{
            left: `calc(100% / ${steps.length} / 2)`,
            right: `calc(100% / ${steps.length} / 2)`,
          }}
        >
          <div
            className="h-full origin-left bg-primary-color transition-transform duration-500"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isCompleted = index < currentIndex;
            const isCurrent = index === currentIndex;
            const isUpcoming = index > currentIndex;

            return (
              <div
                key={step.key}
                className="relative flex flex-1 flex-col items-center"
              >
                {/* Circle */}
                <div
                  className={cn(
                    "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300",
                    isCompleted || isCurrent
                      ? "border-primary-color bg-primary-color"
                      : "border-light-gray/30 bg-white",
                  )}
                >
                  {/* Inner circle */}
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300",
                      isCompleted || isCurrent
                        ? "bg-primary-color"
                        : "bg-off-white",
                    )}
                  >
                    <span
                      className={cn(
                        "transition-colors duration-300",
                        isCompleted || isCurrent
                          ? "text-white"
                          : "text-light-gray",
                      )}
                    >
                      {step.icon}
                    </span>
                  </div>
                </div>

                {/* Label */}
                <p
                  className={cn(
                    "mt-3 whitespace-nowrap text-sm font-extrabold transition-colors duration-300",
                    isUpcoming ? "text-light-gray" : "text-primary-color",
                  )}
                >
                  {step.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
