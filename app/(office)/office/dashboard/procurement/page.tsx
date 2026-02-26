"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/breadCrumb";
import Head from "@/app/(office)/office/dashboard/procurement/_components/procurement-head";
import ProcurementToolbar from "@/app/(office)/office/dashboard/procurement/_components/procurement-toolbar";
import SpecialAllotmentDialog from "@/app/(office)/office/dashboard/procurement/_components/special-allotment-dialog";
import ProductGrid from "@/app/(office)/office/dashboard/procurement/_components/product-grid";
import { ProcurementCategories } from "@/app/(office)/office/dummy-data/procurement-product-data";

type TabKey = "all" | "available" | "unavailable";

const Procurement = () => {
  const [activeTab, setActiveTab] = React.useState<TabKey>("all");
  const [query, setQuery] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const breadCrumb = [
    { label: "হোম", href: "/" },
    { label: "ক্রয়", href: "#" },
    { label: "খাত নির্বাচন" },
  ];

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    const bySearch = ProcurementCategories.filter((x) => {
      if (!q) return true;
      return (
        x.code.toLowerCase().includes(q) ||
        x.titleBn.toLowerCase().includes(q) ||
        x.titleEn.toLowerCase().includes(q)
      );
    });

    if (activeTab === "available") {
      return bySearch.filter((x) => x.isAvailable && x.balance > 0);
    }
    if (activeTab === "unavailable") {
      return bySearch.filter((x) => !x.isAvailable || x.balance <= 0);
    }
    return bySearch;
  }, [activeTab, query]);

  return (
    <div>
      <div className="mx-auto w-full">
        <div>
          <Breadcrumb items={breadCrumb} />
          <Head setOpen={setOpen} />
        </div>
        {/* toolbar */}
        <ProcurementToolbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          query={query}
          setQuery={setQuery}
        />
        {/* Cards */}
        <ProductGrid filtered={filtered} />
      </div>
      {/* dialog */}
      {open && <SpecialAllotmentDialog open={open} onOpenChange={setOpen} />}
    </div>
  );
};

export default Procurement;
