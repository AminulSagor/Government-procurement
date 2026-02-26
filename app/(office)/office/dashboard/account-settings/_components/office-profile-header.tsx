"use client";

import PrimaryButton from "@/components/buttons/primary-button";
import Card from "@/components/cards/card";
import { IMAGE } from "@/constants/image-path";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const OfficeProfileHeader = () => {
  const [popup, setPopup] = useState(false);
  const router = useRouter();

  return (
    <Card>
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <div
          className="flex gap-4 items-center relative"
          onMouseEnter={() => setPopup(true)}
          onMouseLeave={() => setPopup(false)}
        >
          <Image
            src={IMAGE.logo}
            alt="office-logo"
            height={120}
            width={120}
            className="rounded-full"
          />

          <div className="space-y-2">
            <h1 className="text-xl lg:text-2xl font-bold text-black">
              উপজেলা নির্বাহী কর্মকর্তার কার্যালয়
            </h1>
            <p className="text-base text-medium-gray">আইডি: ১২৯০২০৩১১৭৩৫৭</p>
            <p className="flex items-center gap-2">
              <span className="bg-green h-3 w-3 rounded-full" /> সক্রিয়
            </p>
          </div>

          {/* POPUP (same like your screenshot) */}
          {popup && (
            <div className="absolute left-0 top-[105%] z-50 w-[520px] rounded-xl border border-[rgba(31,111,134,0.35)] bg-[#EAF7F6] px-6 py-5 shadow-sm">
              {/* left vertical line */}
              <div className="absolute left-6 top-5 bottom-5 w-[3px] rounded-full bg-[rgba(31,111,134,0.35)]" />

              <div className="pl-10 space-y-2 text-[15px] text-primary-color font-medium">
                <div className="flex gap-6">
                  <span className="w-28 text-right">১২১</span>
                  <span>সমাজ কল্যাণ মন্ত্রণালয়</span>
                </div>

                <div className="flex gap-6">
                  <span className="w-28 text-right">১২১ ০২</span>
                  <span>সমাজ সেবা অধিদপ্তর</span>
                </div>

                <div className="flex gap-6">
                  <span className="w-28 text-right">১২১০২ ০৩</span>
                  <span>উপজেলা সমাজসেবা কার্যালয়সসমূহ</span>
                </div>

                <div className="flex gap-6">
                  <span className="w-28 text-right">১২১০২০৩১১৭৩৫৭</span>
                  <span>নোয়াখালী সদর, নোয়াখালী</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <PrimaryButton
          onClick={() =>
            router.push("/office/dashboard/account-settings/edit-information")
          }
        >
          <Link href={""}>তথ্য সংশোধন</Link>
        </PrimaryButton>
      </div>
    </Card>
  );
};

export default OfficeProfileHeader;
