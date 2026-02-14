"use client";

import { RefreshCcw, Download } from "lucide-react";

export default function InboxHeader() {
  return (
    <div className="space-y-2">
      <div className="text-xs text-gray">
        Home <span className="mx-1">/</span> Tasks <span className="mx-1">/</span> Inbox
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-black">পেন্ডিং অ্যাকশন ইনবক্স</h1>
          <p className="mt-1 text-sm text-gray/70">
            Review and verify allotment reports and other pending activities.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="h-10 px-4 rounded-lg border border-border bg-white text-sm font-semibold text-gray flex items-center gap-2">
            <RefreshCcw className="h-4 w-4" />
            Refresh List
          </button>

          <button className="h-10 w-10 rounded-lg border border-border bg-white flex items-center justify-center text-gray">
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
