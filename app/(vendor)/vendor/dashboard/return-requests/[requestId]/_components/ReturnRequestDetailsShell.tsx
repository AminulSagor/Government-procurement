// app/(vendor)/vendor/dashboard/return-requests/[requestId]/_components/ReturnRequestDetailsShell.tsx
import BreadcrumbBack from "./BreadcrumbBack";
import RequestHeader from "./RequestHeader";
import ProgressStepper from "./ProgressStepper";
import ShipmentTrackingCard from "./ShipmentTrackingCard";
import ShipmentTimeline from "./ShipmentTimeline";
import ReturnRequestCard from "./ReturnRequestCard";
import PaymentSummaryCard from "./PaymentSummaryCard";
import OrderInfoCard from "./OrderInfoCard";
import type { ReturnRequestDetails } from "../_types/return-request-details.types";

function Divider() {
  return <span className="mx-2 text-slate-300">|</span>;
}

export default function ReturnRequestDetailsShell({
  data,
}: {
  data: ReturnRequestDetails;
}) {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-[--color-off-white]">
      <div className="mx-auto w-full  px-4 py-6 md:px-6 md:py-8">
        {/* TOP HEADER (same row like your screenshot) */}
        <div className="flex flex-wrap items-center gap-2">
          <BreadcrumbBack
            breadcrumbBn={data.breadcrumbsBn}
            backHref="/vendor/dashboard/active-orders"
            backLabelBn="ফিরে যান (Back)"
          />

          <Divider />

          <RequestHeader requestNo={data.requestNo} badgeBn={data.headerBadgeBn} />
        </div>

        {/* STEPPER CARD */}
        <div className="mt-5">
          <ProgressStepper steps={data.steps} />
        </div>

        {/* content grid */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.55fr_0.85fr]">
          {/* LEFT */}
          <div className="space-y-5">
            <ShipmentTrackingCard shipment={data.shipment} />
            
          </div>

          {/* RIGHT */}
          <div className="space-y-5">
            <ReturnRequestCard card={data.returnCard} />
            <PaymentSummaryCard payment={data.payment} />
            <OrderInfoCard orderInfo={data.orderInfo} />
          </div>
        </div>
      </div>
    </main>
  );
}