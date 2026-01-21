"use client";

import Card from "@/components/cards/card";
import { MapPin } from "lucide-react";

type TrackingUpdate = {
  id: string;
  title: string;
  timeText: string;
  active?: boolean;
};

export const ShipmentTracking = ({
  updates = [
    {
      id: "u1",
      title: "ডিস্ট্রিবিউশন সেন্টারে পৌঁছেছে",
      timeText: "আজ, ০৯:২৮ AM • ঢাকা হাব",
      active: true,
    },
    {
      id: "u2",
      title: "পরবর্তী গন্তব্যে পথে আছে",
      timeText: "২৮ অক্টোবর, ০৩:১৫ PM • চট্টগ্রাম",
    },
  ],
}: {
  updates?: TrackingUpdate[];
}) => {
  return (
    <Card className="px-0 py-5">
      {/* Header */}
      <div className="pb-2 border-b px-5 flex items-center justify-between">
        <p className="text-base font-extrabold text-black">
          শিপমেন্ট ট্র্যাকিং
        </p>
        <span className="h-2.5 w-2.5 rounded-full bg-green" />
      </div>

      {/* Map */}
      <div className="relative h-56 w-full overflow-hidden">
        {/* Google Map iframe */}
        <iframe
          title="Shipment Location"
          src="https://www.google.com/maps?q=Dhaka,Bangladesh&z=12&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Center marker overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center shadow">
              <MapPin className="h-7 w-7 text-red-500" />
            </div>

            <span className="mt-2 rounded-md bg-white px-3 py-1.5 text-sm font-extrabold text-black shadow border border-off-white">
              বর্তমান অবস্থান
            </span>
          </div>
        </div>
      </div>

      {/* Updates */}
      <div className="px-5 mt-5">
        <p className="text-sm font-extrabold text-light-gray">
          সর্বশেষ আপডেট
        </p>

        <div className="mt-4 space-y-5">
          {updates.map((u, idx) => {
            const isLast = idx === updates.length - 1;

            return (
              <div key={u.id} className="flex gap-3">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <span
                    className={[
                      "h-3 w-3 rounded-full",
                      u.active ? "bg-blue" : "bg-gray-300",
                    ].join(" ")}
                  />
                  {!isLast && (
                    <span className="mt-2 w-px flex-1 bg-off-white" />
                  )}
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p
                    className={[
                      "text-sm font-extrabold",
                      u.active ? "text-black" : "text-gray-600",
                    ].join(" ")}
                  >
                    {u.title}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-light-gray">
                    {u.timeText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
