// app/(vendor)/bids/[id]/page.tsx
"use client";


import {
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Download,
  FileText,
  Truck,
} from "lucide-react";
import Breadcrumb from "../_components/breadcrumb";
import Card from "@/components/cards/card";
import { Button } from "@/components/ui/button";

type DocItem = { name: string; size: string };
type Row = { title: string; qty: number; unit: string; rate: number; vat: number; total: number };

const docs: DocItem[] = [
  { name: "Rate_Sheet.pdf", size: "245 KB" },
  { name: "Technical_Spec.pdf", size: "1.2 MB" },
];

const items: Row[] = [
  { title: "অফিস স্টেশনারি সরবরাহ", qty: 10, unit: "প্যাক", rate: 1500, vat: 75, total: 1575 },
  { title: "প্রিন্টার টোনার", qty: 2, unit: "পিস", rate: 8500, vat: 425, total: 8925 },
];

const money = (n: number) => `৳ ${n.toLocaleString("en-US")}`;

export default function Page() {
  return (
    <div className="min-h-screen bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-6 space-y-5">
        {/* header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <Breadcrumb />
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl border border-gray/15 bg-white grid place-items-center text-gray/60">
                <ClipboardList size={16} />
              </div>
              <h1 className="text-base font-extrabold text-gray">
                উদ্ধৃতি বিবরণী: <span className="text-gray/80">#RFQ-2023-889</span>
              </h1>
              <CheckCircle2 size={16} className="text-green" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-2 text-sm font-extrabold text-green">
            Accepted
          </div>
        </div>

        {/* content grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[320px_1fr]">
          {/* left column */}
          <div className="space-y-4">
            <ProductRequirementsCard />
            <MessageAndTotalCard />
          </div>

          {/* right column */}
          <QuotationSubmittedCard />
        </div>
      </div>
    </div>
  );
}

/* ---------------- left: product requirements ---------------- */

function ProductRequirementsCard() {
  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-5">
      <div className="space-y-1">
        <p className="text-xs font-extrabold text-gray">পণ্যসমূহ চাহিদা</p>
        <p className="text-[11px] font-semibold text-gray/50">Your Product Requirements</p>
      </div>

      <div className="mt-4 space-y-3">
        <div>
          <p className="text-[11px] font-semibold text-gray/40">পণ্যের নাম</p>
          <p className="text-sm font-extrabold text-gray">HP LaserJet Pro P1102 Toner (Original)</p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-gray/60">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-primary/60" />
            Qty: 15 Units
          </span>
        </div>

        <div className="rounded-xl border border-gray/10 bg-secondary p-4">
          <p className="text-xs font-extrabold text-gray">Item Specs</p>
          <ul className="mt-2 space-y-1 text-xs font-semibold text-gray/60">
            <li>• Intel Core i7 (11th Gen)</li>
            <li>• 16GB RAM, 512GB SSD</li>
            <li>• 15.6&quot; FHD Display (1920×1080)</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}

function MessageAndTotalCard() {
  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs font-extrabold text-gray">বার্তা প্রেরণ করবেন?</p>
          <p className="text-[11px] font-semibold text-gray/50">Need to send a message?</p>
        </div>

        <button className="h-8 w-8 rounded-xl border border-gray/15 bg-white grid place-items-center text-gray/60">
          <BadgeCheck size={16} />
        </button>
      </div>

      <div className="mt-4 rounded-xl border border-gray/10 bg-secondary p-4">
        <p className="text-xs font-semibold text-gray/60">
          আপনার কোটেশন গ্রহণ করা হয়েছে। প্রয়োজনে নীচের বাটনে ক্লিক করে বার্তা পাঠাতে পারেন।
        </p>
      </div>

      <div className="mt-4 rounded-2xl border border-primary/15 bg-primary/5 p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-gray/60">মোট প্রস্তাবিত মূল্য</p>
          <p className="text-xs font-semibold text-gray/60">VAT সহ</p>
        </div>
        <p className="mt-2 text-2xl font-extrabold text-gray">{money(650000)}</p>
      </div>

      <Button className="mt-4 w-full h-10 rounded-xl bg-primary-color">
        বার্তা পাঠান / বার্তা লিখুন <span className="ml-2">→</span>
      </Button>
    </Card>
  );
}

/* ---------------- right: submitted quotation ---------------- */

function QuotationSubmittedCard() {
  return (
    <Card className="rounded-2xl border border-primary/25 bg-white p-5">
      <div className="space-y-1">
        <p className="text-xs font-extrabold text-gray">আপনার সাবমিটকৃত কোটেশন</p>
        <p className="text-[11px] font-semibold text-gray/50">Your Submitted Quotation</p>
      </div>

      {/* Financial Breakdown */}
      <div className="mt-5 rounded-2xl border border-gray/10 bg-white">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray/10">
          <ClipboardList size={16} className="text-gray/60" />
          <p className="text-sm font-extrabold text-gray">আর্থিক বিশ্লেষণ (Financial Breakdown)</p>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-[720px] w-full">
            <thead>
              <tr className="text-left text-[11px] font-extrabold text-gray/50">
                <th className="px-4 py-3">আইটেম</th>
                <th className="px-4 py-3">পরিমাণ</th>
                <th className="px-4 py-3">রেট (৳)</th>
                <th className="px-4 py-3">VAT (৳)</th>
                <th className="px-4 py-3 text-right">মোট (৳)</th>
              </tr>
            </thead>
            <tbody>
              {items.map((r, idx) => (
                <tr key={idx} className="border-t border-gray/10">
                  <td className="px-4 py-3">
                    <p className="text-xs font-bold text-gray">{r.title}</p>
                  </td>
                  <td className="px-4 py-3 text-xs font-semibold text-gray/60">
                    {r.qty} {r.unit}
                  </td>
                  <td className="px-4 py-3 text-xs font-semibold text-gray/60">
                    {r.rate.toLocaleString("en-US")}
                  </td>
                  <td className="px-4 py-3 text-xs font-semibold text-gray/60">
                    {r.vat.toLocaleString("en-US")}
                  </td>
                  <td className="px-4 py-3 text-right text-xs font-extrabold text-gray">
                    {r.total.toLocaleString("en-US")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Voucher price */}
        <div className="px-4 pb-4">
          <div className="mt-4 rounded-2xl border border-gray/10 bg-secondary p-4">
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-gray/60" />
              <p className="text-sm font-extrabold text-gray">ভাউচার মূল্য (Voucher Price)</p>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-gray/10 bg-white p-4">
                <p className="text-[11px] font-semibold text-gray/50">মোট ভাউচার মূল্য</p>
                <p className="mt-2 text-lg font-extrabold text-gray">{money(60000)}</p>
              </div>
              <div className="rounded-xl border border-gray/10 bg-white p-4">
                <p className="text-[11px] font-semibold text-gray/50">মোট ভাউচার মূল্য (VAT সহ)</p>
                <p className="mt-2 text-lg font-extrabold text-gray">{money(69400)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary strip */}
      <div className="mt-4 rounded-2xl bg-primary-color p-4 text-white">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/15 grid place-items-center">
              <ClipboardList size={18} />
            </div>
            <div>
              <p className="text-sm font-extrabold">দরের সারাংশ (Summary)</p>
              <p className="text-[11px] font-semibold text-white/80">
                Comparison of standard vs voucher rates
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-2">
            <div className="rounded-xl bg-white/10 px-4 py-3">
              <p className="text-[11px] font-semibold text-white/80">মোট অফার মূল্য</p>
              <p className="mt-1 text-base font-extrabold">{money(690000)}</p>
            </div>
            <div className="rounded-xl bg-white/10 px-4 py-3">
              <p className="text-[11px] font-semibold text-white/80">মোট ভাউচার মূল্য</p>
              <p className="mt-1 text-base font-extrabold">{money(60000)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Logistics / Warranty / Delivery */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <MiniInfo label="লজিস্টিকস (Logistics)" value="প্রযোজ্য" icon={<Truck size={16} />} />
        <MiniInfo label="ওয়ারেন্টি (Warranty)" value="১ বছর" icon={<BadgeCheck size={16} />} />
        <MiniInfo label="ডেলিভারি সময় (Delivery Time)" value="১৫ দিন" icon={<Clock3 size={16} />} />
      </div>

      {/* Documents */}
      <div className="mt-4 rounded-2xl border border-gray/10 bg-white p-4">
        <p className="text-sm font-extrabold text-gray">ডকুমেন্ট (Documents)</p>

        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
          {docs.map((d) => (
            <div
              key={d.name}
              className="flex items-center justify-between gap-3 rounded-xl border border-gray/10 bg-secondary px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-white border border-gray/10 grid place-items-center text-gray/60">
                  <FileText size={16} />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-gray">{d.name}</p>
                  <p className="text-[11px] font-semibold text-gray/50">{d.size}</p>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:opacity-80">
                <Download size={14} />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Remarks */}
      <div className="mt-4 rounded-2xl border border-gray/10 bg-white p-4">
        <p className="text-sm font-extrabold text-gray">মন্তব্য (Remarks)</p>
        <div className="mt-3 rounded-xl border border-gray/10 bg-secondary p-4">
          <p className="text-xs font-semibold text-gray/60">
            প্রয়োজন হলে অতিরিক্ত তথ্য এখানে থাকবে। এই অংশটি remarks/notes হিসেবে দেখাবেন।
          </p>
        </div>
      </div>

      {/* actions */}
      <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Button variant="secondary" className="h-10 rounded-xl">
          ← ফিরে যান
        </Button>

        <div className="flex flex-col gap-3 md:flex-row">
          <Button variant="secondary" className="h-10 rounded-xl gap-2">
            <Download size={16} />
            রিপোর্ট ডাউনলোড
          </Button>
          <Button className="h-10 rounded-xl gap-2 bg-primary-color">
            অর্ডার প্রসেস করুন <span className="ml-1">→</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}

function MiniInfo({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-4">
      <div className="flex items-center gap-2 text-gray/60">
        {icon}
        <p className="text-xs font-semibold">{label}</p>
      </div>
      <p className="mt-2 text-sm font-extrabold text-gray">{value}</p>
    </Card>
  );
}
