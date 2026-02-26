"use client";

import RightTabs from "@/app/(admin)/admin/dashboard/refunds/_components/right-tabs";
import type {
  LeftTabKey,
  RightTabKey,
  RequisitionItem,
  SettlementSnapshot,
  RefundAdjustmentRow,
} from "../_types/refund-queue-details.type";
import SettlementDetailsPanel from "@/app/(admin)/admin/dashboard/refunds/_components/settlement-details-panel";
import RefundAdjustmentPanel from "@/app/(admin)/admin/dashboard/refunds/_components/refund-adjustment-panel";

export default function RefundRightPanel({
  activeTab,
  onTabChange,
  activeLeftTab,
  activeItem,
  settlement,
  adjustmentRows,
}: {
  activeTab: RightTabKey;
  onTabChange: (t: RightTabKey) => void;
  activeLeftTab: LeftTabKey;
  activeItem: RequisitionItem;
  settlement: SettlementSnapshot;
  adjustmentRows: RefundAdjustmentRow[];
}) {
  return (
    <div className="p-0">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-primary-color/10">
        <div className="text-lg font-semibold text-black">
          সেটেলমেন্ট ও আর্থিক প্রতিবেদন
        </div>
      </div>

      <RightTabs activeTab={activeTab} onTabChange={onTabChange} />

      <div className="p-5">
        {activeTab === "settlement_details" ? (
          <SettlementDetailsPanel
            activeLeftTab={activeLeftTab}
            activeItem={activeItem}
            settlement={settlement}
          />
        ) : (
          <RefundAdjustmentPanel
            activeLeftTab={activeLeftTab}
            activeItem={activeItem}
            rows={adjustmentRows}
          />
        )}
      </div>
    </div>
  );
}
