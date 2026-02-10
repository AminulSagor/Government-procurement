"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function LiveActivityHeader() {
  return (
    <div className="flex items-start gap-3">
      {/* icon box */}
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-color/10">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary-color"
        >
          <path d="M7 8h10" />
          <path d="M7 12h10" />
          <path d="M7 16h7" />
          <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        </svg>
      </div>

      <div>
        <h2 className="text-base font-semibold text-gray">
          লাইভ ফিড (Live Activity Feed)
        </h2>
        <p className="mt-1 text-xs text-light-gray">
          Track all your payments, bids, and system alerts in real-time.
        </p>
      </div>
    </div>
  );
}