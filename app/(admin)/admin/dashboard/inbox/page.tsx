"use client";

import { useState } from "react";
import { InboxTabKey } from "./_types/inbox-type";
import InboxHeader from "./_components/inbox-header";
import StatCards from "./_components/stat-cards";
import InboxTabs from "./_components/inbox-tabs";
import { budgetRows, paymentRows } from "./_data/inbox-data";
import InboxFilters from "./_components/inbox-filters";
import InboxTable from "./_components/inbox-table";
import InboxPagination from "./_components/inbox-pagination";

export default function TasksInboxPage() {
  const [tab, setTab] = useState<InboxTabKey>("budget");

  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      <div className="p-6 space-y-4">
        <InboxHeader />
        <StatCards />

        <div className="rounded-2xl border border-border bg-white overflow-hidden">
          <InboxTabs
            tab={tab}
            onChange={setTab}
            budgetCount={budgetRows.length}
            paymentCount={paymentRows.length}
          />

          <InboxFilters tab={tab} />
          <InboxTable tab={tab} budget={budgetRows} payment={paymentRows} />
          <InboxPagination />
        </div>
      </div>
    </div>
  );
}
