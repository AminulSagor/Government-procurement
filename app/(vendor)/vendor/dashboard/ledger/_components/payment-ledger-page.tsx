"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import StatCardsRow from "./stat-cards-row";
import LedgerToolbar from "./ledger-toolbar";
import LedgerTable from "./ledger-table";
import TablePagination from "./table-pagination";
import { demoRows, demoStats } from "../_data/payment-ledger.demo";
import { Home } from "lucide-react";

export default function PaymentLedgerPage() {
  // no-op state (UI only)
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("2024-08-10");
  const [toDate, setToDate] = useState("2024-08-10");
  const [showPerPage, setShowPerPage] = useState("10");

  // demo only: keep rows stable
  const rows = useMemo(() => demoRows, []);

  return (
    <div className="px-6 py-6">
      {/* breadcrumb */}
      <div className="flex items-center gap-2 text-xs ">
        <Home size={14} className="text-light-gray" />
        <span className="text-light-gray">/</span>

        <Link href="/" className="text-light-gray hover:underline">
          হোম
        </Link>

        <span className="text-light-gray">/</span>
        <span className="text-light-gray">ফিন্যান্সিয়াল</span>

        <span className="text-light-gray">/</span>
        <span className="text-black">পেমেন্ট লেজার</span>
      </div>

      {/* header row */}
      <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-black">পেমেন্ট লেজার</h1>
          <p className="mt-1 text-sm text-light-gray">
            আপনার সমস্ত পেমেন্ট লেনদেনের ইতিহাস, স্ট্যাটাস এবং বিস্তারিত বিবরণ
          </p>
        </div>

        {/* date + actions */}
        <div className="flex flex-wrap items-end gap-3">
          {/* start date */}
          <div className="grid gap-2">
            <p className="text-xs font-semibold text-light-gray">শুরুর তারিখ</p>
            <input
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              type="date"
              className={cn(
                "h-10 w-[160px] rounded-lg border border-light-gray/15 bg-white px-3 text-sm text-light-gray outline-none",
                "focus:border-primary",
              )}
            />
          </div>

          {/* end date */}
          <div className="grid gap-2">
            <p className="text-xs font-semibold text-light-gray">শেষ তারিখ</p>
            <input
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              type="date"
              className={cn(
                "h-10 w-[160px] rounded-lg border border-light-gray/15 bg-white px-3 text-sm text-light-gray outline-none",
                "focus:border-primary",
              )}
            />
          </div>

          <button
            type="button"
            onClick={() => null}
            className={cn(
              "h-10 rounded-lg border border-light-gray/15 bg-white px-4 text-sm font-semibold text-light-gray",
              "inline-flex items-center gap-2 hover:border-primary",
            )}
          >
            <span className="grid h-5 w-5 place-items-center rounded-md">
              {/* use your filter icon if you already have one */}
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 5h18" />
                <path d="M6 12h12" />
                <path d="M10 19h4" />
              </svg>
            </span>
            ফিল্টার
          </button>

          <button
            type="button"
            onClick={() => null}
            className={cn(
              "h-10 rounded-lg bg-primary-color px-4 text-sm font-semibold text-white",
              "inline-flex items-center gap-2 hover:opacity-95",
            )}
          >
            <span className="grid h-5 w-5 place-items-center rounded-md">
              {/* download icon */}
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v12" />
                <path d="M7 10l5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
            </span>
            এক্সপোর্ট
          </button>
        </div>
      </div>

      {/* stat cards */}
      <div className="mt-5">
        <StatCardsRow stats={demoStats} />
      </div>

      {/* table card */}
      <Card className="mt-5">
        <LedgerToolbar
          search={search}
          onSearchChange={(v) => setSearch(v)}
          showPerPage={showPerPage}
          onShowPerPageChange={(v) => setShowPerPage(v)}
        />

        <div className="mt-4">
          <LedgerTable rows={rows} />
        </div>

        <div className="mt-4">
          <TablePagination
            showingText="দেখাচ্ছে ১ থেকে ৫, মোট ৪৮ টি এন্ট্রি"
            page={1}
            totalPages={9}
            onPrev={() => null}
            onNext={() => null}
            onGoToPage={() => null}
          />
        </div>
      </Card>
    </div>
  );
}
