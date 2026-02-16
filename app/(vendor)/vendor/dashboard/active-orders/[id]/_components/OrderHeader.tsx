import { ArrowLeft, CalendarDays } from "lucide-react";
import Link from "next/link";
import { PaymentStatus } from "../_types/order.types";


export default function OrderHeader({
  reqId,
  lastUpdated,
  paymentStatus,
}: {
  reqId: string;
  lastUpdated: string;
  paymentStatus: PaymentStatus;
}) {
  const isPending = paymentStatus === "pending_verification";

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Link
          href="/vendor/dashboard/active-orders"
          className="flex items-center gap-1 text-sm font-semibold text-light-gray hover:text-gray"
        >
          <ArrowLeft size={16} />
          ফিরে যান (Back)
        </Link>

        <span className="h-4 w-px bg-gray/20" />

        <span className="text-base font-extrabold text-gray">#{reqId}</span>

        {isPending ? (
          <span className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-extrabold text-blue-700">
            পেমেন্ট ভেরিফিকেশন চলছে
          </span>
        ) : (
          <span className="rounded-full border border-green/20 bg-green/10 px-3 py-1.5 text-xs font-extrabold text-green">
            অগ্রিম পেমেন্ট সম্পন্ন
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 text-xs font-semibold text-light-gray">
        <CalendarDays size={14} />
        <span>Last updated: {lastUpdated}</span>
      </div>
    </div>
  );
}
