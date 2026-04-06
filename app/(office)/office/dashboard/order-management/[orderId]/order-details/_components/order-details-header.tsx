"use client";

import React from "react";
import { ArrowLeft, Printer } from "lucide-react";
import { useRouter } from "next/navigation";

import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import { OrderDetails } from "@/app/(office)/office/types/order-details-type";
import Breadcrumb from "@/components/breadCrumb";

function badgeStyle(status: OrderDetails["status"]) {
  if (status === "shipped") return "bg-blue/10 text-blue";
  if (status === "previous") return "bg-green/10 text-green";
  return "bg-primary-color/10 text-primary-color";
}

export default function OrderDetailsHeader({ order }: { order: OrderDetails }) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb
        items={[
          { label: "হোম", href: "/office/dashboard" },
          { label: "অর্ডার", href: "/office/dashboard/order-management" },
          { label: "অর্ডারের বিস্তারিত" },
        ]}
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <button
            type="button"
            className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-off-white text-primary-color hover:brightness-95"
            onClick={() => router.back()}
            aria-label="Back"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-lg font-extrabold text-black">
                অর্ডার {order.ref}
              </h1>
              <span
                className={`rounded-md px-2 py-1 text-xs font-extrabold ${badgeStyle(order.status)}`}
              >
                {order.statusLabel}
              </span>
            </div>

            <p className="mt-1 text-xs text-light-gray">
              {order.createdMetaText}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <SecondaryButton className="px-4 py-2 text-sm flex items-center gap-2">
            <Printer className="h-4 w-4" />
            চালান প্রিন্ট করুন
          </SecondaryButton>

          {order.canConfirmReceive ? (
            <PrimaryButton className="px-4 py-2 text-sm flex items-center gap-2">
              পণ্য গ্রহণ করুন
            </PrimaryButton>
          ) : null}
        </div>
      </div>
    </div>
  );
}
