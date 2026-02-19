"use client";

import type { ProcurementProduct } from "@/app/(office)/office/types/procurement-product-type";
import PrimaryButton from "@/components/buttons/primary-button";
import Card from "@/components/cards/card";

const bnMoney = (n: number) => `৳${n.toLocaleString("en-US")}`;

export default function SelectedCart({
  selected,
  onRemove,
}: {
  selected: ProcurementProduct[];
  onRemove: (id: string) => void;
}) {
  const total = selected.reduce(
    (sum, p) => sum + p.quantity * p.unitPriceMin,
    0,
  );

  return (
    <Card className="p-0 overflow-hidden">
      <div className="flex items-center justify-between bg-off-white px-5 py-4">
        <div className="font-semibold text-black">নির্বাচিত পণ্য তালিকা</div>
        <div className="h-7 w-7 rounded-full bg-primary-color text-white flex items-center justify-center text-sm">
          {selected.length}
        </div>
      </div>

      <div className="p-5 space-y-4">
        {selected.length === 0 ? (
          <div className="text-sm text-light-gray">
            এখনও কোনো পণ্য যোগ করা হয়নি।
          </div>
        ) : (
          selected.map((p) => (
            <div
              key={p.id}
              className="flex items-start justify-between gap-3 border-b border-primary-color/10 pb-3"
            >
              <div className="min-w-0">
                <div className="font-semibold text-black truncate">
                  {p.name}
                </div>
                <div className="mt-1 text-sm text-light-gray">
                  {p.quantity} x {bnMoney(p.unitPriceMin)}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="font-semibold text-primary-color">
                  {bnMoney(p.quantity * p.unitPriceMin)}
                </div>
                <button
                  onClick={() => onRemove(p.id)}
                  className="text-light-gray hover:text-red"
                  aria-label="remove"
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}

        <div className="flex items-center justify-between pt-2">
          <div className="font-semibold text-black">সর্বমোট (আনুমানিক)</div>
          <div className="font-semibold text-primary-color">
            {bnMoney(total)}
          </div>
        </div>

        <PrimaryButton className="w-full h-12 text-base">
          চাহিদাপত্র সম্পন্ন করুন →
        </PrimaryButton>
      </div>
    </Card>
  );
}
