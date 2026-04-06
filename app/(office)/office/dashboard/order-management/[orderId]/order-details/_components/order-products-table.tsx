"use client";

import React from "react";
import { Eye, Monitor, Mouse, Cable, Box, ArrowLeft } from "lucide-react";
import Card from "@/components/cards/card";
import type {
  OrderDetails,
  OrderProduct,
} from "@/app/(office)/office/types/order-details-type";
import Link from "next/link";

function productIcon(p: OrderProduct) {
  const cls = "h-5 w-5 text-light-gray";
  if (p.iconType === "laptop") return <Monitor className={cls} />;
  if (p.iconType === "mouse") return <Mouse className={cls} />;
  if (p.iconType === "cable") return <Cable className={cls} />;
  return <Box className={cls} />;
}

export default function OrderProductsTable({
  order,
  open,
}: {
  order: OrderDetails;
  open: (v: boolean) => void;
}) {
  const isReceived = order.stepCurrent === "received";

  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-primary-color/10 px-5 py-4">
        <h2 className="text-sm font-extrabold text-black">
          অর্ডারকৃত পণ্যসমূহ
        </h2>

        <button
          type="button"
          className="flex items-center gap-2 text-sm font-extrabold text-primary-color hover:underline"
          onClick={() => open(true)}
        >
          <Eye className="h-4 w-4" />
        </button>
      </div>

      <div className="px-5 py-4">
        <div className="overflow-x-auto">
          {/* ✅ received table has less columns, so min width smaller */}
          <table
            className={`w-full text-left ${isReceived ? "min-w-[760px]" : "min-w-[860px]"}`}
          >
            <thead>
              {isReceived ? (
                <tr className="text-xs font-extrabold text-light-gray">
                  <th className="py-3">অ্যাকশন</th>
                  <th className="py-3">পণ্যের নাম</th>
                  <th className="py-3">পরিমাণ</th>
                  <th className="py-3">একক মূল্য</th>
                  <th className="py-3 text-right">মোট</th>
                </tr>
              ) : (
                <tr className="text-xs font-extrabold text-light-gray">
                  <th className="py-3">পণ্যের নাম</th>
                  <th className="py-3">পরিমাণ</th>
                  <th className="py-3">একক মূল্য</th>
                  <th className="py-3">মোট</th>
                  <th className="py-3">একক মূল্য (ভ্যাটসহ)</th>
                  <th className="py-3 text-right">মোট (ভ্যাটসহ)</th>
                </tr>
              )}
            </thead>

            <tbody>
              {order.products.map((p) => (
                <tr key={p.id} className="border-t border-primary-color/10">
                  {/* ✅ received: action column */}
                  {isReceived ? (
                    <td className="py-4">
                      <Link
                        href={`/office/dashboard/order-management/${order.id}/order-details/product-return`}
                      >
                        <p className="inline-flex items-center gap-2 rounded-md bg-yellow px-4 py-2 text-xs font-extrabold text-black hover:opacity-90">
                          <ArrowLeft className="h-4 w-4" />
                          ফেরত দিন
                        </p>
                      </Link>
                    </td>
                  ) : null}

                  <td className="py-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-off-white">
                        {productIcon(p)}
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-extrabold text-black">
                          {p.name}
                        </p>
                        {p.subText ? (
                          <p className="mt-1 text-xs text-light-gray">
                            {p.subText}
                          </p>
                        ) : null}
                      </div>

                      <span className="ml-3 rounded-md border border-primary-color/20 bg-secondary-color/10 px-3 py-2 text-xs font-extrabold text-primary-color">
                        {p.codeText}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 text-sm font-extrabold text-black">
                    {p.qty}
                  </td>

                  <td className="py-4 text-sm font-extrabold text-light-gray">
                    {p.unitPriceText}
                  </td>

                  <td
                    className={`py-4 text-sm font-extrabold text-black ${isReceived ? "text-right" : ""}`}
                  >
                    {p.totalText}
                  </td>

                  {/* ✅ non-received: extra VAT columns */}
                  {!isReceived ? (
                    <>
                      <td className="py-4 text-sm font-extrabold text-light-gray">
                        {p.unitVatText}
                      </td>
                      <td className="py-4 text-right text-sm font-extrabold text-black">
                        {p.totalVatText}
                      </td>
                    </>
                  ) : null}
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr className="border-t border-primary-color/10">
                <td className="py-5 text-xs font-extrabold text-light-gray">
                  সর্বমোট পরিমাণ
                </td>

                {isReceived ? (
                  <>
                    <td colSpan={3} />
                    <td className="py-5 text-right text-base font-extrabold text-primary-color">
                      {order.productsTotals.subtotalText}
                    </td>
                  </>
                ) : (
                  <>
                    <td
                      colSpan={3}
                      className="py-5 text-right text-base font-extrabold text-primary-color"
                    >
                      {order.productsTotals.subtotalText}
                    </td>
                    <td
                      colSpan={2}
                      className="py-5 text-right text-base font-extrabold text-primary-color"
                    >
                      {order.productsTotals.totalVatText}
                    </td>
                  </>
                )}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </Card>
  );
}
