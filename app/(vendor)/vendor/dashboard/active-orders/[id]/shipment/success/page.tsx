"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useParams, notFound } from "next/navigation";
import Card from "@/components/cards/card";

import { CheckCircle2, Download, ClipboardList } from "lucide-react";
import { Order } from "../../_types/order.types";
import { orders } from "../../_data/orders";
import { Button } from "@/components/ui/button";



export default function ShipmentSuccessPage() {
  const params = useParams<{ id: string }>();
  const id = decodeURIComponent(params?.id || "");

  const order: Order | undefined = useMemo(
    () => orders.find((o) => o.id === id),
    [id]
  );

  if (!order) return notFound();

  // demo shipment info
  const courier = "সুন্দরবন কুরিয়ার";
  const trackingId = "SUC-99881122";
  const estDelivery = "২০ আগস্ট ২০২৫";

  return (
    <div className="min-h-screen bg-secondary">
      {/* breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-6 text-xs font-semibold text-light-gray">
        হোম / অর্ডার / #{order.reqNo} / শিপমেন্ট সফল
      </div>

      <div className="mx-auto flex max-w-7xl justify-center px-6 py-10">
        <Card className="w-full max-w-[620px] rounded-2xl border border-gray/15 bg-white p-0 overflow-hidden">
          {/* top accent line */}
          <div className="h-1 w-full bg-primary" />

          <div className="px-8 py-10 text-center">
            {/* icon */}
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green/10">
              <CheckCircle2 className="text-green" size={26} />
            </div>

            <p className="mt-6 text-xl font-extrabold text-gray">
              শিপমেন্ট সফলভাবে নিশ্চিত করা হয়েছে!
            </p>

            <p className="mt-2 text-sm font-semibold text-light-gray">
              অর্ডার <span className="font-extrabold text-gray">#{order.reqNo}</span> এর
              শিপমেন্ট তথ্য সফলভাবে সংরক্ষণ করা হয়েছে। অফিস এখন ট্র্যাকিং তথ্য দেখতে পারবে।
            </p>

            {/* info card */}
            <div className="mt-8 rounded-2xl border border-gray/15 bg-secondary p-5 text-left">
              <div className="flex items-center gap-2 text-xs font-extrabold text-gray">
                <ClipboardList size={14} className="text-light-gray" />
                শিপমেন্ট সারসংক্ষেপ
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold text-light-gray">
                    কুরিয়ার (Courier)
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-gray">{courier}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-light-gray">
                    ট্র্যাকিং আইডি (Tracking ID)
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-gray">{trackingId}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-light-gray">
                    সম্ভাব্য ডেলিভারি (Est. Delivery)
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-gray">{estDelivery}</p>
                </div>
              </div>
            </div>

            {/* buttons */}
            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
              <Button
                variant="outline"
                className="w-full border border-gray/15 bg-white text-gray"
              >
                <Download size={16} className="mr-2" />
                চালান ও ইনভয়েস ডাউনলোড করুন
              </Button>

              <Link href={`/vendor/active-orders/${order.id}`}>
                <Button variant="primary" className="w-full">
                  অর্ডার লিস্টে ফিরে যান
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
