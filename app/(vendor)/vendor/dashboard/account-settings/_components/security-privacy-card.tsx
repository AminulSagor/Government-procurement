"use client";

import React from "react";
import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

function Toggle({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative h-7 w-14 rounded-full transition",
        on ? "bg-primary" : "bg-secondary",
        "border border-gray/15"
      )}
      aria-pressed={on}
    >
      <span
        className={cn(
          "absolute top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-white shadow-sm transition",
          on ? "left-7" : "left-1"
        )}
      />
    </button>
  );
}

export default function SecurityPrivacyCard({
  twoFAEnabled,
  onToggle2FA,
  onChangePassword,
}: {
  twoFAEnabled: boolean;
  onToggle2FA: () => void;
  onChangePassword: () => void;
}) {
  return (
    <Card className="p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-center gap-2 px-6 py-4">
        <Shield className="h-5 w-5 text-primary-color" />
        <p className="text-sm font-semibold text-gray">নিরাপত্তা ও গোপনীয়তা</p>
      </div>

      <div className="border-t border-gray/10" />

      {/* single row content */}
      <div className="flex flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
        {/* left: password */}
        <div className="flex items-center justify-between gap-4 lg:flex-1">
          <div>
            <p className="text-xs font-semibold text-gray">পাসওয়ার্ড পরিবর্তন</p>
            <p className="mt-1 text-[11px] text-gray">
              সর্বশেষ পরিবর্তন: ৩০ দিন আগে
            </p>
          </div>

          <Button
            onClick={onChangePassword}
            className="h-9 px-5 text-xs bg-white text-gray border border-gray/15 hover:border-primary"
          >
            পরিবর্তন
          </Button>
        </div>

        {/* divider (only desktop) */}
        <div className="hidden h-10 w-px bg-gray/10 lg:block" />

        {/* right: 2FA */}
        <div className="flex items-center justify-between gap-4 lg:flex-1">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-xs font-semibold text-gray">
                টু-ফ্যাক্টর অথেনটিকেশন (2FA)
              </p>

              <span className="rounded-md bg-green/10 px-2 py-1 text-[11px] font-semibold text-green">
                Active
              </span>
            </div>

            <p className="mt-1 text-[11px] text-gray">
              লগইন করার সময় অতিরিক্ত সুরক্ষা
            </p>
          </div>

          <Toggle on={twoFAEnabled} onClick={onToggle2FA} />
        </div>
      </div>
    </Card>
  );
}
