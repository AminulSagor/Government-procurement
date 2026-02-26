// app/(vendor)/vendor/dashboard/return-requests/[requestId]/_components/ShipmentTrackingCard.tsx
import CardShell from "./CardShell";
import { Truck, CheckCircle2 } from "lucide-react";
import type { ReturnRequestDetails, ShipmentEvent } from "../_types/return-request-details.types";

function StatusPill({
  text,
  tone,
}: {
  text: string;
  tone: "success" | "warning" | "neutral";
}) {
  const cls =
    tone === "success"
      ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
      : tone === "warning"
      ? "bg-orange-50 text-orange-700 ring-1 ring-orange-200"
      : "bg-slate-100 text-slate-700 ring-1 ring-slate-200";

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1",
        "text-[11px] font-semibold",
        cls,
      ].join(" ")}
    >
      {tone === "success" ? <CheckCircle2 className="h-3.5 w-3.5" /> : null}
      {text}
    </span>
  );
}

function ShipmentTimeline({ events }: { events: ShipmentEvent[] }) {
  return (
    <div className="mt-6 rounded-2xl bg-white">
      <div className="relative pl-10">
        {/* vertical line */}
        <div className="absolute left-4 top-2 h-[calc(100%-8px)] w-[2px] bg-slate-200" />

        <ul className="space-y-8">
          {events.map((ev) => {
            const dotCls = ev.active
              ? "bg-emerald-500 ring-4 ring-emerald-100"
              : ev.done
              ? "bg-[var(--color-primary-color)] ring-4 ring-[color:rgba(31,110,128,0.12)]"
              : "bg-slate-300 ring-4 ring-slate-100";

            const isFinalGreen = ev.active && ev.key === "product_received";

            return (
              <li key={ev.key} className="relative">
                {/* dot */}
                <span
                  className={[
                    "absolute -left-[28px] top-1.5 h-4 w-4 rounded-full",
                    dotCls,
                    isFinalGreen ? "grid place-items-center" : "",
                  ].join(" ")}
                >
                  {isFinalGreen ? <CheckCircle2 className="h-4 w-4 text-white" /> : null}
                </span>

                <div className="space-y-1">
                  <p className="text-[14px] font-semibold text-slate-900">
                    {ev.titleBn}{" "}
                    <span className="font-semibold text-slate-700">({ev.titleEn})</span>
                  </p>

                  {ev.noteBn ? (
                    <p className="text-[12px] leading-relaxed text-slate-600">{ev.noteBn}</p>
                  ) : null}

                  {ev.dateText ? (
                    <p className="text-[11px] text-slate-400">{ev.dateText}</p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function ShipmentTrackingCard({
  shipment,
}: {
  shipment: ReturnRequestDetails["shipment"];
}) {
  return (
    <CardShell title="শিপমেন্ট ট্র্যাকিং তথ্য" icon={<Truck className="h-5 w-5" />}>
      {/* info box */}
      <div className="rounded-xl bg-[var(--color-off-white)] p-5 ring-1 ring-slate-100">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-1">
            <p className="text-[11px] font-medium text-slate-500">কুরিয়ার (COURIER)</p>
            <p className="text-[13px] font-semibold text-slate-900">{shipment.courierNameBn}</p>
          </div>

          <div className="space-y-1">
            <p className="text-[11px] font-medium text-slate-500">ট্র্যাকিং আইডি (TRACKING ID)</p>
            <p className="text-[13px] font-semibold text-slate-900">{shipment.trackingId}</p>
          </div>

          <div className="space-y-1">
            <p className="text-[11px] font-medium text-slate-500">বর্তমান অবস্থা (STATUS)</p>
            <StatusPill text={shipment.statusPill.textBn} tone={shipment.statusPill.tone} />
          </div>
        </div>
      </div>

      {/* timeline (inside same card like screenshot) */}
      <ShipmentTimeline events={shipment.events} />
    </CardShell>
  );
}