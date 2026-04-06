"use client";

import {
  calcVoucher,
  formatBDT,
} from "@/app/(office)/office/dashboard/order-management/[orderId]/quotation-verification-selection/details/[id]/voucher-create/_components/voucher-calc";
import { VoucherEntryModel } from "@/app/(office)/office/types/voucher-entry-types";
import Card from "@/components/cards/card";

export default function VoucherSummaryCard({
  model,
}: {
  model: VoucherEntryModel;
}) {
  const c = calcVoucher(model.base, model.enteredUnitVoucherPrice);

  return (
    <Card className="p-0 overflow-hidden">
      <div className="px-5 py-4 border-b border-primary-color/10">
        <div className="flex items-center gap-2">
          <span className="text-primary-color">🏷️</span>
          <h3 className="text-base font-extrabold text-black">
            সমঝোতা অনুযায়ী ফরম বিবরণ
          </h3>
        </div>
      </div>

      <div className="p-5">
        <div className="rounded-lg border border-primary-color/10 bg-off-white p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-medium-gray">পণ্যের নাম</p>
            <p className="mt-1 font-extrabold text-primary-color">
              {model.item.productNameBn}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-medium-gray">পরিমাণ</p>
            <p className="mt-1 font-extrabold text-black">{model.item.qtyBn}</p>
          </div>
        </div>

        <div className="mt-4 space-y-3 text-sm">
          <Row
            label="আসল একক মূল্য"
            value={formatBDT(model.base.baseUnitPrice)}
          />
          <Row label="মোট চুক্তি মূল্য" value={formatBDT(c.expectedAmount)} />

          <div className="mt-3 pt-3 border-t border-primary-color/10 space-y-2">
            <Row label="শুল্ক (১০%)" value={formatBDT(c.dutyAmount)} />
            <Row label="ভ্যাট (১৫%)" value={formatBDT(c.vatAmount)} />
            <Row label="আইটি (৭%)" value={formatBDT(c.aitAmount)} />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-primary-color/10 bg-[rgba(7,136,52,0.08)] p-4">
            <p className="text-xs text-green font-semibold">পরিশোধযোগ্য অর্থ</p>
            <p className="mt-2 text-xl font-extrabold text-green">
              {formatBDT(c.netPayable)}
            </p>
          </div>

          <div className="rounded-lg border border-primary-color/10 bg-[rgba(234,179,8,0.10)] p-4">
            <p className="text-xs text-orange font-semibold">চুক্তি অনুযায়ী</p>
            <p className="mt-2 text-xl font-extrabold text-orange">
              {formatBDT(c.expectedAmount)}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-medium-gray">{label}</span>
      <span className="font-extrabold text-black">{value}</span>
    </div>
  );
}
