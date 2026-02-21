"use client";

import * as React from "react";
import { X, PlusSquare, Minus, Plus, CheckCircle2 } from "lucide-react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  onSubmit?: (data: NewItemForm) => void;
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
    form.productName.trim().length > 0 &&
    form.specification.trim().length > 0 &&
    form.unit !== UNITS[0] &&
    (Number(form.unitPrice) || 0) > 0 &&
    (Number(form.qty) || 1) > 0;

  const handleCancel = () => {
    reset();
    onOpenChange(false);
  };

  const handleSubmit = () => {
    if (!canSubmit) return;
    onSubmit?.(form);
    reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl rounded-xl bg-white p-0 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-off-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-off-white border border-primary-color/10">
              <PlusSquare className="h-5 w-5 text-primary-color" />
            </div>
            <div className="text-lg font-extrabold text-black">
              নতুন পণ্য যুক্ত করুন
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <div className="space-y-4">
            {/* Product Code */}
            <div>
              <label className="text-sm font-semibold text-black">
                পণ্যের আইডিয়াস কোড
              </label>
              <Input
                value={form.productCode}
                onChange={(e) => setField("productCode", e.target.value)}
                placeholder="পণ্যের আইডিয়াস কোড লিখুন"
                className={[
                  "mt-2 h-11 rounded-md bg-white text-black placeholder:text-light-gray border border-off-white",
                  focusRing,
                ].join(" ")}
              />
            </div>

            {/* Product Name* */}
            <div>
              <label className="text-sm font-semibold text-black">
                পণ্যের নাম <span className="text-red">*</span>
              </label>
              <Input
                value={form.productName}
                onChange={(e) => setField("productName", e.target.value)}
                placeholder="যেমনঃ নতুন মনিটর, এপি ইত্যাদি"
                className={[
                  "mt-2 h-11 rounded-md bg-white text-black placeholder:text-light-gray border border-off-white",
                  focusRing,
                ].join(" ")}
              />
            </div>

            {/* Specification* */}
            <div>
              <label className="text-sm font-semibold text-black">
                পণ্যের বিবরণ/স্পেসিফিকেশন <span className="text-red">*</span>
              </label>
              <Textarea
                value={form.specification}
                onChange={(e) => setField("specification", e.target.value)}
                placeholder="পণ্যের বিস্তারিত বিবরণ এখানে লিখুন..."
                className={[
                  "mt-2 min-h-[110px] resize-none rounded-md bg-white text-black placeholder:text-light-gray border border-off-white",
                  focusRing,
                ].join(" ")}
              />
            </div>

            {/* Unit + Unit Budget */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-black">একক</label>
                <Select
                  value={form.unit}
                  onValueChange={(v) => setField("unit", v)}
                >
                  <SelectTrigger
                    className={[
                      "mt-2 h-11 rounded-md bg-white text-black border border-off-white",
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
                <label className="text-sm font-semibold text-black">
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
                    "mt-2 h-11 rounded-md bg-white text-black placeholder:text-light-gray border border-off-white",
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
                <div className="mt-2 h-11 rounded-md border border-off-white bg-white flex items-center overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setField("qty", Math.max(1, form.qty - 1))}
                    className="w-12 h-full flex items-center justify-center hover:opacity-90"
                    aria-label="Decrease"
                  >
                    <Minus className="h-4 w-4 text-medium-gray" />
                  </button>

                  <div className="flex-1 text-center text-sm font-extrabold text-black">
                    {new Intl.NumberFormat("bn-BD").format(form.qty)}
                  </div>

                  <button
                    type="button"
                    onClick={() => setField("qty", form.qty + 1)}
                    className="w-12 h-full flex items-center justify-center hover:opacity-90"
                    aria-label="Increase"
                  >
                    <Plus className="h-4 w-4 text-medium-gray" />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-black">
                  মোট মূল্য
                </label>
                <div className="mt-2 h-11 rounded-md border border-off-white bg-off-white px-4 flex items-center">
                  <span className="text-sm font-extrabold text-primary-color">
                    {formatBDT(total)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-7 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="h-11 rounded-md border border-off-white bg-white px-8 text-sm font-semibold text-medium-gray hover:opacity-90"
            >
              বাতিল
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canSubmit}
              className={[
                "h-11 rounded-md px-8 text-sm font-extrabold transition flex items-center gap-2",
                canSubmit
                  ? "bg-primary-color text-white hover:brightness-110 active:scale-[0.97]"
                  : "cursor-not-allowed bg-off-white text-medium-gray",
              ].join(" ")}
            >
              <CheckCircle2 className="h-5 w-5" />
              তালিকায় যুক্ত করুন
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
