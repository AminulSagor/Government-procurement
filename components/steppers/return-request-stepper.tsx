"use client";

import * as React from "react";
import { FileText, Upload, ShieldCheck } from "lucide-react";

export type ReturnStepKey = "info" | "upload" | "approval";

export type ReturnStep = {
  key: ReturnStepKey;
  title: string;      // main label (top)
  subtitle: string;   // small label (bottom)
  icon: React.ReactNode;
};

const DEFAULT_STEPS: ReturnStep[] = [
  {
    key: "info",
    title: "তথ্য এন্ট্রি",
    subtitle: "অসম্পন্ন",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    key: "upload",
    title: "নথিপত্র আপলোড",
    subtitle: "অসম্পন্ন",
    icon: <Upload className="h-5 w-5" />,
  },
  {
    key: "approval",
    title: "অনুমোদন",
    subtitle: "অসম্পন্ন",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ReturnRequestStepper({
  current,
  steps = DEFAULT_STEPS,
  className,
}: {
  current: ReturnStepKey;
  steps?: ReturnStep[];
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
      <div className="rounded-xl border border-primary-color/10 bg-white px-6 py-5">
        <div className="relative">
          {/* Base line */}
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
                        : "border-light-gray/30 bg-white"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300",
                        isCompleted || isCurrent ? "bg-primary-color" : "bg-off-white"
                      )}
                    >
                      <span
                        className={cn(
                          "transition-colors duration-300",
                          isCompleted || isCurrent ? "text-white" : "text-light-gray"
                        )}
                      >
                        {step.icon}
                      </span>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="mt-3 text-center">
                    <p
                      className={cn(
                        "whitespace-nowrap text-sm font-extrabold transition-colors duration-300",
                        index <= currentIndex ? "text-primary-color" : "text-light-gray"
                      )}
                    >
                      {step.title}
                    </p>
                    <p
                      className={cn(
                        "mt-1 whitespace-nowrap text-xs font-semibold transition-colors duration-300",
                        index <= currentIndex ? "text-primary-color/70" : "text-light-gray"
                      )}
                    >
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}