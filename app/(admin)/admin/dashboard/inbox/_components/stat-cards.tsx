"use client";

import { FileText, CreditCard } from "lucide-react";
import { inboxStats } from "../_data/inbox-data";

function StatCard({
  icon,
  title,
  value,
  sub,
  iconBg,
  iconColor,
}: {
  icon: React.ReactNode;
  title: string;
  value: number;
  sub: string;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-border bg-white px-6 py-5">
      <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${iconBg} ${iconColor}`}>
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-sm text-gray/80">{title}</p>
        <p className="mt-1 text-3xl font-bold text-black">{value}</p>
        <p className="text-xs text-gray/60">{sub}</p>
      </div>
    </div>
  );
}

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <StatCard
        icon={<FileText className="h-6 w-6" />}
        title="বরাদ্দ রিপোর্ট যাচাই"
        value={inboxStats.pendingReview}
        sub="Pending Review"
        iconBg="bg-blue-50"
        iconColor="text-blue-600"
      />
      <StatCard
        icon={<CreditCard className="h-6 w-6" />}
        title="পেমেন্ট রিকোয়েস্ট"
        value={inboxStats.awaitingApproval}
        sub="Awaiting Approval"
        iconBg="bg-green-50"
        iconColor="text-green-600"
      />
    </div>
  );
}
