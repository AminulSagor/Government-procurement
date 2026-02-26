"use client";

import React, { useMemo } from "react";
import { X, FileText, Wallet, HandCoins, Info } from "lucide-react";
import Card from "@/components/cards/card";
import Dialog from "@/components/dialog/dialog"; // ✅ change if your dialog path is different
import type {
  PaymentStatus,
  PaymentTransaction,
  RequisitionItem,
} from "../_types/order-management.type";

type Tab = "office" | "vendor";

function formatBDT(n: number) {
  return `৳ ${new Intl.NumberFormat("bn-BD").format(n)}`;
}

function statusPill(status: PaymentStatus) {
  // ✅ only token colors
  const cls =
    status === "COMPLETED" || status === "VERIFIED"
      ? "bg-green/10 text-green border-green/20"
      : status === "REJECTED"
        ? "bg-red/10 text-red border-red/20"
        : status === "MATCHED"
          ? "bg-secondary-color/20 text-primary-color border-primary-color/20"
          : "bg-orange/10 text-orange border-orange/20";

  const label =
    status === "COMPLETED"
      ? "যাচাইকৃত"
      : status === "VERIFIED"
        ? "ভেরিফাইড"
        : status === "REJECTED"
          ? "বাতিল"
          : status === "MATCHED"
            ? "ম্যাচড"
            : "অপেক্ষমান";

  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
        cls,
      ].join(" ")}
    >
      <span className="h-2 w-2 rounded-full bg-current opacity-60" />
      {label}
    </span>
  );
}

function StatCard({
  icon,
  label,
  value,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone: "neutral" | "success" | "danger";
}) {
  const iconWrap =
    tone === "success"
      ? "border-green/20 bg-green/10 text-green"
      : tone === "danger"
        ? "border-red/20 bg-red/10 text-red"
        : "border-primary-color/20 bg-secondary-color/15 text-primary-color";

  return (
    <div className="flex items-center gap-3">
      <div
        className={[
          "h-11 w-11 rounded-xl border flex items-center justify-center shrink-0",
          iconWrap,
        ].join(" ")}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <div className="text-xs text-light-gray">{label}</div>
        <div className="text-black font-bold">{value}</div>
      </div>
    </div>
  );
}

function ProgressBar({ percent }: { percent: number }) {
  const p = Math.max(0, Math.min(100, percent));

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs">
        <div className="text-primary-color font-semibold">পেমেন্ট অগ্রগতি</div>
        <div className="text-light-gray font-semibold">
          {p.toFixed(0)}% সম্পন্ন
        </div>
      </div>

      <div className="h-3 w-full rounded-full bg-off-white border border-primary-color/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-primary-color"
          style={{ width: `${p}%` }}
        />
      </div>
    </div>
  );
}

function TableRow({
  date,
  refNo,
  amount,
  status,
}: {
  date: string;
  refNo: string;
  amount: string;
  status: PaymentStatus;
}) {
  return (
    <div className="grid grid-cols-[160px_1fr_160px_140px_70px] gap-3 items-center px-4 py-3 border-t border-primary-color/10">
      <div className="text-sm text-black">{date}</div>
      <div className="text-sm text-black font-semibold">{refNo}</div>
      <div className="text-sm text-black font-semibold">{amount}</div>
      <div>{statusPill(status)}</div>

      <button
        type="button"
        className="h-9 w-9 rounded-md border border-primary-color/20 bg-white flex items-center justify-center text-red hover:brightness-110"
        title="ডকুমেন্ট"
      >
        <FileText className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function PaymentDetailsDialog({
  open,
  onOpenChange,
  item,
  tab,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  item: RequisitionItem | null;
  tab: Tab;
}) {
  const office = item?.payment.office;
  const vendor = item?.payment.vendor;

  const computed = useMemo(() => {
    if (!item) return null;

    if (tab === "office" && office) {
      const total = office.totalAmount.amount;
      const pending = office.pendingAmount.amount;

      // paid: completed tx sum fallback
      const completedSum = office.transactions
        .filter((t) => t.status === "COMPLETED" || t.status === "VERIFIED")
        .reduce((acc, t) => acc + t.amount.amount, 0);

      const paid =
        completedSum > 0 ? completedSum : Math.max(0, total - pending);

      const percent = total > 0 ? ((total - pending) / total) * 100 : 0;

      return {
        title: "পণ্যের পেমেন্ট বিস্তারিত",
        sub: `${item.title} (A4 Paper) - #${item.orderId}`,
        total,
        paid,
        pending,
        percent,
        transactions: office.transactions,
      };
    }

    // vendor view (simpler)
    if (tab === "vendor" && vendor) {
      const total = vendor.invoiceTotal.amount;
      const pending = vendor.pendingAmount.amount;
      const paid = Math.max(0, total - pending);
      const percent = total > 0 ? (paid / total) * 100 : 0;

      return {
        title: "ভেন্ডর পেমেন্ট বিস্তারিত",
        sub: `${item.title} - #${item.orderId}`,
        total,
        paid,
        pending,
        percent,
        transactions: [] as PaymentTransaction[],
      };
    }

    return null;
  }, [item, tab, office, vendor]);

  if (!item || !computed) {
    return (
      <Dialog
        open={open}
        onOpenChange={onOpenChange}
        size="xl"
        position="center"
      >
        <div className="flex items-center justify-between">
          <div className="text-black font-bold text-lg">পেমেন্ট বিস্তারিত</div>
          <button
            className="h-9 w-9 rounded-md border border-primary-color/20 bg-white flex items-center justify-center text-light-gray hover:text-black"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <Card className="mt-4 p-5">
          <div className="text-light-gray">No data</div>
        </Card>
      </Dialog>
    );
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      size="xl"
      position="center"
      className="border border-primary-color/15 rounded-2xl"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-black font-bold text-xl">{computed.title}</div>
          <div className="mt-1 flex items-center gap-2 text-sm text-light-gray">
            <span className="h-2 w-2 rounded-full bg-primary-color" />
            <span className="text-black font-semibold">{item.title}</span>
            <span className="text-light-gray">-</span>
            <span className="text-primary-color font-bold">
              #{item.orderId}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mt-4">
        <Card className="p-5">
          {/* Top stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              tone="neutral"
              icon={<Wallet className="h-5 w-5" />}
              label="মোট চুক্তি মূল্য"
              value={formatBDT(computed.total)}
            />
            <StatCard
              tone="success"
              icon={<HandCoins className="h-5 w-5" />}
              label="পরিশোধিত"
              value={formatBDT(computed.paid)}
            />
            <StatCard
              tone="danger"
              icon={<FileText className="h-5 w-5" />}
              label="বকেয়া"
              value={formatBDT(computed.pending)}
            />
          </div>

          {/* Progress */}
          <div className="mt-6">
            <ProgressBar percent={computed.percent} />
          </div>
        </Card>
      </div>

      {/* Transactions */}
      <div className="mt-6">
        <div className="flex items-center gap-2 text-black font-bold">
          <span className="h-9 w-9 rounded-md border border-primary-color/20 bg-secondary-color/10 flex items-center justify-center text-primary-color">
            <Info className="h-4 w-4" />
          </span>
          লেনদেনের ইতিহাস
        </div>

        <div className="mt-3 rounded-xl border border-primary-color/10 bg-white overflow-hidden">
          <div className="grid grid-cols-[160px_1fr_160px_140px_70px] gap-3 px-4 py-3 bg-off-white border-b border-primary-color/10 text-xs text-light-gray font-semibold">
            <div>তারিখ</div>
            <div>রেফারেন্স নং</div>
            <div>পরিমাণ</div>
            <div>অবস্থা</div>
            <div className="text-center">ডকুমেন্ট</div>
          </div>

          {tab === "office" ? (
            computed.transactions.length ? (
              computed.transactions.map((t) => (
                <TableRow
                  key={t.id}
                  date={t.date}
                  refNo={t.refNo}
                  amount={formatBDT(t.amount.amount)}
                  status={t.status}
                />
              ))
            ) : (
              <div className="px-4 py-6 text-light-gray">কোন লেনদেন নেই</div>
            )
          ) : (
            <div className="px-4 py-6 text-light-gray">
              ভেন্ডর পেমেন্টের লেনদেন তালিকা এখন UI-only placeholder
            </div>
          )}
        </div>
      </div>

      {/* Breakdown (static if needed) */}
      <div className="mt-6">
        <div className="flex items-center gap-2 text-black font-bold">
          <span className="h-9 w-9 rounded-md border border-primary-color/20 bg-secondary-color/10 flex items-center justify-center text-primary-color">
            <FileText className="h-4 w-4" />
          </span>
          চলমান পেমেন্ট ব্রেকডাউন
        </div>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-primary-color/10 bg-white p-5">
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-light-gray">একক দর</span>
                <span className="text-black font-semibold">
                  {formatBDT(348.68)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-light-gray">ভ্যাট (৫%)</span>
                <span className="text-black font-semibold">
                  {formatBDT(17.45)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-light-gray">আইটি (২%)</span>
                <span className="text-black font-semibold">
                  {formatBDT(10.45)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-light-gray">অতিরিক্ত ভ্যাট (২%)</span>
                <span className="text-black font-semibold">
                  {formatBDT(0.82)}
                </span>
              </div>
              <div className="pt-3 border-t border-primary-color/10 flex items-center justify-between">
                <span className="text-black font-bold">মোট</span>
                <span className="text-primary-color font-bold">
                  {formatBDT(computed.total)}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-primary-color/10 bg-off-white p-5 flex items-center justify-center text-center">
            <div>
              <div className="mx-auto h-12 w-12 rounded-full border border-primary-color/20 bg-white flex items-center justify-center text-light-gray">
                <Info className="h-5 w-5" />
              </div>
              <div className="mt-3 text-light-gray text-sm">
                {tab === "office"
                  ? `অপেক্ষমান পেমেন্ট রেফারেন্স ${office?.refNo} এর জন্য বিস্তারিত ট্যাক্স`
                  : "ভেন্ডর পেমেন্টের জন্য বিস্তারিত ট্যাক্স এখন UI-only placeholder"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="px-6 py-2 rounded-md bg-white text-black border border-medium-gray transition-all duration-150 ease-out active:scale-[0.97] active:translate-y-px"
        >
          বন্ধ করুন
        </button>
      </div>
    </Dialog>
  );
}
