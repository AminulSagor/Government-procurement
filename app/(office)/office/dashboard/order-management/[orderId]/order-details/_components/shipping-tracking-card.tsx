"use client";

import React from "react";
import { MapPin } from "lucide-react";
import Card from "@/components/cards/card";
import { OrderDetails } from "@/app/(office)/office/types/order-details-type";

export default function ShippingTrackingCard({
  order,
}: {
  order: OrderDetails;
}) {
  const updates = order.shippingUpdates ?? [];
  if (updates.length === 0) return null;

  return (
    <Card className="p-0 overflow-hidden">
      <div className="flex items-center justify-between border-b border-primary-color/10 px-5 py-4">
        <h2 className="text-sm font-extrabold text-black">
          শিপমেন্ট ট্র্যাকিং
        </h2>
        <span className="h-2 w-2 rounded-full bg-green" />
      </div>

      <div className="bg-off-white/80 px-5 py-6">
        <div className="flex h-[180px] items-center justify-center rounded-md bg-light-gray/15">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <MapPin className="h-6 w-6 text-red" />
            </div>
            <span className="rounded-md bg-white px-3 py-1 text-xs font-extrabold text-black">
              বর্তমান অবস্থান
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 py-5">
        <p className="text-xs font-extrabold text-black">সর্বশেষ আপডেট</p>

        <div className="mt-4 space-y-4">
          {updates.map((u) => (
            <div key={u.id} className="flex items-start gap-3">
              <div className="mt-1 flex flex-col items-center">
                <span
                  className={`h-2 w-2 rounded-full ${u.isCurrent ? "bg-blue" : "bg-light-gray/50"}`}
                />
                <span className="mt-1 h-10 w-[2px] bg-primary-color/10" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-extrabold text-black">{u.title}</p>
                <p className="mt-1 text-[11px] font-bold text-light-gray">
                  {u.timeText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
