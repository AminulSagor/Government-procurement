"use client";

import type { SummaryCard } from "../_types/negotiation-assign.types";
import { CheckCircle2, Dot } from "lucide-react";

export default function SummaryCardsRow({ cards }: { cards: SummaryCard[] }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((c) => {
        const isGreen = c.accent === "green";
        const isPrimary = c.accent === "primary";

        return (
          <div
            key={c.id}
            className={[
              "rounded-3xl px-5 py-4 border shadow-sm transition",
              isGreen
                ? "bg-[var(--color-green)] text-white border-[var(--color-green)]/30"
                : "bg-white border-black/10",
              isPrimary ? "ring-2 ring-[var(--color-primary-color)]/15" : "",
            ].join(" ")}
          >
            {/* Title */}
            <div
              className={[
                "text-[13px] font-bold",
                isGreen
                  ? "text-white/90"
                  : "text-[var(--color-light-gray)]",
              ].join(" ")}
            >
              {c.titleBn}
            </div>

            {/* Value */}
            <div
              className={[
                "mt-2 text-[24px] font-extrabold",
                isGreen
                  ? "text-white"
                  : isPrimary
                  ? "text-[var(--color-primary-color)]"
                  : "text-[var(--color-black)]",
              ].join(" ")}
            >
              {c.valueBn}
            </div>

            {/* Green % badge (only last card like screenshot) */}
            {isGreen && c.percentBn && (
              <span className="ml-2 inline-flex items-center rounded-full bg-white/20 px-2.5 py-1 text-[12px] font-bold">
                {c.percentBn}
              </span>
            )}

            {/* Footer line */}
            {c.subBn && (
              <div
                className={[
                  "mt-2 flex items-center gap-1 text-[12px] font-medium",
                  isGreen
                    ? "text-white/85"
                    : "text-[var(--color-light-gray)]",
                ].join(" ")}
              >
                {isGreen ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <Dot className="h-6 w-6 -ml-1" />
                )}
                {c.subBn}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
