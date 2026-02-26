"use client";

import VoucherPaymentForm from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/voucher-payment-form";
import VoucherPaymentInstructions from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/voucher-payment-instructions";
import VoucherPaymentStepper from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/voucher-payment-stepper";
import {
  demoVoucherEntry,
  demoVoucherSteps,
} from "@/app/(office)/office/dummy-data/voucher-payment";
import Breadcrumb from "@/components/breadCrumb";
import BackButton from "@/components/buttons/back-button";

export default function VoucherPaymentEntryPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <div className="py-6">
        <Breadcrumb
          items={[
            { label: "হোম", href: "/" },
            { label: "অর্ডার", href: "/office/dashboard/order-management" },
            {
              label: "অর্ডারের বিস্তারিত",
              href: "/office/dashboard/order-management/4922/order-details",
            },
            { label: "ভাউচার পেমেন্ট" },
          ]}
        />

        <div className="mt-4 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <BackButton />
            <div>
              <h1 className="text-2xl font-semibold text-black">
                ভাউচার পেমেন্ট এন্ট্রি
              </h1>
              <p className="text-sm text-medium-gray mt-1">
                অর্ডার {demoVoucherEntry.orderId} • শেষ আপডেটঃ{" "}
                {demoVoucherEntry.lastUpdatedBn}
              </p>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full text-sm bg-[rgba(29,78,216,0.10)] text-blue border border-blue/20">
            {demoVoucherEntry.statusBn}
          </span>
        </div>

        <div className="mt-5">
          <VoucherPaymentStepper
            current={demoVoucherEntry.step}
            steps={demoVoucherSteps}
          />
        </div>

        <div className="mt-6 flex items-start gap-6">
          <VoucherPaymentInstructions />
          <div className="flex-1">
            <VoucherPaymentForm initial={demoVoucherEntry} />
          </div>
        </div>
      </div>
    </div>
  );
}
