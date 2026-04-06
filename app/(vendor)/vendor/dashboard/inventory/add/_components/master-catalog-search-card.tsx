"use client";

import React from "react";
import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import { AddProductForm } from "../_types/add-product.types";
import { FolderSearch, Search } from "lucide-react";

const inputCls =
  "h-10 w-full rounded-lg border border-gray/15 bg-white px-3 text-sm text-gray outline-none focus:border-primary";

export default function MasterCatalogSearchCard({
  form,
  setField,
}: {
  form: AddProductForm;
  setField: <K extends keyof AddProductForm>(k: K, v: AddProductForm[K]) => void;
}) {
  return (
    <div className="overflow-hidden bg-white p-0">
      <div className="px-5 py-4">
        <div className="flex items-center gap-2">
          <FolderSearch size={16} className="text-primary-color/70" />
          <p className="text-sm font-semibold text-primary-color">
            মাস্টার ক্যাটালগ অনুসন্ধান (Master Catalog Search)
          </p>
        </div>

        {/* light grey inner block like SS */}
        <div className="mt-4 rounded-lg bg-secondary/50 p-4">
          <p className="text-xs font-semibold text-primary-color">পণ্য বা কোড অনুসন্ধান করুন</p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray/70">
                <Search size={16} className="text-gray/70" />
              </span>
              <input
                value={form.masterSearch}
                onChange={(e) => setField("masterSearch", e.target.value)}
                placeholder=""
                className={cn(inputCls, "pl-10")}
              />
            </div>

            <button
              type="button"
              onClick={() => null}
              className={cn(
                "h-8 rounded-md border border-gray/15 bg-secondary px-4 text-[11px] font-semibold text-gray",
                "hover:border-primary"
              )}
            >
              অনুসন্ধান
            </button>

            <label className="flex items-center gap-2 text-xs font-semibold text-gray">
              <input
                type="checkbox"
                checked={form.useIbasDirect}
                onChange={(e) => setField("useIbasDirect", e.target.checked)}
                className="h-4 w-4 rounded border border-gray/15"
              />
              আইবাস কোড দিয়ে যুক্ত করুন
            </label>
          </div>
        </div>
      </div>

      <div className="border-t border-gray/10" />
    </div>
  );
}
