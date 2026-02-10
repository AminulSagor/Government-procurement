"use client";

import React from "react";
import Card from "@/components/cards/card";
import { AddProductForm } from "../_types/add-product.types";
import ItemTypeTabs from "./item-type-tabs";
import FormFields from "./form-fields";
import StockStatusRow from "./stock-status-row";
import UploadDropzone from "./upload-dropzone";
import { SquarePen } from "lucide-react";

export default function OfferStockConfigCard({
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
         <SquarePen size={16} className="text-primary-color/70" />
          <p className="text-sm font-semibold text-primary-color">
            অফার ও স্টক কনফিগারেশন (Offer & Stock Configuration)
          </p>
        </div>

        <div className="mt-4">
          <p className="text-[11px] font-semibold text-primary-color/70">ITEM TYPE</p>
          <div className="mt-2">
            <ItemTypeTabs value={form.itemType} onChange={(v) => setField("itemType", v)} />
          </div>
        </div>

        <div className="mt-4">
          <FormFields form={form} setField={setField} />
        </div>

        <div className="mt-4">
          <StockStatusRow active={form.active} onToggle={() => setField("active", !form.active)} />
        </div>

        <div className="mt-4">
          <p className="text-xs font-semibold text-gray">বিস্তারিত বিবরণ (Detailed Description)</p>
          <textarea
            value={form.description}
            onChange={(e) => setField("description", e.target.value)}
            className="mt-2 h-[120px] w-full rounded-lg border border-gray/15 bg-secondary/40 p-3 text-sm text-gray outline-none focus:border-primary"
            placeholder=""
          />
        </div>

        <div className="mt-4">
          <p className="text-xs font-semibold text-gray">পণ্যের ছবি (Product Image)</p>
          <div className="mt-2">
            <UploadDropzone
              fileName={form.imageFileName}
              onPick={() => setField("imageFileName", "product-image-demo.png")}
              onClear={() => setField("imageFileName", "")}
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray/10" />
    </div>
  );
}
