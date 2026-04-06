"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";

interface ConfigarationHeaderProps {
  onBack?: () => void;
}

const ConfigarationHeader = ({ onBack }: ConfigarationHeaderProps) => {
  return (
    <div className="space-y-3">
      {/* top back + breadcrumb */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-primary-color text-sm font-medium cursor-pointer"
      >
        <ArrowLeft className="w-5 h-5" />
        অফিস ব্যবস্থাপনা
      </button>

      {/* title */}
      <h1 className="text-3xl font-bold text-black">নতুন অফিস কনফিগারেশন</h1>

      {/* subtitle */}
      <p className="text-light-gray text-base">
        নতুন অফিসের প্রশাসনিক তথ্য ও হায়ারারকি নির্ধারণ করুন।
      </p>
    </div>
  );
};

export default ConfigarationHeader;
