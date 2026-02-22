import { cn } from "../../_utils/cn";
import type { LegalDocStatus } from "../../_types/vendor-details";

export default function StatusPill({ status }: { status: LegalDocStatus }) {
  const label =
    status === "verifiable"
      ? "যাচাইযোগ্য"
      : status === "pending"
      ? "যাচাইাধীন"
      : "অবৈধ";

  return (
    <span
      className={cn(
        "inline-flex h-8 items-center rounded-xl px-3 text-xs font-extrabold",
        status === "verifiable" && "bg-slate-100 text-slate-700",
        status === "pending" && "bg-orange-50 text-orange-700",
        status === "invalid" && "bg-red-50 text-red-700"
      )}
    >
      {label}
    </span>
  );
}