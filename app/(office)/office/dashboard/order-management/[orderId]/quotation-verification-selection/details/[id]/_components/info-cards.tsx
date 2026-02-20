"use client";

import { ShieldCheck, Truck } from "lucide-react";
import Card from "@/components/cards/card";
import {
  TimelineInfo,
  WarrantyInfo,
} from "@/app/(office)/office/types/quotation-verification-details-types";

export default function InfoCards({
  timeline,
  warranty,
}: {
  timeline: TimelineInfo;
  warranty: WarrantyInfo;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <Card className="p-5">
        <div className="flex items-start gap-3">
          <Truck className="h-5 w-5 text-orange" />
          <div>
            <p className="text-sm text-black font-semibold">
              সরবরাহের সময়সীমা
            </p>
            <p className="mt-2 text-2xl font-bold text-black">
              {timeline.supplierDays} দিন
            </p>
            <p className="mt-1 text-xs text-medium-gray">
              {timeline.supplierSubtitle}
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex items-start gap-3">
          <Truck className="h-5 w-5 text-orange" />
          <div>
            <p className="text-sm text-black font-semibold">
              ফেরতযোগ্য সময়সীমা
            </p>
            <p className="mt-2 text-2xl font-bold text-black">
              {timeline.feasibleDays} দিন
            </p>
            <p className="mt-1 text-xs text-medium-gray">
              {timeline.feasibleSubtitle}
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex items-start gap-3">
          <ShieldCheck className="h-5 w-5 text-blue" />
          <div>
            <p className="text-sm text-black font-semibold">ওয়ারেন্টি</p>
            <p className="mt-2 text-2xl font-bold text-black">
              {warranty.years} বছর
            </p>
            <span className="mt-2 inline-flex rounded-md bg-off-white px-3 py-1 text-xs text-blue border border-blue/20">
              {warranty.note}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
