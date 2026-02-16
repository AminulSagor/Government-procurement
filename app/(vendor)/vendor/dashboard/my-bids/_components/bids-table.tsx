// app/(vendor)/bids/_components/bids-table.tsx
"use client";

import Card from "@/components/cards/card";
import StatusPill, { BidStatus } from "./status-pill";

import { Eye, ListFilter, Clock3 } from "lucide-react";
import Pagination from "./pagination";

type Row = {
  rfq: string;
  dateText: string;
  title: string;
  subtitle: string;
  amount: string;
  status: BidStatus;
  timeAgo: string;
};

const rows: Row[] = [
  {
    rfq: "#RFQ-2023-889",
    dateText: "২৬ মে, ২০২০",
    title: "জেলা অফিস ভবনের মেরামত কাজ",
    subtitle: "কারিগরি সহায়তা প্রদানের জন্য অফিস...",
    amount: "৳ ৬,৫০,০০০",
    status: "Under Review",
    timeAgo: "২ দিন আগে",
  },
  {
    rfq: "#RFQ-2023-872",
    dateText: "২৫ মে, ২০২০",
    title: "আইটি সরঞ্জাম সরবরাহকারীর",
    subtitle: "মেরামত ও রক্ষণাবেক্ষণ সার্ভিস...",
    amount: "৳ ৭৫,০০০",
    status: "Accepted",
    timeAgo: "১৫ দিন আগে",
  },
  {
    rfq: "#RFQ-2023-865",
    dateText: "২০ মে, ২০২০",
    title: "অফিস আসবাবপত্র সরবরাহ",
    subtitle: "নতুন সরঞ্জাম সরবরাহ এবং সেটআপ ...",
    amount: "৳ ১,২৫,০০০",
    status: "Rejected",
    timeAgo: "২৫ দিন আগে",
  },
  {
    rfq: "#RFQ-2023-850",
    dateText: "১২ মে, ২০২০",
    title: "ক্যাম্পাস ক্যাফেটেরিয়া সার্ভিস",
    subtitle: "কারিগরি সহায়তা প্রদানের জন্য ...",
    amount: "৳ ৫,০০,০০০",
    status: "Under Review",
    timeAgo: "৬ মাস আগে",
  },
];

const timeIconColor = (s: BidStatus) =>
  s === "Under Review"
    ? "text-amber-600"
    : s === "Accepted"
    ? "text-primary"
    : "text-primary";

export default function BidsTable() {
  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray/10">
        <h3 className="text-sm font-extrabold text-gray">সাম্প্রতিক উদ্ধৃতি তালিকা</h3>

        <div className="flex items-center gap-2 text-xs font-semibold text-gray/60">
          <ListFilter size={14} className="text-gray/40" />
          <span>সাজান করুন:</span>
          <span className="text-gray">সর্বশেষ</span>
        </div>
      </div>

      {/* table */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[920px] w-full">
          <thead>
            <tr className="text-left text-xs font-extrabold text-gray/50">
              <th className="px-5 py-3">উদ্ধৃতি আইডি</th>
              <th className="px-5 py-3">বিষয়</th>
              <th className="px-5 py-3">টাকার পরিমাণ</th>
              <th className="px-5 py-3">স্ট্যাটাস</th>
              <th className="px-5 py-3">সময় অতিবাহিত</th>
              <th className="px-5 py-3 text-right">অ্যাকশন</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr key={r.rfq} className="border-t border-gray/10">
                {/* id */}
                <td className="px-5 py-4">
                  <p className="text-sm font-extrabold text-gray">{r.rfq}</p>
                  <p className="mt-1 text-xs font-semibold text-gray/40">{r.dateText}</p>
                </td>

                {/* subject */}
                <td className="px-5 py-4">
                  <p className="text-sm font-bold text-gray">{r.title}</p>
                  <p className="mt-1 text-xs font-semibold text-light-gray line-clamp-1">
                    {r.subtitle}
                  </p>
                </td>

                {/* amount */}
                <td className="px-5 py-4">
                  <p className="text-sm font-extrabold text-gray">{r.amount}</p>
                </td>

                {/* status */}
                <td className="px-5 py-4">
                  <StatusPill status={r.status} />
                </td>

                {/* time */}
                <td className="px-5 py-4">
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray/60">
                    <Clock3 size={16} className={timeIconColor(r.status)} />
                    {r.timeAgo}
                  </div>
                </td>

                {/* action */}
                <td className="px-5 py-4 text-right">
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80">
                    বিস্তারিত <Eye size={16} className="text-primary/70" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* footer */}
      <div className="flex items-center justify-between px-5 py-4 border-t border-gray/10">
        <p className="text-xs font-semibold text-gray/50">
          প্রদর্শন হচ্ছে <span className="text-gray">১</span> থেকে <span className="text-gray">৪</span>, মোট{" "}
          <span className="text-gray">১২</span> টি
        </p>
        <Pagination />
      </div>
    </Card>
  );
}
