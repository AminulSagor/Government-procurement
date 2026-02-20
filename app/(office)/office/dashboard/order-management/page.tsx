"use client";
import OrderAndDeliveryHead from "@/app/(office)/office/dashboard/order-management/_components/order-and-delivery-head";
import OrderList from "@/app/(office)/office/dashboard/order-management/_components/order-list";
import OrderTabs from "@/app/(office)/office/dashboard/order-management/_components/order-tabs";
import OrderToolbar from "@/app/(office)/office/dashboard/order-management/_components/order-toolbar";
import { orders } from "@/app/(office)/office/dummy-data/order-list-data";
import React, { useState } from "react";

export type TabKey =
  | "pending_quote"
  | "active"
  | "shipped"
  | "previous"
  | "draft";

const Page = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("active");
  const [query, setQuery] = useState("");

  const counts = React.useMemo(() => {
    const base: Record<TabKey, number> = {
      pending_quote: 0,
      active: 0,
      shipped: 0,
      previous: 0,
      draft: 0,
    };
    for (const o of orders) base[o.status as TabKey] += 1;
    return base;
  }, []);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    const tabbed = orders.filter((o) => o.status === activeTab);

    if (!q) return tabbed;

    return tabbed.filter((o) => {
      const hay =
        `${o.ref} ${o.title} ${o.meta1 ?? ""} ${o.meta2 ?? ""}`.toLowerCase();
      return hay.includes(q);
    });
  }, [activeTab, query]);
  return (
    <div className="w-full">
      <OrderAndDeliveryHead />
      <OrderToolbar query={query} onQueryChange={setQuery} />
      <OrderTabs
        activeTab={activeTab}
        onChange={setActiveTab}
        counts={counts}
      />
      <OrderList orders={filtered} />
    </div>
  );
};

export default Page;
