"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AddProductForm } from "../_types/add-product.types";

const inputCls =
  "h-10 w-full rounded-lg border border-gray/15 bg-white px-3 text-sm text-gray outline-none focus:border-primary";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <p className="text-xs font-semibold text-gray">
        {label} {required ? <span className="text-primary">*</span> : null}
      </p>
      {children}
    </div>
  );
}

export default function FormFields({
  form,
  setField,
}: {
  form: AddProductForm;
  setField: <K extends keyof AddProductForm>(k: K, v: AddProductForm[K]) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Field label="পণ্যের নাম (Product Name)" required>
        <input
          value={form.productName}
          onChange={(e) => setField("productName", e.target.value)}
          className={inputCls}
        />
      </Field>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Field label="আইবাস কোড (IBAS Code)" required>
          <input
            value={form.ibasCode}
            onChange={(e) => setField("ibasCode", e.target.value)}
            className={inputCls}
          />
        </Field>

        <Field label="একক মূল্য (Unit Price)" required>
          <input
            value={form.unitPrice}
            onChange={(e) => setField("unitPrice", e.target.value)}
            className={inputCls}
          />
        </Field>

        <Field label="স্টক পরিমাণ (Available Qty)" required>
          <input
            value={form.availableQty}
            onChange={(e) => setField("availableQty", e.target.value)}
            className={inputCls}
          />
        </Field>

        <Field label="একক (Unit)" required>
          <select
            value={form.unit}
            onChange={(e) => setField("unit", e.target.value)}
            className={cn(inputCls, "pr-8")}
          >
            <option value="">নির্বাচন করুন</option>
            <option value="unit">unit</option>
            <option value="piece">piece</option>
            <option value="ream">ream</option>
            <option value="month">month</option>
          </select>
        </Field>
      </div>
    </div>
  );
}
