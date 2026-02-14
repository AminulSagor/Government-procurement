import Card from "@/components/cards/card";
import { FileText, Download } from "lucide-react";



import StatusPill from "./status-pill";
import { BudgetReportRow } from "../_types/budget-report.types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function moneyBDT(n: number) {
  // simple formatting like screenshot (৳ 1,20,000)
  return `৳ ${n.toLocaleString("en-IN")}`;
}

export default function ReportsTable({ rows }: { rows: BudgetReportRow[] }) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="w-full overflow-x-auto">
        <table className="min-w-[980px] w-full">
          <thead>
            <tr className="bg-[var(--color-off-white)] text-xs font-semibold text-[var(--color-light-gray)]">
              <th className="px-4 py-3 text-left">মন্ত্রণালয়/বিভাগ</th>
              <th className="px-4 py-3 text-left">তারিখ</th>
              <th className="px-4 py-3 text-left">দপ্তরের নাম ও আইডি</th>
              <th className="px-4 py-3 text-left">প্রাতিষ্ঠানিক কোড</th>
              <th className="px-4 py-3 text-center">পণ্যের সংখ্যা</th>
              <th className="px-4 py-3 text-right">সর্বমোট ব্যয়</th>
              <th className="px-4 py-3 text-center">অবস্থা</th>
              <th className="px-4 py-3 text-right">অ্যাকশন</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-[var(--color-border)]">
                <td className="px-4 py-4 font-semibold text-[var(--color-primary-color)]">
                  {r.ministryBn}
                </td>

                <td className="px-4 py-4 text-[var(--color-light-gray)]">
                  {r.date}
                </td>

                <td className="px-4 py-4">
                  <div className="font-semibold text-[var(--color-black)]">
                    {r.officeNameBn}
                  </div>
                  {r.officeSubBn ? (
                    <div className="mt-1 text-xs text-[var(--color-light-gray)]">
                      {r.officeSubBn}
                    </div>
                  ) : null}
                </td>

                <td className="px-4 py-4 text-[var(--color-light-gray)]">
                  {r.orgCode}
                </td>

                <td className="px-4 py-4 text-center font-semibold text-[var(--color-black)]">
                  {String(r.itemCount).padStart(2, "0")}
                </td>

                <td className="px-4 py-4 text-right font-semibold text-[var(--color-black)]">
                  {moneyBDT(r.amount)}
                </td>

                <td className="px-4 py-4 text-center">
                  <StatusPill status={r.status} />
                </td>

                <td className="px-4 py-4">
                  <div className="flex items-center justify-end gap-3">
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end gap-3">

                        {/* ---------- MAIN BUTTON ---------- */}
                        {r.status === "Approved" ? (
                          // OUTLINE BUTTON (Approved)
                          <Link
                            href={`/admin/dashboard/budget-report-management/${r.id}`}
                          >
                            <button

                              className="
          h-10 px-6
          rounded-xl
          border-2 border-slate-300
          bg-slate-50
          text-sm font-semibold
          text-slate-600
          hover:bg-slate-100
        "
                            >
                              {r.actionLabelBn}
                            </button>
                          </Link>
                        ) : (
                          // FILLED BUTTON (Pending / In Review)
                          <button
                            className="h-10 px-6 rounded-xl
          bg-[var(--color-primary-color)]
          text-sm font-semibold
          text-white
          shadow-sm
          hover:opacity-95"
                          >
                            {r.actionLabelBn}
                          </button>
                        )}

                        {/* ---------- RIGHT ICON ---------- */}
                        {r.status === "Approved" ? (
                          // Download icon (no box)
                          <button className="text-[var(--color-primary-color)]">
                            <Download size={20} strokeWidth={2} />
                          </button>
                        ) : (
                          // PDF square icon
                          <button
                            className="
          h-10 w-10
          rounded-xl
          border border-slate-300
          bg-white
          flex items-center justify-center
          text-slate-400
        "
                          >
                            <FileText size={18} strokeWidth={2} />
                          </button>
                        )}
                      </div>
                    </td>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* footer note (like screenshot bottom-left text) */}
      <div className="flex items-center justify-between border-t border-[var(--color-border)] bg-white px-4 py-3 text-xs text-[var(--color-light-gray)]">
        <p>৮৫৪টি টিআপিপত্রের মধ্যে ১-০৫ প্রদর্শিত হচ্ছে</p>
        <p />
      </div>
    </Card>
  );
}
