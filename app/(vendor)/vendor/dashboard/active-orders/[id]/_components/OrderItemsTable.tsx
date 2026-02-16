"use client";

import Card from "@/components/cards/card";
import { Eye } from "lucide-react";
import { OrderItem } from "../_types/order.types";

function money(n: number) {
  return `৳ ${n.toLocaleString("en-US")}`;
}

export default function OrderItemsTable({
  items,
  onPreview,
}: {
  items: OrderItem[];
  onPreview?: () => void;
}) {
  const grandTotal = items.reduce((s, it) => s + it.totalPrice, 0);
  const vendorGrandTotal = items.reduce((s, it) => s + it.vendorTotalPrice, 0);

  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between px-6 py-4">
        <p className="text-sm font-extrabold text-gray">
          পণ্যের তালিকা (Items) - আর্থিক তুলনামূলক বিশ্লেষণ
        </p>

        <div className="flex items-center gap-4">
          {/* legend */}
          <div className="flex items-center gap-2 text-xs font-semibold text-light-gray">
            <span className="h-3 w-3 rounded-sm border border-gray/15 bg-white" />
            প্রদেয় মূল্য
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-light-gray">
            <span className="h-3 w-3 rounded-sm bg-primary" />
            ভেন্ডর মূল্য
          </div>

          <button
            type="button"
            onClick={onPreview}
            className="text-light-gray hover:text-gray"
            aria-label="Preview"
          >
            <Eye size={18} />
          </button>
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="min-w-[1100px] w-full">
          <thead>
            <tr className="border-t border-gray/10 bg-secondary">
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

              {/* vendor columns */}
              <th className="px-6 py-3 text-left text-xs font-extrabold text-light-gray bg-secondary">
                একক মূল্য (ভেন্ডর)
              </th>
              <th className="px-6 py-3 text-left text-xs font-extrabold text-light-gray bg-secondary">
                মোট (ভেন্ডর)
              </th>
              <th className="px-6 py-3 text-left text-xs font-extrabold text-light-gray bg-secondary">
                চার্জ ব্রেকডাউন (ভেন্ডর)
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map((it) => (
              <tr key={it.id} className="border-t border-gray/10">
                {/* item */}
                <td className="px-6 py-5">
                  <p className="text-sm font-extrabold text-gray">{it.name}</p>
                  {it.brand ? (
                    <p className="mt-1 text-xs font-semibold text-light-gray">
                      {it.brand}
                    </p>
                  ) : null}
                </td>

                {/* qty */}
                <td className="px-6 py-5 text-sm font-extrabold text-gray">
                  {it.qtyLabel}
                </td>

                {/* unit */}
                <td className="px-6 py-5 text-sm font-extrabold text-gray">
                  {money(it.unitPrice)}
                </td>

                {/* total */}
                <td className="px-6 py-5 text-sm font-extrabold text-gray">
                  {money(it.totalPrice)}
                </td>

                {/* breakdown */}
                <td className="px-6 py-5">
                  <div className="space-y-1 text-xs font-semibold text-light-gray">
                    {it.breakdown.map((b, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-6"
                      >
                        <span>{b.label}</span>
                        <span className="font-extrabold text-gray">
                          {money(b.value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </td>

                {/* vendor unit */}
                <td className="px-6 py-5 text-sm font-extrabold text-primary bg-secondary">
                  {money(it.vendorUnitPrice)}
                </td>

                {/* vendor total */}
                <td className="px-6 py-5 text-sm font-extrabold text-primary bg-secondary">
                  {money(it.vendorTotalPrice)}
                </td>

                {/* vendor breakdown */}
                <td className="px-6 py-5 bg-secondary">
                  <div className="space-y-1 text-xs font-semibold text-light-gray">
                    {it.vendorBreakdown.map((b, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-6"
                      >
                        <span>{b.label}</span>
                        <span className="font-extrabold text-primary">
                          {money(b.value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}

            {/* grand total */}
            <tr className="border-t border-gray/10">
              <td className="px-6 py-4 font-extrabold text-light-gray">
                সর্বমোট (GRAND TOTAL)
              </td>

              <td className="px-6 py-4" />
              <td className="px-6 py-4" />

              <td className="px-6 py-4 text-sm font-extrabold text-gray">
                {money(grandTotal)}
              </td>

              <td className="px-6 py-4" />

              <td className="px-6 py-4 bg-secondary" />
              <td className="px-6 py-4 bg-secondary text-sm font-extrabold text-primary">
                {money(vendorGrandTotal)}
              </td>
              <td className="px-6 py-4 bg-secondary" />
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}
