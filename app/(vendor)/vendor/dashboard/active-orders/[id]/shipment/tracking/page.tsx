"use client";

import { useMemo, useState } from "react";
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
  FileText,
  AlertTriangle,
} from "lucide-react";

import type {
  Order,
  ShipmentStatus,
  ShipmentTrackingStep,
} from "../../_types/order.types";

import { orders } from "../../_data/orders";
import { Button } from "@/components/ui/button";

import RemainingPaymentRequestDialog from "./_components/remaining-payment-request-dialog";

function money(n: number) {
  return `৳ ${n.toLocaleString("en-US")}`;
}

function statusLabelBn(status: ShipmentStatus) {
  if (status === "initiated") return "শিপমেন্ট শুরু (Initiated)";
  if (status === "picked_up") return "কুরিয়ার গৃহীত (Picked up)";
  if (status === "in_transit") return "পথে আছে (In Transit)";
  if (status === "out_for_delivery")
    return "ডেলিভারির জন্য বেরিয়েছে (Out for Delivery)";
  return "পণ্য গ্রহণ করা হয়েছে (Received)";
}

/** demo-only: return request (right top card) */
type ReturnStatus = "under_verification" | "verified" | "rejected";

type ReturnRequest = {
  id: string; // e.g. RET-2025-08-020
  reasonBn: string; // e.g. "ড্যামেজড (Damaged Product)"
  status: ReturnStatus;
};

function returnStatusPill(status: ReturnStatus) {
  if (status === "verified")
    return (
      <span className="inline-flex rounded-full bg-green/10 px-3 py-[6px] text-xs font-extrabold text-green">
        ভেরিফাইড (Verified)
      </span>
    );
  if (status === "rejected")
    return (
      <span className="inline-flex rounded-full bg-red/10 px-3 py-[6px] text-xs font-extrabold text-red">
        বাতিল (Rejected)
      </span>
    );
  return (
    <span className="inline-flex rounded-full bg-amber/10 px-3 py-[6px] text-xs font-extrabold text-amber">
      যাচাই চলছে (Under Verification)
    </span>
  );
}

export default function ShipmentTrackingPage() {
  const params = useParams<{ id: string }>();
  const id = decodeURIComponent(params?.id || "");

  const [openRemainingPay, setOpenRemainingPay] = useState(false);

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
  const topStepperIndex = isReceived ? 4 : 3;

  // ✅ demo return request (replace later with order.returnRequest)
  const returnReq: ReturnRequest = {
    id: "RET-2025-08-020",
    reasonBn: "ড্যামেজড (Damaged Product)",
    status: "under_verification",
  };

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
                    idx < activeIndex
                      ? "done"
                      : idx === activeIndex
                      ? "active"
                      : "idle";

                  const receivedRow = s.key === "received";

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
                          receivedRow && isReceived
                            ? "border-green bg-green"
                            : state === "done"
                            ? "border-primary bg-primary"
                            : state === "active"
                            ? "border-primary bg-white"
                            : "border-gray/15 bg-white"
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
                              receivedRow && isReceived
                                ? "text-green"
                                : state === "idle"
                                ? "text-light-gray"
                                : "text-gray"
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

          {/* RIGHT: 3 cards like screenshot */}
          <div className="space-y-4">
            {/* ✅ return request card (top) */}
            <Card className="rounded-2xl border border-amber/20 bg-amber/5 p-6">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-amber/10">
                  <AlertTriangle size={16} className="text-amber" />
                </div>
                <p className="text-sm font-extrabold text-gray">
                  পণ্য ফেরত আবেদন
                </p>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-xs font-semibold text-light-gray">
                    আবেদন আইডি
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-gray">
                    {returnReq.id}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-light-gray">
                    ফেরত কারণ
                  </p>
                  <p className="mt-1 text-xs font-extrabold text-gray">
                    {returnReq.reasonBn}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-light-gray">স্ট্যাটাস</p>
                  {returnStatusPill(returnReq.status)}
                </div>
              </div>

              <Button className="mt-4 w-full" variant="primary">
                আবেদনটি যাচাই করুন
              </Button>
            </Card>

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

                {/* ✅ remaining row like screenshot: add a pill */}
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-light-gray">
                    বকেয়া পেমেন্ট (পরিশোধিত):
                  </span>
                  <span className="font-extrabold text-green">
                    {money(remaining)}
                  </span>
                </div>

                <div className="h-px w-full bg-gray/10" />

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-light-gray">
                    মোট পরিশোধিত:
                  </span>
                  <span className="font-extrabold text-primary">
                    {money(order.advancePaid + (isReceived ? remaining : 0))}
                  </span>
                </div>
              </div>

              <Button
                className="mt-5 w-full"
                variant={isReceived ? "primary" : "outline"}
                disabled={!isReceived}
                onClick={() => {
                  if (!isReceived) return;
                  setOpenRemainingPay(true);
                }}
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
                    <p className="mt-1 text-sm font-extrabold text-gray">
                      {firstItem?.name ?? "-"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-[2px] text-light-gray" />
                  <div>
                    <p className="font-semibold text-light-gray">গন্তব্য</p>
                    <p className="mt-1 text-sm font-extrabold text-gray">
                      {order.officeName}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Link href={`/vendor/active-orders/${order.id}`}>
                  <Button className="w-full" variant="outline">
                    ডিটেইলস পেজে ফিরে যান
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* remaining payment modal */}
      <RemainingPaymentRequestDialog
        open={openRemainingPay}
        onOpenChange={setOpenRemainingPay}
      />
    </div>
  );
}
