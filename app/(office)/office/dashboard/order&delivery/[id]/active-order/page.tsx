"use client";

import { useParams } from "next/navigation";
import ActiveOrderHeader from "@/app/(office)/office/dashboard/order&delivery/[id]/active-order/_components/active-order-header";
import AdvancePayment from "@/app/(office)/office/dashboard/order&delivery/[id]/active-order/_components/advance-payment";
import LatestUpdate from "@/app/(office)/office/dashboard/order&delivery/[id]/active-order/_components/latest-update";
import OrderInformation from "@/app/(office)/office/dashboard/order&delivery/[id]/active-order/_components/order-information";
import OrderProducts from "@/app/(office)/office/dashboard/order&delivery/[id]/active-order/_components/order-products";
import OrderProgress from "@/app/(office)/office/dashboard/order&delivery/[id]/active-order/_components/order-progress";
import { orders } from "@/app/(office)/office/dummy-data/data";
import PaymentSummary from "@/app/(office)/office/dashboard/order&delivery/[id]/active-order/_components/payment-summary";
import PaymentHistory from "@/app/(office)/office/dashboard/order&delivery/[id]/active-order/_components/payment-history";
import { ShipmentTracking } from "@/app/(office)/office/dashboard/order&delivery/[id]/active-order/_components/shipment-tracking";
import { RequiredActions } from "@/app/(office)/office/dashboard/order&delivery/[id]/active-order/_components/required-action";
import { Home } from "lucide-react";

export default function ActiveOrderDetailsPage() {
  const params = useParams() as { id?: string };
  const id = params?.id ?? "";

  const order = orders.find((order) => order.id === id);

  return (
    <div className="space-y-4 mt-4">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-medium-gray">
        <Home className="h-4 w-4 text-primary-color" />
        <span>হোম</span>
        <span>/</span>
        <span>অর্ডার</span>
        <span>/</span>
        <span className="text-primary-color">অর্ডারের বিস্তারিত</span>
      </div>
      <ActiveOrderHeader orderId={id} />
      <OrderProgress orderId={id} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <div className="lg:col-span-4 flex flex-col gap-4">
          <OrderInformation orderId={id} />
          <OrderProducts orderId={id} />
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          {order?.status === "active" ? (
            <div>
              <AdvancePayment orderId={id} />
              <LatestUpdate orderId={id} />
            </div>
          ) : (
            <div className="space-y-4">
              <PaymentSummary />
              <PaymentHistory />
              <ShipmentTracking />
              <RequiredActions />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
