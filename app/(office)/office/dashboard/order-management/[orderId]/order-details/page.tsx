"use client";

import React, { useMemo, useState } from "react";
import { useParams } from "next/navigation";

import OrderStepper from "@/app/(office)/office/_components/order-stepper";
import { ORDER_DETAILS_MOCK } from "@/app/(office)/office/dummy-data/order-details-mock";

import OrderDetailsHeader from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/order-details-header";
import OrderInfoCard from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/order-info-card";
import OrderProductsTable from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/order-products-table";

import OrderItemsDetailsDialog from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/order-items-details-dialog";
import { ORDER_ITEMS_DETAILS_DIALOG_MOCK } from "@/app/(office)/office/dummy-data/order-items-details-dialog.mock";
import OrderRequiredActionsDialog from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/Order-action-required-dialog";

import OrderDetailsRightColumn from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/order-details-right-column";

function normalizeOrderId(raw: string) {
  return String(raw ?? "").replace(/\D/g, "") || "4918";
}

export default function OrderDetailsPage() {
  const params = useParams<{ orderId: string }>();
  const orderId = useMemo(
    () => normalizeOrderId(String(params?.orderId ?? "4918")),
    [params],
  );

  const [openOrderDetailsDialog, setOrderDetailsDialog] = useState(false);
  const [openRequireActionDialog, setRequireActionDialog] = useState(false);

  const order = useMemo(() => ORDER_DETAILS_MOCK[orderId], [orderId]);
  if (!order) return null;

  return (
    <div className="space-y-6">
      <OrderDetailsHeader order={order} />

      <div className="rounded-lg border border-primary-color/20 bg-white p-5">
        <OrderStepper current={order.stepCurrent} />
      </div>

      <div className="grid gap-6 grid-cols-1 xl:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <OrderInfoCard order={order} />
          <OrderProductsTable order={order} open={setOrderDetailsDialog} />
        </div>

        <OrderDetailsRightColumn
          order={order}
          onOpenRequiredAction={setRequireActionDialog}
        />
      </div>

      {/* dialogs */}
      <OrderItemsDetailsDialog
        open={openOrderDetailsDialog}
        onOpenChange={setOrderDetailsDialog}
        items={ORDER_ITEMS_DETAILS_DIALOG_MOCK}
      />

      <OrderRequiredActionsDialog
        open={openRequireActionDialog}
        onOpenChange={setRequireActionDialog}
      />
    </div>
  );
}