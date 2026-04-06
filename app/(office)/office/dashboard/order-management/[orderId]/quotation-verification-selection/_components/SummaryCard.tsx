"use client";

import { QuotationProduct } from "@/app/(office)/office/types/quotation-verification-selection.types";
import SecondaryButton from "@/components/buttons/secondary-button";
import Card from "@/components/cards/card";

function moneyBn(n: number) {
  return new Intl.NumberFormat("bn-BD").format(n);
}

export default function SummaryCard({
  title,
  columns,
  products,
  draftBtnText,
}: {
  title: string;
  columns: {
    product: string;
    vendor: string;
    qty: string;
    unit: string;
    total: string;
  };
  products: QuotationProduct[];
  draftBtnText: string;
}) {
  const rows = products.map((p) => {
    const selected = p.quotes.find((q) => q.id === p.selectedQuoteId);
    return {
      productName: p.title.replace("পণ্য ০১: ", "").replace("পণ্য ০২: ", ""),
      vendorName: selected?.vendorName ?? "এখনো নির্বাচিত হয়নি",
      qty: p.quantity,
      unit: selected?.unitPrice,
      total: selected?.totalPrice,
    };
  });

  const grandTotal = rows.reduce((sum, r) => sum + (r.total ?? 0), 0);

  return (
    <Card className="p-0 overflow-hidden">
      {/* top accent */}
      <div className="border-t-4 border-primary-color" />

      {/* header */}
      <div className="px-5 py-4 border-b border-primary-color/10 bg-white">
        <div className="flex items-center gap-2 text-lg font-extrabold text-black">
          <span className="text-primary-color">☑</span>
          {title}
        </div>
      </div>

      <div className="px-5 py-4">
        {/* responsive table wrapper */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-[720px] w-full text-sm">
            {/* header */}
            <thead>
              <tr className="bg-off-white text-light-gray text-xs font-semibold">
                <th className="px-4 py-3 text-left">{columns.product}</th>
                <th className="px-4 py-3 text-left">{columns.vendor}</th>
                <th className="px-4 py-3 text-center">{columns.qty}</th>
                <th className="px-4 py-3 text-right">{columns.unit}</th>
                <th className="px-4 py-3 text-right">{columns.total}</th>
              </tr>
            </thead>

            {/* body */}
            <tbody className="divide-y divide-primary-color/10">
              {rows.map((r, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-4 font-semibold text-black whitespace-nowrap">
                    {r.productName}
                  </td>

                  <td
                    className={`px-4 py-4 whitespace-nowrap ${
                      r.unit
                        ? "text-primary-color font-semibold"
                        : "text-medium-gray"
                    }`}
                  >
                    {r.vendorName}
                  </td>

                  <td className="px-4 py-4 text-center whitespace-nowrap">
                    {new Intl.NumberFormat("bn-BD").format(r.qty)}
                  </td>

                  <td className="px-4 py-4 text-right whitespace-nowrap">
                    {r.unit ? `৳${moneyBn(r.unit)}` : "-"}
                  </td>

                  <td className="px-4 py-4 text-right font-extrabold whitespace-nowrap">
                    {r.total ? `৳${moneyBn(r.total)}` : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* total row */}
        <div className="mt-6 flex items-center justify-end gap-6">
          <div className="text-sm font-semibold text-light-gray">সর্বমোট:</div>
          <div className="text-2xl font-extrabold text-primary-color">
            ৳{moneyBn(grandTotal)}
          </div>
        </div>

        {/* action */}
        <div className="mt-6 flex justify-end">
          <SecondaryButton className="px-6 py-3 text-sm rounded-lg border border-primary-color/20">
            {draftBtnText}
          </SecondaryButton>
        </div>
      </div>
    </Card>
  );
}
