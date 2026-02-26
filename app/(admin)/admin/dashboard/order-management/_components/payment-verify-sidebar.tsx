"use client";

import { useMemo, useState } from "react";
import { CircleCheckBig, Eye, NotepadText } from "lucide-react";
import { RequisitionItem } from "@/app/(admin)/admin/dashboard/order-management/_types/order-management.type";
import PaymentDetailsDialog from "@/app/(admin)/admin/dashboard/order-management/_components/payment-details-dialog";

export type PaymentSidebarTab = "office" | "vendor";

function formatBDT(n: number) {
  return `৳ ${new Intl.NumberFormat("bn-BD").format(n)}`;
}

function Pill({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "success" | "danger" | "warning" | "neutral";
}) {
  const cls =
    tone === "success"
      ? "bg-green/10 text-green border-green/20"
      : tone === "danger"
        ? "bg-red/10 text-red border-red/20"
        : tone === "warning"
          ? "bg-orange/10 text-orange border-orange/20"
          : "bg-secondary-color/10 text-primary-color border-primary-color/20";

  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-md border px-3 py-1 text-xs font-semibold",
        cls,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

export default function PaymentVerifySidebar({
  items,
  selectedItemId,
  onSelectItem,
  tab,
  onTabChange,
}: {
  items: RequisitionItem[];
  selectedItemId: string;
  onSelectItem: (id: string) => void;
  tab: PaymentSidebarTab;
  onTabChange: (t: PaymentSidebarTab) => void;
}) {
  const [openDetails, setOpenDetails] = useState(false);
  const [detailsItemId, setDetailsItemId] = useState<string | null>(null);

  const detailsItem = useMemo(() => {
    if (!detailsItemId) return null;
    return items.find((i) => i.itemId === detailsItemId) ?? null;
  }, [items, detailsItemId]);

  return (
    <>
      <PaymentDetailsDialog
        open={openDetails}
        onOpenChange={setOpenDetails}
        item={detailsItem}
        tab={tab}
      />

      {/* tabs */}
      <div className="grid grid-cols-2 border-b border-primary-color/10">
        <button
          onClick={() => onTabChange("office")}
          className={[
            "px-4 py-3 text-sm font-semibold flex items-center justify-center gap-2",
            tab === "office"
              ? "text-primary-color border-b-2 border-primary-color bg-secondary-color/10"
              : "text-light-gray bg-white",
          ].join(" ")}
        >
          <NotepadText size={18} />
          ১. অফিস পেমেন্ট
        </button>

        <button
          onClick={() => onTabChange("vendor")}
          className={[
            "px-4 py-3 text-sm font-semibold flex items-center justify-center gap-2",
            tab === "vendor"
              ? "text-primary-color border-b-2 border-primary-color bg-secondary-color/10"
              : "text-light-gray bg-white",
          ].join(" ")}
        >
          <CircleCheckBig size={18} />
          ২. ভেন্ডর পেমেন্ট
        </button>
      </div>

      {/* list */}
      <div className="p-4 space-y-3">
        {items.map((it) => {
          const active = it.itemId === selectedItemId;

          const pendingAmount =
            tab === "office"
              ? it.payment.office.pendingAmount.amount
              : it.payment.vendor.pendingAmount.amount;

          const statusTone =
            tab === "office"
              ? it.payment.office.status === "VERIFIED" ||
                it.payment.office.status === "COMPLETED"
                ? "success"
                : it.payment.office.matchStatus === "UNMATCHED"
                  ? "warning"
                  : "neutral"
              : it.payment.vendor.status === "COMPLETED"
                ? "success"
                : "neutral";

          const statusText =
            tab === "office"
              ? it.payment.office.status === "VERIFIED"
                ? "ভেরিফাই সম্পন্ন"
                : it.payment.office.matchStatus === "UNMATCHED"
                  ? "যাচাইয়ে সমস্যা"
                  : "যাচাই প্রক্রিয়াধীন"
              : it.payment.vendor.status === "COMPLETED"
                ? "পেমেন্ট সম্পন্ন"
                : "পেমেন্ট প্রক্রিয়াধীন";

          return (
            <div
              key={it.itemId}
              onClick={() => onSelectItem(it.itemId)}
              className={[
                "w-full text-left rounded-lg border p-4 transition-all cursor-pointer",
                active
                  ? "border-primary-color bg-off-white"
                  : "border-primary-color/10 bg-white hover:border-primary-color/30",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-black font-bold text-lg">{it.title}</div>

                  <div className="mt-1 text-light-gray text-xs">
                    ID: {it.internalId} &nbsp; | &nbsp; অর্ডার আইডি:{" "}
                    <span className="text-primary-color font-semibold">
                      #{it.orderId}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <Pill tone={statusTone}>{statusText}</Pill>
                    <Pill tone="danger">
                      বকেয়া পেমেন্ট: {formatBDT(pendingAmount)}
                    </Pill>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDetailsItemId(it.itemId);
                    setOpenDetails(true);
                  }}
                  className="h-10 w-10 rounded-full border border-primary-color/20 bg-white flex items-center justify-center text-primary-color hover:brightness-110"
                  title="পেমেন্ট বিস্তারিত"
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
