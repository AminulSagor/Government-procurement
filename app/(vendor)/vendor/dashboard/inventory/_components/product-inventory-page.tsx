"use client";

import React, { useMemo, useState } from "react";
import InventoryLayout from "./inventory-layout";
import CategoriesSidebar from "./categories-sidebar";
import InventoryHeader from "./inventory-header";
import InventoryStatsRow from "./inventory-stats-row";
import InventoryToolbar from "./inventory-toolbar";
import ProductsGrid from "./products-grid";
import TablePagination from "./table-pagination";

import { demoCategories, demoProducts, demoStats } from "../_data/product-inventory.demo";
import { InventoryProduct } from "../_types/product-inventory.types";
import { redirect } from "next/navigation";

export default function ProductInventoryPage() {
  const categories = useMemo(() => demoCategories, []);
  const stats = useMemo(() => demoStats, []);
  const [activeCatId, setActiveCatId] = useState<string>("all");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sort, setSort] = useState("Newest");

  // demo products state (toggle works)
  const [products, setProducts] = useState<InventoryProduct[]>(demoProducts);

  const onToggleEnabled = (id: string) => {
    setProducts((p) => p.map((x) => (x.id === id ? { ...x, enabled: !x.enabled } : x)));
  };

  // UI-only filtering (simple)
  const visibleProducts = useMemo(() => {
    let list = [...products];

    if (activeCatId !== "all") {
      const catName = categories.find((c) => c.id === activeCatId)?.name ?? "";
      list = list.filter((p) => p.categoryName.includes(catName.split(" ")[0]));
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) => p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q)
      );
    }

    if (statusFilter !== "All") {
      // map labels to status keys (demo)
      if (statusFilter === "In Stock") list = list.filter((p) => p.status === "in_stock");
      if (statusFilter === "Out of Stock") list = list.filter((p) => p.status === "out_of_stock");
      if (statusFilter === "Unavailable") list = list.filter((p) => p.status === "unavailable");
    }

    // sort is UI-only
    if (sort === "Newest") list = list;
    if (sort === "Price: Low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "Price: High") list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [products, categories, activeCatId, search, statusFilter, sort]);

  return (
    <InventoryLayout
      sidebar={
        <CategoriesSidebar
          categories={categories}
          activeId={activeCatId}
          onChange={setActiveCatId}
        />
      }
    >
      <InventoryHeader onAddNew={() => redirect("/vendor/dashboard/inventory/add")} />

      <div className="mt-3">
        <InventoryStatsRow stats={stats} />
      </div>

      <div className="mt-3">
        <InventoryToolbar
          search={search}
          onSearchChange={setSearch}
          statusValue={statusFilter}
          onStatusChange={setStatusFilter}
          sortValue={sort}
          onSortChange={setSort}
          view={view}
          onViewChange={setView}
        />
      </div>

      <div className="mt-4">
        <ProductsGrid view={view} products={visibleProducts} onToggleEnabled={onToggleEnabled} />
      </div>

      <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-gray">
          Showing <span className="font-semibold">1</span> to{" "}
          <span className="font-semibold">{Math.min(6, visibleProducts.length)}</span> of{" "}
          <span className="font-semibold">{stats.totalItems}</span> results
        </p>

        <TablePagination
          page={1}
          totalPages={8}
          onPrev={() => null}
          onNext={() => null}
          onGoToPage={() => null}
        />
      </div>
    </InventoryLayout>
  );
}
