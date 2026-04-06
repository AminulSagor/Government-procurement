"use client";

import React from "react";
import { ChevronDown, Download, Check, Calendar } from "lucide-react";
import PrimaryButton from "@/components/buttons/primary-button";

type Props = {
  title?: string;
  subtitle?: string;
  fiscalLabel?: string; // e.g. "FY 2023-24"
  onGenerate?: () => void;
};

export default function DashboardHeader({
  title = "ভেন্ডর সমন্বিত ড্যাশবোর্ড",
  subtitle = "Vendor Unified Dashboard",
  fiscalLabel = "FY 2023-24",
  onGenerate,
}: Props) {
  /* ---------------- FY dropdown state ---------------- */
  const [fyOpen, setFyOpen] = React.useState(false);
  const [fy, setFy] = React.useState(fiscalLabel);

  const fyOptions = ["FY 2021-22", "FY 2022-23", "FY 2023-24"];

  const handleReportExport = () => {
    if (onGenerate) onGenerate();
    else console.log("Generate report for", fy);
  };

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between bg-white p-6 rounded-lg">
      {/* ---------------- Left ---------------- */}
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-extrabold text-gray">{title}</h1>
        <p className="text-sm font-semibold text-light-gray">{subtitle}</p>
      </div>

      {/* ---------------- Right Actions ---------------- */}
      <div className="flex items-center gap-3">
        {/* FY Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setFyOpen((v) => !v)}
            className={[
              "h-10 rounded-xl border border-gray/15 bg-white px-3",
              "text-sm font-bold text-gray",
              "flex items-center gap-2",
            ].join(" ")}
          >
            <Calendar size={16} className="text-gray/50 " />
            <span>{fy}</span>
            <ChevronDown
              size={16}
              className={`text-gray/50 transition-transform ${
                fyOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {fyOpen && (
            <div className="absolute right-0 z-20 mt-2 w-40 rounded-xl border border-gray/15 bg-white shadow-sm">
              {fyOptions.map((opt) => {
                const active = fy === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setFy(opt);
                      setFyOpen(false);
                    }}
                    className={[
                      "w-full px-3 py-2 text-sm",
                      "flex items-center justify-between",
                      "hover:bg-secondary",
                      active
                        ? "font-extrabold text-primary"
                        : "font-semibold text-gray",
                    ].join(" ")}
                  >
                    <span>{opt}</span>
                    {active && <Check size={14} />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Generate Report */}
        <PrimaryButton
          onClick={handleReportExport}
          className="text-sm px-4 py-2.5 flex items-center gap-2"
        >
          <Download size={18} />
          Generate Report
        </PrimaryButton>
      </div>
    </div>
  );
}
