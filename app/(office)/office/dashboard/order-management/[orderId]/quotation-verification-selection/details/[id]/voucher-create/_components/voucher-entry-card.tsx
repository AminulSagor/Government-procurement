"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { VoucherEntryModel } from "@/app/(office)/office/types/voucher-entry-types";
import {
  calcVoucher,
  formatBDT,
} from "@/app/(office)/office/dashboard/order-management/[orderId]/quotation-verification-selection/details/[id]/voucher-create/_components/voucher-calc";
import Card from "@/components/cards/card";

export default function VoucherEntryCard({
  model,
}: {
  model: VoucherEntryModel;
}) {
  const [unitVoucher, setUnitVoucher] = React.useState<number>(
    model.enteredUnitVoucherPrice,
  );
  const c = calcVoucher(model.base, unitVoucher);

  return (
    <Card className="p-0 overflow-hidden shadow-sm">
      <div className="px-5 py-4 bg-primary-color text-white flex items-center gap-2">
        <span className="opacity-90">≡</span>
        <h3 className="font-extrabold">ভাউচার তথ্য প্রদান করুন</h3>
      </div>

      <div className="p-5">
        <label className="text-sm font-semibold text-black">
          প্রতি ইউনিট ভাউচার মূল্য (৳)
        </label>

        <div className="mt-2 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-medium-gray">
            ৳
          </span>
          <Input
            inputMode="numeric"
            value={unitVoucher === 0 ? "" : String(unitVoucher)}
            onChange={(e) => setUnitVoucher(Number(e.target.value || 0))}
            className="h-12 pl-8 font-extrabold text-black"
            placeholder="০"
          />
        </div>

        <p className="mt-2 text-xs text-medium-gray">
          ভাউচারের প্রতিটি মূল্য অনুযায়ী ইনপুট প্রদান করুন
        </p>

        <div className="mt-5">
          <p className="text-xs font-semibold text-medium-gray">
            স্বয়ংক্রিয় হিসাব (AUTO - CALCULATED)
          </p>

          <div className="mt-3 rounded-lg border border-primary-color/10 bg-off-white p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-medium-gray">
                মোট ভাউচার মূল্য (৳)
              </span>
              <span className="text-base font-extrabold text-black">
                {formatBDT(c.totalVoucher)}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <MiniStat
                label={`ভ্যাট (${model.base.vatPercent}%)`}
                value={formatBDT(c.vatAmount)}
              />
              <MiniStat
                label={`আইটি (${model.base.aitPercent}%)`}
                value={formatBDT(c.aitAmount)}
              />
              <MiniStat
                label={`অতিরিক্ত শুল্ক (${model.base.dutyPercent}%)`}
                value={formatBDT(c.dutyAmount)}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-primary-color/10 bg-[rgba(231,53,8,0.08)] p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-extrabold text-red">
              ভাউচার ও চূড়ান্ত পার্থক্য
            </p>
            <p className="text-xs text-medium-gray mt-1">
              চূড়ান্ত মূল্যের তুলনায় অতিরিক্ত
            </p>
          </div>
          <div className="text-right">
            <p className="text-xl font-extrabold text-red">
              {formatBDT(Math.abs(c.difference))}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-primary-color/10 bg-white p-3">
      <p className="text-xs text-medium-gray">{label}</p>
      <p className="mt-2 text-sm font-extrabold text-black">{value}</p>
    </div>
  );
}
