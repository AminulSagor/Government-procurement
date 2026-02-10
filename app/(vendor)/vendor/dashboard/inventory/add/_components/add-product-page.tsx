"use client";

import React, { useMemo, useState } from "react";
import Card from "@/components/cards/card";
import { AddProductForm } from "../_types/add-product.types";
import { demoAddProductForm } from "../_data/add-product.demo";

import AddProductHeader from "./add-product-header";
import MasterCatalogSearchCard from "./master-catalog-search-card";
import OfferStockConfigCard from "./offer-stock-config-card";
import FormFooterActions from "./form-footer-actions";

export default function AddProductPage() {
  const initial = useMemo(() => demoAddProductForm, []);
  const [form, setForm] = useState<AddProductForm>(initial);

  const setField = <K extends keyof AddProductForm>(k: K, v: AddProductForm[K]) =>
    setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="min-h-screen bg-secondary/30 px-6 py-6">
      <div className="mx-auto w-full max-w-[980px]">
        <AddProductHeader />

        <Card className="mt-6 flex flex-col gap-6">
          <div className="mt-4 space-y-4">
            <MasterCatalogSearchCard form={form} setField={setField} />
            <OfferStockConfigCard form={form} setField={setField} />
          </div>

          <div className="mt-4">
            <div className="overflow-hidden p-0">
              <FormFooterActions onCancel={() => null} onSave={() => null} />
            </div>
          </div>

        </Card>
      </div>
    </div>
  );
}
