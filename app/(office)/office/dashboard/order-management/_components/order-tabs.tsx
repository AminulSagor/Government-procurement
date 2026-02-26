"use client";

import { TabKey } from "@/app/(office)/office/dashboard/order-management/page";
import { cn } from "@/lib/utils";

const TABS: Array<{ key: TabKey; label: string }> = [
  { key: "pending_quote", label: "পেন্ডিং কোটেশন" },
  { key: "active", label: "সক্রিয় অর্ডার" },
  { key: "shipped", label: "শিপড" },
  { key: "previous", label: "পূর্ববর্তী অর্ডার" },
  { key: "draft", label: "ড্রাফট লিস্ট" },
];

export default function OrderTabs({
  activeTab,
  onChange,
  counts,
}: {
  activeTab: TabKey;
  onChange: (k: TabKey) => void;
  counts: Record<TabKey, number>;
}) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-6">
      {TABS.map((t) => {
        const isActive = t.key === activeTab;
        const count = counts[t.key];

        return (
          <button
            key={t.key}
            type="button"
            onClick={() => onChange(t.key)}
            className={cn(
              "relative flex items-center gap-2 pb-2 text-sm font-extrabold transition",
              isActive
                ? "text-primary-color"
                : "text-light-gray hover:text-black",
            )}
          >
            <span>{t.label}</span>
            <span
              className={cn(
                "flex h-5 min-w-5 items-center justify-center rounded-md px-1.5 text-xs font-extrabold",
                isActive
                  ? "bg-primary-color/10 text-primary-color"
                  : "bg-off-white text-light-gray",
              )}
            >
              {count}
            </span>

            {isActive && (
              <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] rounded-full bg-primary-color" />
            )}
          </button>
        );
      })}
    </div>
  );
}
