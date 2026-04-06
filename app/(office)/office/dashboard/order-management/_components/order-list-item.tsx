"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  CalendarDays,
  ChevronRight,
  Pencil,
  Trash2,
  ArrowRight,
  Package,
} from "lucide-react";

import Card from "@/components/cards/card";
import OrderStepper from "@/app/(office)/office/_components/order-stepper";

import type { Orders } from "@/app/(office)/office/types/order-list-type";
import {
  badgeStyle,
  cn,
  leftIcon,
  mapStepper,
  statusAccent,
} from "./order-helpers";

function toBnDigits(n: number) {
  const map: Record<string, string> = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };
  return String(n)
    .split("")
    .map((c) => map[c] ?? c)
    .join("");
}

function iconBoxBg(status: Orders["status"]) {
  if (status === "shipped") return "bg-blue/10";
  if (status === "pending_quote") return "bg-red/10";
  if (status === "draft") return "bg-green/10";
  return "bg-primary-color/10";
}

export default function OrderListItem({ o }: { o: Orders }) {
  const router = useRouter();

  const showStepper =
    o.status === "active" ||
    o.status === "shipped" ||
    o.status === "previous" ||
    o.status === "received";

  const hasAccent =
    o.status === "shipped" ||
    o.status === "received" ||
    o.status === "pending_quote" ||
    o.status === "draft";

  const stepCurrent = showStepper
    ? mapStepper(o.status, o.stepCurrent)
    : undefined;

  const totalAmountText =
    (o.status === "active" ||
      o.status === "shipped" ||
      o.status === "received" ||
      o.status === "previous") &&
    o.totalAmountText
      ? o.totalAmountText
      : null;

  const dueAmountText =
    (o.status === "active" ||
      o.status === "shipped" ||
      o.status === "received" ||
      o.status === "previous") &&
    o.dueAmountText
      ? o.dueAmountText
      : null;

  const trackingCode =
    (o.status === "shipped" || o.status === "received") && o.trackingCode
      ? o.trackingCode
      : null;

  const quotesReceivedCount =
    o.status === "pending_quote" ? o.quotesReceivedCount : null;

  const peopleCount = o.status === "pending_quote" ? o.peopleCount : undefined;

  const draftDue = o.status === "draft" ? (o.dueDateText ?? o.meta1) : null;

  const draftItems =
    o.status === "draft" ? (o.itemsAddedText ?? o.meta2) : null;

  const handlePendingQuote = () => {
    if (o.status !== "pending_quote") return;
    const base = `/office/dashboard/order-management/${o.id}`;
    const count = o.quotesReceivedCount ?? 0;
    if (count <= 0) {
      router.push(`${base}/quotation-awaiting`);
      return;
    }
    router.push(`${base}/quotation-verification-selection`);
  };

  return (
    <Card
      className={cn(
        "relative rounded-md bg-white p-5 shadow-sm",
        hasAccent &&
          "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-l-md",
        hasAccent && statusAccent(o.status),
      )}
    >
      <div className="flex items-center gap-4">
        {/* Left: icon + content */}
        <div className="flex flex-1 items-start gap-4">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-md",
              iconBoxBg(o.status),
            )}
          >
            {leftIcon(o.status)}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-base font-extrabold text-primary-color">
                {o.ref}
              </p>

              <span
                className={cn(
                  "rounded-md px-2 py-1 text-xs font-extrabold",
                  badgeStyle(o.status),
                )}
              >
                {o.badgeLabel}
              </span>
            </div>

            <p className="mt-1 text-sm font-bold text-black">{o.title}</p>

            {/* meta lines (active/shipped/pending) */}
            {(o.meta1 || o.meta2) && o.status !== "draft" && (
              <div className="mt-1 text-xs text-light-gray">
                {o.meta1 && (
                  <p className="flex items-center gap-2">
                    <span>{o.meta1}</span>
                  </p>
                )}

                {o.meta2 && (
                  <p className="flex items-center gap-2">
                    <span>{o.meta2}</span>

                    {/* shipped: tracking pill */}
                    {trackingCode && (
                      <span className="rounded-full bg-off-white px-2 py-[2px] text-[11px] font-bold text-black">
                        {trackingCode}
                      </span>
                    )}
                  </p>
                )}
              </div>
            )}

            {/* amounts line (active/shipped/previous) */}
            {(totalAmountText || dueAmountText) && (
              <p className="mt-2 text-sm font-extrabold text-black">
                মোট মূল্যঃ {totalAmountText ?? "—"} • বকেয়াঃ{" "}
                {dueAmountText ?? "—"}
              </p>
            )}

            {/* draft bottom meta (with icons) */}
            {o.status === "draft" && (
              <div className="mt-3 flex flex-col gap-2 text-xs text-light-gray">
                {draftDue && (
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-light-gray" />
                    <span>{draftDue}</span>
                  </div>
                )}
                {draftItems && (
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-light-gray" />
                    <span>{draftItems}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Middle: stepper */}
        {showStepper && (
          <div className="hidden md:block flex-[1.4]">
            <OrderStepper current={stepCurrent!} />
          </div>
        )}

        {/* Right: actions (match screenshot) */}
        {o.status === "draft" ? (
          <div className="ml-auto hidden items-center gap-3 md:flex">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-md bg-off-white hover:opacity-90"
              aria-label="Delete draft"
              onClick={() => console.log("delete draft", o.id)}
            >
              <Trash2 className="h-4 w-4 text-light-gray" />
            </button>

            <button
              type="button"
              className="flex h-10 items-center gap-2 rounded-md bg-off-white px-4 text-sm font-extrabold text-black hover:opacity-90"
              onClick={() => console.log("edit draft", o.id)}
            >
              <Pencil className="h-4 w-4 text-light-gray" />
              এডিট
            </button>

            <button
              type="button"
              className="flex h-10 items-center gap-2 rounded-md bg-primary-color px-5 text-sm font-extrabold text-white hover:opacity-90"
              onClick={() => router.push(`#`)}
            >
              অর্ডার সম্পন্ন করুন <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : o.status === "pending_quote" ? (
          <div className="ml-auto flex flex-col items-end gap-2">
            {typeof peopleCount === "number" && peopleCount > 0 && (
              <div className="flex items-center">
                {Array.from({ length: Math.min(2, peopleCount) }).map(
                  (_, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "h-8 w-8 rounded-full border-2 border-white bg-primary-color",
                        idx !== 0 && "-ml-2",
                      )}
                    />
                  ),
                )}
                {peopleCount > 3 && (
                  <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-off-white text-xs font-extrabold text-light-gray">
                    +{peopleCount - 3}
                  </div>
                )}
              </div>
            )}

            <p className="text-xs font-semibold text-black">
              {toBnDigits(quotesReceivedCount ?? 0)} টি কোটেশন রিসিভ হয়েছে
            </p>

            <button
              type="button"
              className="flex items-center gap-2 text-sm font-extrabold text-primary-color hover:opacity-90"
              onClick={handlePendingQuote}
            >
              রিভিউ এবং সিলেক্ট <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="ml-auto flex items-center justify-end"
            aria-label="View"
            onClick={() =>
              router.push(
                `/office/dashboard/order-management/${o.id}/order-details`,
              )
            }
          >
            <ArrowRight className="text-medium-gray" />
          </button>
        )}
      </div>

      {/* Stepper for mobile (below, like responsive) */}
      {showStepper && (
        <div className="mt-4 block md:hidden">
          <OrderStepper current={stepCurrent!} />
        </div>
      )}
    </Card>
  );
}
