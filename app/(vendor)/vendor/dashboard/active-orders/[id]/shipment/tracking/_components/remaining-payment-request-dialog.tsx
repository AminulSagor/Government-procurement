"use client";

import * as React from "react";
import { X, UploadCloud, ChevronDown, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold text-light-gray">{children}</p>;
}

function Hint({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-[11px] font-semibold text-light-gray">{children}</p>;
}

export default function RemainingPaymentRequestDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [method, setMethod] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [trxId, setTrxId] = React.useState("");
  const [amount, setAmount] = React.useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[560px] rounded-2xl border border-gray/15 bg-white p-0">
        {/* header */}
        <div className="flex items-start justify-between gap-4 border-b border-gray/10 px-6 py-4">
          <div>
            <p className="text-base font-semibold text-gray">
              বকেয়া পেমেন্টের অনুরোধ (Remaining Payment Request)
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="grid h-9 w-9 place-items-center rounded-xl border border-gray/15 bg-white text-light-gray hover:bg-secondary hover:text-gray"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-6 py-5 space-y-4">
          {/* top banner */}
          <div className="flex items-start justify-between gap-4 rounded-2xl border border-gray/15 bg-secondary p-4">
            <div className="flex items-start gap-3">
              <div className="mt-[2px] grid h-9 w-9 place-items-center rounded-xl bg-white border border-gray/15">
                <ShieldCheck size={18} className="text-primary" />
              </div>

              <div>
                <p className="text-xs font-extrabold text-gray">
                  অফিসকে পেমেন্ট প্রমাণ আপলোড করতে বলুন
                </p>
                <p className="mt-1 text-[11px] font-semibold text-light-gray">
                  Ask office to upload payment proof
                </p>
              </div>
            </div>

            <Button size="sm" variant="primary">
              অনুরোধ পাঠান
            </Button>
          </div>

          {/* OR */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray/10" />
            <p className="text-[11px] font-extrabold text-light-gray">অথবা (OR)</p>
            <div className="h-px flex-1 bg-gray/10" />
          </div>

          {/* collapsible form card (static like screenshot) */}
          <div className="rounded-2xl border border-gray/15 bg-white overflow-hidden">
            <div className="flex items-center justify-between gap-4 px-5 py-4 bg-secondary">
              <p className="text-sm font-extrabold text-gray">
                ম্যানুয়ালি পেমেন্ট এর তথ্য দিন
              </p>
              <ChevronDown size={16} className="text-light-gray" />
            </div>

            <div className="px-5 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* method */}
                <div className="space-y-2">
                  <FieldLabel>পেমেন্ট মাধ্যম</FieldLabel>
                  <div className="relative">
                    <select
                      value={method}
                      onChange={(e) => setMethod(e.target.value)}
                      className={cn(
                        "h-11 w-full appearance-none rounded-xl border border-gray/15 bg-white px-4 pr-10",
                        "text-sm font-semibold text-gray outline-none focus:border-primary"
                      )}
                    >
                      <option value="">সিলেক্ট করুন</option>
                      <option value="bank">ব্যাংক</option>
                      <option value="bkash">বিকাশ</option>
                      <option value="nagad">নগদ</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-light-gray"
                    />
                  </div>
                </div>

                {/* from */}
                <div className="space-y-2">
                  <FieldLabel>প্রেরক/প্রদানকারী নাম</FieldLabel>
                  <input
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="h-11 w-full rounded-xl border border-gray/15 bg-white px-4 text-sm font-semibold text-gray outline-none focus:border-primary"
                    placeholder="নাম লিখুন"
                  />
                </div>

                {/* trx */}
                <div className="space-y-2">
                  <FieldLabel>ট্রানজ্যাকশন আইডি</FieldLabel>
                  <input
                    value={trxId}
                    onChange={(e) => setTrxId(e.target.value)}
                    className="h-11 w-full rounded-xl border border-gray/15 bg-white px-4 text-sm font-semibold text-gray outline-none focus:border-primary"
                    placeholder="যেমন: TXN-12345"
                  />
                </div>

                {/* amount */}
                <div className="space-y-2">
                  <FieldLabel>পরিমাণ</FieldLabel>
                  <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="h-11 w-full rounded-xl border border-gray/15 bg-white px-4 text-sm font-semibold text-gray outline-none focus:border-primary"
                    placeholder="৳ ০.০০"
                  />
                </div>

                {/* attachment */}
                <div className="md:col-span-2 space-y-2">
                  <FieldLabel>পেমেন্ট প্রমাণপত্র আপলোড</FieldLabel>

                  <div className="rounded-2xl border border-dashed border-gray/15 bg-white p-6 text-center">
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-secondary">
                      <UploadCloud size={20} className="text-light-gray" />
                    </div>

                    <p className="mt-3 text-xs font-extrabold text-gray">
                      Click to upload <span className="font-semibold text-light-gray">or drag and drop</span>
                    </p>
                    <p className="mt-1 text-[11px] font-semibold text-light-gray">
                      Supported: PDF, JPG, PNG
                    </p>
                  </div>

                  <Hint>ডেমো: এখানে file picker connect করবে পরে।</Hint>
                </div>
              </div>

              <Button className="mt-4 w-full" variant="primary">
                তথ্য সংরক্ষণ ও পেমেন্ট নিশ্চিত করুন
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
