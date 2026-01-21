"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Printer, CheckSquare, CircleArrowLeft } from "lucide-react";
import Card from "@/components/cards/card";

type Props = {
  orderId: string;
  // optional data (later api/dummy connect)
  title?: string; // "অর্ডার #ORD-4918"
  badge?: string; // "প্রক্রিয়াধীন"
  subtitle?: string; // "২০ অক্টোবর..."
  onPrint?: () => void;
  onReceive?: () => void;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ActiveOrderHeader({
  orderId,
  title = "অর্ডার #ORD-4918",
  badge = "প্রক্রিয়াধীন",
  subtitle = "২০ অক্টোবর, ২০২৩ তারিখে সম্পন্ন • সরবরাহকারী: টেকসলিউশনস লি.",
  onPrint,
  onReceive,
}: Props) {
  const router = useRouter();

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* left */}
      <div className="flex items-start gap-3">
        <button>
          <CircleArrowLeft />
        </button>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-extrabold text-black">{title}</h1>

            <span className="rounded-md bg-primary-color/10 px-3 py-1 text-xs font-extrabold text-primary-color">
              {badge}
            </span>
          </div>

          <p className="mt-1 text-sm text-light-gray">{subtitle}</p>
        </div>
      </div>

      {/* right buttons */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={onPrint ?? (() => console.log("print", orderId))}
          className={cn(
            "flex h-11 items-center justify-center gap-2 rounded-md",
            "bg-white px-5 text-sm font-extrabold text-black",
            "border border-off-white shadow-sm hover:opacity-90",
          )}
        >
          <Printer className="h-4 w-4 text-light-gray" />
          চালান প্রিন্ট করুন
        </button>

        <button
          type="button"
          onClick={onReceive ?? (() => console.log("receive", orderId))}
          className={cn(
            "flex h-11 items-center justify-center gap-2 rounded-md",
            "bg-primary-color px-5 text-sm font-extrabold text-white",
            "shadow-sm hover:opacity-90",
          )}
        >
          <CheckSquare className="h-4 w-4" />
          পণ্য গ্রহণ করুন
        </button>
      </div>
    </div>
  );
}
