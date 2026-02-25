"use client";

import { Plus, Printer } from "lucide-react";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";

type Props = {
  onPrint?: () => void;
  onCreateNew?: () => void;
};

export default function OrderManagementHeader({ onPrint, onCreateNew }: Props) {
  return (
    <div className="w-full">
      <div className="flex items-start justify-between gap-6">
        {/* left */}
        <div>
          <h1 className="text-2xl font-bold text-black">অর্ডার ম্যানেজমেন্ট</h1>
          <p className="mt-1 text-sm text-light-gray">
            Control and oversee the entire procurement lifecycle.
          </p>
        </div>

        {/* right */}
        <div className="flex items-center gap-3">
          <SecondaryButton
            onClick={onPrint}
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm"
          >
            <Printer className="h-4 w-4 text-medium-gray" />
            <span className="text-black">প্রিন্ট</span>
          </SecondaryButton>

          <PrimaryButton
            onClick={onCreateNew}
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm"
          >
            <Plus className="h-4 w-4" />
            <span>নতুন অর্ডার</span>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
