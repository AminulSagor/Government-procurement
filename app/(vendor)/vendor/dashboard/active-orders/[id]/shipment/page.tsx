"use client";

import { useMemo, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Card from "@/components/cards/card";


import OrderHeader from "../_components/OrderHeader";
import OrderStepper from "../_components/OrderStepper";

import { FileText, Copy, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Order } from "../_types/order.types";
import { orders } from "../_data/orders";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function money(n: number) {
  return `৳ ${n.toLocaleString("en-US")}`;
}

export default function ShipmentPage() {
  const params = useParams<{ id: string }>();
  const id = decodeURIComponent(params?.id || "");

  const order: Order | undefined = useMemo(
    () => orders.find((o) => o.id === id),
    [id]
  );

  if (!order) return notFound();

  const balance = Math.max(order.totalPayable - order.advancePaid, 0);
  const firstItem = order.items?.[0];

  const [agentName, setAgentName] = useState("মোঃ আব্দুল করিম");
  const [agentPhone, setAgentPhone] = useState("০১৭৮৮৮-৯৯৮৮৮৮");
  const [courier, setCourier] = useState("");
  const [trackingId, setTrackingId] = useState("");
  const [estDelivery, setEstDelivery] = useState("");
  const [notes, setNotes] = useState("");

  const challanNo = "CH-20231025-8892";
  const challanUrl = "Challan_8892.pdf";

  return (
    <div className="min-h-screen bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-6 space-y-4">
        <OrderHeader
          reqId={order.reqNo}
          lastUpdated={order.lastUpdated}
          paymentStatus={order.paymentStatus}
        />

        <OrderStepper activeIndex={2} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4">
          {/* LEFT: shipment form */}
          <Card className="rounded-2xl border border-gray/15 bg-white p-0 overflow-hidden">
            <div className="border-b border-gray/10 px-6 py-4">
              <p className="text-sm font-extrabold text-gray">
                শিপমেন্ট তথ্য প্রদান করুন
              </p>
            </div>

            <div className="px-6 py-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Agent name */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-light-gray">
                    এজেন্ট এর নাম (Agent Name)
                  </p>
                  <input
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    className="h-11 w-full rounded-xl border border-gray/15 bg-white px-4 text-sm font-semibold text-gray outline-none focus:border-primary"
                    placeholder="এজেন্ট নাম লিখুন"
                  />
                  <p className="text-[11px] font-semibold text-light-gray">
                    {agentPhone}
                  </p>
                </div>

                {/* Courier */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-light-gray">
                    কুরিয়ার নাম (Courier Name)
                  </p>

                  <div className="relative">
                    <select
                      value={courier}
                      onChange={(e) => setCourier(e.target.value)}
                      className="h-11 w-full appearance-none rounded-xl border border-gray/15 bg-white px-4 pr-10 text-sm font-semibold text-gray outline-none focus:border-primary"
                    >
                      <option value="">সিলেক্ট করুন</option>
                      <option value="Sundarban">Sundarban</option>
                      <option value="SA Paribahan">SA Paribahan</option>
                      <option value="Pathao Courier">Pathao Courier</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-light-gray"
                    />
                  </div>
                </div>

                {/* Tracking ID */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-light-gray">
                    ট্র্যাকিং আইডি (Tracking ID)
                  </p>
                  <input
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="h-11 w-full rounded-xl border border-gray/15 bg-white px-4 text-sm font-semibold text-gray outline-none focus:border-primary"
                    placeholder="ট্র্যাকিং আইডি লিখুন"
                  />
                </div>

                {/* Est Delivery */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-light-gray">
                    সম্ভাব্য ডেলিভারি তারিখ (Est. Delivery)
                  </p>
                  <input
                    value={estDelivery}
                    onChange={(e) => setEstDelivery(e.target.value)}
                    className="h-11 w-full rounded-xl border border-gray/15 bg-white px-4 text-sm font-semibold text-gray outline-none focus:border-primary"
                    placeholder="যেমন: ২০ আগস্ট ২০২৫"
                  />
                </div>

                {/* Notes */}
                <div className="space-y-2 md:col-span-2">
                  <p className="text-xs font-semibold text-light-gray">
                    শিপমেন্ট নোট (Shipment Notes)
                  </p>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={5}
                    className="w-full resize-none rounded-xl border border-gray/15 bg-white px-4 py-3 text-sm font-semibold text-gray outline-none focus:border-primary"
                    placeholder="কুরিয়ার নির্দেশনা/নোট লিখুন..."
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* RIGHT: challan + actions + summary */}
          <div className="space-y-4">
            <Card className="rounded-2xl border border-gray/15 bg-white p-6">
              <div className="grid place-items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
                  <FileText size={18} className="text-primary" />
                </div>

                <p className="mt-3 text-sm font-extrabold text-gray">
                  চালান ও ইনভয়েস
                </p>

                <p className="mt-1 text-xs font-semibold text-light-gray">
                  ধরণ: ০১ কপি সরকারী চালান
                </p>

                <button
                  type="button"
                  className="mt-3 w-full rounded-xl border border-gray/15 bg-white px-4 py-3 text-xs font-extrabold text-gray hover:bg-secondary"
                >
                  ফাইল: ০১ কপি ডাউনলোড করুন
                </button>

                <div className="mt-2 flex w-full items-center justify-between gap-2 rounded-xl border border-green/20 bg-green/10 px-4 py-2">
                  <p className="text-[11px] font-semibold text-green">
                    {challanUrl} ready
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-[11px] font-extrabold text-primary"
                    onClick={() => navigator.clipboard?.writeText(challanNo)}
                  >
                    <Copy size={14} />
                    Copy
                  </button>
                </div>
              </div>


              <Link href={`/vendor/dashboard/active-orders/${order.id}/shipment/success`}>
                <Button className="mt-4 w-full" variant="primary">
                  শিপমেন্ট নিশ্চিত করুন
                </Button>
              </Link>

              <div className="mt-3 rounded-xl border border-gray/15 bg-secondary p-3 text-[11px] font-semibold text-light-gray">
                শিপমেন্ট নিশ্চিত করার পর অফিস ট্র্যাকিং আইডি দেখতে পারবে।
              </div>
            </Card>

            {/* ORDER SUMMARY */}
            <Card className="rounded-2xl border border-gray/15 bg-white p-0 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4">
                <p className="text-xs font-extrabold text-light-gray">ORDER SUMMARY</p>
                <ChevronDown size={16} className="text-light-gray" />
              </div>

              <div className="border-t border-gray/10 px-5 py-4 space-y-3">
                <div className="text-xs">
                  <p className="font-semibold text-light-gray">পণ্য (Item)</p>
                  <p className="mt-1 font-extrabold text-gray">
                    {firstItem?.name ?? "-"}
                  </p>
                </div>

                <div className="text-xs">
                  <p className="font-semibold text-light-gray">গন্তব্য (Destination)</p>
                  <p className="mt-1 font-extrabold text-gray">{order.officeName}</p>
                </div>
              </div>

              <div className="border-t border-gray/10 px-5 py-4">
                <p className="text-xs font-extrabold text-light-gray">
                  মূল্য সারসংক্ষেপ (PRICE SUMMARY)
                </p>

                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-light-gray">একক মূল্য (Unit Price)</span>
                    <span className="font-extrabold text-gray">
                      {money(firstItem?.unitPrice ?? 0)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-light-gray">পরিমাণ (Quantity)</span>
                    <span className="font-extrabold text-gray">
                      {firstItem?.qtyLabel ?? "-"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-light-gray">মোট মূল্য (Total Value)</span>
                    <span className="font-extrabold text-gray">
                      {money(order.totalPayable)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-light-gray">অগ্রিম পরিশোধিত (Adv. Paid)</span>
                    <span className="font-extrabold text-green">
                      {money(order.advancePaid)}
                    </span>
                  </div>

                  <div className="mt-2 h-px w-full bg-gray/10" />

                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-gray">অবশিষ্ট (Balance)</span>
                    <span className="font-extrabold text-primary">{money(balance)}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* bottom spacing */}
        <div className="h-4" />
      </div>
    </div>
  );
}
