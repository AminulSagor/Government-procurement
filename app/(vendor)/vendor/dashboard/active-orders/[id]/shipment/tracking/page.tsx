"use client";

import { useMemo } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";

import Card from "@/components/cards/card";

import { cn } from "@/lib/utils";

import OrderHeader from "../../_components/OrderHeader";
import OrderStepper from "../../_components/OrderStepper";



import {
  Truck,
  PackageCheck,
  MapPin,
  ClipboardList,
  Circle,
} from "lucide-react";
import { Order, ShipmentStatus, ShipmentTrackingStep } from "../../_types/order.types";
import { orders } from "../../_data/orders";
import { Button } from "@/components/ui/button";

function money(n: number) {
  return `৳ ${n.toLocaleString("en-US")}`;
}

function statusLabelBn(status: ShipmentStatus) {
  if (status === "initiated") return "শিপমেন্ট শুরু (Initiated)";
  if (status === "picked_up") return "কুরিয়ার গৃহীত (Picked up)";
  if (status === "in_transit") return "পথে আছে (In Transit)";
  if (status === "out_for_delivery") return "ডেলিভারির জন্য বেরিয়েছে (Out for Delivery)";
  return "পণ্য গ্রহণ করা হয়েছে (Received)";
}

const stepIndexMap: Record<ShipmentStatus, number> = {
  initiated: 0,
  picked_up: 1,
  in_transit: 2,
  out_for_delivery: 3,
  received: 4,
};

export default function ShipmentTrackingPage() {
  const params = useParams<{ id: string }>();
  const id = decodeURIComponent(params?.id || "");

  const order: Order | undefined = useMemo(
    () => orders.find((o) => o.id === id),
    [id]
  );
  if (!order) return notFound();

  const shipment = order.shipment;
  if (!shipment) return notFound();

  const remaining = Math.max(order.totalPayable - order.advancePaid, 0);
  const firstItem = order.items?.[0];

  const activeKey = shipment.status;
  const activeIndex = shipment.steps.findIndex((s) => s.key === activeKey);
  const isReceived = activeKey === "received";

  // Top stepper: confirmed+advance+shipment+received (your UI)
  // If you want: when received => activeIndex 4 else 3, keep like this:
  const topStepperIndex = isReceived ? 4 : 3;

  return (
    <div className="min-h-screen bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-6 space-y-4">
        <OrderHeader
          reqId={order.reqNo}
          lastUpdated={order.lastUpdated}
          paymentStatus={order.paymentStatus}
        />

        <OrderStepper activeIndex={topStepperIndex} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4">
          {/* LEFT: tracking */}
          <Card className="rounded-2xl border border-gray/15 bg-white p-0 overflow-hidden">
            <div className="border-b border-gray/10 px-6 py-4">
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-light-gray" />
                <p className="text-sm font-extrabold text-gray">
                  শিপমেন্ট ট্র্যাকিং তথ্য
                </p>
              </div>
            </div>

            <div className="px-6 py-5">
              {/* top summary mini card */}
              <div className="rounded-2xl border border-gray/15 bg-secondary p-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold text-light-gray">
                      কুরিয়ার (COURIER)
                    </p>
                    <p className="mt-1 text-sm font-extrabold text-gray">
                      {shipment.courierName}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-light-gray">
                      ট্র্যাকিং আইডি (TRACKING ID)
                    </p>
                    <p className="mt-1 text-sm font-extrabold text-gray">
                      {shipment.trackingId}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-light-gray">
                      বর্তমান অবস্থা (STATUS)
                    </p>

                    <span
                      className={cn(
                        "mt-2 inline-flex rounded-full px-3 py-1 text-xs font-extrabold border",
                        isReceived
                          ? "border-green/20 bg-green/10 text-green"
                          : "border-primary/20 bg-primary/10 text-primary"
                      )}
                    >
                      {statusLabelBn(activeKey)}
                    </span>
                  </div>
                </div>
              </div>

              {/* timeline */}
              <div className="mt-6">
                {shipment.steps.map((s: ShipmentTrackingStep, idx: number) => {
                  const state =
                    idx < activeIndex ? "done" : idx === activeIndex ? "active" : "idle";

                  return (
                    <div key={s.key} className="relative pl-8 pb-6 last:pb-0">
                      {/* line */}
                      {idx !== shipment.steps.length - 1 && (
                        <div
                          className={cn(
                            "absolute left-[14px] top-[18px] h-full w-[2px]",
                            state === "idle" ? "bg-gray/10" : "bg-primary/40"
                          )}
                        />
                      )}

                      {/* dot */}
                      <div
                        className={cn(
                          "absolute left-[7px] top-[8px] grid h-4 w-4 place-items-center rounded-full border",
                          state === "done" && "border-primary bg-primary",
                          state === "active" && "border-primary bg-white",
                          state === "idle" && "border-gray/15 bg-white"
                        )}
                      >
                        {state === "active" && !isReceived ? (
                          <Circle size={10} className="text-primary" />
                        ) : null}
                      </div>

                      {/* content */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <p
                            className={cn(
                              "text-xs font-extrabold",
                              state === "idle" ? "text-light-gray" : "text-gray"
                            )}
                          >
                            {s.titleBn}{" "}
                            <span className="font-semibold text-light-gray">
                              ({s.titleEn})
                            </span>
                          </p>

                          {state === "active" && !isReceived ? (
                            <span className="rounded-full bg-primary/10 px-2 py-[2px] text-[11px] font-extrabold text-primary">
                              Active
                            </span>
                          ) : null}
                        </div>

                        {s.time ? (
                          <p className="mt-1 text-[11px] font-semibold text-light-gray">
                            {s.time}
                          </p>
                        ) : null}

                        {s.desc ? (
                          <p className="mt-1 text-[11px] font-semibold text-light-gray">
                            {s.desc}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* RIGHT: payment + order mini */}
          <div className="space-y-4">
            {/* payment */}
            <Card className="rounded-2xl border border-gray/15 bg-white p-6">
              <div className="flex items-center gap-2">
                <ClipboardList size={16} className="text-light-gray" />
                <p className="text-sm font-extrabold text-gray">
                  পেমেন্ট স্ট্যাটাস ও বকেয়া
                </p>
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-light-gray">মোট মূল্য:</span>
                  <span className="font-extrabold text-gray">
                    {money(order.totalPayable)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-light-gray">
                    অগ্রিম পরিশোধিত (৫০%):
                  </span>
                  <span className="font-extrabold text-green">
                    {money(order.advancePaid)}
                  </span>
                </div>

                <div className="h-px w-full bg-gray/10" />

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-light-gray">বকেয়া পেমেন্ট:</span>
                  <span className="font-extrabold text-primary">
                    {money(remaining)}
                  </span>
                </div>
              </div>

              {/* ✅ demo-driven enable: only when received */}
              <Button
                className="mt-5 w-full"
                variant={isReceived ? "primary" : "outline"}
                disabled={!isReceived}
              >
                অবশিষ্ট পেমেন্টের জন্য অনুরোধ করুন
              </Button>

              <p className="mt-3 text-[11px] font-semibold text-light-gray">
                {isReceived
                  ? "পণ্য গ্রহণ সম্পন্ন হয়েছে। এখন বকেয়া পেমেন্ট অনুরোধ করা যাবে।"
                  : "ডেলিভারি সম্পন্ন হলে বকেয়া পেমেন্ট অনুরোধ করা যাবে।"}
              </p>
            </Card>

            {/* order summary mini */}
            <Card className="rounded-2xl border border-gray/15 bg-white p-6">
              <p className="text-xs font-extrabold text-light-gray">অর্ডার তথ্য</p>

              <div className="mt-3 space-y-3 text-xs">
                <div className="flex items-start gap-2">
                  <PackageCheck size={14} className="mt-[2px] text-light-gray" />
                  <div>
                    <p className="font-semibold text-light-gray">পণ্য</p>
                    <p className="mt-1 font-extrabold text-gray">
                      {firstItem?.name ?? "-"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-[2px] text-light-gray" />
                  <div>
                    <p className="font-semibold text-light-gray">গন্তব্য</p>
                    <p className="mt-1 font-extrabold text-gray">
                      {order.officeName}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Link href={`/vendor/active-orders/${order.id}`}>
                  <Button className="w-full" variant="primary">
                    ডিটেইলস পেজে ফিরে যান
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
