"use client";

import React from "react";
import { Users } from "lucide-react";
import Card from "@/components/cards/card";

type OfficeProfileData = {
  officerInChargeName: string;
  designation: string;
  fullAddress: string;
  mobile: string;
  email: string;
  note: string;
};

const DEMO_PROFILE: OfficeProfileData = {
  officerInChargeName: "জনাবঃ মোঃ আব্দুল্লাহ",
  designation: "উপজেলা সমাজসেবা অফিসার",
  fullAddress:
    "প্লট নম্বর ১৪, রোড নম্বর ০৭, সেক্টর ০৪, উত্তর মডেল টাউন, ঢাকা-১২০১",
  mobile: "০১৭০০-০০০০০০",
  email: "uno.noakhali@social.gov.bd",
  note: "বি.দ্র.: প্রতিষ্ঠানের ঠিকানার যেকোনো তথ্য সংশোধনের ক্ষেত্রে পরবর্তী নির্দেশনা অনুযায়ী যথাযথ প্রশাসন সংশ্লিষ্টদের সাথে যোগাযোগ করুন।",
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold tracking-[0.14em] text-light-gray uppercase">
      {children}
    </p>
  );
}

function Value({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-sm font-semibold text-black">{children}</p>;
}

export default function OfficeProfileCard({
  data = DEMO_PROFILE,
}: {
  data?: OfficeProfileData;
}) {
  return (
    <Card className="p-0 overflow-hidden text-sm">
      {/* header */}
      <div className="flex items-center justify-center gap-2 px-6 py-4">
        <Users className="w-5 h-5 text-primary-color" />
        <h2 className="text-base font-semibold text-black">প্রোফাইল</h2>
      </div>

      <div className="h-px w-full bg-primary-color/10" />

      {/* body */}
      <div className="px-6 py-6 space-y-8">
        <div className="space-y-1">
          <Label>দায়িত্বপ্রাপ্ত কর্মকর্তা (Officer in Charge)</Label>
          <Value>{data.officerInChargeName}</Value>
        </div>

        <div className="space-y-1">
          <Label>পদবি (Designation)</Label>
          <Value>{data.designation}</Value>
        </div>

        <div className="space-y-3">
          <Label>প্রতিষ্ঠানের পূর্ণ ঠিকানা</Label>
          <div className="rounded-md border border-primary-color/15 bg-off-white/60 p-4 text-sm text-black">
            {data.fullAddress}
          </div>
        </div>

        <div className="space-y-1">
          <Label>মোবাইল নম্বর</Label>
          <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-black">
            <span className="text-medium-gray">☎</span>
            {data.mobile}
          </div>
        </div>

        <div className="space-y-1">
          <Label>ইমেইল (Email)</Label>
          <Value>{data.email}</Value>
        </div>

        {/* note */}
        <div className="rounded-md border border-primary-color/10 bg-off-white/60 p-4">
          <div className="flex gap-3">
            <div className="w-1 rounded-full bg-primary-color/30" />
            <p className="text-sm text-light-gray leading-relaxed">
              {data.note}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
