"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ActivityItem } from "../_types/live-activity.types";
import ActivityBadge from "./activity-badge";

function ToneDot({ tone }: { tone: ActivityItem["tone"] }) {
  const cls =
    tone === "green"
      ? "bg-green"
      : tone === "blue"
      ? "bg-primary"
      : tone === "amber"
      ? "bg-primary"
      : "bg-gray";

  return <span className={cn("mt-1.5 h-2 w-2 rounded-full", cls)} />;
}

export default function LiveActivityItem({ item }: { item: ActivityItem }) {
  return (
    <div className="px-6 py-4">
      <div className="flex items-start justify-between gap-4">
        {/* left */}
        <div className="flex gap-3">
          <ToneDot tone={item.tone} />

          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray">
              {item.title}{" "}
              {item.refText ? (
                <span className="text-primary">{item.refText}</span>
              ) : null}
            </p>

            <p className="mt-2 text-xs text-gray leading-relaxed max-w-[680px]">
              {item.description}
            </p>

            {/* meta row */}
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-gray">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                <span>{item.timeText}</span>
              </div>

              <ActivityBadge status={item.status} />
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex items-center gap-3">
          {item.showDetails ? (
            <button
              type="button"
              onClick={() => null}
              className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-2"
            >
              বিস্তারিত দেখুন <span aria-hidden>→</span>
            </button>
          ) : null}

          {item.showDismiss ? (
            <button
              type="button"
              onClick={() => null}
              className="text-xs font-semibold text-gray hover:underline inline-flex items-center gap-2"
            >
              সরিয়ে দিন <span aria-hidden>×</span>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
