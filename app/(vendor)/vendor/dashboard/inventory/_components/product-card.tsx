"use client";

import React from "react";
import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import { InventoryProduct } from "../_types/product-inventory.types";
import AvailabilityToggle from "./availability-toggle";
import StockBadge from "./stock-badge";

function formatBDT(n: number) {
  return `৳${n.toLocaleString("en-US")}`;
}

function Photo({ type }: { type: InventoryProduct["imageType"] }) {
  if (type === "placeholder") {
    return (
      <div className="grid h-[140px] w-full place-items-center rounded-lg bg-secondary text-primary">
        ✳
      </div>
    );
  }

  // simple demo “image”
  return (
    <div className="h-[140px] w-full rounded-lg bg-secondary" />
  );
}

export default function ProductCard({
  product,
  variant,
  onToggleEnabled,
}: {
  product: InventoryProduct;
  variant: "grid" | "list";
  onToggleEnabled: (id: string) => void;
}) {
  return (
    <Card className={cn("p-4", variant === "list" && "flex items-start gap-4")}>
      <div className={cn(variant === "list" ? "w-[220px]" : "")}>
        <Photo type={product.imageType} />
        <div className="mt-2">
          <p className="text-xs text-gray">
            {product.categoryName} <span className="ml-1">{product.categoryMeta}</span>
          </p>
        </div>
      </div>

      <div className={cn("mt-3", variant === "list" && "mt-0 flex-1")}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray">{product.title}</p>
            <p className="mt-1 text-xs text-gray line-clamp-2">{product.subtitle}</p>

            <div className="mt-3 flex items-center gap-2">
              <p className="text-sm font-semibold text-gray">
                {formatBDT(product.price)}{" "}
                <span className="text-xs font-semibold text-green">{product.unitLabel}</span>
              </p>
            </div>
          </div>

          <StockBadge status={product.status} />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <AvailabilityToggle
            checked={product.enabled}
            label="সক্রিয় আছে"
            onChange={() => onToggleEnabled(product.id)}
          />

          <button
            type="button"
            onClick={() => null}
            className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-2"
          >
            ✎ Edit
          </button>
        </div>
      </div>
    </Card>
  );
}
