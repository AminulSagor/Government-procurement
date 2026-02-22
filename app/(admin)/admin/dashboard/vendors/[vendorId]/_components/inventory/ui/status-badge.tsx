// app/(admin)/admin/dashboard/vendors/[vendorId]/_components/inventory/ui/status-badge.tsx
import type { StockStatus } from "../../../_types/vendor-inventory";

const label: Record<StockStatus, string> = {
  in_stock: "ইন স্টক",
  out_stock: "স্টক শেষ",
};

export default function StatusBadge({ status }: { status: StockStatus }) {
  const isIn = status === "in_stock";

  return (
    <span
      className={[
        "inline-flex h-7 items-center rounded-full px-3 text-xs font-extrabold",
        isIn ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600",
      ].join(" ")}
    >
      {label[status]}
    </span>
  );
}