"use client";

import { useMemo, useState } from "react";
import { ClipboardList, CheckCircle2, ChevronDown } from "lucide-react";
import {
  demoProcurementMethods,
  demoSlip,
} from "@/app/(office)/office/dummy-data/cart-data";
import Card from "@/components/cards/card";
import { formatBDT } from "@/app/(office)/office/dashboard/procurement/[id]/cart/_components/money";
import PrimaryButton from "@/components/buttons/primary-button";

export default function RequisitionSlipPanel() {
  const [method, setMethod] = useState(demoProcurementMethods[0]?.key ?? "dpm");

  const subtotal = useMemo(
    () => demoSlip.lines.reduce((acc, l) => acc + l.qty * l.unitPrice, 0),
    [],
  );

  return (
    <div className="sticky top-6">
      <Card className="p-0 overflow-hidden">
        <div className="p-5">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-md bg-off-white border border-primary-color/10 flex items-center justify-center">
              <ClipboardList className="w-5 h-5 text-primary-color" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Requisition Slip
              </h3>
              <p className="text-sm text-primary-color mt-1">
                Allocated Budget Breakdown • ID:{" "}
                <span className="text-primary-color">
                  {demoSlip.requisitionId}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-color/10" />

        <div className="p-5">
          <div className="flex items-center justify-between text-xs text-medium-gray">
            <span>ITEM DETAILS (QTY X PRICE)</span>
            <span>SUBTOTAL</span>
          </div>

          <div className="mt-4 space-y-5">
            {demoSlip.lines.map((l) => {
              const lineTotal = l.qty * l.unitPrice;
              return (
                <div
                  key={l.id}
                  className="pb-4 border-b border-primary-color/10 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-black">{l.title}</p>
                    <p className="font-extrabold text-black">
                      ৳ {formatBDT(lineTotal)}
                    </p>
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <span className="px-2 py-1 rounded-md bg-off-white border border-primary-color/10 text-black font-semibold">
                      {l.qty}
                    </span>
                    <span className="text-medium-gray">×</span>
                    <span className="px-2 py-1 rounded-md bg-off-white border border-primary-color/10 text-black font-semibold">
                      ৳ {formatBDT(l.unitPrice)}
                    </span>
                    <span className="text-xs text-medium-gray ml-1">BDT</span>
                  </div>

                  <div className="mt-3 inline-flex px-3 py-1 rounded-full bg-off-white border border-primary-color/10 text-xs text-medium-gray">
                    ভ্যাট: ৳ ০, আইটি: ৳ ০, বিবিধ ভ্যাট: ৳ ০
                  </div>
                </div>
              );
            })}

            <div className="pt-4 text-center text-xs text-medium-gray">
              মোট হিসাব স্বয়ংক্রিয়ভাবে আপডেট হয়
            </div>
          </div>
        </div>

        <div className="border-t border-primary-color/10" />

        <div className="p-5">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-black">
              সর্বমোট (Total Estimate)
            </h4>
            <div className="text-xl font-extrabold text-black">
              ৳ {formatBDT(subtotal)}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold text-medium-gray">
              ক্রয় পদ্ধতি (PROCUREMENT METHOD)
            </p>

            <div className="mt-2 relative">
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value as any)}
                className="
                  w-full h-12 rounded-md px-4 pr-10
                  bg-white border border-primary-color/20
                  outline-none focus:border-primary-color/50
                  text-black
                "
              >
                {demoProcurementMethods.map((m) => (
                  <option key={m.key} value={m.key}>
                    {m.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-5 h-5 text-medium-gray absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="mt-3 rounded-md border border-primary-color/10 bg-off-white p-3 text-xs text-medium-gray flex items-start gap-2">
              <span className="text-primary-color mt-[2px]">ⓘ</span>
              <span>
                সরকারি ক্রয় পদ্ধতির জন্য যথাযথ অনুমোদন এবং বাজেট উপ-বিভাজন
                আবশ্যক
              </span>
            </div>
          </div>

          <div className="mt-5">
            <PrimaryButton className="w-full py-3 text-base flex items-center justify-center gap-2">
              Confirm Order <CheckCircle2 className="w-5 h-5" />
            </PrimaryButton>
          </div>
        </div>
      </Card>
    </div>
  );
}
