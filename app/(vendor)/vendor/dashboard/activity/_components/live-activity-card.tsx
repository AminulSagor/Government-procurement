"use client";

import React from "react";
import Card from "@/components/cards/card";
import LiveActivityHeader from "./live-activity-header";

import LiveActivityList from "./live-activity-list";
import TablePagination from "./table-pagination";
import { ActivityItem } from "../_types/live-activity.types";
import { LiveActivityToolbar } from "./live-activity-toolbar";

export default function LiveActivityCard({
  items,
  searchValue,
  onSearchChange,
  typeValue,
  onTypeChange,
}: {
  items: ActivityItem[];
  searchValue: string;
  onSearchChange: (v: string) => void; // no-op from parent
  typeValue: string;
  onTypeChange: (v: string) => void; // no-op from parent
}) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="px-6 py-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <LiveActivityHeader />
          <LiveActivityToolbar
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            typeValue={typeValue}
            onTypeChange={onTypeChange}
          />
        </div>
      </div>

      <div className="border-t border-gray/10" />

      <LiveActivityList items={items} />

      <div className="px-6 py-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-gray">
            Showing <span className="font-semibold">1 to 5</span> of{" "}
            <span className="font-semibold">48</span> results
          </p>

          <TablePagination
            page={1}
            totalPages={8}
            onPrev={() => null}
            onNext={() => null}
            onGoToPage={() => null}
          />
        </div>
      </div>
    </Card>
  );
}
