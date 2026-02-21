"use client";

import { useState } from "react";
import { CheckCircle2, Lock, Trash2, CloudUpload } from "lucide-react";
import { VoucherPaymentEntry } from "@/app/(office)/office/types/voucher-payment";
import SecondaryButton from "@/components/buttons/secondary-button";
import PrimaryButton from "@/components/buttons/primary-button";
import Card from "@/components/cards/card";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function VoucherPaymentForm({
  initial,
}: {
  initial: VoucherPaymentEntry;
}) {
  const [payerName, setPayerName] = useState(initial.payerName);
  const [amount, setAmount] = useState(String(initial.amount));
  const [referenceNo, setReferenceNo] = useState(initial.referenceNo);
  const [note, setNote] = useState(initial.note);

  const [file, setFile] = useState<{ name: string; sizeLabel: string } | null>({
    name: "Invoice_Sep2023.pdf",
    sizeLabel: "2.4 MB",
  });

  const amountOk = Number(amount || 0) > 0;
  const refOk = referenceNo.trim().length > 3;

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-black">পেমেন্ট বিবরণ</h2>
          <p className="text-sm text-medium-gray mt-1">
            প্রয়োজনীয় তথ্য দিয়ে নিচের ফর্মটি পূরণ করুন
          </p>
        </div>
        <div className="text-xs font-semibold text-light-gray">
          STEP 01 OF 03
        </div>
      </div>

      <div className="mt-6 border-t border-primary-color/10" />

      <div className="mt-6 space-y-5">
        {/* Office code (read-only) */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            অফিস কোড
          </label>
          <div className="relative">
            <input
              value={initial.officeCode}
              disabled
              className="
                w-full h-12 rounded-md px-4 pr-12
                bg-off-white border border-primary-color/15
                text-black
              "
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-medium-gray">
              <Lock className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* payer name */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            প্রাপকের নাম <span className="text-red">*</span>
          </label>
          <input
            value={payerName}
            onChange={(e) => setPayerName(e.target.value)}
            placeholder="প্রাপকের নাম লিখুন"
            className="
              w-full h-12 rounded-md px-4
              bg-white border border-primary-color/20
              outline-none focus:border-primary-color/50
              text-black placeholder:text-medium-gray
            "
          />
        </div>

        {/* amount + reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              টাকার পরিমাণ <span className="text-red">*</span>
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-medium-gray">
                ৳
              </span>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="
                  w-full h-12 rounded-md pl-8 pr-12
                  bg-white border
                  outline-none
                  text-black
                "
                style={{
                  borderColor: amountOk
                    ? "rgba(31,110,128,0.40)"
                    : "rgba(231,53,8,0.35)",
                }}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <CheckCircle2
                  className={cn(
                    "w-5 h-5",
                    amountOk ? "text-green" : "text-light-gray",
                  )}
                />
              </div>
            </div>

            <p className="mt-2 text-xs text-green">বাজেট সীমার মধ্যে আছে</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              রেফারেন্স নম্বর <span className="text-red">*</span>
            </label>

            <div className="relative">
              <input
                value={referenceNo}
                onChange={(e) => setReferenceNo(e.target.value)}
                className="
                  w-full h-12 rounded-md px-4 pr-12
                  bg-white border border-primary-color/20
                  outline-none focus:border-primary-color/50
                  text-black
                "
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <CheckCircle2
                  className={cn(
                    "w-5 h-5",
                    refOk ? "text-green" : "text-light-gray",
                  )}
                />
              </div>
            </div>

            <p className="mt-2 text-xs text-medium-gray">
              অনন্য নম্বর যাচাই করা হয়েছে
            </p>
          </div>
        </div>

        {/* note */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            মন্তব্য
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="প্রয়োজনীয় তথ্য লিখুন..."
            className="
              w-full min-h-[110px] rounded-md p-4
              bg-white border border-primary-color/20
              outline-none focus:border-primary-color/50
              text-black placeholder:text-medium-gray
              resize-none
            "
          />
        </div>

        {/* upload */}
        <div>
          <label className="block text-sm font-semibold text-black mb-3">
            নথিপত্র সংযুক্ত করুন
          </label>

          <div
            className="
              rounded-lg border border-dashed border-primary-color/25
              bg-off-white p-8 text-center
            "
          >
            <div className="mx-auto h-12 w-12 rounded-full bg-white border border-primary-color/10 flex items-center justify-center">
              <CloudUpload className="w-5 h-5 text-medium-gray" />
            </div>

            <p className="mt-3 text-sm text-black">
              ফাইল এখানে টেনে আনুন বা{" "}
              <button
                type="button"
                className="text-primary-color font-semibold hover:underline"
              >
                নির্বাচন করুন
              </button>
            </p>
            <p className="mt-2 text-xs text-medium-gray">
              PDF, JPG, PNG (সর্বোচ্চ ৫ মেগাবাইট)
            </p>
          </div>

          {file && (
            <div className="mt-3 rounded-lg border border-primary-color/10 bg-white p-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-off-white border border-primary-color/10 flex items-center justify-center">
                  <span className="text-red text-xs font-bold">PDF</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">
                    {file.name}
                  </p>
                  <p className="text-xs text-medium-gray">{file.sizeLabel}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setFile(null)}
                className="h-9 w-9 rounded-md border border-primary-color/15 flex items-center justify-center active:scale-[0.97]"
                aria-label="remove"
              >
                <Trash2 className="w-4 h-4 text-medium-gray" />
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 border-t border-primary-color/10" />

        {/* footer actions */}
        <div className="pt-5 flex items-center justify-end gap-3">
          <SecondaryButton className="px-6 py-2">
            খসড়া সংরক্ষণ করুন
          </SecondaryButton>
          <PrimaryButton className="px-7 py-2">
            পরবর্তী ধাপে যান <span className="ml-2">→</span>
          </PrimaryButton>
        </div>
      </div>
    </Card>
  );
}
