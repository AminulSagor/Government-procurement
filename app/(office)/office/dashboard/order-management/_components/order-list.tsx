"use client";

import OrderListItem from "@/app/(office)/office/dashboard/order-management/_components/order-list-item";
import { Orders } from "@/app/(office)/office/types/order-list-type";
import Card from "@/components/cards/card";

export default function OrderList({ orders }: { orders: Orders[] }) {
  return (
    <div className="mt-5 space-y-4">
      {orders.map((o) => (
        <OrderListItem key={o.id} o={o} />
      ))}

      {orders.length === 0 && (
        <Card className="rounded-md bg-white p-8 text-center shadow-sm">
          <p className="text-sm text-light-gray">কোনো অর্ডার পাওয়া যায়নি।</p>
        </Card>
      )}
    </div>
  );
}
