"use client";

import { useMemo, useState } from "react";
import RequisitionInboxHeader from "./_components/requisition-inbox-header";
import RequisitionStats from "./_components/requisition-stats";
import RequisitionFiltersBar from "./_components/requisition-filters-bar";
import RequisitionAdvancedFilters from "./_components/requisition-advanced-filters";
import RequisitionTable from "./_components/requisition-table";
import RequisitionPagination from "./_components/requisition-pagination";

import {
  demoRows,
  economicCodeOptions,
  initialFilters,
  initialPagination,
  ministryOrDivisionOptions,
  statCards,
  statusOptions,
} from "./_data/requisition-inbox.demo";
import { FiltersState, PaginationState } from "./_types/requisition-inbox.types";
import { useRouter } from "next/navigation";

export default function RequisitionInboxPage() {
  const [filters, setFilters] = useState<FiltersState>(initialFilters);
  const [pagination, setPagination] = useState<PaginationState>(initialPagination);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const router = useRouter();
  const rows = useMemo(() => {
    // demo filtering (keep simple)
    let r = [...demoRows];

    if (filters.q.trim()) {
      const q = filters.q.trim().toLowerCase();
      r = r.filter(
        (x) =>
          x.id.toLowerCase().includes(q) ||
          x.officeNameBn.toLowerCase().includes(q) ||
          x.officeId.toLowerCase().includes(q)
      );
    }
    if (filters.economicCode !== "all") {
      r = r.filter((x) => x.economicCode === filters.economicCode);
    }
    if (filters.status !== "all") {
      r = r.filter((x) => x.status === filters.status);
    }

    return r;
  }, [filters]);

  const onView = (id: string) => {
    // TODO: replace with your route navigation
    // e.g. router.push(`/requisition-inbox/${id}`)
    alert(`View: ${id}`);
  };

  const onStart = (id: string, status: string) => {
    if (status === "NOT_STARTED") {

      router.push(`/admin/dashboard/requisition-inbox/${id}?step=requisition&status=${status}`);
    } else {
      router.push(`/admin/dashboard/requisition-inbox/${id}?step=negotiation&status=${status}`);
    }
  };

  return (
    <div className="min-h-[calc(100vh-56px)] bg-[var(--color-off-white)] px-6 py-6">
      {/* top bar: title left; advanced button right like image */}
      <div className="flex items-start justify-between gap-4">
        <RequisitionInboxHeader />

        <button
          type="button"
          onClick={() => setAdvancedOpen(true)}
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-[var(--color-primary-color)] px-4 text-sm font-semibold text-white hover:opacity-95"
        >
          {/* sliders icon */}
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
              d="M4 6h10M4 18h10M14 6h6M14 18h6M8 6v6M8 18v-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          অ্যাডভান্সড ফিল্টার
        </button>
      </div>

      <RequisitionStats cards={statCards} />

      <RequisitionFiltersBar
        value={filters}
        onChange={setFilters}
        economicOptions={economicCodeOptions}
        ministryOrDivisionOptions={ministryOrDivisionOptions}
        statusOptions={statusOptions}
        onOpenAdvanced={() => setAdvancedOpen(true)}
      />

      <RequisitionTable rows={rows} onView={onView} onStart={onStart} />

      <RequisitionPagination value={pagination} onChange={setPagination} />

      <RequisitionAdvancedFilters
        open={advancedOpen}
        onClose={() => setAdvancedOpen(false)}
        value={filters.advanced}
        onChange={(next) => setFilters({ ...filters, advanced: next })}
        onReset={() =>
          setFilters({
            ...filters,
            advanced: initialFilters.advanced,
          })
        }
        onApply={() => setAdvancedOpen(false)}
      />
    </div>
  );
}
