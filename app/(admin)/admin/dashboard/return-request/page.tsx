"use client";

import { useMemo, useState } from "react";
import ReturnRequestHeader from "./_components/ReturnRequestHeader";
import ReturnRequestStats from "./_components/ReturnRequestStats";
import ReturnRequestFilters, { ReturnRequestFiltersValue } from "./_components/ReturnRequestFilters";
import ReturnRequestTable from "./_components/ReturnRequestTable";
import PaginationBar from "./_components/PaginationBar";

import { RETURN_REQUESTS_DEMO } from "./_data/return-requests.demo";
import { ReturnRequestStatus, ReturnRequestRow } from "./_types/return-request.types";
import { applyReturnRequestFilters, getStatusCounts } from "./_utils/return-request.utils";

const PAGE_SIZE = 5;

export default function Page() {
  const [filters, setFilters] = useState<ReturnRequestFiltersValue>({
    query: "",
    damageType: "all",
    office: "all",
    status: "all",
  });

  const [page, setPage] = useState(1);

  const filtered = useMemo<ReturnRequestRow[]>(() => {
    const rows = applyReturnRequestFilters(RETURN_REQUESTS_DEMO, filters);
    return rows;
  }, [filters]);

  const stats = useMemo(() => getStatusCounts(RETURN_REQUESTS_DEMO), []);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);

  const paged = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, safePage]);

  // reset to page 1 when filters change
  const onChangeFilters = (next: ReturnRequestFiltersValue) => {
    setFilters(next);
    setPage(1);
  };

  return (
    <main className="min-h-screen bg-off-white">
      <div className="mx-auto w-full  px-4 py-6 md:px-6">
        <ReturnRequestHeader />
        <div className="mt-4">
          <ReturnRequestStats
            total={stats.total}
            pendingReview={stats.pendingReview}
            rejected={stats.rejected}
          />
        </div>

        <div className="mt-4">
          <ReturnRequestFilters value={filters} onChange={onChangeFilters} />
        </div>

        <div className="mt-4">
          <ReturnRequestTable rows={paged} />
        </div>

        <div className="mt-3">
          <PaginationBar
            page={safePage}
            totalPages={totalPages}
            label={`Showing ${(safePage - 1) * PAGE_SIZE + 1} to ${Math.min(
              safePage * PAGE_SIZE,
              total
            )} of ${total} results`}
            onPrev={() => setPage((p) => Math.max(1, p - 1))}
            onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
          />
        </div>
      </div>
    </main>
  );
}