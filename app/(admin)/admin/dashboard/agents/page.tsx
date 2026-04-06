"use client";

import { useMemo, useState } from "react";
import AgentsHeader from "./_components/agents-header";
import AgentsStats from "./_components/agents-stats";
import AgentsFiltersBar from "./_components/agents-filters-bar";
import AgentsTable from "./_components/agents-table";
import AgentsPagination from "./_components/agents-pagination";

import {
  demoAgents,
  demoMeta,
  demoStats,
  districtOptions,
  statusOptions,
} from "./_data/agents.demo";
import type {
  AgentFilters,
  AgentStatus,
  AgentsMeta,
} from "./_types/agents.types";

const PAGE_SIZE = 10;

export default function AgentsPage() {
  const [filters, setFilters] = useState<AgentFilters>({
    q: "",
    district: "all",
    status: "all",
  });

  const [page, setPage] = useState<number>(1);

  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase();

    return demoAgents.filter((a) => {
      const matchesQ =
        !q ||
        a.name.toLowerCase().includes(q) ||
        a.agentCode.toLowerCase().includes(q) ||
        a.phone.toLowerCase().includes(q);

      const matchesDistrict =
        filters.district === "all" || a.district === filters.district;

      const matchesStatus =
        filters.status === "all" || a.status === filters.status;

      return matchesQ && matchesDistrict && matchesStatus;
    });
  }, [filters]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  const pagedRows = useMemo(() => {
    const safePage = Math.min(pageCount, Math.max(1, page));
    const start = (safePage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page, pageCount]);

  const meta: AgentsMeta = useMemo(() => {
    const safePage = Math.min(pageCount, Math.max(1, page));
    return {
      total: filtered.length,
      page: safePage,
      limit: PAGE_SIZE,
      totalPages: pageCount,
      hasNextPage: safePage < pageCount,
      hasPrevPage: safePage > 1,
    };
  }, [filtered.length, page, pageCount]);

  const onChangeStatus = (id: string, next: AgentStatus) => {
    // demo only — real API হলে এখানে mutation করবে
    console.log("change status", id, next);
  };

  return (
    <div className="space-y-7">
      <AgentsHeader
        titleBn="এরিয়া ম্যানেজার ও এজেন্ট তালিকা"
        subtitleEn="Manage all field personnel and their geographical task allocations across the entire platform."
      />

      <div className="mt-5">
        <AgentsStats stats={demoStats} />
      </div>

      <div className="mt-5">
        <AgentsFiltersBar
          filters={filters}
          districtOptions={districtOptions}
          statusOptions={statusOptions}
          onChange={(next) => {
            setPage(1);
            setFilters(next);
          }}
          onOpenAdvanced={() => console.log("advanced filters")}
        />
      </div>

      <div className="mt-5">
        <AgentsTable rows={pagedRows} onStatusChange={onChangeStatus} />
      </div>

      <div className="mt-4">
        <AgentsPagination
          meta={meta}
          onChange={(p) => setPage(p)}
          fallbackMeta={demoMeta}
        />
      </div>
    </div>
  );
}
