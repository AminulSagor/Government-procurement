"use client";

import React from "react";
import { InventoryProduct } from "../_types/product-inventory.types";
import ProductCard from "./product-card";

export default function ProductsGrid({
  view,
  products,
  onToggleEnabled,
}: {
  view: "grid" | "list";
  products: InventoryProduct[];
  onToggleEnabled: (id: string) => void;
}) {
  if (view === "list") {
    // simple list mode (still card)
    return (
      <div className="space-y-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} variant="list" onToggleEnabled={onToggleEnabled} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} variant="grid" onToggleEnabled={onToggleEnabled} />
      ))}
    </div>
  );
}
