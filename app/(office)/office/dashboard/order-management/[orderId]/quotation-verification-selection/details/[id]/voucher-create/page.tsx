"use client";

import VoucherEntryCard from "@/app/(office)/office/dashboard/order-management/[orderId]/quotation-verification-selection/details/[id]/voucher-create/_components/voucher-entry-card";
import VoucherHintBar from "@/app/(office)/office/dashboard/order-management/[orderId]/quotation-verification-selection/details/[id]/voucher-create/_components/voucher-hint-bar";
import VoucherSummaryCard from "@/app/(office)/office/dashboard/order-management/[orderId]/quotation-verification-selection/details/[id]/voucher-create/_components/voucher-summary-card";
import { demoVoucherEntry } from "@/app/(office)/office/dummy-data/voucher-entry-data";
import Breadcrumb from "@/components/breadCrumb";
import BackButton from "@/components/buttons/back-button";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";

export default function VoucherInfoEntryPage() {
  return (
    <div>
      <div className="py-6">
        <Breadcrumb
          items={[
            { label: "হোম", href: "/" },
            { label: "অর্ডার", href: "" },
            { label: "অর্ডারের বিস্তারিত", href: "#" },
            { label: "কোটেশন বিস্তারিত", href: "#" },
            { label: "অফিস পেমেন্ট", href: "#" },
            { label: "ভাউচার তৈরি" },
          ]}
        />

        <div className="mt-4 flex items-start justify-between gap-4">
          <div className="flex gap-3">
            <BackButton />
            <div>
              <h1 className="text-2xl font-semibold text-black">
                ভাউচার তথ্য এন্ট্রি
              </h1>
              <p className="text-sm text-medium-gray mt-1">
                আপনার চাহিদা অনুযায়ী ভাউচার তৈরি করুন
              </p>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-white border border-primary-color/15 text-sm text-medium-gray">
            {demoVoucherEntry.headerIdBn}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <VoucherSummaryCard model={demoVoucherEntry} />
          <VoucherEntryCard model={demoVoucherEntry} />
        </div>

        <div className="mt-6">
          <VoucherHintBar />
        </div>
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 bg-white border-t border-primary-color/10">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-end gap-3">
          <SecondaryButton className="px-8 py-2">বাতিল</SecondaryButton>
          <PrimaryButton className="px-8 py-2">
            ভাউচার নিশ্চিত করুন
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
