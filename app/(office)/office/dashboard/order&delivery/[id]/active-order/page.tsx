"use client";

import { useParams } from "next/navigation";

import ActiveOrderHeader from "@/app/(office)/office/dashboard/order&delivery/[id]/active-order/_components/active-order-header";
import AdvancePayment from "@/app/(office)/office/dashboard/order&delivery/[id]/active-order/_components/advance-payment";
import LatestUpdate from "@/app/(office)/office/dashboard/order&delivery/[id]/active-order/_components/latest-update";
import OrderInformation from "@/app/(office)/office/dashboard/order&delivery/[id]/active-order/_components/order-information";
import OrderProducts from "@/app/(office)/office/dashboard/order&delivery/[id]/active-order/_components/order-products";
import OrderProgress from "@/app/(office)/office/dashboard/order&delivery/[id]/active-order/_components/order-progress";

export default function ActiveOrderDetailsPage() {
  const params = useParams() as { id?: string };
  const id = params?.id ?? "";

  return (
    <div className="space-y-4">
      <ActiveOrderHeader orderId={id} />
      <OrderProgress orderId={id} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <div className="lg:col-span-4 flex flex-col gap-4">
          <OrderInformation orderId={id} />
          <OrderProducts orderId={id} />
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          <AdvancePayment orderId={id} />
          <LatestUpdate orderId={id} />
        </div>
      </div>
    </div>
  );
}
