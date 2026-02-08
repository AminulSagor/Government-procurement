"use client";

import React from "react";
import Card from "@/components/cards/card";
import { Button } from "@/components/ui/button";
import { Store, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { BusinessInfo } from "../_types/profile-status.types";

export default function BusinessInfoCard({
  business,
  onEdit,
}: {
  business: BusinessInfo;
  onEdit: () => void;
}) {
  return (
    <Card className="p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between gap-3 px-6 py-4">
        <div className="flex items-center gap-2">
          <Store className="text-primary-color" />
          <p className="text-sm font-semibold text-black">বাণিজ্যিক তথ্য</p>
        </div>

        <Button
          onClick={onEdit}
          className="h-8 px-3 text-xs bg-primary-color text-white hover:opacity-95"
        >
          সম্পাদনা
        </Button>
      </div>

      <div className="border-t border-gray/10" />

      {/* body */}
      <div className="px-6 py-5">
        <div className="flex items-start gap-5">
          {/* logo */}
          <div className="h-[64px] w-[64px] overflow-hidden rounded-xl bg-secondary grid place-items-center">
            <span className="text-sm font-semibold text-gray">
              {business.logoText}
            </span>
          </div>

          {/* info */}
          <div className="min-w-0">
            <p className="text-xl font-semibold text-gray">{business.name}</p>
            <p className="mt-1 text-sm font-semibold text-light-gray">
              {business.typeText}
            </p>

            <div className="mt-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green" />
              <p className="text-sm font-semibold text-green">
                ভেরিফাইড ভেন্ডর
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-light-gray">ঠিকানা</p>
              <p className="mt-2 text-sm text-gray leading-relaxed">
                {business.address}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-light-gray">ইমেইল</p>
              <p className="mt-2 text-sm text-gray">{business.email}</p>
            </div>
          </div>

          {/* row 2: Contact (single column under) */}
          <div className="mt-8">
            <p className="text-xs font-semibold text-light-gray">যোগাযোগ</p>
            <p className="mt-2 text-sm text-gray">{business.phone}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
