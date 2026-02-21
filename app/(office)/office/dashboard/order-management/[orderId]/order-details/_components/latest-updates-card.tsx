"use client";

import React from "react";
import Card from "@/components/cards/card";
import type { OrderDetails } from "@/app/(office)/office/types/order-details-type";

export default function LatestUpdatesCard({ order }: { order: OrderDetails }) {
  const items = order.shippingUpdates ?? [];

  return (
    <Card className="bg-secondary-color/10 p-5">
      <h3 className="text-sm font-extrabold text-black">সর্বশেষ আপডেট</h3>

      <div className="mt-4 space-y-4">
        {items.slice(0, 2).map((it) => (
          <div key={it.id} className="flex items-start gap-3">
            <span className="mt-[6px] h-2 w-2 rounded-full bg-primary-color" />
            <div>
              <p className="text-sm font-extrabold text-black">{it.title}</p>
              <p className="mt-1 text-xs text-light-gray">{it.timeText}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}