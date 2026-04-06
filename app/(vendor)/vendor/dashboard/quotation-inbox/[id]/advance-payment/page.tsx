"use client";

import AdvanceRateCard from "./_components/advance-rate-card";
import InfoNoteCard from "./_components/info-note-card";
import OrderSummaryCard from "./_components/order-summary-card";
import PaymentMethodCard from "./_components/payment-method-card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="px-6 py-6 space-y-6">
      {/* ===== Page Header ===== */}
      <div className="flex items-start justify-between">
        <div>
          <Link
            href="/vendor/quotation-inbox"
            className="inline-flex items-center gap-2 text-xs font-semibold text-light-gray hover:text-gray"
          >
            <ArrowLeft size={14} />
            অর্ডারে ফিরে যান
          </Link>

          <h1 className="mt-2 text-xl font-extrabold text-gray">
           অগ্রিম পেমেন্ট অনুরোধ
          </h1>

          <p className="mt-1 text-xs font-semibold text-light-gray">
            চুক্তিভিত্তিক ক্রয়াদেশ RFQ-2024-DH-09
          </p>
        </div>

        {/* status badge */}
        <span className="rounded-xl border border-gray/10 bg-secondary/40 px-4 py-2 text-xs font-extrabold text-primary-color">
          পেমেন্ট ধরণ
        </span>
      </div>

      {/* ===== Main Layout ===== */}
      <div className="grid grid-cols-[360px_1fr] gap-6">
        {/* left */}
        <div className="space-y-4">
          <OrderSummaryCard />
          <PaymentMethodCard />
          <InfoNoteCard />
        </div>

        {/* right */}
        <AdvanceRateCard />
      </div>
    </div>
  );
}
