"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Breadcrumb from "@/components/breadCrumb";

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
          { label: "অর্ডারের বিবরণ", href: "#" },
          { label: "কোটেশন বিবরন", href: "#" },
          { label: "অগ্রিম পেমেন্ট" },
        ]}
      />

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <Link
            href="#"
            className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-medium-gray/20 bg-white text-primary-color hover:brightness-105"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-black">{title}</h1>
            <p className="mt-1 text-sm text-medium-gray">
              অর্ডার <span className="text-primary-color">{orderCode}</span> • {updatedLabel}
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
