"use client";

import React from "react";
import { ActivityItem } from "../_types/live-activity.types";
import LiveActivityItem from "./live-activity-item";

export default function LiveActivityList({ items }: { items: ActivityItem[] }) {
  return (
    <div>
      {items.map((it, idx) => (
        <div key={it.id}>
          <LiveActivityItem item={it} />
          {idx !== items.length - 1 ? (
            <div className="border-t border-gray/10" />
          ) : null}
        </div>
      ))}
    </div>
  );
}
