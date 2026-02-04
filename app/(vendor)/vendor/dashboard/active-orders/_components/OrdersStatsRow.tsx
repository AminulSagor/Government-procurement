import Card from "@/components/cards/card";
import { ClipboardList, Clock, Truck, RotateCcw } from "lucide-react";

const stats = [
  { title: "নতুন অর্ডার", value: "৫", icon: ClipboardList },
  { title: "পেমেন্ট পেন্ডিং", value: "২", icon: Clock },
  { title: "শিপমেন্ট পেন্ডিং", value: "১", icon: Truck },
  { title: "রিটার্ন", value: "৩", icon: RotateCcw },
];

export default function OrdersStatsRow() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {stats.map((s) => (
        <Card
          key={s.title}
          className="rounded-2xl border border-gray/15 bg-white p-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray/50">{s.title}</p>
              <p className="mt-1 text-2xl font-extrabold text-gray">{s.value}</p>
            </div>
            <s.icon size={18} className="text-gray/40" />
          </div>
        </Card>
      ))}
    </div>
  );
}
