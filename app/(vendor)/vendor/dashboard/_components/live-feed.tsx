"use client";

import React from "react";
import Card from "@/components/cards/card";
import Link from "next/link";
import { RefreshCw, ClipboardList, ArrowDown } from "lucide-react";

type FeedItem = {
  dot: "green" | "blue" | "yellow" | "gray";
  title: React.ReactNode;   // allow bold inside
  sub?: string;             // optional second line (small)
  time: string;             // "Just now"
};

const demo: FeedItem[] = [
  {
    dot: "green",
    title: (
      <>
        Office approved payment <span className="text-primary-color font-extrabold">#INV-2023-09</span>
      </>
    ),
    time: "Just now",
  },
  {
    dot: "blue",
    title: (
      <>
        New RFQ posted in <span className="font-extrabold text-gray">Electronics</span> category
      </>
    ),
    time: "15 minutes ago",
  },
  {
    dot: "yellow",
    title: <>System Maintenance Scheduled</>,
    sub: "Prepare for downtime on Friday 10 PM.",
    time: "1 hour ago",
  },
  {
    dot: "gray",
    title: (
      <>
        Bid <span className="font-extrabold text-gray">#BID-449</span> was viewed by procurement officer
      </>
    ),
    time: "3 hours ago",
  },
];

const dotClass: Record<FeedItem["dot"], string> = {
  green: "bg-green",
  blue: "bg-primary-color",
  yellow: "bg-secondary",
  gray: "bg-gray/25",
};

export default function LiveFeed() {
  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-5">
      {/* header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-primary-color">
            <ClipboardList size={16} />
          </span>
          <h3 className="text-sm font-extrabold text-gray">
            লাইভ ফিড (Live Feed)
          </h3>
        </div>

        <button
          type="button"
          className="rounded-md p-1 text-gray/50 hover:text-gray"
          aria-label="Refresh"
          onClick={() => {}}
        >
          <RefreshCw size={16} />
        </button>
      </div>

      {/* list */}
      <div className="mt-4 space-y-4">
        {demo.map((it, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span className={`mt-1.5 h-2 w-2 rounded-full ${dotClass[it.dot]}`} />
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray leading-5">{it.title}</p>
              {it.sub ? (
                <p className="mt-1 text-[11px] font-semibold text-gray/50">
                  {it.sub}
                </p>
              ) : null}
              <p className="mt-1 text-[11px] font-semibold text-gray/50">
                {it.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* footer link */}
      <div className="mt-6 flex justify-center">
        <Link
          href="/vendor/activity"
          className="inline-flex items-center gap-2 text-xs font-extrabold text-primary-color hover:underline"
        >
          View All Activity <ArrowDown size={14} />
        </Link>
      </div>
    </Card>
  );
}
