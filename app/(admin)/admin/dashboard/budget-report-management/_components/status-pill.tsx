import { BudgetStatus } from "../_types/budget-report.types";

const map: Record<
  BudgetStatus,
  { dot: string; wrap: string; text: string; border: string }
> = {
  Pending: {
    dot: "bg-[var(--color-orange)]",
    wrap: "bg-orange-50",
    text: "text-[var(--color-orange)]",
    border: "border-orange-200",
  },
  "In Review": {
    dot: "bg-[var(--color-light-gray)]",
    wrap: "bg-slate-50",
    text: "text-[var(--color-light-gray)]",
    border: "border-slate-200",
  },
  Approved: {
    dot: "bg-[var(--color-green)]",
    wrap: "bg-emerald-50",
    text: "text-[var(--color-green)]",
    border: "border-emerald-200",
  },
};

export default function StatusPill({ status }: { status: BudgetStatus }) {
  const s = map[status];

  return (
    <span
      className={[
        "inline-flex items-center gap-2",
        "h-7 px-3 rounded-full",
        "border text-xs font-medium",
        s.wrap,
        s.border,
        s.text,
      ].join(" ")}
    >
      <span className={`h-2 w-2 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}
