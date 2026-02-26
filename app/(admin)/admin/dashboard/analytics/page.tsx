"use client";

import AnalyticsHeader from "./_components/analytics-header";
import StatCardsRow from "./_components/stat-cards-row";
import ProfitLineChart from "./_components/profit-line-chart";
import ProfitTable from "./_components/profit-table";
import CashSettlementCard from "./_components/cash-settlement-card";

import {
  demoAnalyticsHeader,
  demoChart,
  demoStats,
  demoTable,
} from "./_data/analytics.demo";
import type { AnalyticsFilters } from "./_types/analytics.types";
import { useMemo, useState } from "react";

export default function AnalyticsPage() {
  const [filters, setFilters] = useState<AnalyticsFilters>({
    startDate: "05/01/2024",
    endDate: "05/31/2024",
    vendorId: "all",
    officeId: "all",
    minProfit: "",
    maxProfit: "",
  });

  const filteredRows = useMemo(() => {
    // demo only: keep same list (you will wire API later)
    return demoTable.rows;
  }, []);

  return (
    <div>
      <div className="mx-auto w-full max-w-300">
        <AnalyticsHeader data={demoAnalyticsHeader} />

        <div className="mt-6">
          <StatCardsRow items={demoStats} />
        </div>

        <div className="mt-5">
          <ProfitLineChart data={demoChart} />
        </div>

        {/* table + right-bottom settlement card (like screenshot) */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ProfitTable
              titleBn="প্রফিট রেকর্ডিং লেজার"
              rows={filteredRows}
              meta={demoTable.meta}
              filters={filters}
              onApplyFilters={setFilters}
            />
          </div>

          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-6">
              <CashSettlementCard data={demoTable.cashSettlement} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
