import Card from "@/components/cards/card";
import {
  ClipboardList,
  Clock,
  Truck,
  RotateCcw,
} from "lucide-react";

const stats = [
  {
    title: "নতুন অর্ডার (New Order)",
    value: "৫",
    icon: ClipboardList,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    title: "শিপমেন্ট বাকি (Pending)",
    value: "২",
    icon: Truck,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "পেমেন্ট পেন্ডিং (Pending)",
    value: "১",
    icon: Clock,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "ফেরত অনুরোধ (Return)",
    value: "৩",
    icon: RotateCcw,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
  },
];

export default function OrdersStatsRow() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {stats.map((s) => (
        <Card
          key={s.title}
          className="rounded-2xl border border-gray/15 bg-white p-5"
        >
          <div className="flex items-center justify-between">
            {/* left */}
            <div>
              <p className="text-sm font-semibold text-light-gray">
                {s.title}
              </p>
              <p className="mt-3 text-3xl font-extrabold text-gray">
                {s.value}
              </p>
            </div>

            {/* icon */}
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${s.iconBg}`}
            >
              <s.icon size={18} className={s.iconColor} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
