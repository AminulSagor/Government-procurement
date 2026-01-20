"use client";
import Card from "@/components/cards/card";
import OrderStepper, {
  OrderStepKey,
} from "@/app/(office)/office/_components/order-stepper";

type Props = {
  orderId: string;
  current?: OrderStepKey;
};

export default function OrderProgress({ orderId, current }: Props) {
  return (
    <Card className="rounded-md bg-white p-6 shadow-sm border border-off-white">
      <OrderStepper current={"processing"} />
    </Card>
  );
}
