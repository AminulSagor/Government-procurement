"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Breadcrumb from "@/components/breadCrumb";
import BackButton from "@/components/buttons/back-button";

export default function PageHeader({
  title,
  orderCode,
  updatedLabel,
  statusLabel,
}: {
  title: string;
  orderCode: string;
  updatedLabel: string;
  statusLabel: string;
}) {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "হোম", href: "/office/dashboard" },
          { label: "অর্ডার", href: "/office/dashboard/order-management" },
          {
            label: "অর্ডারের বিস্তারিত",
            href: "/office/dashboard/order-management/p1/quotation-verification-selection/details/v1",
          },
          { label: "অগ্রিম পেমেন্ট" },
        ]}
      />

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <BackButton />

          <div>
            <h1 className="text-2xl font-bold text-black">{title}</h1>
            <p className="mt-1 text-sm text-medium-gray">
              অর্ডার <span className="text-primary-color">{orderCode}</span> •{" "}
              {updatedLabel}
            </p>
          </div>
        </div>

        <span className="shrink-0 rounded-full border border-blue/20 bg-off-white px-4 py-2 text-sm text-blue">
          ● {statusLabel}
        </span>
      </div>
    </div>
  );
}
