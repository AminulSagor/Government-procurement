import OrderActionButton from "./OrderActionButton";
import OrderStatusBadge from "./OrderStatusBadge";


export default function OrderCard({
  color,
  title,
  qty,
  total,
  status,
  action,
  alert,
}: {
  color: "green" | "orange" | "blue" | "red";
  title: string;
  qty: string;
  total: string;
  status: string;
  action: string;
  alert?: string;
}) {
  const border =
    color === "green"
      ? "border-l-green"
      : color === "orange"
      ? "border-l-amber-500"
      : color === "blue"
      ? "border-l-primary"
      : "border-l-red-500";

  return (
    <div
      className={`rounded-2xl border border-gray/15 bg-white p-4 border-l-4 ${border}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-extrabold text-gray">{title}</p>
          <p className="mt-1 text-xs text-gray/60">
            Qty: {qty} • Total: {total}
          </p>

          {alert && (
            <p className="mt-2 text-xs font-semibold text-red-500">
              ⚠ {alert}
            </p>
          )}
        </div>

        <div className="flex flex-col items-end gap-2">
          <OrderStatusBadge status={status} />
          <OrderActionButton label={action} />
        </div>
      </div>
    </div>
  );
}
