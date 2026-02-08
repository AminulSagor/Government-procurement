"use client";

import React from "react";
import { CalendarDays, MapPin, Play, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

/* ---------------- status ui map ---------------- */

const STATUS_UI = {
  pending: {
    border: "border-l-amber-500",
    pill: "bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
    btn: "bg-teal-600 text-white hover:bg-teal-700",
    icon: Play,
  },
  paid: {
    border: "border-l-green",
    pill: "bg-green-50 text-green-700",
    dot: "bg-green-500",
    btn: "bg-teal-600 text-white hover:bg-teal-700",
    icon: Play,
  },
  verifying: {
    border: "border-l-primary",
    pill: "bg-blue-50 text-blue-700",
    dot: "bg-blue-500",
    btn: "bg-blue-50 text-blue-700 hover:bg-blue-100",
    icon: Play,
  },
  return: {
    border: "border-l-red-500",
    pill: "bg-red-50 text-red-700",
    dot: "bg-red-500",
    btn: "border border-red-300 text-red-700 hover:bg-red-50",
    icon: Eye,
  },
} as const;

type StatusKey = keyof typeof STATUS_UI;

/* ---------------- component ---------------- */

export default function OrderCard({
  statusKey,
  reqId,
  dateText,
  title,
  location,
  qty,
  total,
  statusText,
  actionText,
  alert,
}: {
  statusKey: StatusKey;
  reqId: string;
  dateText: string;
  title: string;
  location: string;
  qty?: string;
  total?: string;
  statusText: string;
  actionText: string;
  alert?: string;
}) {
  const ui = STATUS_UI[statusKey];
  const Icon = ui.icon;

  return (
    <div
      className={cn(
        "rounded-2xl border border-gray/15 bg-white",
        "border-l-4",
        ui.border,
      )}
    >
      <div className="p-5">
        {/* top */}
        <div className="flex items-start justify-between">
          <p className="text-xs font-extrabold text-light-gray">{reqId}</p>

          <div className="flex items-center gap-2 text-xs font-bold text-light-gray">
            <CalendarDays size={14} />
            <span className="uppercase tracking-wide">{dateText}</span>
          </div>
        </div>

        {/* title */}
        <h3 className="mt-1 text-lg font-extrabold text-gray">{title}</h3>

        {/* location */}
        <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-light-gray">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        {/* bottom */}
        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {qty && (
              <span className="rounded-full bg-light-gray/10 px-3 py-1 text-xs font-extrabold text-light-gray">
                Qty: {qty}
              </span>
            )}

            {total && (
              <span className="rounded-full bg-light-gray/10 px-3 py-1 text-xs font-extrabold text-light-gray">
                Total: {total}
              </span>
            )}

            {alert && (
              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-extrabold text-red-600">
                ⚠ {alert}
              </span>
            )}
          </div>

          <div className="flex flex-col items-end gap-2">
            {/* status pill */}
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-3 py-1",
                "text-xs font-extrabold",
                ui.pill,
              )}
            >
              <span className={cn("h-2 w-2 rounded-full", ui.dot)} />
              {statusText}
            </span>

            {/* action */}
            <Link href={`/vendor/dashboard/active-orders/${reqId.substring(1)}`}>
              <button
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-4 py-2",
                  "text-sm font-extrabold transition",
                  ui.btn,
                )}
              >
                <Icon size={16} />
                {actionText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
