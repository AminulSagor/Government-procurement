"use client";

import type { AgentStatus } from "../../_types/agents.types";

export default function StatusPill({ status }: { status: AgentStatus }) {
  const isActive = status === "active";

  return (
    <span
      className={[
        "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold",
        isActive
          ? "bg-[rgba(7,136,52,0.12)] text-[var(--color-green)]"
          : "bg-[rgba(145,145,145,0.18)] text-[var(--color-medium-gray)]",
      ].join(" ")}
    >
      {isActive ? "Active" : "Inactive"}
    </span>
  );
}
