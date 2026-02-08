"use client";

import React from "react";
import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import { Wallet, Trophy, Scissors, CalendarDays } from "lucide-react";
import { LedgerStatCard } from "../_types/payment-ledger.types";

function formatBDT(n: number) {
  // simple demo formatter
  return `৳ ${n.toLocaleString("en-US")}`;
}

function pickIcon(name: LedgerStatCard["icon"]) {
  const cls = "h-4 w-4";
  if (name === "wallet") return <Wallet className={cls} />;
  if (name === "trophy") return <Trophy className={cls} />;
  if (name === "scissors") return <Scissors className={cls} />;
  return <CalendarDays className={cls} />;
}

export default function StatCard({ stat }: { stat: LedgerStatCard }) {
  const hintCls =
    stat.hintTone === "green"
      ? "text-green"
      : stat.hintTone === "amber"
      ? "text-primary"
      : stat.hintTone === "red"
      ? "text-primary"
      : "text-gray";

  const iconBoxCls =
    stat.icon === "wallet"
      ? "bg-primary/10 text-primary"
      : stat.icon === "trophy"
      ? "bg-primary/10 text-primary"
      : stat.icon === "scissors"
      ? "bg-primary/10 text-primary"
      : "bg-primary/10 text-primary";

  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-gray">{stat.title}</p>
          <p className="mt-2 text-xl font-semibold text-gray">
            {formatBDT(stat.value)}
          </p>
          {stat.hint ? (
            <p className={cn("mt-1 text-xs font-semibold", hintCls)}>
              {stat.hint}
            </p>
          ) : null}
        </div>

        <div className={cn("grid h-10 w-10 place-items-center rounded-lg", iconBoxCls)}>
          {pickIcon(stat.icon)}
        </div>
      </div>
    </Card>
  );
}
