"use client";

import { RequisitionItem } from "@/app/(admin)/admin/dashboard/order-management/_types/order-management.type";
import { Eye } from "lucide-react";

function formatBDT(n: number) {
  return `৳ ${new Intl.NumberFormat("bn-BD").format(n)}`;
}

function Progress({ total, cleared }: { total: number; cleared: number }) {
  const p = total > 0 ? Math.max(0, Math.min(100, (cleared / total) * 100)) : 0;

  return (
    <div className="h-2 w-full rounded-full bg-off-white border border-primary-color/10 overflow-hidden">
      <div
        className="h-full rounded-full bg-primary-color"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}

export default function SettlementSidebar({
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
      <div className="grid grid-cols-2 border-b border-primary-color/10">
        <div className="px-4 py-3 text-sm font-semibold text-center text-primary-color border-b-2 border-primary-color bg-secondary-color/10">
          ১. বকেয়া সেটেলমেন্ট
        </div>
        <div className="px-4 py-3 text-sm font-semibold text-center text-light-gray bg-white">
          ২. ভেন্ডর বকেয়া পেমেন্ট
        </div>
      </div>

      <div className="p-4 space-y-4">
        {items.map((it) => {
          const active = it.itemId === selectedItemId;

          const total = it.settlement.total.amount;
          const cleared = it.settlement.cleared.amount;
          const pending = it.settlement.pending.amount;

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
                  <div className="text-black font-bold text-lg">{it.title}</div>
                  <div className="mt-1 text-xs text-light-gray">
                    অর্ডার:{" "}
                    <span className="text-primary-color font-semibold">
                      #{it.orderId}
                    </span>
                    &nbsp; | &nbsp; আইডি: {it.internalId}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-yellow/15 border border-yellow/30 px-3 py-1 text-xs font-semibold text-orange">
                    সেটেলমেন্ট বাকি
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onSelectItem(it.itemId);
                    }}
                    className={[
                      "h-10 w-10 rounded-full border border-primary-color/20 bg-white flex items-center justify-center",
                      active
                        ? "text-white bg-primary-color"
                        : "text-primary-color",
                    ].join(" ")}
                    title="দেখুন"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-light-gray">
                    পরিশোধিত (CLEARED)
                  </div>
                  <div className="mt-1 text-green font-bold">
                    {formatBDT(cleared)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-light-gray">বকেয়া (PENDING)</div>
                  <div className="mt-1 text-orange font-bold">
                    {formatBDT(pending)}
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <Progress total={total} cleared={cleared} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
