"use client";

import { useMemo } from "react";
import ReqItemsCard from "./_components/req-items-card";
import ReqBudgetCard from "./_components/req-budget-card";
import ReqProcurementCard from "./_components/req-procurement-card";
import { requisitionDemoOk } from "./_data/requisition-step.demo";

export default function RequisitionStep({
  onOpenSpecs,
}: {
  onOpenSpecs?: (itemId: string) => void;
}) {
  const data = useMemo(() => requisitionDemoOk, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ReqItemsCard items={data.items} onSpecsClick={onOpenSpecs} />
        <ReqBudgetCard budget={data.budget} />
      </div>

      <div className="mt-5">
        <ReqProcurementCard value={data.procurementMethodValue} />
      </div>
    </>
  );
}
