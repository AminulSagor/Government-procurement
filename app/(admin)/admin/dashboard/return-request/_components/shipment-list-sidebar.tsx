"use client";

import React from "react";
import Card from "@/components/cards/card";
import {
  CheckCircle2,
  Eye,
  MoreVertical,
  Package,
  Truck,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import type { ReturnRequestItem } from "../_types/return-request.types";

type StepTab = "assign_agent" | "shipment_start" | "order_received";

const stepTabs: Array<{ key: StepTab; label: string; done?: boolean }> = [
  { key: "assign_agent", label: "১. এজেন্ট নিয়োগ", done: true },
  { key: "shipment_start", label: "২. শিপমেন্ট শুরু", done: true },
  { key: "order_received", label: "৩. অর্ডার গ্রহণ", done: false },
];

function StepTabs({
  active,
  onChange,
}: {
  active: StepTab;
  onChange: (k: StepTab) => void;
}) {
  return (
    <div className="mt-3">
      <div className="flex w-full items-center gap-6 overflow-x-auto border-b border-primary-color/10">
        {stepTabs.map((t) => {
          const isActive = t.key === active;

          return (
            <button
              key={t.key}
              onClick={() => onChange(t.key)}
              className={[
                "relative flex shrink-0 items-center gap-2 pb-3 pt-2",
                "whitespace-nowrap text-xs font-semibold",
                isActive ? "text-primary-color" : "text-light-gray",
              ].join(" ")}
            >
              <CheckCircle2
                className={[
                  "h-4 w-4",
                  t.done
                    ? "text-green"
                    : isActive
                    ? "text-primary-color"
                    : "text-primary-color/30",
                ].join(" ")}
              />
              <span>{t.label}</span>

              {isActive ? (
                <span className="absolute bottom-[-1px] left-0 h-[3px] w-full rounded-full bg-primary-color" />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Chip({
  children,
  variant = "info",
}: {
  children: React.ReactNode;
  variant?: "info" | "danger";
}) {
  const cls =
    variant === "danger"
      ? "border border-red/15 bg-red/10 text-red"
      : "border border-primary-color/10 bg-primary-color/10 text-primary-color";

  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-lg px-3 py-2",
        "text-xs font-semibold",
        cls,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

/** ✅ status based pill (same-to-same) */
function StatusBadge({ status }: { status: ReturnRequestItem["status"] }) {
  if (status === "waiting") {
    return (
      <span className="inline-flex items-center gap-2 rounded-lg border border-orange/25 bg-orange/10 px-3 py-2 text-xs font-semibold text-orange">
        <Truck className="h-4 w-4" />
        ভেন্ডর রেসপন্স পেন্ডিং
      </span>
    );
  }

  if (status === "pending") {
    return (
      <span className="inline-flex items-center gap-2 rounded-lg border border-red/20 bg-red/10 px-3 py-2 text-xs font-semibold text-red">
        <AlertTriangle className="h-4 w-4" />
        ফেরত আবেদনের পেন্ডিং
      </span>
    );
  }

  if (status === "accepted") {
    return (
      <span className="inline-flex items-center gap-2 rounded-lg border border-green/20 bg-green/10 px-3 py-2 text-xs font-semibold text-green">
        <CheckCircle2 className="h-4 w-4" />
        রিকোয়েস্ট অ্যাকসেপ্টেড
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-red/20 bg-red/10 px-3 py-2 text-xs font-semibold text-red">
      <XCircle className="h-4 w-4" />
      রিকোয়েস্ট ডিনাইড
    </span>
  );
}

function ShipmentItem({
  item,
  active,
  onClick,
}: {
  item: ReturnRequestItem;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "w-full rounded-2xl border p-4 text-left transition",
        active
          ? "border-primary-color/25 bg-primary-color/5"
          : "border-primary-color/10 bg-white hover:bg-off-white",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <div className="truncate text-sm font-semibold text-medium-gray">
              {item.productName}
            </div>

            <span className="rounded-full bg-off-white px-2 py-1 text-[11px] font-semibold text-medium-gray">
              ধাপ ০/৩
            </span>
          </div>

          <div className="mt-1 text-xs text-light-gray">
            অর্ডার আইডিঃ <span className="font-semibold">#{item.orderId}</span>
          </div>
        </div>

        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-color/10 bg-white">
          <Eye className="h-4 w-4 text-light-gray" />
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Chip variant="info">অর্ডার গ্রহীত নির্ধারণ</Chip>

        {/* ✅ status-based pill */}
        <StatusBadge status={item.status} />

        <span className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-color/10 bg-white">
          <MoreVertical className="h-4 w-4 text-light-gray" />
        </span>
      </div>
    </button>
  );
}

export default function ShipmentListSidebar({
  title = "শিপমেন্ট তালিকা",
  items,
  activeId,
  onChangeActive,
}: {
  title?: string;
  items: ReturnRequestItem[];
  activeId?: string;
  onChangeActive: (id: string) => void;
}) {
  const [tab, setTab] = React.useState<StepTab>("order_received");

  return (
    <Card className="rounded-2xl p-0">
      <div className="flex items-center gap-3 border-b border-primary-color/10 px-5 py-4">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-color/10">
          <Package className="h-5 w-5 text-primary-color" />
        </span>
        <div className="text-base font-semibold text-medium-gray">{title}</div>
      </div>

      <div className="px-5 pb-5">
        <StepTabs active={tab} onChange={setTab} />

        <div className="mt-6 space-y-4">
          {items.map((it) => (
            <ShipmentItem
              key={it.id}
              item={it}
              active={it.id === activeId}
              onClick={() => onChangeActive(it.id)}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}