"use client";

import React from "react";
import Card from "@/components/cards/card";
import { OrderDetails } from "@/app/(office)/office/types/order-details-type";

function avatarBg(color?: OrderDetails["party"]["avatarColor"]) {
  if (color === "green") return "bg-green/20";
  if (color === "teal") return "bg-secondary-color/40";
  if (color === "gold") return "bg-yellow/20";
  return "bg-orange/20";
}

export default function OrderInfoCard({ order }: { order: OrderDetails }) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="flex items-center justify-between border-b border-primary-color/10 px-5 py-4">
        <h2 className="text-sm font-extrabold text-black">অর্ডারের তথ্য</h2>
        <button
          type="button"
          className="text-sm font-extrabold text-primary-color hover:underline"
        >
          তথ্য পরিবর্তন
        </button>
      </div>

      <div className="grid gap-6 px-5 py-5 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold text-light-gray">সরবরাহকারীর তথ্য</p>

          <div className="mt-3 flex items-start gap-3">
            <div
              className={`h-12 w-12 rounded-full ${avatarBg(order.party.avatarColor)}`}
            />
            <div className="min-w-0">
              <p className="text-sm font-extrabold text-black">
                {order.party.name}
              </p>
              <p className="text-xs font-bold text-light-gray">
                {order.party.codeText}
              </p>

              <div className="mt-3 space-y-1 text-xs text-light-gray">
                <p>
                  যোগাযোগ:{" "}
                  <span className="font-bold text-black">
                    {order.party.contactName}
                  </span>
                </p>
                <p>
                  ইমেইল:{" "}
                  <span className="font-bold text-black">
                    {order.party.email}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold text-light-gray">শিপিং তথ্য</p>

          <div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-3 text-xs">
            <div className="text-light-gray">কুরিয়ার:</div>
            <div className="font-bold text-black">
              {order.shipping.courierName}
            </div>

            <div className="text-light-gray">ট্র্যাকিং আইডি:</div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-black">
                {order.shipping.trackingId}
              </span>
              <span className="rounded-md bg-off-white px-2 py-[2px] text-[11px] font-extrabold text-black">
                {order.shipping.trackingId}
              </span>
            </div>

            <div className="text-light-gray">সম্ভাব্য সরবরাহের তারিখ:</div>
            <div className="font-bold text-black">
              {order.shipping.estimatedDeliveryText}
            </div>

            <div className="text-light-gray">এজেন্ট নম্বর</div>
            <div className="font-bold text-primary-color">
              {order.shipping.agentNumberText}
            </div>

            <div className="col-span-2 mt-2">
              <div className="flex items-center justify-between rounded-md border border-primary-color/10 bg-off-white px-4 py-3">
                <span className="text-sm font-extrabold text-black">
                  ক্যাটাগরি কোড
                </span>
                <span className="text-sm font-extrabold text-primary-color">
                  {order.shipping.categoryCodeText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
