"use client";

import React from "react";
import Card from "@/components/cards/card";

type Props = {
  orderId: string;

  supplierName?: string;
  supplierId?: string;
  contactName?: string;
  email?: string;

  courierStatus?: string; // "অপেক্ষমান"
  trackingStatus?: string; // "অপেক্ষমান"
  supplierReceiveDateStatus?: string; // "অপেক্ষমান"

  categoryCode?: string; // "০২৮৫৩৫০৫"
  onEdit?: () => void;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function StatusPill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-primary-color/10 px-3 py-1 text-xs font-extrabold text-primary-color">
      {text}
    </span>
  );
}

export default function OrderInformation({
  orderId,
  supplierName = "টেকসলিউশনস লি.",
  supplierId = "#VEN-8821",
  contactName = "মাইকেল স্কট",
  email = "support@techsolutions.com",
  courierStatus = "অপেক্ষমান",
  trackingStatus = "অপেক্ষমান",
  supplierReceiveDateStatus = "অপেক্ষমান",
  categoryCode = "০২৮৫৩৫০৫",
  onEdit,
}: Props) {
  return (
    <Card className="rounded-md bg-white shadow-sm border border-off-white overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-off-white">
        <p className="text-base font-extrabold text-black">অর্ডারের তথ্য</p>

        <button
          type="button"
          onClick={onEdit ?? (() => console.log("edit-info", orderId))}
          className="text-sm font-extrabold text-primary-color hover:opacity-90"
        >
          তথ্য পরিবর্তন
        </button>
      </div>

      <div className="p-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* left supplier info */}
        <div className="lg:col-span-5">
          <p className="text-xs font-extrabold text-light-gray">
            সরবরাহকারীর তথ্য
          </p>

          <div className="mt-4 flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-off-white border border-off-white" />
            <div>
              <p className="text-lg font-extrabold text-black">
                {supplierName}
              </p>
              <p className="mt-1 text-sm text-light-gray">আইডি: {supplierId}</p>

              <div className="mt-3 space-y-2 text-sm text-light-gray">
                <p>
                  যোগাযোগ: <span className="text-black">{contactName}</span>
                </p>
                <p>
                  ইমেইল: <span className="text-black">{email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right shipping info */}
        <div className="lg:col-span-7">
          <p className="text-xs font-extrabold text-light-gray">শিপিং তথ্য</p>

          <div className="mt-4 rounded-md border border-off-white overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4">
              <p className="text-sm font-extrabold text-black">কুরিয়ার:</p>
              <StatusPill text={courierStatus} />
            </div>

            <div className="h-px bg-off-white" />

            <div className="flex items-center justify-between px-5 py-4">
              <p className="text-sm font-extrabold text-black">
                ট্র্যাকিং আইডি:
              </p>
              <StatusPill text={trackingStatus} />
            </div>

            <div className="h-px bg-off-white" />

            <div className="flex items-center justify-between px-5 py-4">
              <p className="text-sm font-extrabold text-black">
                সরবরাহ সরবরাহের তারিখ:
              </p>
              <StatusPill text={supplierReceiveDateStatus} />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-md bg-off-white px-5 py-4">
            <p className="text-sm font-extrabold text-black">ক্যাটাগরি কোড</p>
            <p className="text-sm font-extrabold text-primary-color">
              {categoryCode}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
