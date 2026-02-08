"use client";

import React from "react";
import Card from "@/components/cards/card";
import { BankInfo } from "../_types/profile-status.types";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BankInfoStrip({ bank }: { bank: BankInfo }) {
  return (
    <Card className="p-0 overflow-hidden">
      {/* top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-primary-color to-green" />

      {/* header */}
      <div className="flex items-center justify-between gap-3 bg-secondary px-6 py-4">
        <div className="flex items-center gap-3">
          <Lock className="h-4 w-4 text-primary-color" />

          <p className="text-sm font-semibold text-gray">ব্যাংকিং তথ্য</p>

          <span className="rounded-full bg-green px-3 py-1 text-[11px] font-semibold text-white">
            {bank.secureLabel}
          </span>

          <div className="flex items-center gap-1 text-xs font-semibold text-green">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green" />
            যাচাইকৃত অ্যাকাউন্ট
          </div>
        </div>

        {/* edit as text (not button) */}
        <button
          type="button"
          onClick={() => null}
          className="text-xs font-semibold text-primary hover:underline"
        >
          সম্পাদনা
        </button>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 gap-6 px-6 py-5 sm:grid-cols-4">
        <div>
          <p className="text-xs font-semibold text-gray">ব্যাংকের নাম</p>
          <p className="mt-2 text-sm font-semibold text-gray">
            {bank.bankName}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray">অ্যাকাউন্ট হোল্ডার</p>
          <p className="mt-2 text-sm font-semibold text-gray">
            {bank.accountName}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray">অ্যাকাউন্ট নম্বর</p>
          <p className="mt-2 text-sm font-semibold text-gray">
            {bank.accountNumberMasked}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray">রাউটিং নম্বর</p>
          <p className="mt-2 text-sm font-semibold text-gray">
            {bank.routingNumber}
          </p>
        </div>
      </div>
    </Card>
  );
}
