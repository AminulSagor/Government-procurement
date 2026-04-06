"use client";

import Image from "next/image";
import type { ProductDetails } from "../_types/product-details";

type Props = {
  product: ProductDetails;
  activeIndex: number;
  onChange: (index: number) => void;
};

export default function ProductGallery({ product, activeIndex, onChange }: Props) {
  const activeSrc = product.images[activeIndex] ?? product.images[0];

  return (
    <section>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_26px_rgba(15,23,42,0.06)]">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-50">
          <Image
            src={activeSrc}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 420px"
            priority
          />
        </div>

        <div className="mt-4 flex items-center gap-3">
          {product.images.slice(0, 5).map((src, idx) => {
            const active = idx === activeIndex;
            return (
              <button
                key={src + idx}
                type="button"
                onClick={() => onChange(idx)}
                className={[
                  "relative h-14 w-14 overflow-hidden rounded-xl border bg-white",
                  active ? "border-orange-500 ring-2 ring-orange-100" : "border-slate-200",
                ].join(" ")}
                aria-label={`thumb-${idx}`}
              >
                <Image src={src} alt="thumb" fill className="object-cover" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}