"use client";

import React from "react";
import Card from "@/components/cards/card";

type Props = {
  orderId: string;
  updates?: Array<{ title: string; time: string }>;
};

export default function LatestUpdate({
  orderId,
  updates = [
    { title: "অর্ডার নিশ্চিত করা হয়েছে", time: "২১ অক্টোবর, ২০২৩ • ০৯:০০ AM" },
    { title: "প্রক্রিয়াধীন অবস্থায় আছে", time: "২২ অক্টোবর, ২০২৩ • ১১:৩৪ AM" },
  ],
}: Props) {
  return (
    <Card className="rounded-md bg-[#F4FAFF] shadow-sm border border-off-white overflow-hidden">
      <div className="px-6 py-4 border-b border-off-white">
        <p className="text-base font-extrabold text-black">সর্বশেষ আপডেট</p>
      </div>

      <div className="p-6 space-y-4">
        {updates.map((u, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary-color" />
            <div>
              <p className="text-sm font-extrabold text-black">{u.title}</p>
              <p className="mt-1 text-xs text-light-gray">{u.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
