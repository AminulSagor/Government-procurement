"use client";

import React from "react";
import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import { InventoryCategory } from "../_types/product-inventory.types";
import { Boxes, ClipboardList, Monitor, Armchair, Zap } from "lucide-react";

function pickIcon(icon?: string, active?: boolean) {
  const cls = cn("h-5 w-5", active ? "text-white" : "text-[#5E8C95]");

  if (icon === "all") return <Boxes className={cls} />;
  if (icon === "stationery") return <ClipboardList className={cls} />;
  if (icon === "it") return <Monitor className={cls} />;
  if (icon === "furniture") return <Armchair className={cls} />;
  if (icon === "electrical") return <Zap className={cls} />;

  // fallback
  return <Boxes className={cls} />;
}

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
    <Card className="rounded-2xl border border-gray/10 bg-white p-4">
      <p className="text-xs font-semibold tracking-wider text-light-gray">
        CATEGORIES
      </p>

      <div className="mt-4 space-y-2">
        {categories.map((c) => {
          const active = c.id === activeId;

          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onChange(c.id)}
              className={cn(
                "group w-full rounded-xl px-3 py-3 text-left transition",
                active
                  ? "bg-[#1F6F7A] text-white"
                  : "bg-white text-gray hover:bg-secondary/30"
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl">
                    {pickIcon((c as any).id, active)}
                  </span>

                  <div className="min-w-0">
                    <p
                      className={cn(
                        "truncate text-sm font-semibold",
                        active ? "text-white" : "text-gray"
                      )}
                    >
                      {c.name}
                    </p>
                  </div>
                </div>

                <span
                  className={cn(
                    "shrink-0 rounded-md px-3 py-1 text-xs font-semibold",
                    active
                      ? "bg-white/20 text-white"
                      : "bg-secondary text-[#5E8C95]"
                  )}
                >
                  {c.count}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* bottom help card */}
      <div className="mt-6 rounded-xl bg-secondary/40 p-4">
        <p className="text-xs font-semibold text-gray">Need Help?</p>
        <p className="mt-1 text-[11px] leading-relaxed text-light-gray">
          Contact the procurement support desk for assistance.
        </p>
        <button
          type="button"
          onClick={() => null}
          className="mt-2 text-xs font-semibold text-[#1F6F7A]"
        >
          Support Center →
        </button>
      </div>
    </Card>
  );
}
