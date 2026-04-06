"use client";

import { useMemo, useState } from "react";
import PageHeader from "./_components/page-header";
import StatCards from "./_components/stat-cards";
import FiltersBar from "./_components/filters-bar";
import ReportsTable from "./_components/reports-table";
import Pagination from "./_components/pagination";

import {
  demoBudgetRows,
  demoBudgetStats,
  demoInitialFilters,
} from "./_data/budget-report.demo";
import { BudgetFiltersState } from "./_types/budget-report.types";

export default function BudgetReportManagementPage() {
  const [filters, setFilters] =
    useState<BudgetFiltersState>(demoInitialFilters);

  const rows = useMemo(() => {
    // demo: keep as-is (later you can filter by officeCode/hierarchy/date range)
    return demoBudgetRows;
  }, []);

  return (
    <div className="space-y-4">
      <PageHeader />

      <StatCards items={demoBudgetStats} />

      <FiltersBar
        state={filters}
        onChange={(patch) => setFilters((p) => ({ ...p, ...patch }))}
        onReset={() => setFilters(demoInitialFilters)}
      />

      <ReportsTable rows={rows} />

      <Pagination />
    </div>
  );
}
