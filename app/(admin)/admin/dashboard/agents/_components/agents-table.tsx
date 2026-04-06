"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

import type { Agent, AgentStatus } from "../_types/agents.types";
import StatusPill from "./pills/status-pill";
import PerformancePill from "./pills/performance-pill";
import { redirect } from "next/navigation";

export default function AgentsTable({
  rows,
  onStatusChange,
}: {
  rows: Agent[];
  onStatusChange: (id: string, status: AgentStatus) => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[rgba(100,116,139,0.14)] bg-white shadow-sm">
      {/* table head */}
      <div className="grid grid-cols-12 gap-3 bg-[var(--color-off-white)] px-5 py-4 text-xs font-semibold text-[var(--color-medium-gray)]">
        <div className="col-span-3">এজেন্ট</div>
        <div className="col-span-2">আইডি</div>
        <div className="col-span-2">বরাদ্দকৃত এলাকা</div>
        <div className="col-span-2">যোগাযোগ</div>
        <div className="col-span-1">অর্ডার হ্যান্ডেলড</div>
        <div className="col-span-1">স্ট্যাটাস</div>
        <div className="col-span-1 text-right">অ্যাকশন</div>
      </div>

      {/* rows */}
      <div>
        {rows.map((a) => (
          <div
            key={a.id}
            className="grid grid-cols-12 gap-3 px-5 py-4 text-sm text-[var(--color-black)]"
          >
            {/* agent */}
            <div className="col-span-3 flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={a.avatarUrl || ""} alt={a.name} />
                <AvatarFallback className="bg-[rgba(120,185,181,0.18)] text-[var(--color-primary-color)]">
                  {a.name
                    .split(" ")
                    .slice(0, 2)
                    .map((x) => x[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="leading-tight">
                <div className="font-bold">{a.name}</div>
                <div className="text-xs text-[var(--color-medium-gray)]">
                  {a.role}
                </div>
              </div>
            </div>

            {/* id */}
            <div className="col-span-2 flex items-center text-xs font-semibold text-[rgba(16,24,25,0.75)]">
              {a.agentCode}
            </div>

            {/* district */}
            <div className="col-span-2 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[var(--color-red)]" />
              <span className="font-semibold">{a.district}</span>
            </div>

            {/* phone */}
            <div className="col-span-2 flex items-center gap-2 text-xs text-[rgba(16,24,25,0.75)]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(120,185,181,0.18)]">
                <Phone className="h-4 w-4 text-[var(--color-primary-color)]" />
              </span>
              <span className="font-semibold">{a.phone}</span>
            </div>

            {/* total */}
            <div className="col-span-1">
              <div className="font-extrabold">
                {a.totalOrdersHandled.toLocaleString()}
              </div>
              <PerformancePill show={a.performance === "high"} />
            </div>

            {/* status */}
            <div className="col-span-1 flex items-center">
              <StatusPill status={a.status} />
            </div>

            {/* action */}
            <div className="col-span-1 flex items-center justify-end">
              <Button
                variant="outline"
                className="h-9 rounded-xl border border-[rgba(31,110,128,0.25)] bg-white px-4 text-xs font-semibold text-[var(--color-primary-color)]"
                onClick={() => redirect(`/admin/dashboard/agents/${a.id}`)}
              >
                View Profile
              </Button>
            </div>

            {/* divider */}
            <div className="col-span-12 mt-4 border-t border-[rgba(100,116,139,0.10)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
