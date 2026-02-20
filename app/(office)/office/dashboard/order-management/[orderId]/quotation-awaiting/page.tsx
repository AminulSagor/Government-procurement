"use client";

import BackPillButton from "@/app/(office)/office/dashboard/order-management/[orderId]/quotation-awaiting/_components/back-pill-button";
import BudgetHeaderBar from "@/app/(office)/office/dashboard/order-management/[orderId]/quotation-awaiting/_components/BudgetHeaderBar";
import FinalizedItemCard from "@/app/(office)/office/dashboard/order-management/[orderId]/quotation-awaiting/_components/FinalizedItemCard";
import QuotationSlipCard from "@/app/(office)/office/dashboard/order-management/[orderId]/quotation-awaiting/_components/QuotationSlipCard";
import StatusPill from "@/app/(office)/office/dashboard/order-management/[orderId]/quotation-awaiting/_components/status-pill";
import WarningBanner from "@/app/(office)/office/dashboard/order-management/[orderId]/quotation-awaiting/_components/WarningBanner";
import { quotationAwaitingDemo } from "@/app/(office)/office/dummy-data/quotation-awaiting.demo";
import { useRouter } from "next/navigation";

export default function QuotationAwaitingPage() {
  const data = quotationAwaitingDemo;
  const router = useRouter();
  return (
    <div className="min-h-screen bg-off-white">
      <div className="py-5">
        {/* top: back + centered status pill */}
        <div className="relative flex items-center">
          <div className="flex-1">
            <BackPillButton
              label={data.top.backLabel}
              onClick={() => router.back()}
            />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <StatusPill label={data.top.statusLabel} />
          </div>

          <div className="flex-1" />
        </div>

        {/* budget bar */}
        <div className="mt-5">
          <BudgetHeaderBar
            budgetCodeText={data.top.budgetCodeLabel}
            balanceLabel={data.top.balanceLabel}
            balanceAmountText={data.top.balanceAmountText}
            progressValue={data.top.progressValue}
          />
        </div>

        {/* main grid */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* left */}
          <div className="lg:col-span-8">
            <WarningBanner text={data.top.warningText} />

            <div className="mt-5 text-base font-bold text-primary-color">
              {data.sectionTitle}
            </div>

            <div className="mt-4 space-y-5">
              {data.items.map((item) => (
                <FinalizedItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* right */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-5">
              <QuotationSlipCard
                slip={data.slip}
                onPrint={() => {}}
                onBack={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
