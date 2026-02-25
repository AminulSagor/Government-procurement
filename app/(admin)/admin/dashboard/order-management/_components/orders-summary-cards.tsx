import Card from "@/components/cards/card";
import type { OrderListRow } from "../_types/order-management.type";
import { ClipboardList, Loader2, Wallet, CheckCircle2 } from "lucide-react";

function countBy(rows: OrderListRow[], key: OrderListRow["currentStage"]) {
  return rows.filter((r) => r.currentStage === key).length;
}

function fmt(n: number) {
  return new Intl.NumberFormat("en-US").format(n);
}

type StatKey = "total" | "processing" | "payment" | "completed";

const iconMeta: Record<
  StatKey,
  {
    Icon: React.ElementType;
    wrapClass: string;
    iconClass: string;
  }
> = {
  total: {
    Icon: ClipboardList,
    wrapClass: "bg-blue/10 border-blue/20",
    iconClass: "text-blue",
  },
  processing: {
    Icon: Loader2,
    wrapClass: "bg-orange/10 border-orange/20",
    iconClass: "text-orange",
  },
  payment: {
    Icon: Wallet,
    wrapClass: "bg-red/10 border-red/20",
    iconClass: "text-red",
  },
  completed: {
    Icon: CheckCircle2,
    wrapClass: "bg-green/10 border-green/20",
    iconClass: "text-green",
  },
};

export default function OrdersSummaryCards({ rows }: { rows: OrderListRow[] }) {
  const total = rows.length;
  const processing = countBy(rows, "PROCESSING");
  const payment = countBy(rows, "PAYMENT");
  const completed = countBy(rows, "COMPLETED");

  const stat: { key: StatKey; label: string; value: number }[] = [
    { key: "total", label: "মোট অর্ডার", value: total },
    { key: "processing", label: "প্রক্রিয়াধীন", value: processing },
    { key: "payment", label: "পেমেন্ট পেন্ডিং", value: payment },
    { key: "completed", label: "সম্পন্ন", value: completed },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {stat.map((s) => {
        const meta = iconMeta[s.key];
        const Icon = meta.Icon;

        return (
          <Card
            key={s.label}
            className="flex items-center gap-4 rounded-xl p-6 shadow-sm"
          >
            <div
              className={[
                "flex h-14 w-14 items-center justify-center rounded-full border",
                meta.wrapClass,
              ].join(" ")}
            >
              <Icon className={["h-6 w-6", meta.iconClass].join(" ")} />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-medium text-light-gray">{s.label}</p>
              <p className="mt-1 text-3xl font-bold text-black">
                {fmt(s.value)}
              </p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
