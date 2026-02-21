"use client";

import { formatBDT } from "@/app/(office)/office/dashboard/procurement/[id]/cart/_components/money";
import { demoBudget } from "@/app/(office)/office/dummy-data/cart-data";
import BackButton from "@/components/buttons/back-button";
import PrimaryButton from "@/components/buttons/primary-button";
import Card from "@/components/cards/card";
import { Save } from "lucide-react";

export default function CartHeader() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <BackButton />

          <div>
            <h1 className="text-2xl font-semibold text-black">
              নতুন ক্রয়াদেশ তৈরি করুন
            </h1>
            <p className="text-sm text-medium-gray mt-1">
              বাজেট কোড ({demoBudget.budgetCodeBn}) অনুযায়ী প্রয়োজনীয় পণ্য যুক্ত
              করুন এবং ক্রয়ের জন্য চাহিদাপত্র প্রস্তুত করুন।
            </p>
          </div>
        </div>

        <PrimaryButton className="px-5 py-2 flex items-center gap-2">
          <Save className="w-4 h-4" />
          ড্রাফট সংরক্ষণ করুন
        </PrimaryButton>
      </div>

      <div className="mt-5">
        <Card className="p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-md bg-off-white border border-primary-color/10 flex items-center justify-center">
                  <span className="text-primary-color font-bold">▦</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-black">
                    {demoBudget.categoryBn}
                  </p>
                  <p className="text-sm text-medium-gray">
                    ব্যয়ের খাতের কোড:{" "}
                    <span className="text-black">
                      {demoBudget.budgetCodeBn}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-medium-gray">অবশিষ্ট বাজেট</p>
              <p className="text-xl font-extrabold text-black">
                ৳ {formatBDT(demoBudget.remainingBudget)}
              </p>
            </div>
          </div>

          <div className="mt-4 h-3 rounded-full bg-off-white overflow-hidden border border-primary-color/10">
            <div
              className="h-full bg-primary-color"
              style={{
                width: `${Math.min(100, Math.max(0, demoBudget.usedRatio * 100))}%`,
              }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
