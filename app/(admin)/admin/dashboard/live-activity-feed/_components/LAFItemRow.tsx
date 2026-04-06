// app/(admin)/analytics/live-activity-feed/_components/LAFItemRow.tsx
"use client";

import { ArrowRight, X, Clock3, CheckCircle2, TriangleAlert, CreditCard, Send } from "lucide-react";
import type { LAFItem } from "../_types/live-activity-feed.types";
import LAFMetaRow from "./LAFMetaRow";

function dotClass(dot: LAFItem["dot"]) {
  if (dot === "green") return "bg-[var(--color-green)]";
  if (dot === "blue") return "bg-[var(--color-blue)]";
  if (dot === "orange") return "bg-[var(--color-orange)]";
  return "bg-[rgba(100,116,139,0.35)]";
}

function statusIcon(type: LAFItem["statusType"]) {
  if (type === "approved") return CheckCircle2;
  if (type === "new-opportunity") return CheckCircle2;
  if (type === "system-alert") return TriangleAlert;
  if (type === "payment-received") return CreditCard;
  return Send;
}

function statusColor(type: LAFItem["statusType"]) {
  if (type === "approved") return "text-[var(--color-green)]";
  if (type === "new-opportunity") return "text-[var(--color-blue)]";
  if (type === "system-alert") return "text-[var(--color-orange)]";
  if (type === "payment-received") return "text-[var(--color-green)]";
  return "text-[var(--color-medium-gray)]";
}

export default function LAFItemRow({ item }: { item: LAFItem }) {
  const StatusIcon = statusIcon(item.statusType);

  return (
    <div className="px-6 py-5">
      <div className="flex items-start justify-between gap-6">
        {/* Left content */}
        <div className="flex items-start gap-3">
          <span className={["mt-2 h-2.5 w-2.5 rounded-full", dotClass(item.dot)].join(" ")} />

          <div className="min-w-0">
            <h3 className="truncate text-[15px] font-extrabold text-[var(--color-black)]">
              {item.titleBn}{" "}
              {item.codeText ? (
                <span className="font-extrabold text-[var(--color-primary-color)]">
                  {item.codeText}
                </span>
              ) : null}
            </h3>

            <p className="mt-1 text-[13px] font-medium text-[var(--color-light-gray)]">
              {item.descriptionBn}
            </p>

            <div className="mt-3">
              <LAFMetaRow
                timeBn={item.timeBn}
                statusLabel={item.statusLabel}
                StatusIcon={StatusIcon}
                statusClass={statusColor(item.statusType)}
              />
            </div>
          </div>
        </div>

        {/* Right action */}
        <div className="shrink-0 pt-2">
          {item.rightActionIcon === "close" ? (
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-medium-gray)] hover:text-[var(--color-black)]"
            >
              {item.rightMetaText ?? "সরিয়ে দিন"}
              <X className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-color)] hover:opacity-90"
            >
              {item.rightActionText ?? "বিস্তারিত দেখুন"}
              <ArrowRight className="h-4 w-4" />
            </button>
          )}

          {item.rightMetaText && item.rightActionIcon !== "close" ? (
            <div className="mt-2 text-right text-xs font-semibold text-[var(--color-light-gray)]">
              {item.rightMetaText}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
