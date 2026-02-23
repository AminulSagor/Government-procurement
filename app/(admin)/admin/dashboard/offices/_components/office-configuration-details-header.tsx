"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";

export default function OfficeConfigurationDetailsHeader({
  onBack,
}: {
  onBack?: () => void;
}) {
  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-primary-color text-sm font-medium"
      >
        <ArrowLeft className="w-5 h-5" />
        অফিস ব্যবস্থাপনা
      </button>

      <h1 className="text-3xl font-bold text-black">অফিস কনফিগারেশন</h1>

      <p className="text-light-gray text-base">
        অফিসের প্রশাসনিক তথ্য ও হায়ারারকি
      </p>
    </div>
  );
}