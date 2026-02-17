"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Briefcase, IdCard, CalendarDays, PenLine, Ban } from "lucide-react";
import type { AgentProfile } from "../_types/agent-profile.types";

function InfoItem({
  Icon,
  label,
  value,
}: {
  Icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(120,185,181,0.18)]">
        <Icon className="h-4.5 w-4.5 text-[var(--color-primary-color)]" strokeWidth={2} />
      </div>

      <div className="leading-tight">
        <div className="text-[11px] font-semibold text-[var(--color-medium-gray)]">
          {label}
        </div>
        <div className="text-sm font-extrabold text-[rgba(16,24,25,0.85)]">
          {value}
        </div>
      </div>
    </div>
  );
}

export default function AgentProfileHero({ data }: { data: AgentProfile }) {
  return (
    <Card className="rounded-2xl border border-[rgba(100,116,139,0.14)] bg-white px-6 py-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-5">
          {/* avatar */}
          <div className="relative">
            <Avatar className="h-[86px] w-[86px]">
              {/* ✅ use public image */}
              <AvatarImage
                src="\avatars\Agent Rafiqul Islam.png"
                alt={data.nameBn}
                className="object-cover"
              />
              <AvatarFallback className="bg-[rgba(120,185,181,0.18)] text-[var(--color-primary-color)]">
                {data.nameBn
                  .split(" ")
                  .slice(0, 2)
                  .map((x) => x[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            {/* online dot */}
            <span
              className={[
                "absolute bottom-[6px] right-[6px] h-5 w-5 rounded-full border-[3px] border-white shadow",
                data.onlineStatus === "online"
                  ? "bg-[var(--color-green)]"
                  : "bg-[var(--color-medium-gray)]",
              ].join(" ")}
            />
          </div>

          {/* name + badge + infos */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-[26px] font-extrabold text-[var(--color-black)]">
                {data.nameBn}
              </h2>

              <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(120,185,181,0.18)] px-4 py-2 text-xs font-extrabold text-[var(--color-primary-color)]">
                <MapPin className="h-4 w-4" />
                {data.districtBn}
              </span>
            </div>

            {/* info row */}
            <div className="mt-4 flex flex-wrap items-center gap-8">
              <InfoItem Icon={Briefcase} label="পদবি" value={data.roleBn} />
              <InfoItem Icon={IdCard} label="এজেন্ট আইডি" value={data.agentCode} />
              <InfoItem Icon={CalendarDays} label="যোগদান" value={data.joinDateBn} />
            </div>
          </div>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex flex-wrap items-center gap-3 lg:justify-end">
          <Button
            variant="outline"
            className="h-11 rounded-xl border border-[rgba(31,110,128,0.35)] bg-white px-6 text-sm font-bold text-[var(--color-primary-color)]"
            onClick={() => console.log("edit")}
          >
            <PenLine className="mr-2 h-4 w-4" />
            সম্পাদনা করুন
          </Button>

          <Button
            variant="outline"
            className="h-11 rounded-xl border border-[rgba(231,53,8,0.35)] bg-white px-6 text-sm font-bold text-[var(--color-red)]"
            onClick={() => console.log("block")}
          >
            <Ban className="mr-2 h-4 w-4" />
            ব্লক করুন
          </Button>
        </div>
      </div>
    </Card>
  );
}
