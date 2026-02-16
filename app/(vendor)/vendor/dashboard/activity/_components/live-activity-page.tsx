"use client";

import React, { useMemo, useState } from "react";
import LiveActivityCard from "./live-activity-card";
import { demoActivities } from "../_data/live-activity.demo";

export default function LiveActivityPage() {
  // no-op UI state
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const items = useMemo(() => demoActivities, []);

  return (
    <div className="px-6 py-6">
      <div className="mx-auto w-full max-w-[980px]">
        <LiveActivityCard
          items={items}
          searchValue={search}
          onSearchChange={(v) => setSearch(v)}
          typeValue={type}
          onTypeChange={(v) => setType(v)}
        />
      </div>
    </div>
  );
}
