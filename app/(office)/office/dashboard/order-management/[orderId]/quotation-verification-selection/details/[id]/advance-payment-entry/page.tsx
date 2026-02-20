"use client";

import PageHeader from "./_components/page-header";
import Stepper from "./_components/stepper";
import Instructions from "./_components/instructions";
import PaymentForm from "./_components/payment-form";
import BottomActions from "./_components/bottom-actions";
import { advancePaymentEntryDemo } from "@/app/(office)/office/dummy-data/advance-payment-entry";

export default function Page() {
  const data = advancePaymentEntryDemo;

  return (
    <div className="py-6">
      <PageHeader
        title="অগ্রিম পেমেন্ট এন্ট্রি"
        orderCode={data.orderCode}
        updatedLabel={data.updatedLabel}
        statusLabel={data.statusLabel}
      />

      <Stepper
        items={data.stepper.items}
        currentStepIndex={data.stepper.currentStepIndex}
      />

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Instructions
            title={data.instructionsTitle}
            items={data.instructions}
          />
        </div>

        <div className="lg:col-span-8">
          <PaymentForm data={data} />
          <BottomActions />
        </div>
      </div>
    </div>
  );
}
