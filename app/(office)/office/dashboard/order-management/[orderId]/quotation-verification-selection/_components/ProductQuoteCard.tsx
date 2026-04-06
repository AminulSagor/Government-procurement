"use client";

import { QuotationProduct } from "@/app/(office)/office/types/quotation-verification-selection.types";
import VendorRow from "./VendorRow";
import Card from "@/components/cards/card";
import { useRouter } from "next/navigation";

function moneyBn(n: number) {
  return new Intl.NumberFormat("bn-BD").format(n);
}

export default function ProductQuoteCard({
  product,
  onSelectVendor,
}: {
  product: QuotationProduct;
  onSelectVendor: (productId: string, quoteId: string) => void;
}) {
  const router = useRouter();
  return (
    <Card className="p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-start justify-between gap-4 px-5 py-4 border-b border-primary-color/10 bg-white">
        <div className="flex items-start gap-3">
          <div className="mt-1 h-10 w-10 rounded-lg border border-primary-color/10 bg-off-white flex items-center justify-center">
            <div className="h-4 w-4 rounded-sm border border-primary-color/20" />
          </div>

          <div>
            <div className="text-lg font-extrabold text-black">
              {product.title}
            </div>
            <div className="mt-1 text-sm text-light-gray">
              {product.subtitle}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="text-right">
            <div className="text-xs text-light-gray">পরিমাণ</div>
            <div className="mt-1 text-sm font-extrabold text-black">
              {new Intl.NumberFormat("bn-BD").format(product.quantity)} টি
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs text-light-gray">একক বাজেট</div>
            <div className="mt-1 text-sm font-extrabold text-black">
              ৳{moneyBn(product.unitBudget)}
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs text-light-gray">মোট বাজেট</div>
            <div className="mt-1 text-sm font-extrabold text-black">
              ৳{moneyBn(product.totalBudget)}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ vendor table (responsive) */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[980px] w-full">
          <tbody className="divide-y divide-primary-color/10">
            {product.quotes.map((q) => (
              <VendorRow
                key={q.id}
                quote={q}
                isSelected={product.selectedQuoteId === q.id}
                onSelect={() => onSelectVendor(product.id, q.id)}
                onDetails={() => {
                  router.push(
                    `/office/dashboard/order-management/${product.id}/quotation-verification-selection/details/${q.id}`,
                  );
                }}
              />
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
