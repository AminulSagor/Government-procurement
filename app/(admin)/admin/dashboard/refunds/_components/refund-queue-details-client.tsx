"use client";

import { useMemo, useState } from "react";
import Card from "@/components/cards/card";

import type {
  LeftTabKey,
  RightTabKey,
} from "../_types/refund-queue-details.type";
import {
  makeHeaderData,
  requisitionsMock,
  settlementMock,
  adjustmentRowsMock,
} from "../_data/refund-queue-details.mock";
import RefundDetailsHeader from "@/app/(admin)/admin/dashboard/refunds/_components/refund-details-header";
import RefundDetailsStepper from "@/app/(admin)/admin/dashboard/refunds/_components/refund-details-stepper";
import RefundLeftPanel from "@/app/(admin)/admin/dashboard/refunds/_components/refund-left-panel";
import RefundRightPanel from "@/app/(admin)/admin/dashboard/refunds/_components/refund-right-panel";
import BottomActionBar from "@/app/(admin)/admin/dashboard/refunds/_components/bottom-action-bar";

export default function RefundQueueDetailsClient({ id }: { id: string }) {
  const headerData = useMemo(() => makeHeaderData(id), [id]);

  const [activeLeftTab, setActiveLeftTab] =
    useState<LeftTabKey>("due_settlement");
  const [activeItemId, setActiveItemId] = useState<string>(
    requisitionsMock[0]?.id ?? "",
  );
  const [activeRightTab, setActiveRightTab] =
    useState<RightTabKey>("settlement_details");

  const activeItem = useMemo(
    () =>
      requisitionsMock.find((x) => x.id === activeItemId) ??
      requisitionsMock[0],
    [activeItemId],
  );

  return (
    <div className="min-h-screen bg-off-white">
      <div className="px-6 py-6 space-y-5">
        <RefundDetailsHeader data={headerData} />

        <RefundDetailsStepper />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[420px_1fr] xl:grid-cols-[500px_1fr]">
          <RefundLeftPanel
            activeTab={activeLeftTab}
            onTabChange={(t) => {
              setActiveLeftTab(t);
              setActiveRightTab("settlement_details");
            }}
            items={requisitionsMock}
            activeItemId={activeItemId}
            onItemSelect={setActiveItemId}
          />

          <Card className="p-0 overflow-hidden">
            <RefundRightPanel
              activeTab={activeRightTab}
              onTabChange={setActiveRightTab}
              activeLeftTab={activeLeftTab}
              activeItem={activeItem}
              settlement={settlementMock}
              adjustmentRows={adjustmentRowsMock}
            />
          </Card>
        </div>
      </div>

      <BottomActionBar
        infoTextBn="সমন্বিত অডিট রিপোর্টের মাধ্যমে সকল আর্থিক পরিবর্তনের হিসাব সংরক্ষিত থাকে। সেটেলমেন্ট আইডি: #STL-8892"
        onPrint={() => {}}
        onDownload={() => {}}
      />
    </div>
  );
}
