"use client";

import React from "react";
import Card from "@/components/cards/card";
import { Building2, CreditCard, CheckCircle2 } from "lucide-react";

type Props = {
  title?: string;
  bankName?: string;
  accountMasked?: string;
  statusText?: string;
};

export default function PaymentMethodCard({
  title = "যে মাধ্যমে পেমেন্ট হবে",
  bankName = "সিটি ব্যাংক পিএলসি",
  accountMasked = "**** **** **** ১২৩৪",
  statusText = "যাচাই করা হয়েছে",
}: Props) {
  return (
    <Card className="rounded-2xl border border-gray/10 bg-white p-0 overflow-hidden shadow-sm">
      {/* header */}
      <div className="flex items-center gap-2 px-5 py-4">
        <span className="text-primary-color">
          <Building2 size={16} />
        </span>
        <p className="text-xs font-extrabold text-gray">{title}</p>
      </div>

      <div className="h-px w-full bg-gray/10" />

      {/* body */}
      <div className="px-5 py-5">
        <div className="flex items-start gap-3">
          {/* icon box */}
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-gray/10 bg-secondary/30">
            <CreditCard size={18} className="text-gray/60" />
          </div>

          <div className="flex-1">
            <p className="text-sm font-extrabold text-gray">{bankName}</p>
            <p className="mt-1 text-xs font-semibold text-gray/45">
              {accountMasked}
            </p>

            <div className="mt-2 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-600" />
              <span className="text-xs font-semibold text-green-600">
                {statusText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
