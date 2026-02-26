"use client";

import { SupplierInfo } from "@/app/(office)/office/types/quotation-verification-details-types";
import Card from "@/components/cards/card";

export default function SupplierCard({ supplier }: { supplier: SupplierInfo }) {
  return (
    <Card className="p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-color/25">
          <span className="text-primary-color font-semibold">🏪</span>
        </div>

        <div className="w-full">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-base font-semibold text-black">
              সরবরাহকারীর তথ্য
            </h3>
            <div className="shrink-0 rounded-md border border-orange/30 bg-[#fff7e6] px-3 py-1 text-orange">
              ⭐ {supplier.ratingLabel}
            </div>
          </div>

          <div className="mt-4 space-y-3 text-sm">
            <div>
              <p className="text-medium-gray">নাম</p>
              <p className="font-semibold text-black">{supplier.name}</p>
            </div>

            <div>
              <p className="text-medium-gray">ঠিকানা</p>
              <p className="text-black">{supplier.address}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
