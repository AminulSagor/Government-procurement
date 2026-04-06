"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Breadcrumb from "@/components/breadCrumb";

export default function PageHeader({
  title,
  rfqCode,
  departmentLabel,
  statusLabel,
}: {
  title: string;
  rfqCode: string;
  departmentLabel: string;
  statusLabel: string;
}) {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "হোম", href: "/office/dashboard" },
          { label: "অর্ডার", href: "/office/dashboard/order-management" },
          { label: "অর্ডারের বিবরণ", href: "#" },
          { label: "কোটেশন বিবরন" },
        ]}
      />

      <div className="mt-4 flex items-center justify-between gap-4">
        <Link href="#" className="inline-flex items-center gap-2 text-sm text-primary-color hover:underline">
          <ArrowLeft className="h-4 w-4" />
          ফিরে যান
        </Link>

        <div className="inline-flex items-center gap-2 rounded-full bg-[#fff7e6] px-4 py-2 text-sm text-orange">
          <span className="h-2 w-2 rounded-full bg-orange" />
          {statusLabel}
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-2xl font-bold text-black">{title}</h1>

        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-primary-color border border-primary-color/20">
            অর্ডার রেফারেন্স: <span className="ml-1 font-semibold">{rfqCode}</span>
          </span>
          <span className="text-medium-gray">{departmentLabel}</span>
        </div>
      </div>
    </div>
  );
}
