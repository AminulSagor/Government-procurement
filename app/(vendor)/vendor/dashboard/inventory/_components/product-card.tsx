"use client";

import React from "react";
import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import { InventoryProduct } from "../_types/product-inventory.types";
import AvailabilityToggle from "./availability-toggle";
import StockBadge from "./stock-badge";
import { Pencil } from "lucide-react";

function formatBDT(n: number) {
  return `৳${n.toLocaleString("bn-BD")}`;
}

function Photo({ type }: { type: InventoryProduct["imageType"] }) {
  // top image area must look like screenshot: white area + centered square image
  return (
    <div className="flex h-[210px] w-full items-center justify-center rounded-t-2xl bg-white">
      {type === "placeholder" ? (
        <div className="grid h-[140px] w-[140px] place-items-center rounded bg-secondary text-primary">
          ✳
        </div>
      ) : (
        <div className="h-[140px] w-[140px] rounded bg-secondary" />
      )}
    </div>
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
  // Screenshot is grid card only. If list view is used, keep it usable but not break UI.
  const isList = variant === "list";

  return (
    <Card
      className={cn(
        "overflow-hidden rounded-2xl border border-gray/10 bg-white",
        isList && "flex items-stretch gap-4 p-4"
      )}
    >
      {/* GRID layout (same as screenshot) */}
      {!isList ? (
        <>
          <Photo type={product.imageType} />

          {/* content */}
          <div className="border-t border-gray/10 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-light-gray">
                  {product.categoryName}{" "}
                  <span className="ml-1">({product.categoryMeta})</span>
                </p>

                <p className="mt-2 text-lg font-semibold text-gray">
                  {product.title}
                </p>

                <p className="mt-2 text-sm text-light-gray">
                  {product.subtitle}
                </p>

                <p className="mt-4 text-xl font-semibold text-primary">
                  {formatBDT(product.price)}{" "}
                  <span className="text-sm font-semibold text-light-gray">
                    / {product.unitLabel}
                  </span>
                </p>
              </div>

              {/* (optional) if you want badge on top-right, screenshot doesn't show here */}
              {/* <StockBadge status={product.status} /> */}
            </div>
          </div>

          {/* footer */}
          <div className="flex items-center justify-between gap-3 border-t border-gray/10 px-5 py-4">
            <AvailabilityToggle
              checked={product.enabled}
              label="মজুদ আছে"
              onChange={() => onToggleEnabled(product.id)}
            />

            <button
              type="button"
              onClick={() => null}
              className="inline-flex items-center gap-2 text-sm font-semibold text-light-gray hover:text-gray"
            >
              <Pencil className="h-4 w-4" />
              Edit
            </button>
          </div>
        </>
      ) : (
        /* LIST layout (safe fallback) */
        <>
          <div className="w-[220px] overflow-hidden rounded-xl border border-gray/10">
            <Photo type={product.imageType} />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-light-gray">
                  {product.categoryName}{" "}
                  <span className="ml-1">({product.categoryMeta})</span>
                </p>

                <p className="mt-1 text-base font-semibold text-gray">
                  {product.title}
                </p>

                <p className="mt-1 text-sm text-light-gray line-clamp-2">
                  {product.subtitle}
                </p>

                <p className="mt-3 text-lg font-semibold text-primary">
                  {formatBDT(product.price)}{" "}
                  <span className="text-sm font-semibold text-light-gray">
                    / {product.unitLabel}
                  </span>
                </p>
              </div>

              <StockBadge status={product.status} />
            </div>

            <div className="mt-4 flex items-center  justify-between gap-3">
              <AvailabilityToggle
                checked={product.enabled}
                label="মজুদ আছে"
                onChange={() => onToggleEnabled(product.id)}
              />

              <button
                type="button"
                onClick={() => null}
                className="inline-flex items-center gap-2 text-sm font-semibold text-light-gray hover:text-gray"
              >
                <Pencil className="h-4 w-4" />
                Edit
              </button>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}
