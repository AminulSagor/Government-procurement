// app/(vendor)/vendor/dashboard/return-requests/[requestId]/_components/PaymentSummaryCard.tsx
import { CreditCard, CheckCircle2 } from "lucide-react";
import type { ReturnRequestDetails } from "../_types/return-request-details.types";

export default function PaymentSummaryCard({
  payment,
}: {
  payment: ReturnRequestDetails["payment"];
}) {
  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_28px_rgba(15,23,42,0.10)] ring-1 ring-slate-200">
      <header className="flex items-center gap-3 px-6 py-5">
        <span className="text-[var(--color-primary-color)]">
          <CreditCard className="h-7 w-7" />
        </span>
        <h3 className="text-[22px] font-extrabold text-slate-900">{payment.titleBn}</h3>
      </header>

      <div className="px-6 pb-6">
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-medium text-slate-600">মোট ক্রয় মূল্য:</p>
          <p className="text-[18px] font-extrabold text-slate-900">{payment.totalText}</p>
        </div>

        <div className="mt-5 space-y-4">
          {payment.lines.map((l) => (
            <div
              key={l.labelBn}
              className="flex items-center justify-between rounded-2xl bg-emerald-50 px-5 py-4 ring-1 ring-emerald-100"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                <p className="text-[18px] font-extrabold text-slate-900">{l.labelBn}</p>
              </div>
              <p className="text-[18px] font-extrabold text-emerald-700">{l.amountText}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-slate-200 pt-6">
          <div className="flex items-center justify-between">
            <p className="text-[18px] font-extrabold text-slate-700">মোট পরিশোধিত:</p>
            <p className="text-[22px] font-extrabold text-[var(--color-primary-color)]">
              {payment.grandText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}