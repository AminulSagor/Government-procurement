// app/(vendor)/vendor/dashboard/return-requests/[requestId]/_components/OrderInfoCard.tsx
import { MapPin, Package2 } from "lucide-react";
import type { ReturnRequestDetails } from "../_types/return-request-details.types";

export default function OrderInfoCard({
  orderInfo,
}: {
  orderInfo: ReturnRequestDetails["orderInfo"];
}) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.10)] ring-1 ring-slate-200">
      <h3 className="text-[18px] font-extrabold text-slate-900">{orderInfo.titleBn}</h3>

      <div className="mt-5 space-y-5">
        {/* item */}
        <div className="flex items-start gap-4">
          <span className="mt-0.5 text-slate-400">
            <Package2 className="h-6 w-6" />
          </span>

          <div className="space-y-1">
            <p className="text-[14px] font-medium text-slate-500">আইটেম</p>
            <p className="text-[18px] font-extrabold text-slate-900">{orderInfo.productName}</p>
          </div>
        </div>

        {/* destination */}
        <div className="flex items-start gap-4">
          <span className="mt-0.5 text-slate-400">
            <MapPin className="h-6 w-6" />
          </span>

          <div className="space-y-1">
            <p className="text-[14px] font-medium text-slate-500">গন্তব্য</p>
            <p className="text-[18px] font-extrabold text-slate-900">{orderInfo.addressBn}</p>
          </div>
        </div>
      </div>
    </section>
  );
}