"use client";
import Card from "@/components/cards/card";
import OrderStepper, {
  OrderStepKey,
} from "@/app/(office)/office/_components/order-stepper";
import { orders } from "@/app/(office)/office/dummy-data/data";

type Props = {
  orderId: string;
  current?: OrderStepKey;
};

export default function OrderProgress({ orderId }: Props) {
  const order = orders.find((order) => order.id === orderId);

  const current = order?.status === "shipped" ? "in_transit" : "processing";

  return (
    <Card className="rounded-md bg-white p-6 shadow-sm border border-off-white">
      <OrderStepper current={current} />
    </Card>
  );
}
