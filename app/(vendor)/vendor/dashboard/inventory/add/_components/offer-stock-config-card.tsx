"use client";

import React from "react";
import Card from "@/components/cards/card";
import { AddProductForm } from "../_types/add-product.types";
import ItemTypeTabs from "./item-type-tabs";
import FormFields from "./form-fields";
import StockStatusRow from "./stock-status-row";
import UploadDropzone from "./upload-dropzone";

export default function OfferStockConfigCard({
  form,
  setField,
}: {
  form: AddProductForm;
  setField: <K extends keyof AddProductForm>(k: K, v: AddProductForm[K]) => void;
}) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="text-primary">⚙</span>
          <p className="text-sm font-semibold text-gray">
            অফার ও স্টক কনফিগারেশন (Offer & Stock Configuration)
          </p>
        </div>

        <div className="mt-4">
          <ItemTypeTabs value={form.itemType} onChange={(v) => setField("itemType", v)} />
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
            className="mt-2 h-[120px] w-full rounded-lg border border-gray/15 bg-white p-3 text-sm text-gray outline-none focus:border-primary"
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
    </Card>
  );
}
