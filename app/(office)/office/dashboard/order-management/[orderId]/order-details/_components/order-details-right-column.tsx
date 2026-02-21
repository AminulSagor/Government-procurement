"use client";

import React from "react";

import type { OrderDetails } from "@/app/(office)/office/types/order-details-type";

import PaymentSummaryCard from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/payment-summary-card";
import PaymentHistoryCard from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/payment-history-card";
import ShippingTrackingCard from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/shipping-tracking-card";
import RequiredActionsCard from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/required-actions-card";
import LatestUpdatesCard from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/latest-updates-card";
import RequiredActionsReceivedCard from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/RequiredActionsReceivedCard";

export default function OrderDetailsRightColumn({
  order,
  onOpenRequiredAction,
}: {
  order: OrderDetails;
  onOpenRequiredAction: (v: boolean) => void;
}) {
  const step = order.stepCurrent;

  // 1) processing => PaymentSummary + PaymentHistory + LatestUpdates
  if (step === "processing") {
    return (
      <div className="space-y-6">
        <PaymentSummaryCard order={order} />
        <PaymentHistoryCard order={order} />
        <LatestUpdatesCard order={order} />
      </div>
    );
  }

  // 2) shipped / in_transit => PaymentSummary + PaymentHistory + ShippingTracking + RequiredActions
  if (step === "in_transit") {
    return (
      <div className="space-y-6">
        <PaymentSummaryCard order={order} />
        <PaymentHistoryCard order={order} />
        <ShippingTrackingCard order={order} />
        <RequiredActionsCard order={order} open={onOpenRequiredAction} />
      </div>
    );
  }

  // 3) received => RequiredActions + PaymentHistory + ShippingTracking (NO payment summary)
  if (step === "received") {
    return (
      <div className="space-y-6">
        <RequiredActionsReceivedCard />
        <PaymentHistoryCard order={order} />
        <ShippingTrackingCard order={order} />
      </div>
    );
  }

  // fallback
  return (
    <div className="space-y-6">
      <PaymentSummaryCard order={order} />
      <PaymentHistoryCard order={order} />
    </div>
  );
}
