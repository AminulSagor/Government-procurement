"use client";

import Card from "@/components/cards/card";
import { ClipboardList } from "lucide-react";
import Image from "next/image";

type Props = {
  productName?: string;
  quantity?: number;
  totalAmount?: number;
  imageUrl?: string;
};

export default function OrderSummaryCard({
  productName = "অফিস চেয়ার (আর্গোনমিক)",
  quantity = 5,
  totalAmount = 14000,
  imageUrl = "/images/chair.png",
}: Props) {
  return (
    <Card className="rounded-2xl border border-gray/10 bg-white p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-center gap-2 px-5 py-4 border-b border-light-gray/10">
        <span className="text-primary-color">
          <ClipboardList size={18} />
        </span>
        <p className="text-sm font-extrabold text-gray">
          অর্ডারের সারাংশ
        </p>
      </div>

      {/* body */}
      <div className="px-5 py-4">
        <p className="text-xs font-semibold text-light-gray">
          পণ্যসমূহ
        </p>

        <div className="mt-2 flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-extrabold text-black">
              {productName}
            </p>
            <p className="mt-1 text-xs font-semibold text-light-gray">
              পরিমাণ: {quantity} টি
            </p>
          </div>

          <div className="h-14 w-14 rounded-xl bg-secondary/40 grid place-items-center overflow-hidden">
            <Image
              src={imageUrl}
              alt="product"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        </div>

        <div className="my-4 h-px w-full border-t border-dashed border-light-gray/15" />

        <p className="text-xs font-semibold text-light-gray">
          চুক্তির মোট মূল্য
        </p>

        <p className="mt-2 text-2xl font-extrabold text-black">
          ৳ {totalAmount.toLocaleString("en-US")}
        </p>

        <p className="mt-1 text-xs font-semibold text-light-gray">
          মাত্র চৌদ্দ হাজার টাকা
        </p>
      </div>
    </Card>
  );
}
