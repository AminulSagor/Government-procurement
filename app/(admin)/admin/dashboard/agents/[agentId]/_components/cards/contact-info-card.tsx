"use client";

import { Card } from "@/components/ui/card";
import { Mail, Phone, Contact2 } from "lucide-react";
import type { AgentProfile } from "../../_types/agent-profile.types";

function Row({
  Icon,
  label,
  value,
}: {
  Icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-5 w-5 text-[rgba(100,116,139,0.75)]" />
      <div className="min-w-0">
        <div className="text-xs font-semibold text-[rgba(100,116,139,0.75)]">
          {label}
        </div>
        <div className="mt-1 truncate text-sm font-extrabold text-[rgba(16,24,25,0.80)]">
          {value}
        </div>
      </div>
    </div>
  );
}

export default function ContactInfoCard({
  data,
}: {
  data: AgentProfile["contact"];
}) {
  return (
    <Card className="rounded-2xl border border-[rgba(100,116,139,0.14)] bg-white px-6 py-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(120,185,181,0.18)]">
          <Contact2 className="h-5 w-5 text-[var(--color-primary-color)]" />
        </span>
        <div className="text-base font-extrabold text-[var(--color-black)]">
          যোগাযোগের তথ্য
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <Row Icon={Mail} label="অফিসিয়াল ইমেইল" value={data.email} />
        <Row Icon={Phone} label="প্রাথমিক মোবাইল" value={data.phonePrimary} />
        {data.phoneSecondary ? (
          <Row Icon={Phone} label="বিকল্প মোবাইল" value={data.phoneSecondary} />
        ) : null}
      </div>
    </Card>
  );
}
