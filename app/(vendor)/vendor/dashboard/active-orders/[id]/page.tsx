"use client";

import { useState } from "react";
import OrderHeader from "./_components/OrderHeader";
import OrderInfoCard from "./_components/OrderInfoCard";
import OrderItemsTable from "./_components/OrderItemsTable";
import OrderStepper from "./_components/OrderStepper";
import PaymentSidePanel from "./_components/PaymentSidePanel";
import SubmittedProofDialog from "./_components/submitted-proof-dialog";

export default function Page() {
  const [openProof, setOpenProof] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
      <OrderHeader />
      <OrderStepper />
      <OrderItemsTable />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4">
        <OrderInfoCard />

        <div className="space-y-4">
          <PaymentSidePanel onOpenProof={() => setOpenProof(true)} />
        </div>
      </div>

      <SubmittedProofDialog open={openProof} onOpenChange={setOpenProof} />
    </div>
  );
}
