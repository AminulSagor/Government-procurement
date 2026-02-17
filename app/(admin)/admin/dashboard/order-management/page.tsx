"use client";

import OrderManagementHeader from "./_components/order-management-header";
import OrderStats from "./_components/order-stats";
import OrderFilters from "./_components/order-filters";
import OrderTable from "./_components/order-table";
import OrderPagination from "./_components/order-pagination";

import { orderStatsDemo, orderRowsDemo, orderFiltersDemo } from "./_data/order-management.demo";
import { useMemo, useState } from "react";
import { OrderStage, OrderRow } from "./_types/order-management.types";

export default function OrderManagementPage() {
  const [query, setQuery] = useState("");
  const [economicCode, setEconomicCode] = useState<string>("all");
  const [office, setOffice] = useState<string>("all");
  const [stage, setStage] = useState<OrderStage | "all">("all");

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();

    return orderRowsDemo.filter((r) => {
      const matchQuery =
        !q ||
        r.orderId.toLowerCase().includes(q) ||
        r.officeNameBn.toLowerCase().includes(q) ||
        r.officeId.toLowerCase().includes(q) ||
        r.vendor.toLowerCase().includes(q) ||
        r.economicCode.toLowerCase().includes(q);

      const matchEconomic = economicCode === "all" ? true : r.economicCode === economicCode;
      const matchOffice = office === "all" ? true : r.officeId === office;
      const matchStage = stage === "all" ? true : r.stage === stage;

      return matchQuery && matchEconomic && matchOffice && matchStage;
    });
  }, [query, economicCode, office, stage]);

  // demo pagination (UI-only)
  const total = filteredRows.length;
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const pageCount = Math.max(1, Math.ceil(total / pageSize));

  const rows = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredRows.slice(start, start + pageSize);
  }, [filteredRows, page]);

  // keep page valid when filters change
  useMemo(() => {
    if (page > pageCount) setPage(pageCount);
  }, [pageCount]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-full">
      <OrderManagementHeader
        titleBn="অর্ডার ম্যানেজমেন্ট"
        subtitleEn="Control and oversee the entire procurement lifecycle."
        onPrint={() => window.print()}
        onCreateNew={() => console.log("new order")}
      />

      <div className="px-6 pb-8">
        <OrderStats items={orderStatsDemo} />

        <div className="mt-4 rounded-2xl border border-border bg-white p-4">
          <OrderFilters
            query={query}
            onQueryChange={setQuery}
            economicCode={economicCode}
            onEconomicCodeChange={setEconomicCode}
            office={office}
            onOfficeChange={setOffice}
            stage={stage}
            onStageChange={setStage}
            filterOptions={orderFiltersDemo}
          />

          <div className="mt-4">
            <OrderTable rows={rows as OrderRow[]} />
          </div>

          <div className="mt-4">
            <OrderPagination
              total={total}
              page={page}
              pageSize={pageSize}
              pageCount={pageCount}
              onChange={setPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
