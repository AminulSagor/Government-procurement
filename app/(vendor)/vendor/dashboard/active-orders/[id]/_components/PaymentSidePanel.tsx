"use client";

import React from "react";
import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import { Info, Phone, Eye, CheckCircle2, Truck } from "lucide-react";
import { Order } from "../_types/order.types";
import { redirect } from "next/navigation";


function money(n: number) {
  return `৳ ${n.toLocaleString("en-US")}`;
}

function SummaryRow({
  label,
  value,
  valueClassName,
  rightExtra,
}: {
  label: string;
  value: string;
  valueClassName?: string;
  rightExtra?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-sm font-semibold text-light-gray">{label}</p>

      <div className="flex items-center gap-2">
        {rightExtra}
        <p className={cn("text-sm font-extrabold tabular-nums", valueClassName)}>
          {value}
        </p>
      </div>
    </div>
  );
}

function KV({
  label,
  value,
  align = "left",
  valueClassName,
}: {
  label: string;
  value: React.ReactNode;
  align?: "left" | "right";
  valueClassName?: string;
}) {
  return (
    <div className={cn(align === "right" && "text-right")}>
      <p className="text-xs font-semibold text-light-gray">{label}</p>
      <div className={cn("mt-1 text-xs font-extrabold text-gray", valueClassName)}>
        {value}
      </div>
    </div>
  );
}

export default function PaymentSidePanel({
  order,
  variant,
  onOpenProof,
  
}: {
  order: Order;
  variant: "pending" | "advance_paid";
  onOpenProof: () => void;
}) {
  const remaining = Math.max(order.totalPayable - order.advancePaid, 0);
  const advancePct =
    order.totalPayable > 0 ? Math.round((order.advancePaid / order.totalPayable) * 100) : 0;

  const isPending = variant === "pending";

  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-6">
      {/* title */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary">
          <span className="h-3 w-3 rounded-sm bg-primary" />
        </div>
        <p className="text-sm font-extrabold text-gray">পেমেন্ট সারসংক্ষেপ</p>
      </div>

      {/* summary */}
      <div className="mt-5 space-y-4">
        <SummaryRow
          label="সর্বমোট মূল্য (Total Payable)"
          value={money(order.totalPayable)}
        />

        <SummaryRow
          label="অগ্রিম পেমেন্ট (Advance)"
          value={money(order.advancePaid)}
          valueClassName="text-green"
          rightExtra={
            <span className="rounded-full border border-green/20 bg-green/10 px-2 py-[2px] text-[11px] font-extrabold text-green">
              {advancePct}%
            </span>
          }
        />

        <SummaryRow label="বাকী (Remaining)" value={money(remaining)} />
      </div>

      {/* ====== PENDING VERIFICATION VIEW (Screenshot-1) ====== */}
      {isPending ? (
        <>
          {/* request status box */}
          <div className="mt-6 rounded-2xl border border-gray/15 bg-secondary p-5">
            <p className="text-sm font-extrabold text-gray">
              পেমেন্ট অনুরোধের স্থিতি (Payment Request Status)
            </p>

            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4">
              <KV label="অনুরোধ আইডি:" value="#ADV-9921" />
              <KV label="তারিখ:" value={order.lastUpdated} align="right" />

              <KV
                label="অবস্থা:"
                value={
                  <span className="inline-flex rounded-full border border-gray/15 bg-white px-4 py-[6px] text-xs font-extrabold text-gray">
                    অপেক্ষমাণ (Pending)
                  </span>
                }
              />

              <KV
                label="&nbsp;"
                value={
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-light-gray">
                    ⏳ যাচাই অনুরোধের অপেক্ষায়
                  </span>
                }
                align="right"
                valueClassName="text-light-gray"
              />
            </div>

            {/* open dialog button */}
            <button
              type="button"
              onClick={onOpenProof}
              className={cn(
                "mt-5 w-full rounded-xl",
                "border border-gray/15 bg-white",
                "px-4 py-3",
                "text-sm font-extrabold text-primary",
                "flex items-center justify-center gap-2",
                "hover:bg-secondary active:scale-[0.99] transition"
              )}
            >
              <Eye size={16} />
              জমাকৃত প্রমাণপত্র দেখুন
            </button>
          </div>

          {/* info note */}
          <div className="mt-4 rounded-2xl border border-gray/15 bg-secondary p-4">
            <div className="flex items-start gap-3">
              <div className="mt-[2px] flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
                <Info size={14} />
              </div>
              <div>
                <p className="text-xs font-extrabold text-gray">
                  আপনার অগ্রিম পেমেন্টটি যাচাই করা হচ্ছে
                </p>
                <p className="mt-1 text-[11px] font-semibold text-light-gray">
                  যাচাই সম্পন্ন হলে আপনাকে পরবর্তী ধাপে নিয়ে যাওয়া হবে।
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* ====== ADVANCE PAID VIEW (Screenshot-2) ====== */}

          <button
            type="button"
            onClick={() => redirect(`/vendor/dashboard/active-orders/${order.id}/shipment`)}
            className={cn(
              "mt-6 w-full rounded-xl",
              "bg-primary text-white",
              "px-4 py-3",
              "text-sm font-extrabold",
              "flex items-center justify-center gap-2",
              "active:scale-[0.99] transition"
            )}
          >
            <Truck size={16} />
            শিপমেন্ট শুরু করুন
          </button>

          {/* success note */}
          <div className="mt-4 rounded-2xl border border-green/20 bg-green/10 p-4">
            <div className="flex items-start gap-3">
              <div className="mt-[2px] flex h-7 w-7 items-center justify-center rounded-full bg-green text-white">
                <CheckCircle2 size={14} />
              </div>
              <div>
                <p className="text-xs font-extrabold text-green">
                  অগ্রিম পেমেন্ট সফলভাবে সম্পন্ন হয়েছে
                </p>
                <p className="mt-1 text-[11px] font-semibold text-green/80">
                  এখন আপনি শিপমেন্ট প্রসেস শুরু করতে পারবেন।
                </p>
              </div>
            </div>
          </div>

          {/* mini transactions (demo) */}
          <div className="mt-4 rounded-2xl border border-gray/15 bg-white p-4">
            <p className="text-xs font-extrabold text-light-gray">
              TRANSACTIONS (ডেমো)
            </p>

            <div className="mt-3 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-light-gray">Advance paid</span>
                <span className="font-extrabold text-gray">{money(order.advancePaid)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-light-gray">Remaining</span>
                <span className="font-extrabold text-green">{money(remaining)}</span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* divider */}
      <div className="my-6 h-px w-full bg-gray/10" />

      {/* support */}
      <p className="text-xs font-extrabold text-light-gray">SUPPORT CONTACTS</p>

      <div className="mt-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
          <Phone size={16} className="text-light-gray" />
        </div>

        <div>
          <p className="text-xs font-extrabold text-gray">এডমিন অফিস</p>
          <p className="mt-1 text-xs font-semibold text-light-gray">
            +880 1712 345678
          </p>
        </div>
      </div>
    </Card>
  );
}
