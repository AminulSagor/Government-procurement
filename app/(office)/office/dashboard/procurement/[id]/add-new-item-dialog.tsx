"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { PlusSquare, Minus, Plus } from "lucide-react";

type NewItemForm = {
  productCode: string;
  productName: string;
  specification: string;
  unit: string;
  unitPrice: number;
  qty: number;
};

const UNITS = [
  "নির্বাচিত করুন",
  "পিস",
  "প্যাকেট",
  "বক্স",
  "কেজি",
  "লিটার",
] as const;

function formatBDT(amount: number) {
  const bn = new Intl.NumberFormat("bn-BD").format(amount);
  return `৳ ${bn}`;
}

const focusRing =
  "focus-visible:ring-1 focus-visible:ring-primary-color/20 focus-visible:ring-offset-0";

export default function AddNewItemDialog({
  open,
  onOpenChange,
  onSubmit,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onSubmit: (data: NewItemForm) => void;
}) {
  const [form, setForm] = React.useState<NewItemForm>({
    productCode: "",
    productName: "",
    specification: "",
    unit: UNITS[0],
    unitPrice: 0,
    qty: 1,
  });

  const total = Math.max(
    0,
    (Number(form.unitPrice) || 0) * (Number(form.qty) || 1),
  );

  const setField = <K extends keyof NewItemForm>(key: K, val: NewItemForm[K]) =>
    setForm((p) => ({ ...p, [key]: val }));

  const reset = () =>
    setForm({
      productCode: "",
      productName: "",
      specification: "",
      unit: UNITS[0],
      unitPrice: 0,
      qty: 1,
    });

  const canSubmit =
    form.productCode.trim().length > 0 &&
    form.productName.trim().length > 0 &&
    form.unit !== UNITS[0] &&
    (Number(form.unitPrice) || 0) > 0 &&
    (Number(form.qty) || 1) > 0;

  const handleCancel = () => {
    reset();
    onOpenChange(false);
  };

  const handleSubmit = () => {
    onSubmit(form);
    reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl rounded-md bg-white p-0">
        {/* Header */}
        <DialogHeader className="border-b border-off-white px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-off-white">
              <PlusSquare className="h-5 w-5 text-primary-color" />
            </div>

            <DialogTitle className="text-base font-extrabold text-black">
              নতুন পণ্য যুক্ত করুন
            </DialogTitle>
          </div>
        </DialogHeader>

        {/* Body */}
        <div className="px-6 py-5">
          <div className="grid grid-cols-1 gap-4">
            {/* Product Code */}
            <div>
              <label className="text-sm font-semibold text-black">
                পণ্যের কোড
              </label>
              <Input
                value={form.productCode}
                onChange={(e) => setField("productCode", e.target.value)}
                placeholder="যেমনঃ ০২৫০৫০২"
                className={[
                  "mt-2 h-11 rounded-md bg-white text-black placeholder:text-light-gray",
                  focusRing,
                ].join(" ")}
              />
            </div>

            {/* Product Name */}
            <div>
              <label className="text-sm font-semibold text-black">
                পণ্যের নাম
              </label>
              <Input
                value={form.productName}
                onChange={(e) => setField("productName", e.target.value)}
                placeholder="যেমনঃ নতুন মনিহার, এপি ইত্যাদি"
                className={[
                  "mt-2 h-11 rounded-md  bg-white text-black placeholder:text-light-gray",
                  focusRing,
                ].join(" ")}
              />
            </div>

            {/* Specification */}
            <div>
              <label className="text-sm font-semibold text-black">
                পণ্যের বিবরণ/স্পেসিফিকেশন
              </label>
              <Textarea
                value={form.specification}
                onChange={(e) => setField("specification", e.target.value)}
                placeholder="পণ্যের বিস্তারিত বিবরণ এখানে লিখুন..."
                className={[
                  "mt-2 min-h-30 resize-none rounded-md bg-white text-black placeholder:text-light-gray",
                  focusRing,
                ].join(" ")}
              />
            </div>

            {/* Unit + Unit Price */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-black">একক</label>

                <Select
                  value={form.unit}
                  onValueChange={(v) => setField("unit", v)}
                >
                  <SelectTrigger
                    className={[
                      "mt-2 h-11 rounded-md bg-white text-black",
                      focusRing,
                    ].join(" ")}
                  >
                    <SelectValue placeholder="নির্বাচিত করুন" />
                  </SelectTrigger>

                  <SelectContent className="rounded-md">
                    {UNITS.map((u) => (
                      <SelectItem key={u} value={u}>
                        {u}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-semibold text-primary-color">
                  ইউনিট বাজেট (BDT)
                </label>

                <Input
                  inputMode="numeric"
                  value={form.unitPrice === 0 ? "" : String(form.unitPrice)}
                  onChange={(e) =>
                    setField("unitPrice", Number(e.target.value || 0))
                  }
                  placeholder="৳ ০.০"
                  className={[
                    "mt-2 h-11 rounded-md  bg-white font-bold text-primary-color placeholder:text-light-gray",
                    focusRing,
                  ].join(" ")}
                />
              </div>
            </div>

            {/* Qty + Total */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-black">
                  পরিমাণ
                </label>

                <div className="mt-2 flex h-11 items-center justify-between rounded-md border  bg-white px-2">
                  <button
                    type="button"
                    onClick={() => setField("qty", Math.max(1, form.qty - 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-off-white hover:opacity-90"
                    aria-label="Decrease"
                  >
                    <Minus className="h-4 w-4 text-primary-color" />
                  </button>

                  <span className="text-sm font-extrabold text-black">
                    {form.qty}
                  </span>

                  <button
                    type="button"
                    onClick={() => setField("qty", form.qty + 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-off-white hover:opacity-90"
                    aria-label="Increase"
                  >
                    <Plus className="h-4 w-4 text-primary-color" />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-black">
                  মোট মূল্য
                </label>
                <div className="mt-2 flex h-11 items-center rounded-md border border-off-white bg-off-white px-4">
                  <span className="text-sm font-extrabold text-primary-color">
                    {formatBDT(total)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="h-11 rounded-md border px-6 text-sm font-semibold text-light-gray hover:opacity-90"
            >
              বাতিল
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canSubmit}
              className={[
                "h-11 rounded-md px-6 text-sm font-extrabold transition",
                canSubmit
                  ? "bg-primary-color text-white hover:opacity-90"
                  : "cursor-not-allowed bg-off-white text-medium-gray",
              ].join(" ")}
            >
              তালিকায় যুক্ত করুন
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
