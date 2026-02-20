"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Card from "@/components/cards/card";
import { ProductInfo } from "@/app/(office)/office/types/quotation-verification-details-types";

type TabKey = "spec" | "others";

function TabButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "px-4 py-3 text-sm font-medium transition-colors",
        active
          ? "text-primary-color border-b-2 border-primary-color"
          : "text-medium-gray border-b-2 border-transparent",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

export default function ProductCard({ product }: { product: ProductInfo }) {
  const firstId = product.images[0]?.id ?? "";
  const [activeImageId, setActiveImageId] = useState(firstId);
  const activeImage = useMemo(
    () =>
      product.images.find((x) => x.id === activeImageId) ?? product.images[0],
    [activeImageId, product.images],
  );

  const [tab, setTab] = useState<TabKey>("spec");

  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-black">পণ্যের ছবি</h3>
        <span className="rounded-full bg-off-white px-3 py-1 text-xs text-medium-gray border border-medium-gray/20">
          ছবি ও স্পেসিফিকেশন
        </span>
      </div>

      <div className="mt-4 rounded-lg border border-medium-gray/15 bg-off-white p-4">
        <div className="relative w-full overflow-hidden rounded-lg bg-white">
          <div className="relative aspect-[16/9] w-full">
            {activeImage?.src ? (
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-medium-gray">
                No Image
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {product.images.map((img) => {
            const active = img.id === activeImageId;
            return (
              <button
                key={img.id}
                type="button"
                onClick={() => setActiveImageId(img.id)}
                className={[
                  "relative h-16 w-20 shrink-0 overflow-hidden rounded-md border",
                  active ? "border-primary-color" : "border-medium-gray/20",
                ].join(" ")}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-primary-color/30 bg-white p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="font-semibold text-black">{product.title}</p>
          <span className="rounded-full bg-off-white px-3 py-1 text-xs text-medium-gray border border-medium-gray/20">
            {product.itemCodeLabel}
          </span>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-lg border border-medium-gray/15 bg-white">
        <div className="flex items-center gap-2 border-b border-medium-gray/15 px-2">
          <TabButton
            active={tab === "spec"}
            label="ম্যানুয়াল স্পেসিফিকেশন"
            onClick={() => setTab("spec")}
          />
          <TabButton
            active={tab === "others"}
            label="ইলেকট্রনিক তথ্য"
            onClick={() => setTab("others")}
          />
        </div>

        {tab === "spec" ? (
          <div className="p-5">
            <p className="text-sm text-medium-gray">পণ্যের বিস্তারিত তথ্য</p>

            <div className="mt-3 rounded-lg bg-off-white p-4 text-sm text-black">
              “{product.description}”
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-medium-gray/15 bg-off-white p-4">
                <p className="text-xs text-medium-gray">ব্র্যান্ড</p>
                <p className="mt-1 font-semibold text-black">{product.brand}</p>
              </div>
              <div className="rounded-lg border border-medium-gray/15 bg-off-white p-4">
                <p className="text-xs text-medium-gray">মডেল</p>
                <p className="mt-1 font-semibold text-black">{product.model}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-5">
            <p className="text-sm text-medium-gray">ইলেকট্রনিক তথ্য</p>
            <div className="mt-3 rounded-lg bg-off-white p-4 text-sm text-black">
              এই অংশটি পরে API থেকে পূরণ হবে (ডেমো কন্টেন্ট)।
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
