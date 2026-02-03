"use client";

import React from "react";
import Card from "@/components/cards/card";
import Link from "next/link";
import { ArrowLeft, ClipboardList, Clock3 } from "lucide-react";
import useCountdown from "../../hooks/use-countdown";
import RfqCostSummary from "../../_components/rfq-cost-summary";
import ProductRequirementsCard from "./product-requirements-card";
import AdvancePaymentCard from "./advance-payment-card";
import LogisticsRouteCard from "./logistics-route-card";

type Props = {
  backHref?: string;

  // requirement
  productTitle?: string;
  qtyText?: string;
  requirements?: string[];

  // countdown
  deadlineMs?: number; // pass from API: new Date(deadlineAt).getTime()

  // cost summary
  subtotal?: number;
  vatPct?: number;
  shipping?: number;

  onSubmit?: () => void;
};

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center rounded-xl bg-secondary px-3 py-3">
        <p className="text-lg font-extrabold text-primary-color leading-none">
          {value}
        </p>
      </div>
      <p className="mt-1 text-[10px] text-light-gray font-medium uppercase">
        {label}
      </p>
    </div>
  );
}

export default function RfqSidePanel({
  backHref = "/vendor/dashboard/quotation-inbox",

  productTitle = "HP LaserJet Pro P1102 Toner (Original)",
  qtyText = "Quantity (5 Units)",
  requirements = [
    "Original / Genuine product",
    "Warranty must be included",
    "Delivery within timeline",
  ],

  // default demo: now + 2d 18h
  deadlineMs = Date.now() + (2 * 24 * 60 * 60 + 18 * 60 * 60) * 1000,

  subtotal = 850000,
  vatPct = 0,
  shipping = 0,

  onSubmit,
}: Props) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(deadlineMs);

  return (
    <div className="space-y-4">
      {/* back */}
      <Link
        href={backHref}
        className="inline-flex items-center border-2 border-primary-color px-2 py-2 rounded-md gap-2 text-xs font-bold text-primary-color hover:text-primary-color hover:bg-primary-color/10 transition"
      >
        <ArrowLeft size={16} />
        ফিরে যান
      </Link>

      {/* time remaining */}
      <Card className="rounded-2xl border border-gray/15 bg-white p-4">
        <div className="flex items-center gap-2">
          <span className="text-primary-color">
            <Clock3 size={16} />
          </span>
          <p className="text-xs font-extrabold text-gray/70">
            সময় বাকি (TIME REMAINING)
          </p>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-2">
          <TimeBox value={String(days).padStart(2, "0")} label="days" />
          <TimeBox value={String(hours).padStart(2, "0")} label="hours" />
          <TimeBox value={String(minutes).padStart(2, "0")} label="minutes" />
          <TimeBox value={String(seconds).padStart(2, "0")} label="seconds" />
        </div>

        {isExpired ? (
          <p className="mt-2 text-[11px] font-semibold text-primary-color">
            সময় শেষ হয়েছে
          </p>
        ) : null}
      </Card>

      <LogisticsRouteCard routeNo="০২" latestDateText="১০ ফেব্রুয়ারি, ২০২৫" />

      {/* requirement details */}
      <ProductRequirementsCard/>

      <AdvancePaymentCard/>
    </div>
  );
}
