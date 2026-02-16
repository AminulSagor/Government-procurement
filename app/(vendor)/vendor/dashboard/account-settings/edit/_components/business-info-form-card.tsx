"use client";

import React from "react";
import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import { BusinessProfileEditForm } from "../_types/business-profile-edit.types";

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

const inputCls =
  "h-10 w-full rounded-lg border border-gray/15 bg-white px-3 text-sm text-gray outline-none focus:border-primary";

export default function BusinessInfoFormCard({
  form,
  setField,
}: {
  form: BusinessProfileEditForm;
  setField: (k: keyof BusinessProfileEditForm, v: string) => void;
}) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2">
        <span className="text-primary">▦</span>
        <p className="text-sm font-semibold text-gray">ব্যবসায়িক তথ্য</p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4">
        <div className="flex items-start gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-lg bg-secondary text-gray font-semibold">
            RT
          </div>

          <div className="flex-1">
            <Field label="প্রতিষ্ঠানের নাম">
              <input
                value={form.businessName}
                onChange={(e) => setField("businessName", e.target.value)}
                className={inputCls}
              />
            </Field>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="প্রতিষ্ঠানের ধরন">
                <input
                  value={form.businessType}
                  onChange={(e) => setField("businessType", e.target.value)}
                  className={inputCls}
                />
              </Field>

              <Field label="ডিভিশন">
                <select
                  value={form.division}
                  onChange={(e) => setField("division", e.target.value)}
                  className={cn(inputCls, "pr-8")}
                >
                  <option value="ঢাকা">ঢাকা</option>
                  <option value="চট্টগ্রাম">চট্টগ্রাম</option>
                  <option value="খুলনা">খুলনা</option>
                </select>
              </Field>
            </div>
          </div>
        </div>

        <Field label="ঠিকানা">
          <input
            value={form.address}
            onChange={(e) => setField("address", e.target.value)}
            className={inputCls}
          />
        </Field>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="ফোন">
            <input
              value={form.phone}
              onChange={(e) => setField("phone", e.target.value)}
              className={inputCls}
            />
          </Field>

          <Field label="ইমেইল">
            <input
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              className={inputCls}
            />
          </Field>
        </div>
      </div>
    </Card>
  );
}
