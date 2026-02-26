"use client";

import { useMemo, useState } from "react";
import { Trash2, Minus, Plus } from "lucide-react";
import { CartItem } from "@/app/(office)/office/types/cart";
import Card from "@/components/cards/card";
import { formatBDT } from "@/app/(office)/office/dashboard/procurement/[id]/cart/_components/money";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function CartItemCard({
  item,
  onRemove,
}: {
  item: CartItem;
  onRemove: () => void;
}) {
  const [qty, setQty] = useState(item.qty);
  const [spec, setSpec] = useState(item.specText);

  const subtotal = useMemo(() => item.unitPrice * qty, [item.unitPrice, qty]);

  const vatAmt = useMemo(
    () => (subtotal * item.vatPercent) / 100,
    [subtotal, item.vatPercent],
  );
  const aitAmt = useMemo(
    () => (subtotal * item.aitPercent) / 100,
    [subtotal, item.aitPercent],
  );
  const svcVatAmt = useMemo(
    () => (subtotal * item.serviceVatPercent) / 100,
    [subtotal, item.serviceVatPercent],
  );

  const total = subtotal + vatAmt + aitAmt + svcVatAmt;

  const dec = () => setQty((v) => (v <= 1 ? 1 : v - 1));
  const inc = () => setQty((v) => v + 1);

  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-black">{item.title}</p>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-medium-gray">
              <span>Code: {item.code}</span>
              <span className="px-2 py-1 rounded-full bg-off-white border border-primary-color/10 text-primary-color text-xs font-semibold">
                {item.stockLabel}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={cn(
                "px-3 py-2 rounded-md text-sm font-semibold border",
                item.type === "product"
                  ? "bg-off-white text-primary-color border-primary-color/15"
                  : "bg-off-white text-primary-color border-primary-color/15",
              )}
            >
              {item.type === "product" ? "পণ্য (Product)" : "সেবা (Service)"}
            </span>

            <button
              type="button"
              onClick={onRemove}
              className="h-10 w-10 rounded-md border border-primary-color/10 flex items-center justify-center active:scale-[0.97]"
              aria-label="delete"
            >
              <Trash2 className="w-4 h-4 text-medium-gray" />
            </button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-semibold text-primary-color">
              স্পেসিফিকেশন (Specification)
            </p>
            <textarea
              value={spec}
              onChange={(e) => setSpec(e.target.value)}
              placeholder="প্রোডাক্ট সম্পর্কে বিস্তারিত লিখুন"
              className="
                mt-2 w-full min-h-[90px] rounded-md p-3
                bg-off-white border border-primary-color/10
                outline-none focus:border-primary-color/30
                text-black placeholder:text-medium-gray resize-none
              "
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-primary-color">
              পণ্যের বিবরণ পত্র আপলোড (File upload)
            </p>
            <div
              className="
                mt-2 h-[90px] rounded-md
                bg-off-white border border-dashed border-primary-color/20
                flex items-center justify-center text-sm text-medium-gray
              "
            >
              {item.attachmentLabel}
            </div>
          </div>
        </div>

        <div className="mt-5 border-t border-primary-color/10 pt-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MiniBox
              label="ইউনিট বাজেট"
              value={`৳ ${formatBDT(item.unitPrice)}`}
              helper={item.recommendedRangeBn}
            />
            <MiniBox
              label="ভ্যাট (%)"
              value={`${item.vatPercent}%`}
              helper={`৳ ${formatBDT(vatAmt)}`}
            />
            <MiniBox
              label="আইটি (%)"
              value={`${item.aitPercent}%`}
              helper={`৳ ${formatBDT(aitAmt)}`}
            />
            <MiniBox
              label="বিবিধ ভ্যাট (%)"
              value={`${item.serviceVatPercent}%`}
              helper={`৳ ${formatBDT(svcVatAmt)}`}
            />
          </div>

          <div className="mt-5 flex items-end justify-between gap-4">
            <div className="w-full max-w-[320px]">
              <p className="text-sm font-semibold text-black mb-2">পরিমাণ</p>
              <div className="h-11 rounded-md border border-primary-color/15 bg-off-white flex items-center overflow-hidden">
                <button
                  type="button"
                  onClick={dec}
                  className="w-12 h-full flex items-center justify-center active:scale-[0.97]"
                >
                  <Minus className="w-4 h-4 text-medium-gray" />
                </button>
                <div className="flex-1 text-center text-black font-semibold">
                  {qty}
                </div>
                <button
                  type="button"
                  onClick={inc}
                  className="w-12 h-full flex items-center justify-center active:scale-[0.97]"
                >
                  <Plus className="w-4 h-4 text-medium-gray" />
                </button>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-medium-gray">মোট আইটেমের বাজেট</p>
              <p className="text-2xl font-extrabold text-primary-color">
                ৳ {formatBDT(total)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function MiniBox({
  label,
  value,
  helper,
}: {
  label: string;
  value: string;
  helper: string;
}) {
  return (
    <div className="rounded-md border border-primary-color/10 bg-white p-3">
      <p className="text-xs text-medium-gray">{label}</p>
      <p className="mt-1 text-base font-semibold text-black">{value}</p>
      <p className="mt-2 inline-flex px-2 py-1 rounded-md bg-off-white text-xs text-primary-color border border-primary-color/10">
        {helper}
      </p>
    </div>
  );
}
