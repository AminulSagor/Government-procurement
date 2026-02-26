"use client";

import type { RightTabKey } from "../_types/refund-queue-details.type";

export default function RightTabs({
  activeTab,
  onTabChange,
}: {
  activeTab: RightTabKey;
  onTabChange: (t: RightTabKey) => void;
}) {
  return (
    <div className="flex items-center gap-6 px-5 pt-4 border-b border-primary-color/10">
      <button
        type="button"
        onClick={() => onTabChange("settlement_details")}
        className={`pb-3 text-sm font-semibold border-b-2 ${
          activeTab === "settlement_details"
            ? "border-primary-color text-primary-color"
            : "border-transparent text-medium-gray"
        }`}
      >
        সেটেলমেন্ট বিবরণী
      </button>

      <button
        type="button"
        onClick={() => onTabChange("refund_adjustment")}
        className={`pb-3 text-sm font-semibold border-b-2 ${
          activeTab === "refund_adjustment"
            ? "border-primary-color text-primary-color"
            : "border-transparent text-medium-gray"
        }`}
      >
        রিফান্ড ও সমন্বয়
        <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-orange text-orange text-xs">
          !
        </span>
      </button>
    </div>
  );
}