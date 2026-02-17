"use client";

import { useMemo, useState } from "react";
import VendorsHeader from "./_components/vendors-header";
import VendorsStats from "./_components/vendors-stats";
import VendorsFiltersBar from "./_components/vendors-filters-bar";
import VendorsTable from "./_components/vendors-table";
import VendorsPagination from "./_components/vendors-pagination";

import type { VendorsFiltersState, VendorCategory } from "./_types/vendors.types";
import { demoVendorStats, demoVendorsMeta, demoVendorsRows } from "./_data/vendors.demo";

export default function VendorsPage() {
  const [filters, setFilters] = useState<VendorsFiltersState>({
    q: "",
    status: "all",
    category: "all",
  });

  const [page, setPage] = useState(demoVendorsMeta.page);

  const categories: VendorCategory[] = useMemo(
    () => ["নির্বাচিত নয়", "মনিহারি (Stationery)", "আইটি সেবা", "আসবাবপত্র", "অন্যান্য"],
    []
  );

  const rows = useMemo(() => {
    const q = filters.q.trim().toLowerCase();

    return demoVendorsRows.filter((r) => {
      const matchQ =
        !q ||
        r.vendorName.toLowerCase().includes(q) ||
        r.ownerName.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q);

      const matchStatus = filters.status === "all" ? true : r.status === filters.status;
      const matchCategory = filters.category === "all" ? true : r.category === filters.category;

      return matchQ && matchStatus && matchCategory;
    });
  }, [filters]);

  // demo handlers (wire API later)
  const onAddVendor = () => console.log("add vendor");
  const onVerify = (id: string) => console.log("verify", id);
  const onEdit = (id: string) => console.log("edit", id);
  const onView = (id: string) => console.log("view", id);
  const onDelete = (id: string) => console.log("delete", id);

  return (
    <div className="space-y-5 p-5">
      <VendorsHeader />

      <VendorsStats stats={demoVendorStats} />

      <VendorsFiltersBar
        filters={filters}
        categories={categories}
        onChange={setFilters}
        onAddVendor={onAddVendor}
      />

      <VendorsTable rows={rows} onVerify={onVerify} onEdit={onEdit} onView={onView} onDelete={onDelete} />

      <div className="flex items-center justify-end">
        <VendorsPagination page={page} totalPages={demoVendorsMeta.totalPages} onChange={setPage} />
      </div>
    </div>
  );
}
