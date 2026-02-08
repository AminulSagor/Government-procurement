// components/orders/OrderItemsTable.tsx
"use client";

import Card from "@/components/cards/card";
import { Eye } from "lucide-react";

export default function OrderItemsTable() {
  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between px-6 py-4">
        <p className="text-sm font-extrabold text-gray">
          পণ্যের তালিকা (Items) - আর্থিক তুলনামূলক বিশ্লেষণ
        </p>

        <div className="flex items-center gap-4">
          {/* tiny legend */}
          <div className="flex items-center gap-2 text-xs font-semibold text-light-gray">
            <span className="h-3 w-3 rounded-sm border border-medium-gray/20 bg-white" />
            প্রদেয় মূল্য
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-light-gray">
            <span className="h-3 w-3 rounded-sm bg-teal-600" />
            ভেন্ডর মূল্য
          </div>

          <button className="text-light-gray hover:text-gray">
            <Eye size={18} />
          </button>
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="min-w-[1100px] w-full">
          <thead>
            <tr className="border-t border-gray/10 bg-light-gray/5">
              <th className="px-6 py-3 text-left text-xs font-extrabold text-light-gray">
                &nbsp;
              </th>

              <th className="px-6 py-3 text-left text-xs font-extrabold text-light-gray">
                পরিমাণ (QTY)
              </th>
              <th className="px-6 py-3 text-left text-xs font-extrabold text-light-gray">
                একক মূল্য
              </th>
              <th className="px-6 py-3 text-left text-xs font-extrabold text-light-gray">
                মোট মূল্য
              </th>
              <th className="px-6 py-3 text-left text-xs font-extrabold text-light-gray">
                ট্যাক্স ব্রেকডাউন
              </th>

              <th className="px-6 py-3 text-left text-xs font-extrabold text-light-gray bg-teal-50">
                একক মূল্য (ভেন্ডর)
              </th>
              <th className="px-6 py-3 text-left text-xs font-extrabold text-light-gray bg-teal-50">
                মোট (ভেন্ডর)
              </th>
              <th className="px-6 py-3 text-left text-xs font-extrabold text-light-gray bg-teal-50">
                চার্জ ব্রেকডাউন (ভেন্ডর)
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-gray/10">
              {/* item */}
              <td className="px-6 py-5">
                <p className="text-sm font-extrabold text-gray">
                  Printer Paper A4 (80 GSM)
                </p>
                <p className="mt-1 text-xs font-semibold text-light-gray">
                  Brand: Bashundhara Paper
                </p>
              </td>

              {/* qty */}
              <td className="px-6 py-5 text-sm font-extrabold text-gray">
                ৫০০ Reams
              </td>

              {/* unit */}
              <td className="px-6 py-5 text-sm font-extrabold text-gray">
                ৳ ২৫০
              </td>

              {/* total */}
              <td className="px-6 py-5 text-sm font-extrabold text-gray">
                ৳ ১,২৫,০০০
              </td>

              {/* breakdown */}
              <td className="px-6 py-5">
                <div className="space-y-1 text-xs font-semibold text-light-gray">
                  <div className="flex items-center justify-between gap-6">
                    <span>ভ্যাট (৫%):</span>
                    <span className="font-extrabold text-gray">৳ ৬,২৫০</span>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <span>ছাড় (০%):</span>
                    <span className="font-extrabold text-gray">৳ ০</span>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <span>অতিরিক্ত চার্জ (১%):</span>
                    <span className="font-extrabold text-gray">৳ ১,২৫০</span>
                  </div>
                </div>
              </td>

              {/* vendor unit */}
              <td className="px-6 py-5 text-sm font-extrabold text-teal-700 bg-teal-50">
                ৳ ২৫০
              </td>

              {/* vendor total */}
              <td className="px-6 py-5 text-sm font-extrabold text-teal-700 bg-teal-50">
                ৳ ১,০০,০০০
              </td>

              {/* vendor breakdown */}
              <td className="px-6 py-5 bg-teal-50">
                <div className="space-y-1 text-xs font-semibold text-teal-700/80">
                  <div className="flex items-center justify-between gap-6">
                    <span>ভ্যাট (৫%):</span>
                    <span className="font-extrabold text-teal-700">৳ ৫,০০০</span>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <span>ছাড় (০%):</span>
                    <span className="font-extrabold text-teal-700">৳ ০</span>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <span>অতিরিক্ত চার্জ (১%):</span>
                    <span className="font-extrabold text-teal-700">৳ ১,০০০</span>
                  </div>
                </div>
              </td>
            </tr>

            {/* grand total */}
            <tr className="border-t border-gray/10">
              <td className="px-6 py-4 font-extrabold text-light-gray">
                সর্বমোট (GRAND TOTAL)
              </td>

              <td className="px-6 py-4" />
              <td className="px-6 py-4" />

              <td className="px-6 py-4 text-sm font-extrabold text-gray">
                ৳ ১,২৫,০০০
              </td>

              <td className="px-6 py-4" />

              <td className="px-6 py-4 bg-teal-50" />
              <td className="px-6 py-4 bg-teal-50 text-sm font-extrabold text-teal-700">
                ৳ ১,০০,০০০
              </td>
              <td className="px-6 py-4 bg-teal-50" />
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}
