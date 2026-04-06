"use client";

import { ArrowLeft } from "lucide-react";
import type { HeaderData } from "../_types/refund-queue-details.type";

export default function RefundDetailsHeader({ data }: { data: HeaderData }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-primary-color/20 bg-white px-3 py-2 text-sm text-black hover:brightness-105 active:scale-[0.98]"
          onClick={() => history.back()}
        >
          <ArrowLeft className="h-4 w-4" />
          BACK
        </button>

        <div>
          <div className="text-lg font-semibold text-black">
            ফাইনাল সেটেলমেন্ট ও অ্যাকাউন্টেড কোডিং: {data.reqCode}
          </div>
          <div className="mt-1 flex items-center gap-2 text-sm text-orange">
            <span className="inline-block h-2 w-2 rounded-full bg-orange" />
            {data.statusTextBn}
          </div>
        </div>
      </div>

      <div className="rounded-md border border-primary-color/20 bg-white px-4 py-2">
        <div className="text-xs text-medium-gray">{data.officePillLabelBn}</div>
        <div className="text-sm font-semibold text-black">{data.officeNameBn}</div>
      </div>
    </div>
  );
}