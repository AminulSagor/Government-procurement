"use client";

import Card from "@/components/cards/card";
import { ClipboardList, CircleCheck, Building2 } from "lucide-react";
import type {
  LeftTabKey,
  RequisitionItem,
} from "../_types/refund-queue-details.type";
import RefundItemCard from "@/app/(admin)/admin/dashboard/refunds/_components/refund-item-card";

export default function RefundLeftPanel({
  activeTab,
  onTabChange,
  items,
  activeItemId,
  onItemSelect,
}: {
  activeTab: LeftTabKey;
  onTabChange: (t: LeftTabKey) => void;
  items: RequisitionItem[];
  activeItemId: string;
  onItemSelect: (id: string) => void;
}) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-primary-color/10">
        <div className="h-10 w-10 rounded-md bg-secondary-color/20 flex items-center justify-center">
          <ClipboardList className="h-5 w-5 text-primary-color" />
        </div>
        <div className="text-lg font-semibold text-black">রিকুইজিশন সারাংশ</div>
      </div>

      {/* tabs */}
      <div className="grid grid-cols-2">
        <button
          type="button"
          onClick={() => onTabChange("due_settlement")}
          className={`px-4 py-4 text-sm font-semibold border-b-2 ${
            activeTab === "due_settlement"
              ? "border-primary-color text-primary-color"
              : "border-transparent text-medium-gray"
          }`}
        >
          <span className="inline-flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            ১. বকেয়া সেটেলমেন্ট
          </span>
        </button>

        <button
          type="button"
          onClick={() => onTabChange("vendor_due_payment")}
          className={`px-4 py-4 text-sm font-semibold border-b-2 ${
            activeTab === "vendor_due_payment"
              ? "border-primary-color text-primary-color"
              : "border-transparent text-medium-gray"
          }`}
        >
          <span className="inline-flex items-center gap-2">
            <CircleCheck className="h-4 w-4" />
            ২. ভেন্ডর বকেয়া পেমেন্ট
          </span>
        </button>
      </div>

      <div className="p-4 space-y-3">
        {items.map((it) => (
          <RefundItemCard
            key={it.id}
            item={it}
            selected={it.id === activeItemId}
            onSelect={() => onItemSelect(it.id)}
          />
        ))}
      </div>
    </Card>
  );
}
