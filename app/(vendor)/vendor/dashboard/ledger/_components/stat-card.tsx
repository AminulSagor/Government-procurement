"use client";

import React from "react";
import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import { Wallet, Trophy, Scissors, CalendarDays } from "lucide-react";
import { LedgerStatCard } from "../_types/payment-ledger.types";

function formatBDT(v: unknown) {
  // support number or pre-formatted string
  if (typeof v === "string") return v;
  if (typeof v === "number") return `৳ ${v.toLocaleString("bn-BD")}`;
  return "—";
}

function pickIcon(name: LedgerStatCard["icon"]) {
  const cls = "h-5 w-5";
  if (name === "wallet") return <Wallet className={cls} />;
  if (name === "trophy") return <Trophy className={cls} />;
  if (name === "scissors") return <Scissors className={cls} />;
  return <CalendarDays className={cls} />;
}

function iconStyle(icon: LedgerStatCard["icon"]) {
  // match screenshot-style tinted boxes (bg + icon color)
  if (icon === "wallet") return "bg-[#EAF7FF] text-[#0EA5A6]";
  if (icon === "trophy") return "bg-[#FFF6DB] text-[#D97706]";
  if (icon === "scissors") return "bg-[#FFE7E7] text-[#EF4444]";
  return "bg-[#EAF1FF] text-[#2563EB]";
}

function hintPillStyle(tone?: LedgerStatCard["hintTone"]) {
  if (tone === "green") return "bg-green/10 text-green";
  if (tone === "amber") return "bg-[#FFF6DB] text-[#D97706]";
  if (tone === "red") return "bg-[#FFE7E7] text-[#EF4444]";
  return "bg-gray/10 text-gray";
}

export default function StatCard({ stat }: { stat: LedgerStatCard }) {
  // optional extra line under amount (for cards like “চলতি অর্থবছরে মোট”, date line)
  const subText =
    (stat as any).subText ??
    (stat as any).subtitle ??
    (stat as any).meta ??
    "";

  return (
    <Card
      className={cn(
        "rounded-2xl border border-gray/10 bg-white p-5",
        "shadow-[0_2px_14px_rgba(15,23,42,0.06)]"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-light-gray">{stat.title}</p>

          <p className="mt-2 text-[22px] font-semibold leading-none text-gray">
            {formatBDT(stat.value as any)}
          </p>

          {stat.hint ? (
            <span
              className={cn(
                "mt-3 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold",
                hintPillStyle(stat.hintTone)
              )}
            >
              {stat.hint}
            </span>
          ) : null}

          {subText ? (
            <p className="mt-3 text-xs font-medium text-light-gray">
              {subText}
            </p>
          ) : null}
        </div>

        <div
          className={cn(
            "grid h-11 w-11 shrink-0 place-items-center rounded-xl",
            iconStyle(stat.icon)
          )}
        >
          {pickIcon(stat.icon)}
        </div>
      </div>
    </Card>
  );
}
