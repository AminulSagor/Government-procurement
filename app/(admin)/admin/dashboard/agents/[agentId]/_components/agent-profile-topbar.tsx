"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AgentProfileTopbar({ backLabelBn }: { backLabelBn: string }) {
  return (
    <div className="flex items-center">
      <Link
        href="/admin/dashboard/agents"
        className="inline-flex items-center gap-2 rounded-xl border border-[rgba(100,116,139,0.14)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary-color)] "
      >
        <ArrowLeft className="h-4 w-4" />
        {backLabelBn}
      </Link>
    </div>
  );
}
