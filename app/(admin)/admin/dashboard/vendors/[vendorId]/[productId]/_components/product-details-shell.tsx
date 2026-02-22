"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { productDetailsDemo } from "../_data/product-details-demo";
import type { ProductDetails } from "../_types/product-details";
import ProductGallery from "./product-gallery";
import ProductInfoPanel from "./product-info-panel";
import ProductSaveBar from "./product-save-bar";

type Props = {
  vendorId: string;
  productId: string;
};

export default function ProductDetailsShell({ vendorId, productId }: Props) {
  const data = useMemo(() => productDetailsDemo(vendorId, productId), [vendorId, productId]);

  const [activeIndex, setActiveIndex] = useState(0);

  function onSave() {
    alert("Demo: saved");
  }

  return (
    <main className="min-h-[calc(100vh-64px)] bg-off-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-6">
        <Link
          href={`/admin/dashboard/vendors/${vendorId}`}
          className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-extrabold text-slate-700 hover:bg-slate-50"
        >
          <ArrowLeft className="h-4 w-4" />
          পেছনে যান
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
          <ProductGallery
            product={data}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
          />

          <ProductInfoPanel product={data} />
        </div>

        <ProductSaveBar onSave={onSave} />
      </div>
    </main>
  );
}