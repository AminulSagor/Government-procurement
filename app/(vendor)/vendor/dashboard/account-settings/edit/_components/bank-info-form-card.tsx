"use client";

import React from "react";
import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import { BusinessProfileEditForm } from "../_types/business-profile-edit.types";
import { Button } from "@/components/ui/button";

const inputCls =
  "h-10 w-full rounded-lg border border-gray/15 bg-white px-3 text-sm text-gray outline-none focus:border-primary";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <p className="text-xs font-semibold text-gray">{label}</p>
      {children}
    </div>
  );
}

export default function BankInfoFormCard({
  form,
  setField,
  onPickCheque,
}: {
  form: BusinessProfileEditForm;
  setField: (k: keyof BusinessProfileEditForm, v: string) => void;
  onPickCheque: () => void;
}) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="text-primary">🏦</span>
          <p className="text-sm font-semibold text-gray">ব্যাংকিং তথ্য</p>
        </div>

        <span className="rounded-full bg-green/10 px-3 py-1 text-[11px] font-semibold text-green">
          SECURE
        </span>
      </div>

      <div className="border-t border-gray/10" />

      <div className="px-5 py-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="ব্যাংকের নাম">
            <input
              value={form.bankName}
              onChange={(e) => setField("bankName", e.target.value)}
              className={inputCls}
            />
          </Field>

          <Field label="শাখা">
            <input
              value={form.branch}
              onChange={(e) => setField("branch", e.target.value)}
              className={inputCls}
            />
          </Field>

          <Field label="অ্যাকাউন্ট হোল্ডার নাম">
            <input
              value={form.accountHolderName}
              onChange={(e) =>
                setField("accountHolderName", e.target.value)
              }
              className={inputCls}
            />
          </Field>

          <Field label="অ্যাকাউন্ট নাম্বার">
            <input
              value={form.accountNumber}
              onChange={(e) => setField("accountNumber", e.target.value)}
              className={inputCls}
            />
          </Field>

          <Field label="রাউটিং নম্বর">
            <input
              value={form.routingNumber}
              onChange={(e) => setField("routingNumber", e.target.value)}
              className={cn(inputCls, "sm:col-span-2")}
            />
          </Field>
        </div>

        {/* upload box */}
        <div className="mt-4">
          <p className="text-xs font-semibold text-gray">
            ব্যাংক চেক (স্ক্যান/ছবি আপলোড)
          </p>

          <button
            type="button"
            onClick={onPickCheque}
            className={cn(
              "mt-2 w-full rounded-lg border border-dashed border-gray/20 bg-secondary px-4 py-6 text-center",
              "hover:border-primary"
            )}
          >
            <div className="mx-auto grid max-w-[380px] gap-2 place-items-center">
              <span className="text-primary">☁</span>
              <p className="text-xs font-semibold text-gray">
                এখানে ড্র্যাগ করে দিন অথবা ক্লিক করে আপলোড করুন
              </p>
              <p className="text-[11px] text-gray">
                PDF, JPG & PNG (সর্বোচ্চ 5MB)
              </p>

              <Button className="h-8 px-3 text-xs mt-2" onClick={() => null}>
                ফাইল নির্বাচন করুন
              </Button>
            </div>
          </button>
        </div>
      </div>
    </Card>
  );
}
