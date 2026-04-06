"use client";

import { CheckCircle, AlertTriangle } from "lucide-react";
import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import { OrderDetails } from "@/app/(office)/office/types/order-details-type";

export default function RequiredActionsCard({
  order,
  open,
}: {
  order: OrderDetails;
  open: (v: boolean) => void;
}) {
  const show = order.canConfirmReceive || order.canReportIssue;
  if (!show) return null;

  return (
    <Card className="p-0 overflow-hidden border border-primary-color/20 bg-primary-color/5">
      <div className="px-5 py-4">
        <h2 className="text-sm font-extrabold text-primary-color">
          প্রয়োজনীয় পদক্ষেপ
        </h2>
        <p className="mt-2 text-xs font-bold text-light-gray">
          অর্ডারটি সম্পন্ন করার আগে পণ্যগুলো যাচাই করে নিন। পণ্য প্রাপ্তির পর
          অবশিষ্ট পেমেন্ট সম্পন্ন করুন।
        </p>
      </div>

      <div className="px-5 pb-5 space-y-3">
        {order.canConfirmReceive ? (
          <PrimaryButton
            className="w-full py-3 text-sm flex items-center justify-center gap-2"
            onClick={() => open(true)}
          >
            <CheckCircle className="h-5 w-5" />
            প্রাপ্তি নিশ্চিত করুন
          </PrimaryButton>
        ) : null}

        {order.canReportIssue ? (
          <SecondaryButton className="w-full py-3 text-sm flex items-center justify-center gap-2">
            <AlertTriangle className="h-5 w-5 text-light-gray" />
            সমস্যা রিপোর্ট করুন
          </SecondaryButton>
        ) : null}
      </div>
    </Card>
  );
}
