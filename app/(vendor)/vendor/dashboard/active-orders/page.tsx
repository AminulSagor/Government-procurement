"use client";

import OrderList from "./_components/OrderList";
import OrdersFilterBar from "./_components/OrdersFilterBar";
import OrdersHeader from "./_components/OrdersHeader";
import OrdersStatsRow from "./_components/OrdersStatsRow";


export default function Page() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-6 space-y-6">
        <OrdersHeader />
        <OrdersStatsRow />
        <OrdersFilterBar />
        <OrderList />
      </div>
    </div>
  );
}
