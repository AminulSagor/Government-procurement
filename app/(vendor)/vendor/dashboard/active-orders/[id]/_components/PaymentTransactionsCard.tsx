"use client";

import Card from "@/components/cards/card";

function money(n: number) {
  return `৳ ${n.toLocaleString("en-US")}`;
}

export default function PaymentTransactionsCard({
  items = [
    { date: "২২ অক্টোবর", type: "অগ্রিম", amount: 62500, noteUrlText: "দেখুন" },
  ],
  totalPaid = 62500,
  remaining = 62500,
}: {
  items?: { date: string; type: string; amount: number; noteUrlText?: string }[];
  totalPaid?: number;
  remaining?: number;
}) {
  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between px-6 py-4">
        <p className="text-sm font-extrabold text-gray">পেমেন্ট ট্রানজ্যাকশন ইতিহাস</p>
        <div className="h-5 w-5 rounded bg-secondary" />
      </div>

      {/* table */}
      <div className="px-6 pb-4">
        <div className="overflow-hidden rounded-xl border border-gray/10">
          <div className="grid grid-cols-[140px_1fr_160px_90px] bg-secondary px-4 py-3">
            <p className="text-xs font-extrabold text-light-gray">তারিখ</p>
            <p className="text-xs font-extrabold text-light-gray">ধরণ</p>
            <p className="text-xs font-extrabold text-light-gray text-right">পরিমাণ</p>
            <p className="text-xs font-extrabold text-light-gray text-right">নথি</p>
          </div>

          {items.map((t, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[140px_1fr_160px_90px] px-4 py-3 border-t border-gray/10"
            >
              <p className="text-xs font-semibold text-light-gray">{t.date}</p>

              <div>
                <span className="inline-flex rounded-md bg-secondary px-2 py-1 text-[11px] font-extrabold text-primary">
                  {t.type}
                </span>
              </div>

              <p className="text-xs font-extrabold text-gray text-right">
                {money(t.amount)}
              </p>

              <button
                type="button"
                className="text-xs font-extrabold text-primary text-right hover:underline"
              >
                {t.noteUrlText ?? "দেখুন"}
              </button>
            </div>
          ))}

          {/* totals */}
          <div className="border-t border-gray/10 px-4 py-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-extrabold text-light-gray">মোট পরিশোধিত:</p>
              <p className="text-xs font-extrabold text-gray">{money(totalPaid)}</p>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <p className="text-xs font-extrabold text-light-gray">অবশিষ্ট ব্যালেন্স:</p>
              <p className="text-xs font-extrabold text-green">{money(remaining)}</p>
            </div>

            <p className="mt-3 text-[11px] font-semibold text-light-gray">
              নথি লিঙ্কে ক্লিক করলে পেমেন্ট রসিদ/চালান সম্পর্কিত তথ্য দেখা যাবে (ডেমো)।
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
