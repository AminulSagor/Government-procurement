"use client";

import Card from "@/components/cards/card";
import { IMAGE } from "@/constants/image-path";
import Image from "next/image";

export default function OfficeMiniHeader() {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="relative px-5 py-5">
        {/* left accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-primary-color rounded-r" />

        <div className="flex items-center gap-4">
          <div className="h-18 w-18 rounded-full overflow-hidden bg-off-white border border-light-gray/20 flex items-center justify-center">
            <Image
              src={IMAGE.logo}
              alt="office"
              width={100}
              height={100}
              className=" object-cover"
            />
          </div>

          <div className="space-y-1">
            <h2 className="text-base md:text-lg font-bold text-black">
              উপজেলা সমাজসেবা কার্যালয়, নোয়াখালী সদর
            </h2>
            <p className="text-sm text-medium-gray">
              আইডি: <span className="font-semibold">১২৯০২০৩১১৭৩৫৭</span>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
