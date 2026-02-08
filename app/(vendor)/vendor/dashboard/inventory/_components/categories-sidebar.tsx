"use client";

import React from "react";
import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import { InventoryCategory } from "../_types/product-inventory.types";

export default function CategoriesSidebar({
  categories,
  activeId,
  onChange,
}: {
  categories: InventoryCategory[];
  activeId: string;
  onChange: (id: string) => void;
}) {
  return (
    <Card className="p-4">
      <p className="text-xs font-semibold text-gray">CATEGORIES</p>

      <div className="mt-3 space-y-2">
        {categories.map((c) => {
          const active = c.id === activeId;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onChange(c.id)}
              className={cn(
                "w-full rounded-lg border px-3 py-3 text-left",
                active
                  ? "border-primary bg-primary text-white"
                  : "border-gray/15 bg-white text-gray hover:border-primary"
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className={cn("text-xs font-semibold", active ? "text-white" : "text-gray")}>
                    {c.name}
                  </p>
                </div>

                <span
                  className={cn(
                    "rounded-md px-2 py-1 text-[11px] font-semibold",
                    active ? "bg-white/15 text-white" : "bg-secondary text-gray"
                  )}
                >
                  {c.count}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* bottom help card like screenshot (optional) */}
      <div className="mt-4 rounded-lg bg-secondary p-3">
        <p className="text-xs font-semibold text-gray">Need Help?</p>
        <p className="mt-1 text-[11px] text-gray">
          Contact procurement support desk for assistance.
        </p>
        <button type="button" onClick={() => null} className="mt-2 text-xs font-semibold text-primary">
          Support Center →
        </button>
      </div>
    </Card>
  );
}
