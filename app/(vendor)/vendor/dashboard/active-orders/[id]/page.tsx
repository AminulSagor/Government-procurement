"use client";

import { useMemo, useState } from "react";
import { useParams, notFound } from "next/navigation";

import OrderHeader from "./_components/OrderHeader";
import OrderInfoCard from "./_components/OrderInfoCard";
import OrderItemsTable from "./_components/OrderItemsTable";
import OrderStepper from "./_components/OrderStepper";
import PaymentSidePanel from "./_components/PaymentSidePanel";
import SubmittedProofDialog from "./_components/submitted-proof-dialog";
import { Order } from "./_types/order.types";
import { orders } from "./_data/orders";
import PaymentTransactionsCard from "./_components/PaymentTransactionsCard";



export default function Page() {
  const [openProof, setOpenProof] = useState(false);

  const params = useParams<{ id: string }>();
  const id = decodeURIComponent(params?.id || "");

  const order: Order | undefined = useMemo(
    () => orders.find((o) => o.id === id),
    [id]
  );

  if (!order) return notFound();

  const isPending = order.paymentStatus === "pending_verification";
  const isAdvancePaid = order.paymentStatus === "advance_paid";

  return (
    <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
      {/* ✅ pass data */}
      <OrderHeader
        reqId={order.reqNo}
        lastUpdated={order.lastUpdated}
        paymentStatus={order.paymentStatus}
      />

      {/* ✅ stepper active index based on status */}
      <OrderStepper
        activeIndex={
          order.status === "confirmed"
            ? 0
            : order.status === "advance_paid"
              ? 1
              : order.status === "shipment"
                ? 2
                : 3
        }
      />

      {/* ✅ you can also pass items later */}
      <OrderItemsTable items={order.items} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4">
        <div className="space-y-4">
          <OrderInfoCard />

          {(order.paymentStatus === "advance_paid" || order.paymentStatus === "paid") && (
            <PaymentTransactionsCard
              totalPaid={order.advancePaid}
              remaining={Math.max(order.totalPayable - order.advancePaid, 0)}
            />
          )}
        </div>

        <div className="space-y-4">
          <PaymentSidePanel
            order={order}
            variant={order.paymentStatus === "pending_verification" ? "pending" : "advance_paid"}
            onOpenProof={() => setOpenProof(true)}
          />
        </div>
      </div>

      <SubmittedProofDialog open={openProof} onOpenChange={setOpenProof} />
    </div>
  );
}
