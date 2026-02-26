"use client";

import React from "react";
import { Clock3, Check, X, Gavel } from "lucide-react";

import type {
  RefundDecisionStatus,
  RefundRecentDecisionItem,
} from "../_types/refunds-recent-decisions.type";

import { REFUNDS_RECENT_DECISIONS_DATA } from "../_data/refunds-recent-decisions-data";
import Card from "@/components/cards/card";

export default function RefundRecentDecsession() {
  const rows = REFUNDS_RECENT_DECISIONS_DATA;

  return (
    <Card className="p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-center gap-3 px-6 py-5">
        <Clock3 className="h-6 w-6 text-primary-color" />
        <h3 className="text-base font-extrabold text-black">
          সাম্প্রতিক সিদ্ধান্তসমূহ
        </h3>
      </div>

      <div className="h-px w-full bg-off-white" />

      {/* list */}
      <div className="px-6 py-6">
        {rows.map((item, idx) => (
          <DecisionRow
            key={item.id}
            item={item}
            isLast={idx === rows.length - 1}
          />
        ))}
      </div>
    </Card>
  );
}

function statusStyles(status: RefundDecisionStatus) {
  if (status === "approved")
    return {
      wrap: "bg-green/15",
      icon: "text-green",
      line: "bg-green/20",
      Icon: Check,
    };

  if (status === "rejected")
    return {
      wrap: "bg-red/15",
      icon: "text-red",
      line: "bg-red/20",
      Icon: X,
    };

  return {
    wrap: "bg-orange/15",
    icon: "text-orange",
    line: "bg-orange/20",
    Icon: Gavel,
  };
}

function DecisionRow({
  item,
  isLast,
}: {
  item: RefundRecentDecisionItem;
  isLast: boolean;
}) {
  const s = statusStyles(item.status);
  const Icon = s.Icon;

  return (
    <div className="relative flex gap-5">
      {/* left timeline */}
      <div className="relative flex flex-col items-center">
        <div
          className={[
            "h-12 w-12 rounded-full flex items-center justify-center",
            s.wrap,
          ].join(" ")}
        >
          <Icon className={["h-5 w-5", s.icon].join(" ")} />
        </div>

        {!isLast ? (
          <div
            className={["mt-3  w-0.5 flex-1 rounded-full", s.line].join(" ")}
          />
        ) : null}
      </div>

      {/* content */}
      <div className="flex-1 pb-5">
        <p className="text-sm font-semibold text-black">{item.titleBn}</p>
        <p className="mt-1 text-sm text-light-gray">{item.descriptionBn}</p>
        <p className="mt-2 text-sm font-semibold text-medium-gray">
          {item.timeAgoBn}
        </p>
      </div>
    </div>
  );
}
