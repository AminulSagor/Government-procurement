"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ItemType } from "../_types/add-product.types";

export default function ItemTypeTabs({
  value,
  onChange,
}: {
  value: ItemType;
  onChange: (v: ItemType) => void;
}) {
  return (
    <div>

      <div className="mt-2 inline-flex rounded-lg border border-gray/15 bg-secondary p-1">
        <button
          type="button"
          onClick={() => onChange("product")}
          className={cn(
            "h-9 rounded-md px-4 text-xs font-semibold",
            value === "product" ? "bg-primary-color text-white" : "text-gray hover:bg-white"
          )}
        >
          পণ্য (Product)
        </button>

        <button
          type="button"
          onClick={() => onChange("service")}
          className={cn(
            "h-9 rounded-md px-4 text-xs font-semibold",
            value === "service" ? "bg-primary text-white" : "text-gray hover:bg-white"
          )}
        >
          সেবা (Service)
        </button>
      </div>
    </div>
  );
}
