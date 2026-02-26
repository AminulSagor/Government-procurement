"use client";

import { useMemo, useState } from "react";
import PageHeader from "./_components/PageHeader";
import ProductQuoteCard from "./_components/ProductQuoteCard";
import SummaryCard from "./_components/SummaryCard";
import { quotationVerificationDemo } from "@/app/(office)/office/dummy-data/quotation-verification-selection.demo";
import { QuotationProduct } from "@/app/(office)/office/types/quotation-verification-selection.types";

export default function QuotationVerificationSelectionPage() {
  const initial = quotationVerificationDemo;

  const [products, setProducts] = useState<QuotationProduct[]>(
    initial.products,
  );

  const onSelectVendor = (productId: string, quoteId: string) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, selectedQuoteId: quoteId } : p,
      ),
    );
  };

  const data = useMemo(() => ({ ...initial, products }), [initial, products]);

  return (
    <div className="min-h-screen bg-off-white">
      <div className="py-5">
        <PageHeader
          breadcrumb={data.breadcrumb}
          title={data.title}
          rfqId={data.rfqId}
          subtitle={data.subtitle}
          topRightBtnText={data.topRightBtnText}
          onBack={() => {}}
          onExport={() => {}}
        />

        <div className="space-y-5">
          {data.products.map((p) => (
            <ProductQuoteCard
              key={p.id}
              product={p}
              onSelectVendor={onSelectVendor}
            />
          ))}
        </div>

        <div className="mt-8">
          <SummaryCard
            title={data.summary.title}
            columns={data.summary.columns}
            products={data.products}
            draftBtnText={data.summary.draftBtnText}
          />
        </div>
      </div>
    </div>
  );
}
