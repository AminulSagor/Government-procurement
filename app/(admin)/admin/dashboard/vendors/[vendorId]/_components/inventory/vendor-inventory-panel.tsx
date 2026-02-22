"use client";

import { useMemo, useState } from "react";
import type { VendorDetails } from "../../_types/vendor-details";
import { vendorInventoryDemo } from "../../_data/vendor-inventory-demo";
import type { InventoryItem } from "../../_types/vendor-inventory";

import InventorySummary from "./inventory-summary";
import InventoryToolbar from "./inventory-toolbar";
import InventoryFilters from "./inventory-filters";
import InventoryTable from "./inventory-table";
import InventoryPagination from "./inventory-pagination";
import Card from "../ui/card";

type Props = { vendor: VendorDetails };

export default function VendorInventoryPanel({ vendor }: Props) {
  const data = useMemo(() => vendorInventoryDemo(vendor.id), [vendor.id]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ক্যাটাগরি");
  const [stock, setStock] = useState("স্টক স্থিতি");

  const filteredItems: InventoryItem[] = data.items.filter((it) => {
    const q = search.trim().toLowerCase();
    if (q) {
      const ok =
        it.title.toLowerCase().includes(q) ||
        it.subTitle.toLowerCase().includes(q) ||
        it.ibasCode.toLowerCase().includes(q);
      if (!ok) return false;
    }

    if (category !== "ক্যাটাগরি") {
      const byCat = it.subTitle.includes(category) || it.title.includes(category);
      if (!byCat) return false;
    }

    if (stock !== "স্টক স্থিতি") {
      const want = stock === "ইন স্টক" ? "in_stock" : "out_stock";
      if (it.status !== want) return false;
    }

    return true;
  });

  function clearFilters() {
    setSearch("");
    setCategory("ক্যাটাগরি");
    setStock("স্টক স্থিতি");
  }

  return (
    <section className="space-y-5">
      <InventorySummary summary={data.summary} />

      <Card className="p-0 overflow-hidden">
        <InventoryToolbar
          search={search}
          onSearch={setSearch}
          onExport={() => alert("Demo: Export")}
        />

        <div className="h-px w-full bg-slate-200/70" />

        <InventoryFilters
          categories={data.filters.categories}
          stockStatuses={data.filters.stockStatuses}
          category={category}
          stock={stock}
          onCategory={setCategory}
          onStock={setStock}
          onClear={clearFilters}
        />

        <div className="h-px w-full bg-slate-100" />

        <InventoryTable
          items={filteredItems}
          onView={(id) => alert(`Demo view: ${id}`)}
          onEdit={(id) => alert(`Demo edit: ${id}`)}
        />

        <InventoryPagination total={filteredItems.length} />
      </Card>
    </section>
  );
}