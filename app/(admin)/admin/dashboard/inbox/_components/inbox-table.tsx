"use client";

import { Eye } from "lucide-react";
import { BudgetRow, InboxTabKey, PaymentRow } from "../_types/inbox-type";

function StatusPill() {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3E6] text-xs font-semibold text-[#F59E0B]">
      <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
      Pending
    </span>
  );
}

function ActionBtn() {
  return (
    <button className="h-9 w-9 rounded-lg bg-[var(--color-off-white)] hover:opacity-80 inline-flex items-center justify-center text-[var(--color-primary-color)]">
      <Eye className="h-4 w-4" />
    </button>
  );
}

export default function InboxTable({
  tab,
  budget,
  payment,
}: {
  tab: InboxTabKey;
  budget: BudgetRow[];
  payment: PaymentRow[];
}) {
  const rowsCount = tab === "budget" ? budget.length : payment.length;

  return (
    <div className="px-5 pb-0">
      <div className="rounded-2xl border border-border bg-white overflow-hidden">
        <div className="overflow-x-auto">
          {tab === "budget" ? (
            <table className="min-w-[980px] w-full">
              <thead className="bg-[var(--color-off-white)]">
                <tr className="text-left text-xs font-semibold text-gray/70">
                  <th className="px-4 py-3">তারিখ ও সময়</th>
                  <th className="px-4 py-3">দপ্তরের নাম</th>
                  <th className="px-4 py-3">প্রতিবেদনের ধরন</th>
                  <th className="px-4 py-3">অর্থবছর</th>
                  <th className="px-4 py-3">মোট কোড সংখ্যা</th>
                  <th className="px-4 py-3">অবস্থা</th>
                  <th className="px-4 py-3 text-right">অ্যাকশন</th>
                </tr>
              </thead>
              <tbody>
                {budget.map((r) => (
                  <tr key={r.id} className="border-t border-border">
                    <td className="px-4 py-4">
                      <div className="text-sm font-semibold text-black">{r.date}</div>
                      <div className="text-xs text-gray/60">{r.time}</div>
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-black">{r.officeName}</td>
                    <td className="px-4 py-4 text-sm text-gray/70">{r.reportType}</td>
                    <td className="px-4 py-4 text-sm text-gray/70">{r.fiscalYear}</td>
                    <td className="px-4 py-4 text-sm text-gray/70">{r.codeCount}</td>
                    <td className="px-4 py-4"><StatusPill /></td>
                    <td className="px-4 py-4 text-right"><ActionBtn /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="min-w-[980px] w-full">
              <thead className="bg-[var(--color-off-white)]">
                <tr className="text-left text-xs font-semibold text-gray/70">
                  <th className="px-4 py-3">তারিখ ও সময়</th>
                  <th className="px-4 py-3">দপ্তরের নাম</th>
                  <th className="px-4 py-3">অর্ডার আইডি</th>
                  <th className="px-4 py-3">পরিমাণ</th>
                  <th className="px-4 py-3">পেমেন্ট ধরন</th>
                  <th className="px-4 py-3">অবস্থা</th>
                  <th className="px-4 py-3 text-right">অ্যাকশন</th>
                </tr>
              </thead>
              <tbody>
                {payment.map((r) => (
                  <tr key={r.id} className="border-t border-border">
                    <td className="px-4 py-4">
                      <div className="text-sm font-semibold text-black">{r.date}</div>
                      <div className="text-xs text-gray/60">{r.time}</div>
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-black">{r.officeName}</td>
                    <td className="px-4 py-4 text-sm text-gray/70">{r.orderId}</td>
                    <td className="px-4 py-4 text-sm text-gray/70">{r.amount}</td>
                    <td className="px-4 py-4 text-sm text-gray/70">{r.paymentType}</td>
                    <td className="px-4 py-4"><StatusPill /></td>
                    <td className="px-4 py-4 text-right"><ActionBtn /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="px-4 py-3 bg-[var(--color-off-white)] text-xs text-gray/70">
          Showing 1 to {rowsCount} of {rowsCount} reports pending
        </div>
      </div>
    </div>
  );
}
