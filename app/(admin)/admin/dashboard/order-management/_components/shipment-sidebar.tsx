"use client";

import { RequisitionItem } from "@/app/(admin)/admin/dashboard/order-management/_types/order-management.type";
import { Eye, User } from "lucide-react";

function formatBDT(n: number) {
  return `৳ ${new Intl.NumberFormat("bn-BD").format(n)}`;
}

export default function ShipmentSidebar({
  items,
  selectedItemId,
  onSelectItem,
}: {
  items: RequisitionItem[];
  selectedItemId: string;
  onSelectItem: (id: string) => void;
}) {
  return (
    <>
      {/* top tabs like screenshot (static for now) */}
      <div className="grid grid-cols-3 border-b border-primary-color/10">
        {["১. এজেন্ট নিয়োগ", "২. শিপমেন্ট তথ্য", "৩. অর্ডার গ্রহণ"].map(
          (t, i) => (
            <div
              key={i}
              className={[
                "px-4 py-3 text-sm font-semibold text-center",
                i === 0
                  ? "text-primary-color border-b-2 border-primary-color bg-secondary-color/10"
                  : "text-light-gray bg-white",
              ].join(" ")}
            >
              {t}
            </div>
          ),
        )}
      </div>

      <div className="p-4 space-y-4">
        {items.map((it) => {
          const active = it.itemId === selectedItemId;

          // screenshot shows "বকেয়া পেমেন্ট" in shipment list
          const pending = it.payment.office.pendingAmount.amount;

          return (
            <div
              key={it.itemId}
              onClick={() => onSelectItem(it.itemId)}
              className={[
                "rounded-xl border p-4 cursor-pointer transition-all",
                active
                  ? "border-primary-color bg-off-white"
                  : "border-primary-color/10 bg-white hover:border-primary-color/30",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <div className="text-black font-bold text-lg">
                      {it.title}
                    </div>
                    <span className="rounded-md bg-secondary-color/20 px-3 py-1 text-xs font-semibold text-primary-color">
                      ধাপ ১/৩
                    </span>
                  </div>

                  <div className="mt-2 text-xs text-light-gray">
                    অর্ডার আইডি:{" "}
                    <span className="text-primary-color font-semibold">
                      #{it.orderId}
                    </span>{" "}
                    &nbsp; | &nbsp; আইডি: {it.internalId}
                  </div>
                </div>

                <button
                  type="button"
                  className="h-10 w-10 rounded-full border border-primary-color/20 bg-white flex items-center justify-center text-primary-color"
                  title="দেখুন"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onSelectItem(it.itemId);
                  }}
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 rounded-lg bg-white border border-primary-color/10 px-4 py-3 flex items-center justify-between">
                <div className="text-sm text-light-gray">বকেয়া পেমেন্ট</div>
                <div className="text-red font-bold">{formatBDT(pending)}</div>
              </div>

              <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-yellow/15 border border-yellow/30 px-3 py-2 text-xs font-semibold text-orange">
                <User className="h-4 w-4" />
                এজেন্ট নিয়োগ প্রয়োজন
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
