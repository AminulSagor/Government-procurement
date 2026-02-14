"use client";

import { InboxTabKey } from "../_types/inbox-type";

export default function InboxTabs({
  tab,
  onChange,
  budgetCount,
  paymentCount,
}: {
  tab: InboxTabKey;
  onChange: (t: InboxTabKey) => void;
  budgetCount: number;
  paymentCount: number;
}) {
  const TabBtn = ({
    active,
    label,
    count,
    onClick,
  }: {
    active: boolean;
    label: string;
    count: number;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`relative px-2 pb-3 text-sm font-semibold ${
        active ? "text-[var(--color-primary-color)]" : "text-gray/70"
      }`}
    >
      <span className="flex items-center gap-2">
        {label}
        <span className="h-5 px-2 rounded-full bg-[var(--color-off-white)] text-xs font-bold text-gray/70 flex items-center">
          {count}
        </span>
      </span>

      {active ? (
        <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-[var(--color-primary-color)]" />
      ) : null}
    </button>
  );

  return (
    <div className="flex items-center gap-6 border-b border-border px-5 pt-4">
      <TabBtn
        active={tab === "budget"}
        label="বরাদ্দ রিপোর্ট"
        count={budgetCount}
        onClick={() => onChange("budget")}
      />
      <TabBtn
        active={tab === "payment"}
        label="পেমেন্ট রিকোয়েস্ট"
        count={paymentCount}
        onClick={() => onChange("payment")}
      />
    </div>
  );
}
