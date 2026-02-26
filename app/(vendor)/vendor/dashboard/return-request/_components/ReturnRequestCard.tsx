// app/(vendor)/vendor/dashboard/return-requests/[requestId]/_components/ReturnRequestCard.tsx
import { SquareArrowLeft } from "lucide-react";
import type { ReturnRequestDetails } from "../_types/return-request-details.types";
import Link from "next/link";

function StatusTag({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-orange-50 px-4 py-2 text-[13px] font-semibold text-orange-700 ring-1 ring-orange-200">
      {text}
    </span>
  );
}

export default function ReturnRequestCard({
  card,
}: {
  card: ReturnRequestDetails["returnCard"];
}) {
  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_28px_rgba(15,23,42,0.10)] ring-1 ring-orange-200/70">
      {/* header */}
      <header className="flex items-center gap-3 border-b border-orange-200/60 bg-orange-50 px-6 py-5">
        <span className="text-orange-600">
          <SquareArrowLeft className="h-6 w-6" />
        </span>
        <h3 className="text-[22px] font-extrabold text-slate-900">
          {card.titleBn}
        </h3>
      </header>

      {/* body */}
      <div className="px-6 py-6">
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-[14px] font-medium text-slate-500">আবেদন আইডি</p>
            <p className="text-[20px] font-extrabold text-slate-900">
              {card.invoiceNo}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-[14px] font-medium text-slate-500">
              ফেরতের কারণ
            </p>
            <p className="text-[18px] font-extrabold text-slate-900">
              পণ্য ক্ষতিগ্রস্ত/ভাঙা ছিল
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-[14px] font-medium text-slate-500">স্থিতি</p>
            <StatusTag text={card.returnStatus.textBn} />
          </div>

          <Link
            href={`/vendor/dashboard/return-items-management?ret=${encodeURIComponent(card.invoiceNo)}`}
            className={[
              "mt-2 block w-full rounded-2xl px-6 py-4 text-center",
              "bg-[var(--color-primary-color)] text-white",
              "text-[18px] font-extrabold",
              "shadow-[0_16px_28px_rgba(31,110,128,0.30)]",
              "hover:opacity-95 active:opacity-90",
            ].join(" ")}
          >
            আবেদন যাচাই করুন
          </Link>
        </div>
      </div>
    </section>
  );
}
