"use client";

import React, { useMemo, useState } from "react";
import { Eye, FileText, SlidersHorizontal } from "lucide-react";

import type {
  RefundRequestQueueItem,
  RefundStatus,
} from "../_types/refund-request-queue.type";
import { REFUND_REQUEST_QUEUE_DATA } from "../_data/refund-request-queue-data";
import Card from "@/components/cards/card";
import SecondaryButton from "@/components/buttons/secondary-button";
import PrimaryButton from "@/components/buttons/primary-button";
import { useRouter } from "next/navigation";

function formatBnMoney(amount: number) {
  const bn = new Intl.NumberFormat("bn-BD").format(amount);
  return `৳ ${bn}`;
}

function statusUi(status: RefundStatus) {
  // token-only
  if (status === "pending") {
    return {
      label: "PENDING",
      wrap: "bg-yellow/15 border-yellow/40",
      text: "text-orange",
    };
  }
  if (status === "in_review") {
    return {
      label: "IN REVIEW",
      wrap: "bg-blue/10 border-blue/25",
      text: "text-blue",
    };
  }
  return {
    label: "APPROVED",
    wrap: "bg-green/15 border-green/30",
    text: "text-green",
  };
}

function RefundTypeText({ v }: { v: RefundRequestQueueItem["refundType"] }) {
  return (
    <span className="font-semibold text-black">
      {v === "full" ? "Full" : "Partial"}
    </span>
  );
}

function StatusPill({ status }: { status: RefundStatus }) {
  const s = statusUi(status);
  return (
    <span
      className={[
        "inline-flex items-center justify-center",
        "rounded-full border",
        "px-3 py-1",
        "text-xs font-extrabold tracking-wide",
        s.wrap,
        s.text,
      ].join(" ")}
    >
      {s.label}
    </span>
  );
}

function IconButton({
  children,
  onClick,
  label,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={[
        "h-10 w-10 rounded-full",
        "bg-off-white",
        "flex items-center justify-center",
        "transition-all duration-150 ease-out",
        "hover:brightness-105",
        "active:scale-[0.97] active:translate-y-px",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function Pagination({
  page,
  totalPages,
  onPrev,
  onNext,
  onPage,
}: {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onPage: (p: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onPrev}
        className="h-10 w-10 rounded-md border border-primary-color/20 bg-white flex items-center justify-center"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={() => onPage(page)}
        className="h-10 w-10 rounded-md bg-primary-color text-white font-extrabold flex items-center justify-center"
      >
        {page}
      </button>

      <button
        type="button"
        onClick={onNext}
        className="h-10 w-10 rounded-md border border-primary-color/20 bg-white flex items-center justify-center"
      >
        ›
      </button>
    </div>
  );
}

export default function RefundRequestQueueTable() {
  const [page, setPage] = useState(1);
  const limit = 4;

  const allRows = REFUND_REQUEST_QUEUE_DATA;
  const total = allRows.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const rows = useMemo(() => {
    const start = (page - 1) * limit;
    return allRows.slice(start, start + limit);
  }, [page, allRows]);

  const router = useRouter();

  return (
    <Card className="p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between gap-3 px-6 py-4">
        <div className="flex items-center gap-3">
          <FileText className="h-5 w-5 text-primary-color" />
          <h3 className="text-base font-extrabold text-black">
            রিফান্ড রিকোয়েস্ট কিউ
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <SecondaryButton className="px-4 py-1 text-sm flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            ফিল্টার
          </SecondaryButton>

          <PrimaryButton className="px-4 py-1 text-sm flex items-center gap-2">
            এক্সপোর্ট PDF
          </PrimaryButton>
        </div>
      </div>

      <div className="h-px w-full bg-off-white" />

      {/* table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-245 text-left">
          <thead>
            <tr className="text-sm text-medium-gray">
              <th className="px-6 py-4 font-semibold">অর্ডার আইডি</th>
              <th className="px-6 py-4 font-semibold">তারিখ</th>
              <th className="px-6 py-4 font-semibold">দপ্তর/অফিস</th>
              <th className="px-6 py-4 font-semibold">ভেন্ডর</th>
              <th className="px-6 py-4 font-semibold">পণ্য ও পরিমাণ</th>
              <th className="px-6 py-4 font-semibold">রিফান্ড ধরন</th>
              <th className="px-6 py-4 font-semibold">টাকার পরিমাণ</th>
              <th className="px-6 py-4 font-semibold">অবস্থা</th>
              <th className="px-6 py-4 font-semibold text-center">অ্যাকশন</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-primary-color/10">
                <td className="px-6 py-5">
                  <span className="font-extrabold text-primary-color">
                    {r.orderId}
                  </span>
                </td>

                <td className="px-6 py-5 text-sm text-light-gray">
                  {r.dateBn}
                </td>

                <td className="px-6 py-5">
                  <p className="font-semibold text-black text-sm">
                    {r.officeNameBn}
                  </p>
                  {r.officeCodeBn ? (
                    <p className="text-xs text-medium-gray mt-1">
                      {r.officeCodeBn}
                    </p>
                  ) : null}
                </td>

                <td className="px-6 py-5">
                  <p className="font-semibold text-sm text-black">
                    {r.vendorNameBn}
                  </p>
                </td>

                <td className="px-6 py-5">
                  <p className="text-sm text-black">{r.productSummaryBn}</p>
                </td>

                <td className="px-6 py-5">
                  <RefundTypeText v={r.refundType} />
                </td>

                <td className="px-6 py-5">
                  <span className="font-extrabold text-black">
                    {formatBnMoney(r.amount)}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <StatusPill status={r.status} />
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center">
                    <IconButton
                      label="View details"
                      onClick={() => {
                        router.push("/admin/dashboard/refunds/refund-queue/1");
                      }}
                    >
                      <Eye className="h-5 w-5 text-primary-color" />
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* footer */}
      <div className="flex items-center justify-between gap-3 px-6 py-4">
        <p className="text-sm text-medium-gray">
          দেখাচ্ছে {rows.length} টি রিকোয়েস্ট (মোট {total})
        </p>

        <Pagination
          page={page}
          totalPages={totalPages}
          onPrev={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
          onPage={(p) => setPage(p)}
        />
      </div>
    </Card>
  );
}
