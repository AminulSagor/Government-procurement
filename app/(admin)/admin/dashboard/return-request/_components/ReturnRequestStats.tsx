import { Inbox, Hourglass, Ban } from "lucide-react";

type Props = {
  total: number;
  pendingReview: number;
  rejected: number;
};

function StatCard({
  icon,
  iconBgClass,
  iconColorClass,
  label,
  value,
}: {
  icon: React.ReactNode;
  iconBgClass: string;
  iconColorClass: string;
  label: string;
  value: number;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-white px-6 py-5 shadow-sm">
      <div
        className={[
          "grid h-12 w-12 place-items-center rounded-full border",
          iconBgClass,
        ].join(" ")}
      >
        <span className={iconColorClass}>{icon}</span>
      </div>

      <div>
        <p className="text-[13px] font-medium text-light-gray">{label}</p>
        <p className="mt-1 text-[28px] font-semibold leading-[32px] text-black">
          {String(value).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}

export default function ReturnRequestStats({ total, pendingReview, rejected }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <StatCard
        icon={<Inbox className="h-5 w-5" />}
        iconBgClass="bg-blue/10 border-blue/20"
        iconColorClass="text-blue"
        label="মোট আবেদন"
        value={total}
      />
      <StatCard
        icon={<Hourglass className="h-5 w-5" />}
        iconBgClass="bg-orange/10 border-orange/20"
        iconColorClass="text-orange"
        label="পেন্ডিং রিভিউ"
        value={pendingReview}
      />
      <StatCard
        icon={<Ban className="h-5 w-5" />}
        iconBgClass="bg-slate-100 border-slate-200"
        iconColorClass="text-primary-color"
        label="রিজেক্টেড"
        value={rejected}
      />
    </div>
  );
}