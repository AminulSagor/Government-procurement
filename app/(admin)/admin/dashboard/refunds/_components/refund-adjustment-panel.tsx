"use client";

import Card from "@/components/cards/card";
import { Pencil, BadgeCheck } from "lucide-react";
import type { LeftTabKey, RequisitionItem, RefundAdjustmentRow } from "../_types/refund-queue-details.type";

function formatBDT(n: number) {
  return `৳ ${new Intl.NumberFormat("bn-BD").format(n)}`;
}

export default function RefundAdjustmentPanel({
  activeLeftTab,
  activeItem,
  rows,
}: {
  activeLeftTab: LeftTabKey;
  activeItem: RequisitionItem;
  rows: RefundAdjustmentRow[];
}) {
  // NOTE: activeLeftTab exists because your UI changes by left tab.
  // This panel matches “রিফান্ড ও সমন্বয়” screenshots.

  return (
    <div className="space-y-5">
      <Card className="p-0 overflow-hidden">
        <div className="px-5 py-4 border-b border-primary-color/10 flex items-center justify-between gap-3">
          <div className="font-semibold text-black">আইটেম ভিত্তিক রিফান্ড ও সমন্বয় বিশ্লেষণ</div>

          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm text-primary-color font-semibold"
          >
            অ্যাকাউন্ট লগ
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-off-white text-medium-gray">
              <tr>
                <th className="text-left px-5 py-3 font-semibold">আইটেম</th>
                <th className="text-right px-5 py-3 font-semibold">ইউনিট প্রাইস</th>
                <th className="text-right px-5 py-3 font-semibold">ভ্যাট</th>
                <th className="text-right px-5 py-3 font-semibold">আইটি</th>
                <th className="text-right px-5 py-3 font-semibold">অতিরিক্ত ভ্যাট</th>
                <th className="text-right px-5 py-3 font-semibold">সর্বমোট একক মূল্য</th>
                <th className="text-right px-5 py-3 font-semibold">রিফান্ড স্ট্যাটাস</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r) => (
                <tr key={r.itemTitleBn} className="border-t border-primary-color/10">
                  <td className="px-5 py-4 text-black font-semibold">{r.itemTitleBn}</td>

                  <td className="px-5 py-4 text-right text-black">{formatBDT(r.unitPrice)}</td>

                  <td className="px-5 py-4 text-right text-black">
                    <div className="text-xs text-light-gray">{r.vatLabelBn}</div>
                    <div className="font-semibold">{formatBDT(r.vatAmount)}</div>
                  </td>

                  <td className="px-5 py-4 text-right text-black">
                    <div className="text-xs text-light-gray">{r.itLabelBn}</div>
                    <div className="font-semibold">{formatBDT(r.itAmount)}</div>
                  </td>

                  <td className="px-5 py-4 text-right text-black">
                    <div className="text-xs text-light-gray">{r.addVatLabelBn}</div>
                    <div className="font-semibold">{formatBDT(r.addVatAmount)}</div>
                  </td>

                  <td className="px-5 py-4 text-right text-black font-semibold">
                    {formatBDT(r.totalUnitPrice)}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <div className="rounded-md bg-secondary-color/20 px-3 py-2 text-sm font-semibold text-black">
                        {r.refundStatusAmount.toFixed(2)}
                      </div>
                      <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-green/15"
                        title="Edit"
                      >
                        <Pencil className="h-4 w-4 text-green" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-5 flex justify-end">
          <button
            type="button"
            className="rounded-md bg-primary-color text-white px-5 py-2 text-sm font-semibold hover:brightness-110 active:scale-[0.98]"
          >
            তথ্য আপডেট করুন
          </button>
        </div>
      </Card>

      <div className="rounded-lg border border-primary-color/15 bg-white p-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-green/15 flex items-center justify-center">
            <BadgeCheck className="h-5 w-5 text-green" />
          </div>
          <div>
            <div className="text-sm font-semibold text-black">মনিটর - নেয়ারাত সম্পন্ন (ওয়ারেন্টি)</div>
            <div className="text-xs text-medium-gray">স্ট্যাটাস: ডেলিভারি টিউক / নেয়ারাত টিউক বিবরণ</div>
          </div>
        </div>

        <span className="inline-flex rounded-full bg-green/15 px-4 py-2 text-xs font-semibold text-green">
          চার্জ মুক্ত
        </span>
      </div>

      <div className="text-xs text-light-gray">
        Active Item: <span className="text-black font-semibold">{activeItem.titleBn}</span> | LeftTab:{" "}
        <span className="text-black font-semibold">{activeLeftTab}</span>
      </div>
    </div>
  );
}