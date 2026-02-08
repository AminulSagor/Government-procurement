"use client";

import * as React from "react";
import { X, Laptop, Mouse } from "lucide-react";
import { cn } from "@/lib/utils";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type OrderLine = {
  label: string;
  regular: string;
  order: string;
};

type ProductDetails = {
  id: string;
  icon: "laptop" | "mouse";
  name: string;
  code: string;
  category: string;
  specsTitle: string;
  bullets: string[];
  pricing: OrderLine[];
};

const products: ProductDetails[] = [
  {
    id: "p1",
    icon: "laptop",
    name: "ডেল ল্যাটিটিউড ৫৪২০",
    code: "০৩৫৯১০১",
    category: "ল্যাপটপ",
    specsTitle:
      "Intel Core i7 11th Gen প্রসেসর, ১৬ জিবি DDR4 র‍্যাম, ৫১২ জিবি NVMe SSD স্টোরেজ এবং ১৪ ইঞ্চি FHD (1920x1080) ডিসপ্লে",
    bullets: [
      "ইন্টেল আইরিস এক্সই গ্রাফিক্স",
      "ব্যাকলিট কীবোর্ড এবং ফিঙ্গারপ্রিন্ট রিডার",
      "উইন্ডোজ ১০ প্রো প্রি-ইনস্টল করা",
      "৮-সেল ব্যাটারি এবং ফাস্ট চার্জিং সাপোর্ট",
    ],
    pricing: [
      { label: "একক মূল্য", regular: "৳ ৮,২০,০০০", order: "৳ ৮,১৫,০০০" },
      { label: "মোট মূল্য (২ টি)", regular: "৳ ৮,৬০,০০০", order: "৳ ৮,১৫,০০০" },
    ],
  },
  {
    id: "p2",
    icon: "mouse",
    name: "লজিটেক MX মাস্টার ৩",
    code: "০৩৫৯১০২",
    category: "কম্পিউটার এক্সেসরিজ",
    specsTitle:
      "আরামদায়ক হাই-প্রিসিশন মাউস, ২০০০ ডিপিআই সেন্সর, USB/ব্লুটুথ কানেক্টিভিটি এবং ব্যাটারি ব্যাকআপ",
    bullets: [
      "ম্যাগস্পিড স্ক্রল হুইল",
      "মাল্টি-ডিভাইস সাপোর্ট",
      "ইউএসবি-সি ফাস্ট চার্জিং",
      "উইন্ডোজ/ম্যাক সামঞ্জস্যপূর্ণ",
    ],
    pricing: [
      { label: "একক মূল্য", regular: "৳ ১২,০০০", order: "৳ ১১,৫০০" },
      { label: "মোট মূল্য (১ টি)", regular: "৳ ১২,০০০", order: "৳ ১১,৫০০" },
    ],
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-extrabold text-light-gray">{children}</p>;
}

function ProductIcon({ kind }: { kind: ProductDetails["icon"] }) {
  const Icon = kind === "laptop" ? Laptop : Mouse;
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray/5">
      <Icon size={18} className="text-light-gray" />
    </div>
  );
}

function PriceTable({ rows }: { rows: OrderLine[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray/10">
      <div className="grid grid-cols-[1fr_140px_140px] bg-gray/5 px-4 py-3">
        <p className="text-xs font-extrabold text-light-gray">বিবরণ</p>
        <p className="text-xs font-extrabold text-light-gray text-right">
          সাধারণ মূল্য
        </p>
        <p className="text-xs font-extrabold text-light-gray text-right">
          অর্ডার মূল্য
        </p>
      </div>

      {rows.map((r, idx) => (
        <div
          key={idx}
          className={cn(
            "grid grid-cols-[1fr_140px_140px] px-4 py-3",
            idx !== rows.length - 1 && "border-b border-gray/10"
          )}
        >
          <p className="text-sm font-semibold text-gray">{r.label}</p>
          <p className="text-sm font-semibold text-gray text-right">{r.regular}</p>
          <p className="text-sm font-extrabold text-primary text-right">
            {r.order}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function SubmittedProofDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[860px] rounded-2xl border border-gray/15 bg-white p-0">
        {/* header */}
        <div className="flex items-center justify-between gap-4 border-b border-gray/10 px-6 py-4">
          <p className="text-base font-semibold text-gray">
            অর্ডারকৃত সকল পণ্যের বিস্তারিত তথ্য
          </p>
        </div>

        {/* body (scroll) */}
        <div className="max-h-[70vh] overflow-y-auto px-6 py-5">
          <div className="space-y-6">
            {products.map((p, i) => (
              <div key={p.id} className={cn(i !== 0 && "pt-2")}>
                {/* product head */}
                <div className="flex items-start gap-3">
                  <ProductIcon kind={p.icon} />

                  <div className="min-w-0">
                    <p className="text-sm font-extrabold text-gray">{p.name}</p>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-extrabold text-primary">
                        কোড: {p.code}
                      </span>

                      <span className="rounded-lg border border-gray/10 bg-gray/5 px-3 py-1 text-xs font-semibold text-light-gray">
                        ক্যাটাগরি: {p.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* specs */}
                <div className="mt-4">
                  <SectionTitle>প্রযুক্তিগত বৈশিষ্ট্য</SectionTitle>

                  <div className="mt-2 rounded-xl border border-gray/10 bg-gray/5 p-4">
                    <p className="text-sm font-semibold text-gray">
                      {p.specsTitle}
                    </p>

                    <ul className="mt-3 space-y-2">
                      {p.bullets.map((b, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-light-gray" />
                          <p className="text-sm font-semibold text-gray">{b}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* order details */}
                <div className="mt-5">
                  <SectionTitle>অর্ডার বিবরণ</SectionTitle>
                  <div className="mt-2">
                    <PriceTable rows={p.pricing} />
                  </div>
                </div>

                {/* divider */}
                {i !== products.length - 1 && (
                  <div className="mt-6 h-px w-full bg-gray/10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* footer */}
        <div className="flex items-center justify-end gap-2 border-t border-gray/10  px-6 py-4">
          <Button className="bg-primary-color"  size="sm" onClick={() => onOpenChange(false)}>
            বন্ধ করুন
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
