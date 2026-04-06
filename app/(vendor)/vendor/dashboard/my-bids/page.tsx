// app/(vendor)/bids/page.tsx
"use client";

import { Download } from "lucide-react";
import Breadcrumb from "./_components/breadcrumb";
import StatsRow from "./_components/stats-row";
import FiltersBar from "./_components/filters-bar";
import BidsTable from "./_components/bids-table";
import { Button } from "@/components/ui/button";


export default function Page() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-6 space-y-6">
        {/* top header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <Breadcrumb />
            <h1 className="text-2xl font-extrabold text-gray">উদ্ধৃতি ইতিহাস ও বিশ্লেষণ</h1>
            <p className="text-sm font-semibold text-light-gray">
              আপনার বিগত দরপত্র এবং উদ্ধৃতির বিস্তারিত বিশ্লেষণ ও সারাংশ একনজরে দেখুন।
            </p>
          </div>

          <Button
            variant="secondary"
            className="h-10 px-4 gap-2 border border-gray/15 bg-white text-gray hover:bg-white"
          >
            <Download size={16} />
            রিপোর্ট ডাউনলোড
          </Button>
        </div>

        {/* stats */}
        <StatsRow />

        {/* filters */}
        <FiltersBar />

        {/* table */}
        <BidsTable />
      </div>
    </div>
  );
}
